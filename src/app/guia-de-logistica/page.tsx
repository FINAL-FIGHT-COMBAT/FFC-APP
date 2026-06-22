import { constructMetadata } from 'src/lib/seo/metadata';

import { GuiaLogisticaView } from 'src/sections/guia-de-logistica/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Guia de Logística, Hospedagem e Transporte | FFC',
  description:
    'Diretrizes oficiais e informações sobre hospedagem, passagens aéreas e transporte interno (shuttles) para atletas do Final Fight Combat.',
});

export default function GuiaLogisticaPage() {
  return <GuiaLogisticaView />;
}
