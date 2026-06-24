import { z } from 'zod';

/**
 * Validator for SendPulse Email Campaigns
 */
export const sendCampaignSchema = z.object({
	campaignName: z.string().min(3),
	addressBookId: z.union([z.number(), z.string()]),
	templateId: z.union([z.number(), z.string()]),
	subject: z.string().optional(),
	body: z.string().min(1),
	fromName: z.string().optional(),
	fromEmail: z.string().email().optional(),
});

export type SendCampaignInput = z.infer<typeof sendCampaignSchema>;
