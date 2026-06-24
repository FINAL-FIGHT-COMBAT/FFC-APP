import { Bindings } from '../../types/bindings';
import { AuditService } from '../audit';

/**
 * SendPulse Email Service
 * Optimized for Cloudflare Workers (Edge)
 */
export class SendPulseService {
	private env: Bindings;
	private audit: AuditService;
	private baseUrl = 'https://api.sendpulse.com';

	constructor(env: Bindings) {
		this.env = env;
		this.audit = new AuditService(env);
	}

	/**
	 * Map SendPulse Error Codes to Readable Messages
	 */
	private mapErrorCode(code: number): string {
		const errors: Record<number, string> = {
			707: 'Saldo insuficiente na conta SendPulse',
			708: 'Limite de destinatários excedido para o seu plano',
			720: 'Campo de assunto (subject) está vazio',
			721: 'O conteúdo da mensagem de e-mail está vazio',
			791: 'Limite de campanhas API excedido (máx 4 por hora)',
			799: 'Formato de data incorreto para agendamento',
			802: 'Campanha não encontrada',
			1101: 'Endereço de e-mail não especificado',
			2020202020: 'Limite de 10 requisições por segundo atingido (Rate Limit)',
		};
		return errors[code] || `Erro SendPulse (Código ${code})`;
	}

	/**
	 * Get Access Token (Static API Key or OAuth with KV Caching)
	 */
	private async getAccessToken(): Promise<string | null> {
		// 0. Use Static API Key if configured
		if (this.env.SENDPULSE_API_KEY) {
			return this.env.SENDPULSE_API_KEY;
		}

		const cacheKey = 'auth:sendpulse:token';
		
		// 1. Check KV Cache
		const cachedToken = await this.env.KV_CACHE.get(cacheKey);
		if (cachedToken) return cachedToken;

		// 2. Fetch new token
		const res = await fetch(`${this.baseUrl}/oauth/access_token`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				grant_type: 'client_credentials',
				client_id: this.env.SENDPULSE_ID,
				client_secret: this.env.SENDPULSE_SECRET,
			}),
		});

		if (!res.ok) {
			console.error('SendPulse Auth Error:', await res.text());
			return null;
		}

		const data: any = await res.json();
		const token = data.access_token;

		// 3. Store in KV (expires 10 seconds before the actual token to be safe)
		await this.env.KV_CACHE.put(cacheKey, token, { 
			expirationTtl: Math.max(60, data.expires_in - 10) 
		});

		return token;
	}

	/**
	 * Send Email Campaign
	 */
	async sendCampaign(payload: any, ip: string) {
		const token = await this.getAccessToken();
		if (!token) throw new Error('Could not authenticate with SendPulse');

		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), 8000); // 8s timeout

		try {
			const res = await fetch(`${this.baseUrl}/campaigns`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				signal: controller.signal,
				body: JSON.stringify(payload),
			});

			clearTimeout(timeout);

			if (!res.ok) {
				const errorMsg = await res.text();
				await this.audit.log({
					action: 'API_REQUEST',
					status: 'failure',
					ip,
					metadata: { service: 'SendPulse', error: errorMsg, endpoint: '/campaigns' }
				});
				throw new Error(`SendPulse Error: ${errorMsg}`);
			}

			const data = await res.json();
			
			await this.audit.log({
				action: 'API_REQUEST',
				status: 'success',
				ip,
				metadata: { service: 'SendPulse', campaignId: (data as any).id }
			});

			return data;
		} catch (error: any) {
			clearTimeout(timeout);
			const isTimeout = error.name === 'AbortError';
			
			await this.audit.log({
				action: 'API_REQUEST',
				status: 'failure',
				ip,
				metadata: { 
					service: 'SendPulse', 
					error: isTimeout ? 'Request Timeout (8s)' : error.message 
				}
			});
			
			throw error;
		}
	}

	/**
	 * Get Account Balance and Info
	 */
	async getAccountInfo() {
		const token = await this.getAccessToken();
		if (!token) throw new Error('Could not authenticate with SendPulse');

		const res = await fetch(`${this.baseUrl}/user/info`, {
			headers: { Authorization: `Bearer ${token}` },
		});

		if (!res.ok) throw new Error('Failed to fetch SendPulse account info');
		return res.json();
	}

	/**
	 * Get Balance Detail
	 */
	async getBalance() {
		const token = await this.getAccessToken();
		if (!token) throw new Error('Could not authenticate with SendPulse');

		const res = await fetch(`${this.baseUrl}/user/balance/detail`, {
			headers: { Authorization: `Bearer ${token}` },
		});

		if (!res.ok) throw new Error('Failed to fetch SendPulse balance');
		return res.json();
	}
}
