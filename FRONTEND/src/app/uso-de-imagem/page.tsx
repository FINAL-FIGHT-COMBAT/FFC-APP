import { constructMetadata } from 'src/lib/seo/metadata';

import { UsoDeImagemView } from 'src/sections/uso-de-imagem/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Termo de Cessão de Direito de Imagem e Arena | FFC',
  description:
    'Autorização e cessão de direitos de imagem, voz e arena para atletas, técnicos e equipes participantes do Final Fight Combat.',
});

export default function UsoDeImagemPage() {
  return <UsoDeImagemView />;
}
