/**
 * Copyright 2026 Final Fight Combat (FFC).
 * Project: FFC App
 * Role: Root Layout (Main Entry Point)
 * Version: 2.0.0 - Production Ready: Strict Types & Clean Lint
 */

import 'src/global.css';

import type { Metadata, Viewport } from 'next';

import { Barlow, Orbitron, Public_Sans } from 'next/font/google';

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-public-sans',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
  display: 'swap',
});



import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { CONFIG } from 'src/global-config';
import { LocalizationProvider } from 'src/locales';
import { detectLanguage } from 'src/locales/server';
import { I18nProvider } from 'src/locales/i18n-provider';
import { themeConfig, primary as primaryColor } from 'src/theme';

import { JsonLd } from 'src/components/seo/json-ld';
import { detectSettings } from 'src/components/settings/server';
import { defaultSettings, SettingsProvider } from 'src/components/settings';

import { Web3Provider } from 'src/auth/context/web3-provider';
import { AuthProvider as JwtAuthProvider } from 'src/auth/context';

import App from './app';

// ----------------------------------------------------------------------

/**
 * 🛠️ TIPAGEM DE IDIOMA (FIX TS2322):
 * Define explicitamente os códigos de idioma aceitos pelo I18nProvider.
 */
type LanguageCode = 'en' | 'pt' | 'es' | 'ar' | 'cn' | 'fr' | 'ru';

/**
 * ✅ ESTABILIDADE DE DEPLOY:
 * Node.js runtime obrigatório para suportar a árvore densa de Providers e i18n.
 */
export const runtime = 'nodejs';

const AuthProvider = JwtAuthProvider;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: primaryColor.main,
};

/**
 * 🌐 ESTRATÉGIA DE METADADOS (SEO FORENSICS):
 */
export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.siteUrl),
  title: {
    default: 'Final Fight Combat (FFC) | O Maior Evento de Artes Marciais',
    template: `%s | FFC`,
  },
  description:
    'Site Oficial do Final Fight Combat. O maior campeonato de Jiu-Jitsu e MMA do Brasil. Inscreva-se, acompanhe as chaves e assista às superlutas.',
  keywords: [
    'FFC',
    'Final Fight Combat',
    'MMA',
    'Jiu-Jitsu',
    'BJJ',
    'Grand Prix',
    'Artes Marciais',
    'Lutas',
    'Grappling',
    'Campeonato',
  ],
  authors: [{ name: 'FFC Team', url: CONFIG.siteUrl }],
  icons: [
    { rel: 'icon', url: `/favicon.ico` },
    { rel: 'apple-touch-icon', url: `/apple-touch-icon.png` },
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: CONFIG.siteUrl,
    siteName: 'Final Fight Combat',
    images: [
      {
        url: '/opengraph-ffc.png',
        width: 1200,
        height: 630,
        alt: 'Final Fight Combat (FFC) - O Maior Evento de Artes Marciais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Final Fight Combat (FFC)',
    description: 'Acompanhe o maior evento de MMA e Jiu-Jitsu do Brasil.',
    images: ['/opengraph-ffc.png'],
  },
  alternates: {
    canonical: '/',
  },
};

// ----------------------------------------------------------------------

/**
 * ⚙️ GESTÃO DE CONFIGURAÇÃO DO APP (SERVER-SIDE):
 * Captura idioma e configurações de forma assíncrona com Casting de Tipo rigoroso.
 */
async function getAppConfig() {
  try {
    const detectedLang = await detectLanguage();
    const settings = await detectSettings();

    // Casting para LanguageCode para satisfazer o I18nProvider
    const lang = (detectedLang || 'pt') as LanguageCode;

    return {
      lang,
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      i18nLang: lang,
      cookieSettings: settings || defaultSettings,
    };
  } catch (_error) {
    /**
     * ✅ FIX LINT: Uso do prefixo '_' para indicar variável intencionalmente não utilizada.
     */
    return {
      lang: 'pt' as LanguageCode,
      dir: 'ltr',
      i18nLang: 'pt' as LanguageCode,
      cookieSettings: defaultSettings,
    };
  }
}

/**
 * 🏛️ COMPONENTE RAIZ (ROOT LAYOUT):
 */
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const appConfig = await getAppConfig();

  return (
    <html lang={appConfig.lang} dir={appConfig.dir} suppressHydrationWarning>
      <head>
        <JsonLd
          schema={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                name: 'Final Fight Combat (FFC)',
                alternateName: 'FFC',
                url: CONFIG.siteUrl,
                description:
                  'Site oficial do Final Fight Combat, o maior evento de MMA e Jiu-Jitsu do Brasil.',
              },
              {
                '@type': 'SportsOrganization',
                name: 'Final Fight Combat',
                url: CONFIG.siteUrl,
                logo: `${CONFIG.siteUrl}/logo/logo-512x512.png`,
                sameAs: [CONFIG.socials.instagram, CONFIG.socials.facebook, CONFIG.socials.twitter],
                knowsAbout: [
                  'Mixed Martial Arts',
                  'Brazilian Jiu-Jitsu',
                  'Sports Tournaments',
                  'Grand Prix',
                ],
              },
            ],
          }}
        />
      </head>
      <body className={`${publicSans.variable} ${barlow.variable} ${orbitron.variable}`}>
        <InitColorSchemeScript
          modeStorageKey={themeConfig.modeStorageKey}
          attribute={themeConfig.cssVariables.colorSchemeSelector}
          defaultMode={themeConfig.defaultMode}
        />

        {/* ✅ I18nProvider tipado corretamente para evitar erros de build */}
        <I18nProvider lang={appConfig.i18nLang}>
          <Web3Provider>
            <AuthProvider>
              <SettingsProvider
                defaultSettings={defaultSettings}
                cookieSettings={appConfig.cookieSettings}
              >
                <LocalizationProvider>
                  <AppRouterCacheProvider options={{ key: 'css' }}>
                    <App>{children}</App>
                  </AppRouterCacheProvider>
                </LocalizationProvider>
              </SettingsProvider>
            </AuthProvider>
          </Web3Provider>
        </I18nProvider>


      </body>
    </html>
  );
}
