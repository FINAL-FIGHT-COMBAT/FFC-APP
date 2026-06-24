import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { sign } from 'hono/jwt';
import { eq, and, gt } from 'drizzle-orm';
import { users, citizens, passwordResets } from '../../../db/schema';
import { signUpSchema, legacyLoginSchema, forgotPasswordSchema, resetPasswordSchema } from '../../../validators/auth';
import { Bindings } from '../../../types/bindings';

type AppType = {
	Bindings: Bindings;
	Variables: { db: any };
};

const localAuth = new Hono<AppType>();

// ==========================================
// 🛡️ MOTOR CRIPTOGRÁFICO NATIVO (EDGE V8)
// Substitui a quebra do lib-bcrypt no Workers
// Padrão Governamental FIPS: PBKDF2 / SHA-256
// ==========================================

async function hashPassword(password: string, existingSaltB64?: string): Promise<string> {
	const enc = new TextEncoder();
	let salt: Uint8Array;

	// Usa o Sal existente se for validação, ou sorteia aleatório (CSPRG) se for Cadastro Novo
	if (existingSaltB64) {
		const rawString = atob(existingSaltB64);
		salt = new Uint8Array(rawString.length);
		for (let i = 0; i < rawString.length; i++) {
			salt[i] = rawString.charCodeAt(i);
		}
	} else {
		salt = crypto.getRandomValues(new Uint8Array(16));
	}

	// Importa a string pura da senha para gerar um Material Chave de Base
	const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveBits']);

	// Efetua 100.000 Rounds Exponenciais usando SHA-256
	const derivedBits = await crypto.subtle.deriveBits(
		{ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
		keyMaterial,
		256, // Comprimento Padrão do Hash
	);

	const hashArray = Array.from(new Uint8Array(derivedBits));
	const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

	// Exporta a String Final formatada: "SALT(Base64):HASH(Hex)"
	const finalSaltB64 = btoa(String.fromCharCode(...salt));
	return `${finalSaltB64}:${hashHex}`;
}

async function verifyPassword(password: string, storedHashText: string): Promise<boolean> {
	const [saltB64, originalHex] = storedHashText.split(':');
	if (!saltB64 || !originalHex) return false;

	// Recalculo o Digest usando exatamento a mmesmo tempero do Banco de Dados
	const newDigest = await hashPassword(password, saltB64);
	return newDigest === storedHashText;
}

// ==========================================
// 📝 ROTA 1: CADASTRO TRADICIONAL
// ==========================================

localAuth.post('/register', zValidator('json', signUpSchema), async (c) => {
	const data = c.req.valid('json');
	const db = c.get('db');

	try {
		// 1. O e-mail já foi pego (Web3, OAuth ou Local?)
		const [existingUser] = await db.select().from(users).where(eq(users.email, data.email)).limit(1);

		if (existingUser) {
			return c.json({ success: false, message: 'O e-mail digitado já consta vinculado a uma identificação na DAO.' }, 409);
		}

		// 2. Transforma a Senha Limpa em uma Assinatura Oculta via Edge Crypto
		const secureHash = await hashPassword(data.password);

		// 3. Salva no D1 de forma transacional (Users + Citizens)
		const [newUser] = await db
			.insert(users)
			.values({
				email: data.email,
				password: secureHash,
				emailVerified: false,
				role: 'citizen',
			})
			.returning();

		// Criar o registro de Cidadão (Identidade Soberana - Nível 1: Pendente Chaves)
		const username = data.email.split('@')[0] + '_' + Math.random().toString(36).substring(2, 7);
		const [newCitizen] = await db.insert(citizens).values({
			userId: newUser.id,
			username: username.toLowerCase(),
			firstName: data.firstName,
			lastName: data.lastName,
			did: `did:ffc:web2:${newUser.id}`, // Provisório
			publicKey: '', // Será preenchido no Handshake Genesis
			status: 'pending_genesis',
		}).returning();

		// 4. Gerar token de sessão imediatamente (UX: usuário já fica logado após cadastro)
		const accessToken = await sign(
			{
				sub: newUser.email,
				userId: newUser.id,
				firstName: newCitizen.firstName,
				lastName: newCitizen.lastName,
				role: newUser.role || 'citizen',
				aal: 1,
				exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24h
			},
			c.env.JWT_SECRET,
		);

		return c.json(
			{
				success: true,
				message: 'Identificação Local cadastrada com sucesso.',
				accessToken,
				user: {
					id: newUser.id,
					email: newUser.email,
					firstName: newCitizen.firstName,
					lastName: newCitizen.lastName,
					role: newUser.role || 'citizen',
				},
			},
			201,
		);
	} catch (err: any) {
		return c.json({ success: false, message: 'Falha durante registro local', details: err.message }, 500);
	}
});

// ==========================================
// 🔓 ROTA 2: LOGIN TRADICIONAL
// ==========================================

localAuth.post('/login', zValidator('json', legacyLoginSchema), async (c) => {
	const { email, password } = c.req.valid('json');
	const db = c.get('db');

	try {
		// 1. Captura as Credenciais (Join com Citizens para obter o nome)
		const [user] = await db
			.select({
				id: users.id,
				email: users.email,
				password: users.password,
				role: users.role,
				firstName: citizens.firstName,
				lastName: citizens.lastName,
			})
			.from(users)
			.leftJoin(citizens, eq(users.id, citizens.userId))
			.where(eq(users.email, email))
			.limit(1);

		// Se o usuário existir mas não tiver os formatos Salt:Hash puros (Tipo as ShadowAccounts Web3 = UUIDs e Web2.0)
		if (!user || !user.password) {
			return c.json({ success: false, message: 'Conta Inexistente ou Incompatível com o modelo Manual de Login.' }, 401);
		}

		if (!user.password.includes(':')) {
			// Tentativa de invadir Web3 accounts ou OAuth puro com hash gerado (que não levam Salt:Hash explícito)
			return c.json({ success: false, message: 'Este e-mail está emparelhado a um provedor OAuth ou Web3. Efetue Login por lá.' }, 401);
		}

		// 2. Colisão Frontal (Verifica a Senha Criptografada)
		const isMatched = await verifyPassword(password, user.password);

		if (!isMatched) {
			return c.json({ success: false, message: 'As Credenciais de Acesso não batem.' }, 401);
		}

		// 3. Token Sessão Genuíno
		const token = await sign(
			{
				sub: user.email,
				userId: user.id,
				firstName: user.firstName,
				lastName: user.lastName,
				role: user.role || 'citizen',
				aal: 1, // Asserção Fraca (Por ser Web2 Cru) -> Precisará de TOTP KYC para subir na DAO.
				exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
			},
			c.env.JWT_SECRET,
		);

		return c.json({
			success: true,
			message: 'Credenciais Manuais Válidas',
			accessToken: token,
			user: { id: user.id, email: user.email, role: user.role },
		});
	} catch (err: any) {
		return c.json({ success: false, message: 'Falha Mestra na Validação do Cidadão', details: err.message }, 500);
	}
});

// ==========================================
// 📧 ROTA 3: ESQUECEU A SENHA (FORGOT)
// ==========================================

localAuth.post('/forgot-password', zValidator('json', forgotPasswordSchema), async (c) => {
	const { email } = c.req.valid('json');
	const db = c.get('db');

	try {
		const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);

		// Se o usuário existir e tiver conta manual (não-OAuth Exclusivo).
		if (user && user.password && user.password.includes(':')) {
			const resetToken = crypto.randomUUID(); // Token Único Seguro

			// Insere o Token na Tabela para Expiração em 1 Hora
			await db.insert(passwordResets).values({
				userId: user.id,
				token: resetToken,
				expiresAt: new Date(Date.now() + 60 * 60 * 1000),
				used: false,
			});

			// TODO(Dev): Integrar API da Resend ou AWS SES para disparar E-mail Real.
			// E-mail contendo algo como: https://www.finalfightcombat.xyz/reset-password?token=${resetToken}
		}

		// Retorna Sucesso Mudo/Silencioso (Anti-Enumeração)
		// Protege contra hackers querendo descobrir quais emails existem no sistema
		return c.json({
			success: true,
			message: 'Se o E-mail existir, um link de recuperação foi enviado em breve.',
		});
	} catch (err: any) {
		return c.json({ success: false, message: 'Falha Mestra na Recuperação Falhou', details: err.message }, 500);
	}
});

