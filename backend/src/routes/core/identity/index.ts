import { Hono } from 'hono';
import { sign, verify } from 'hono/jwt';
import { zValidator } from '@hono/zod-validator';
import { authenticator } from 'otplib';
import { CryptoCore } from '../../../utils/crypto';
import { citizens, auditLogs } from '../../../db/schema';
import { eq } from 'drizzle-orm';

import { DIDResolver } from '../../../utils/did_resolver';
import { authSignature } from '../../../middleware/auth_signature';
import {
	ssiRegisterSchema,
	ssiLoginSchema,
	passkeyBindSchema,
	totpSetupSchema,
	totpVerifySchema,
	revokeSchema,
} from '../../../validators/auth';
import { Bindings } from '../../../types/bindings';
import oauthRouter from './oauth';
import localRouter from './local';

/**
 * Identity Registry (SSI Handshake & DID Management)
 */

type AppType = { Bindings: Bindings; Variables: { db: any } };

const identity = new Hono<AppType>();

// Anexar o módulo de OAuth Sub-routes
identity.route('/oauth', oauthRouter);

// Anexar o módulo de Autenticação Legacy / Manual
identity.route('/local', localRouter);

// 🛡️ NATIVE KV RATE LIMITER (Anti-Brute Force)
identity.use('*', async (c, next) => {
	const ip = c.req.header('cf-connecting-ip') || 'anonymous';
	const key = `ratelimit:${ip}`;
	const limit = 20; // 20 requisições por minuto

	const current = await c.env.KV_AUTH.get(key);
	const count = current ? parseInt(current) : 0;

	if (count >= limit) {
		return c.json({ success: false, message: 'Muitas tentativas. Tente novamente em 1 minuto.' }, 429);
	}

	await c.env.KV_AUTH.put(key, (count + 1).toString(), { expirationTtl: 60 });
	await next();
});

// 1. Geração de Challenge (Nonce) para Handshake
identity.get('/challenge/:username', async (c) => {
	const username = c.req.param('username');
	const db = c.get('db');

	// Verificar se o cidadão existe para retornar o Vault
	const [citizen] = await db.select().from(citizens).where(eq(citizens.username, username)).limit(1);

	const nonce = crypto.randomUUID();

	// Armazena no KV com expiração de 5 minutos
	await c.env.KV_AUTH.put(`nonce:${username}`, nonce, { expirationTtl: 300 });

	return c.json({
		success: true,
		challenge: nonce,
		encryptedVault: citizen?.encryptedVault || null,
		message: 'Assine este nonce com sua chave Ed25519 para provar sua identidade.',
	});
});

// 2. Registro de Cidadão (Genesis Completion)
identity.post('/register', zValidator('json', ssiRegisterSchema), async (c) => {
	const { username, publicKey, signature, challenge, firstName, lastName, encryptedVault } = c.req.valid('json');
	const db = c.get('db');

	// 1. Verificar Challenge no KV
	const storedNonce = await c.env.KV_AUTH.get(`nonce:${username}`);
	if (!storedNonce || storedNonce !== challenge) {
		return c.json({ success: false, message: 'Challenge inválido ou expirado.' }, 401);
	}

	// 2. Verificar Assinatura (Proof of Possession)
	const msg = new TextEncoder().encode(challenge);
	const sig = typeof signature === 'string' ? Uint8Array.from(JSON.parse(signature)) : signature;
	const pub = typeof publicKey === 'string' ? Uint8Array.from(JSON.parse(publicKey)) : publicKey;

	const isValid = CryptoCore.verify(sig, msg, pub);
	if (!isValid) {
		return c.json({ success: false, message: 'Assinatura criptográfica inválida.' }, 401);
	}

	// CMP-03: Invalidar o nonce após uso bem-sucedido (previne replay attacks)
	await c.env.KV_AUTH.delete(`nonce:${username}`);

	const did = `did:ffc:${username.toLowerCase()}`;

	try {
		const [citizen] = await db
			.insert(citizens)
			.values({
				username,
				firstName,
				lastName,
				did,
				publicKey: JSON.stringify(Array.from(pub)),
				encryptedVault,
				status: 'active',
			})
			.returning();

		if (!citizen) throw new Error('Falha ao criar cidadão (D1 Returning Error).');

		await db.insert(auditLogs).values({
			citizenId: citizen.id,
			action: 'CITIZEN_GENESIS_COMPLETE',
			status: 'success',
			metadata: { username, did },
		});

		const accessToken = await sign(
			{
				username: citizen.username,
				did: citizen.did,
				firstName: citizen.firstName,
				lastName: citizen.lastName,
				role: 'citizen',
				aal: 1,
				exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
			},
			c.env.JWT_SECRET,
		);

		return c.json({
			success: true,
			accessToken,
			encryptedVault: citizen.encryptedVault,
			user: {
				id: citizen.id,
				username: citizen.username,
				firstName: citizen.firstName,
				lastName: citizen.lastName,
				did: citizen.did,
				role: 'citizen',
			},
			message: 'Cidadão registrado com soberania total. Bem-vindo à DAO.',
		});
	} catch (e: any) {
		return c.json({ success: false, message: 'Username já ocupado ou erro no D1.', error: e.message }, 400);
	}
});

