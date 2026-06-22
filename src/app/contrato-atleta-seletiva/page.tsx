import { constructMetadata } from 'src/lib/seo/metadata';
import { ContratoAtletaSeletivaView } from 'src/sections/contrato-atleta-seletiva/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Contrato de Participação Desportiva – Atleta da Seletiva Eliminatória | FFC',
  description:
    'Contrato e termos de participação desportiva, bolsas, deveres e compromissos para atletas das seletivas eliminatórias do Final Fight Combat.',
});

export default function ContratoAtletaSeletivaPage() {
  return <ContratoAtletaSeletivaView />;
}