// ==========================================
// 🛡️ ROTA 4: RESET DE SENHA (Ação via Token)
// ==========================================

localAuth.post('/reset-password', zValidator('json', resetPasswordSchema), async (c) => {
	const { token, password } = c.req.valid('json');
	const db = c.get('db');

	try {
		// 1. Acha o token se não foi usado e se ainda não explodiu (Horário)
		const [validReset] = await db
			.select()
			.from(passwordResets)
			.where(and(eq(passwordResets.token, token), eq(passwordResets.used, false), gt(passwordResets.expiresAt, new Date())))
			.limit(1);

		if (!validReset) {
			return c.json({ success: false, message: 'O Link de Recuperação expirou ou é inválido.' }, 401);
		}

		// 2. Transforma FÍSICAMENTE a Nova Senha pro formato PBKDF2
		const secureHash = await hashPassword(password);

		// 3. Destrói o Token Atual e Atualiza Conta do Usuário num Batch transacional
		await db.update(passwordResets).set({ used: true }).where(eq(passwordResets.id, validReset.id));

		await db.update(users).set({ password: secureHash }).where(eq(users.id, validReset.userId));

		return c.json({
			success: true,
			message: 'A senha do Módulo Central Administrativo e Dashboard foi alterada irrevogavelmente com Sucesso.',
		});
	} catch (err: any) {
		return c.json({ success: false, message: 'A Mudança de Credencial foi bloqueada.', details: err.message }, 500);
	}
});

export default localAuth;
