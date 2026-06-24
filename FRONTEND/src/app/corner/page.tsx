import { constructMetadata } from 'src/lib/seo/metadata';

import { RegrasCornerView } from 'src/sections/regras-corner/_view';

export const metadata = constructMetadata({
  title: 'Regras de Córner e Conduta | Final Fight Combat',
  description: 'Manual disciplinar, código de vestimenta e regras de atuação para técnicos no FFC.',
});

export default function RegrasCornerPage() {
  return <RegrasCornerView />;
}
