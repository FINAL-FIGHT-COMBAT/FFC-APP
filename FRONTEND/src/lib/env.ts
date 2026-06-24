import { z } from 'zod';

// ----------------------------------------------------------------------

const envSchema = z.object({
  NEXT_PUBLIC_HOST_API: z.string().url().optional().default('https://api.finalfightcombat.xyz'),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional().default('https://www.finalfightcombat.xyz'),
  NEXT_PUBLIC_APP_URL: z.string().url().optional().default('https://www.finalfightcombat.xyz'),
});

const parsed = envSchema.safeParse({
  NEXT_PUBLIC_HOST_API: process.env.NEXT_PUBLIC_HOST_API,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});

if (!parsed.success) {
  console.error('❌ Variáveis de ambiente inválidas:', parsed.error.format());
  throw new Error('Configuração inválida de variáveis de ambiente do FFC.');
}

export const env = parsed.data;