// 3. Handshake de Login (ZK-Proof)
identity.post('/login', zValidator('json', ssiLoginSchema), async (c) => {
	const { username, signature, challenge, otpCode } = c.req.valid('json');
	const db = c.get('db');

	const storedNonce = await c.env.KV_AUTH.get(`nonce:${username}`);
	if (!storedNonce || storedNonce !== challenge) {
		return c.json({ success: false, message: 'Challenge inválido ou expirado.' }, 401);
	}

	const citizen = await db.query.citizens.findFirst({
		where: eq(citizens.username, username),
	});

	if (!citizen || citizen.status === 'revoked') {
		return c.json({ success: false, message: 'Cidadão não encontrado ou identidade revogada.' }, 404);
	}

	// 1. Verificar Assinatura Ed25519
	const pub = Uint8Array.from(JSON.parse(citizen.publicKey));
	const msg = new TextEncoder().encode(challenge);
	const sig = typeof signature === 'string' ? Uint8Array.from(JSON.parse(signature)) : signature;

	const isValidSig = CryptoCore.verify(sig, msg, pub);
	if (!isValidSig) {
		return c.json({ success: false, message: 'Assinatura inválida. Acesso negado.' }, 401);
	}

	// 2. Verificar MFA (AAL2) se habilitado
	if (citizen.totpEnabled) {
		if (!otpCode) {
			return c.json(
				{
					success: false,
					mfaRequired: true,
					message: 'MFA Habilitado. Por favor, forneça o código TOTP para completar o login.',
				},
				202,
			);
		}

		const isValidOTP = authenticator.check(otpCode, citizen.totpSecret || '');
		if (!isValidOTP) {
			return c.json({ success: false, message: 'Código MFA inválido.' }, 401);
		}
	}

	// CMP-03: Invalidar nonce após login bem-sucedido (previne replay attacks)
	await c.env.KV_AUTH.delete(`nonce:${username}`);

	// 3. Gerar Token JWT (AAL2 se MFA passou, AAL1 caso contrário)
	const token = await sign(
		{
			username: citizen.username,
			did: citizen.did,
			firstName: citizen.firstName,
			lastName: citizen.lastName,
			role: 'citizen',
			aal: citizen.totpEnabled ? 2 : 1,
			exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
		},
		c.env.JWT_SECRET,
	);

	return c.json({
		success: true,
		accessToken: token,
		user: {
			id: citizen.id,
			username: citizen.username,
			firstName: citizen.firstName,
			lastName: citizen.lastName,
			did: citizen.did,
			role: 'citizen',
		},
		aal: citizen.totpEnabled ? 2 : 1,
		message: 'Handshake bem-sucedido. Identidade confirmada.',
	});
});

// 4. Bind Passkey (Biometria) - PROTEGIDO COM ZERO-TRUST
identity.post('/passkey/bind', authSignature, zValidator('json', passkeyBindSchema), async (c) => {
	const { username, credentialId, publicKey } = c.req.valid('json');
	const db = c.get('db');

	try {
		await db
			.update(citizens)
			.set({
				passkeyId: credentialId,
				passkeyPublicKey: publicKey,
			})
			.where(eq(citizens.username, username));

		return c.json({ success: true, message: 'Passkey vinculada com sucesso.' });
	} catch (e: any) {
		return c.json({ success: false, message: 'Erro ao vincular Passkey.' }, 400);
	}
});

