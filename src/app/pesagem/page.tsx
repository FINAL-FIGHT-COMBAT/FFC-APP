import { constructMetadata } from 'src/lib/seo/metadata';
import { GuiaPesagemView } from 'src/sections/guia-pesagem/_view';

export const metadata = constructMetadata({
  title: 'Guia de Pesagem | Final Fight Combat',
  description: 'Protocolos técnicos, logísticos e regras de pesagem oficiais do FFC Grappling.',
});

export default function GuiaPesagemPage() {
  return <GuiaPesagemView />;
}
