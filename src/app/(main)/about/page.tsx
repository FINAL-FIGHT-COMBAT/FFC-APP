import { constructMetadata } from 'src/lib/seo/metadata';

import { AboutView } from 'src/sections/about/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Sobre Nós | FFC',
  description:
    'Conheça a história, a missão e a equipe por trás da plataforma FFC – Final Fight Combat.',
});

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FFC',
    url: 'https://www.finalfightcombat.xyz/about',
    logo: 'https://www.finalfightcombat.xyz/logo/android-chrome-512x512.png',
    sameAs: [
      'https://www.instagram.com/ffc.combat/',
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutView />
    </>
  );
}
