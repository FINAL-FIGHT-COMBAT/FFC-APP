import { constructMetadata } from 'src/lib/seo/metadata';
import { PlanoMedicoView } from 'src/sections/plano-medico/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Plano de Atendimento Médico e Protocolo de Primeiros Socorros | FFC',
  description:
    'Documento e protocolos oficiais de atendimento médico emergencial, infraestrutura e cobertura de seguro para competições do Final Fight Combat.',
});

export default function PlanoMedicoPage() {
  return <PlanoMedicoView />;
}