// 5. Setup TOTP (Google Authenticator) - PROTEGIDO COM ZERO-TRUST
identity.post('/totp/setup', authSignature, zValidator('json', totpSetupSchema), async (c) => {
	const { username } = c.req.valid('json');
	const db = c.get('db');

	const secret = authenticator.generateSecret();
	const uri = authenticator.keyuri(username, 'FFC Sandbox', secret);

	// Persistir o segredo no D1 (Inativo até verificação)
	await db
		.update(citizens)
		.set({
			totpSecret: secret,
			totpEnabled: false,
		})
		.where(eq(citizens.username, username));

	return c.json({
		success: true,
		secret,
		uri,
		message: 'Segredo gerado. Por favor, verifique o código para ativar o MFA.',
	});
});

// 5.1 Verify & Enable TOTP
identity.post('/totp/verify', authSignature, zValidator('json', totpVerifySchema), async (c) => {
	const { username, code } = c.req.valid('json');
	const db = c.get('db');

	const citizen = await db.query.citizens.findFirst({
		where: eq(citizens.username, username),
	});

	if (!citizen || !citizen.totpSecret) {
		return c.json({ success: false, message: 'MFA não configurado para este usuário.' }, 400);
	}

	const isValid = authenticator.check(code, citizen.totpSecret);

	if (!isValid) {
		return c.json({ success: false, message: 'Código TOTP inválido.' }, 401);
	}

	// Ativar MFA definitivamente
	await db.update(citizens).set({ totpEnabled: true }).where(eq(citizens.username, username));

	await db.insert(auditLogs).values({
		action: 'MFA_ENABLED',
		citizenId: citizen.id,
		status: 'success',
		metadata: { method: 'TOTP' },
	});

	return c.json({ success: true, message: 'MFA ativado com sucesso. Sua conta está agora no Nível AAL2.' });
});

// 6. DID Document Resolver (W3C Standard)
identity.get('/did/:id', async (c) => {
	const did = c.req.param('id');
	const username = did.split(':').pop();
	const db = c.get('db');

	if (!username) return c.json({ success: false, message: 'DID format inválido.' }, 400);

	const citizen = await db.query.citizens.findFirst({
		where: eq(citizens.username, username),
	});

	if (!citizen) return c.json({ success: false, message: 'DID not found.' }, 404);

	const doc = DIDResolver.generateDocument(citizen.username, citizen.publicKey);
	return c.json(doc);
});

// 7. Revogação de Identidade (Emergência) - PROTEGIDO COM ZERO-TRUST
identity.post('/revoke', authSignature, zValidator('json', revokeSchema), async (c) => {
	const { username } = c.req.valid('json');
	const db = c.get('db');

	const citizen = await db.query.citizens.findFirst({
		where: eq(citizens.username, username),
	});

	if (!citizen) return c.json({ success: false, message: 'Cidadão não encontrado.' }, 404);

	await db.update(citizens).set({ status: 'revoked' }).where(eq(citizens.username, username));

	await db.insert(auditLogs).values({
		action: 'CITIZEN_REVOKED',
		citizenId: citizen.id,
		status: 'success',
		metadata: { reason: 'Self-revocation requested via Zero-Trust signature' },
	});

	return c.json({ success: true, message: 'Identidade revogada com sucesso.' });
});

// 8. Validação de Sessão JWT (/me)
identity.get('/me', async (c) => {
	try {
		const authHeader = c.req.header('Authorization');
		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			return c.json({ success: false, message: 'Usuário não autenticado' }, 401);
		}
		const token = authHeader.split(' ')[1];
		const payload = await verify(token, c.env.JWT_SECRET, 'HS256');

		// Normalização: Suporta tokens de SSI (username/did) e Social/Web3 (sub/userId)
		return c.json({
			success: true,
			user: {
				id: payload.userId || payload.sub,
				username: payload.username || payload.sub,
				email: payload.email || payload.sub,
				did: payload.did || null,
				firstName: payload.firstName || (payload.username ? payload.username : 'User'),
				lastName: payload.lastName || '',
				role: payload.role || 'citizen',
			},
		});
	} catch (err) {
		return c.json({ success: false, message: 'Sessão inválida ou expirada' }, 401);
	}
});
// ======================================================================
// === 9. WEB3 SIWE (Sign-In With Ethereum) ===
// ======================================================================

