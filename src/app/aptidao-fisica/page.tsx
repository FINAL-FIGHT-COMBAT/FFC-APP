import { constructMetadata } from 'src/lib/seo/metadata';
import { AptidaoFisicaView } from 'src/sections/aptidao-fisica/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Diretrizes de Aptidão Física | FFC',
  description:
    'Regulamentação e diretrizes médicas para o envio de atestados e exames médicos obrigatórios para o Final Fight Combat.',
});

export default function AptidaoFisicaPage() {
  return <AptidaoFisicaView />;
}
