import { constructMetadata } from 'src/lib/seo/metadata';

import { EcosystemView } from 'src/sections/ecosystem/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Ecossistema | FFC',
  description: 'Conheça a infraestrutura esportiva completa que integra chaves de lutas, rankings, credenciamentos e comunidade do combate.',
});

export default function EcosystemPage() {
  return <EcosystemView />;
}
