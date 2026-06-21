import { constructMetadata } from 'src/lib/seo/metadata';
import { ImprensaView } from 'src/sections/imprensa/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Manual de Diretrizes, Conduta e Credenciamento de Imprensa | FFC',
  description:
    'Manual de conduta, diretrizes de direitos autorais, dress code e solicitação de credenciamento para profissionais de imprensa no Final Fight Combat.',
});

export default function ImprensaPage() {
  return <ImprensaView />;
}
