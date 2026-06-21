import { constructMetadata } from 'src/lib/seo/metadata';
import { GuiaAntidopingView } from 'src/sections/guia-antidoping/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Guia Antidoping e Integridade Esportiva | FFC',
  description:
    'Diretrizes oficiais sobre controle de dopagem, condutas e lista de substâncias proibidas da WADA/ABCD para atletas do Final Fight Combat.',
});

export default function GuiaAntidopingPage() {
  return <GuiaAntidopingView />;
}
