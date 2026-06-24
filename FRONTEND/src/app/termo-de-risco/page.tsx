import { constructMetadata } from 'src/lib/seo/metadata';

import { TermoDeRiscoView } from 'src/sections/termo-de-risco/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Termo de Risco e Assunção de Lesões | FFC',
  description:
    'Termo de consentimento obrigatório para atletas sobre riscos e assunção voluntária de lesões desportivas no Final Fight Combat.',
});

export default function TermoDeRiscoPage() {
  return <TermoDeRiscoView />;
}
