/**
 * DID Resolver: Generates W3C-compliant DID Documents for FFC.
 * Standard: did:ffc:<handle>
 */
export class DIDResolver {
	static generateDocument(username: string, publicKey: string) {
		const did = `did:ffc:${username.toLowerCase()}`;

		return {
			'@context': ['https://www.w3.org/ns/did/v1', 'https://w3id.org/security/suites/ed25519-2020/v1'],
			id: did,
			verificationMethod: [
				{
					id: `${did}#key-1`,
					type: 'Ed25519VerificationKey2020',
					controller: did,
					publicKeyJwk: this.toJWK(publicKey),
				},
			],
			authentication: [`${did}#key-1`],
			assertionMethod: [`${did}#key-1`],
			capabilityInvocation: [`${did}#key-1`],
			capabilityDelegation: [`${did}#key-1`],
			service: [
				{
					id: `${did}#governance`,
					type: 'DAO-Governance-Service',
					serviceEndpoint: 'https://api.finalfightcombat.xyz/api/core/identity',
				},
			],
		};
	}

	private static toJWK(publicKeyStr: string) {
		// Simplificação do JWK para o PoC
		const pubArray = JSON.parse(publicKeyStr);
		const base64url = btoa(String.fromCharCode(...pubArray))
			.replace(/\+/g, '-')
			.replace(/\//g, '_')
			.replace(/=/g, '');

		return {
			kty: 'OKP',
			crv: 'Ed25519',
			x: base64url,
			kid: 'key-1',
		};
	}
}
