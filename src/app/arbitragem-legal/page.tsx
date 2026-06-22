import { constructMetadata } from 'src/lib/seo/metadata';

import { ArbitragemLegalView } from 'src/sections/arbitragem-legal/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Convenção de Arbitragem e Resolução Extrajudicial | FFC',
  description:
    'Convenção de arbitragem legal e resolução extrajudicial de disputas e controvérsias para participantes do ecossistema Final Fight Combat.',
});

export default function ArbitragemLegalPage() {
  return <ArbitragemLegalView />;
}
