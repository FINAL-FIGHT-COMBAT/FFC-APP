import { constructMetadata } from 'src/lib/seo/metadata';
import { ContratoStaffView } from 'src/sections/contrato-de-staff/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Contrato de Prestação de Serviços Operacionais e Suporte (Staff) | FFC',
  description:
    'Contrato de prestação de serviços eventuais autônomos, diárias e deveres de suporte operacional (staff) para eventos do Final Fight Combat.',
});

export default function ContratoStaffPage() {
  return <ContratoStaffView />;
}