identity.get('/web3/nonce', async (c) => {
	const addressRaw = c.req.query('address');
	if (!addressRaw) return c.json({ success: false, message: 'Address required' }, 400);

	let address;
	try {
		const { getAddress } = await import('viem');
		address = getAddress(addressRaw);
	} catch (e) {
		return c.json({ success: false, message: 'Invalid address format' }, 400);
	}

	const nonce = crypto.randomUUID();
	await c.env.KV_AUTH.put(`web3_nonce:${address}`, nonce, { expirationTtl: 600 });

	return c.json({
		success: true,
		nonce,
		message: `Sign this message to authenticate your wallet to Final Fight Combat Sandbox.\n\nNonce: ${nonce}`,
	});
});

identity.post('/web3/verify', async (c) => {
	const { message, signature, address: addressRaw } = await c.req.json();
	const db = c.get('db');

	if (!message || !signature || !addressRaw) {
		return c.json({ success: false, message: 'Missing payload' }, 400);
	}

	let address: string;
	try {
		const { getAddress } = await import('viem');
		address = getAddress(addressRaw);
	} catch (e) {
		return c.json({ success: false, message: 'Invalid address format' }, 400);
	}

	const storedNonce = await c.env.KV_AUTH.get(`web3_nonce:${address}`);
	if (!storedNonce || !message.includes(storedNonce)) {
		return c.json({ success: false, message: 'Nonce expirado ou inválido.' }, 401);
	}

	try {
		const { verifyMessage } = await import('viem');
		const isValid = await verifyMessage({ address: address as any, message, signature });
		if (!isValid) throw new Error('Signature invalid');
	} catch (e) {
		return c.json({ success: false, message: 'Assinatura criptográfica inválida' }, 401);
	}

	await c.env.KV_AUTH.delete(`web3_nonce:${address}`);

	// Fetch or create shadow user
	const { users, wallets } = await import('../../../db/schema');

	let wallet = await db.query.wallets.findFirst({
		where: eq(wallets.address, address),
	});

	let userId: number;

	if (wallet) {
		userId = wallet.userId;

		// Check if the user exists
		const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
		if (!user) throw new Error('Database integrity failure: Wallet has no associated user.');
		
		// Ensure citizen record exists
		const existingCitizen = await db.query.citizens.findFirst({ where: eq(citizens.userId, userId) });
		if (!existingCitizen) {
			const username = `web3_${address.slice(2, 8)}_${Math.random().toString(36).substring(2, 5)}`.toLowerCase();
			await db.insert(citizens).values({
				userId,
				username,
				firstName: 'Web3',
				lastName: address.slice(0, 6),
				did: `did:ffc:eth:${address.toLowerCase()}`,
				status: 'active',
			});
		}
	} else {
		// 💡 Shadow User Concept Implementation
		const shadowEmail = `${address.toLowerCase()}@web3.local`;
		const [newUser] = await db
			.insert(users)
			.values({
				email: shadowEmail,
				password: crypto.randomUUID(), // Uncrackable hash
				role: 'citizen',
			})
			.returning();

		userId = newUser.id;

		await db.insert(wallets).values({
			userId,
			address,
			chainId: 1,
		});

		// Create Citizen Profile for the new Web3 User
		const username = `web3_${address.slice(2, 8)}_${Math.random().toString(36).substring(2, 5)}`.toLowerCase();
		await db.insert(citizens).values({
			userId,
			username,
			firstName: 'Web3',
			lastName: address.slice(0, 6),
			did: `did:ffc:eth:${address.toLowerCase()}`,
			status: 'active',
		});
	}

	const token = await sign(
		{
			sub: address,
			userId,
			role: 'citizen',
			aal: 1, // SIWE is considered factor 1, could be improved with passkeys
			exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
		},
		c.env.JWT_SECRET,
	);

	return c.json({
		success: true,
		accessToken: token,
		user: { id: userId, address, role: 'citizen' },
		message: 'Web3 SIWE Assinatura aceita com sucesso!',
	});
});

export default identity;
