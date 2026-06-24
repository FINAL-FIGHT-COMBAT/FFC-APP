import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { authSignature } from '../../middleware/auth_signature';
import { sendCampaignSchema } from '../../validators/email';
import { SendPulseService } from '../../services/email/sendpulse';
import { Bindings, Variables } from '../../types/bindings';

type AppType = {
	Bindings: Bindings;
	Variables: Variables;
};

const email = new Hono<AppType>();

// --- MIDDLEWARE DE SEGURANÇA (Zero-Trust) ---
email.use('/*', authSignature);

/**
 * Enviar Campanha de E-mail via SendPulse
 */
email.post('/campaign', zValidator('json', sendCampaignSchema), async (c) => {
	const payload = c.req.valid('json');
	const ip = c.req.header('cf-connecting-ip') || 'unknown';
	
	const service = new SendPulseService(c.env);
	
	try {
		const result = await service.sendCampaign(payload, ip);
		return c.json({
			success: true,
			message: 'Campanha disparada com sucesso',
			data: result
		});
	} catch (error: any) {
		return c.json({
			success: false,
			message: 'Erro ao disparar campanha',
			error: error.message
		}, 500);
	}
});

export default email;
