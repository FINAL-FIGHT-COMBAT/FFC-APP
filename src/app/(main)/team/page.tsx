import { constructMetadata } from 'src/lib/seo/metadata';

import { TeamView } from 'src/sections/team/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Nossa Equipe | FFC',
  description: 'Conheça os diretores, coordenadores e organizadores por trás do Final Fight Combat.',
});

export default function TeamPage() {
  return <TeamView />;
}
