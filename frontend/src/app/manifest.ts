import type { MetadataRoute } from 'next';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

/**
 * MANIFESTO OFICIAL FFC (PWA) - PRODUÇÃO 2026
 * Foco: Instalação Mobile para atletas e fãs acompanharem o evento.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `Final Fight Combat — ${CONFIG.appName}`,
    short_name: 'FFC',
    description:
      'Plataforma oficial do Final Fight Combat para inscrições, gestão de atletas, acompanhamento de chaves, rankings, premiações e eventos de artes marciais. Conectando competidores, equipes, patrocinadores e oportunidades em um único ecossistema.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0F1E',
    theme_color: '#EAB308',
    orientation: 'portrait' as const,

    categories: ['sports', 'lifestyle', 'health & fitness'],

    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any' as const,
      },
      {
        src: '/logo/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable' as const, // Essencial para ícones adaptativos no Android
      },
      {
        src: '/logo/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
