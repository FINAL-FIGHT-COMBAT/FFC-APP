import { constructMetadata } from 'src/lib/seo/metadata';

import { DocumentosView } from 'src/sections/documentos/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Documentos Oficiais | Final Fight Combat',
  description: 'Regulamentos, pesagem e documentação oficial do evento Final Fight Combat.',
});

export default function DocumentosPage() {
  return <DocumentosView />;
}
