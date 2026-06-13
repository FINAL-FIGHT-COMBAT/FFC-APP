import { constructMetadata } from 'src/lib/seo/metadata';

import { ChavesView } from 'src/sections/chaves/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Chaveamento Oficial | Final Fight Combat',
  description: 'Acompanhe as chaves, confrontos e resultados do Grand Prix de Jiu-Jitsu e MMA.',
});

export default function ChavesPage() {
  return <ChavesView />;
}
