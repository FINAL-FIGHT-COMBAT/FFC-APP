import { constructMetadata } from 'src/lib/seo/metadata';
import { DocumentoReaderView } from 'src/sections/documentos/pdf-viewer/DocumentoReaderView';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Leitor de Documento | FFC',
  description: 'Leitor oficial de documentos e regulamentos do Final Fight Combat.',
});

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PdfViewerPage({ params }: Props) {
  const { id } = await params;
  return <DocumentoReaderView documentId={id} />;
}
