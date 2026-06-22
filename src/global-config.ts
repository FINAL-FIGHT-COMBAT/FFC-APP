
import { env } from 'src/lib/env';

import packageJson from '../package.json';

// ----------------------------------------------------------------------

export type ConfigValue = {
  appName: string;
  appVersion: string;
  serverUrl: string; // Backend API (Dados de Lutas e Ingressos)
  siteUrl: string; // Frontend (Base para SEO)
  assetsDir: string;
  r2PublicUrl: string;
  isStaticExport: boolean;
  assets: {
    fallback: {
      avatar: string;
      banner: string;
    };
  };
  auth: {
    method: 'jwt';
    skip: boolean;
    redirectPath: string;
    defaultPathByRole: {
      admin: string;
      partner: string;
      citizen: string;
    };
  };
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  };
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  /**
   * NOME DA APLICAÇÃO
   */
  appName: 'FFC',

  appVersion: packageJson.version,

  /**
   * BACKEND API URL
   * Local de onde os dados de produção e usuários são consumidos.
   */
  serverUrl: env.NEXT_PUBLIC_HOST_API.replace(/\/$/, ''),

  /**
   * FRONTEND SITE URL
   * SSOT para Metadados, Sitemaps e Links Canônicos.
   * FIX: Bloqueado rigorosamente contra fallbacks da Vercel (Mirroring Penalty).
   */
  siteUrl: env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, ''),

  /**
   * CLOUDFLARE R2 PUBLIC URL
   * Esta é a URL do seu bucket 'ffc-assets'.
   * Se você configurou um subdomínio no Cloudflare, use ele aqui.
   */
  r2PublicUrl: (process.env.NEXT_PUBLIC_R2_URL ?? '').replace(/\/$/, ''),

  /**
   * ASSETS DIRECTORY
   * Lógica Inteligente: Em produção, o app busca imagens no R2 automaticamente.
   * Em desenvolvimento, ele olha para o seu diretório local ou .env.
   */
  assetsDir:
    process.env.NODE_ENV === 'production'
      ? (process.env.NEXT_PUBLIC_R2_URL ?? '')
      : (process.env.NEXT_PUBLIC_ASSETS_DIR ?? ''),

  isStaticExport: JSON.parse(process.env.BUILD_STATIC_EXPORT ?? 'false'),

  /**
   * ASSETS FALLBACKS
   */
  assets: {
    fallback: {
      avatar: `${env.NEXT_PUBLIC_HOST_API}/api/platform/storage/public/avatars/fallback.jpg`,
      banner: `${env.NEXT_PUBLIC_HOST_API}/api/platform/storage/public/covers/banner-fallback.png`,
    },
  },

  /**
   * CONFIGURAÇÕES DE AUTENTICAÇÃO
   */
  auth: {
    method: 'jwt',
    skip: false,
    redirectPath: '/',
    defaultPathByRole: {
      admin: '/',
      partner: '/',
      citizen: '/',
    },
  },
  /**
   * REDES SOCIAIS OFICIAIS
   */
  socials: {
    facebook: 'https://www.facebook.com/ffc',
    instagram: 'https://www.instagram.com/ffc',
    linkedin: 'https://www.linkedin.com/company/ffc',
    twitter: 'https://www.twitter.com/ffc',
  },
};
