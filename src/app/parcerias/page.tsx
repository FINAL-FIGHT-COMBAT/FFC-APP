import { constructMetadata } from 'src/lib/seo/metadata';
import { ContratoParceriaView } from 'src/sections/contrato-parceria/_view';

export const metadata = constructMetadata({
  title: 'Contrato de Parceria e Afiliação | Final Fight Combat',
  description: 'Termos legais para patrocínio comercial e afiliação de academias ao FFC.',
});

export default function ContratoParceriaPage() {
  return <ContratoParceriaView />;
}
