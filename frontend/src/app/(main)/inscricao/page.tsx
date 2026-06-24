import { CONFIG } from 'src/global-config';

import { InscricaoView } from 'src/sections/inscricao/_view/InscricaoView';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Inscrição de Atletas | FFC',
  description:
    'Formulário oficial de inscrição para o Final Fight Combat. Inscreva-se e participe do maior evento de artes marciais.',
  alternates: {
    canonical: `${CONFIG.siteUrl}/inscricao`,
  },
};

export default function InscricaoPage() {
  return <InscricaoView />;
}
