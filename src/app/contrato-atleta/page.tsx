import { CONFIG } from 'src/global-config';
import { ContratoAtletaView } from 'src/sections/contrato-atleta/_view/ContratoAtletaView';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Contrato de Atleta Convidado | FFC',
  description:
    'Instrumento particular de contrato de participação de atleta convidado do Final Fight Combat.',
  alternates: {
    canonical: `${CONFIG.siteUrl}/contrato-atleta`,
  },
};

export default function ContratoAtletaPage() {
  return <ContratoAtletaView />;
}
