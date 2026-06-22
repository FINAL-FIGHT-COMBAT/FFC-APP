import { notFound } from 'next/navigation';

import { DOCUMENTS } from 'src/_mock/_documents';
import { constructMetadata } from 'src/lib/seo/metadata';

import { EmBreveDocumentView } from 'src/sections/documentos/_view';

// ----------------------------------------------------------------------

type Props = {
  params: Promise<{ slug: string }>;
};

// SSG: Gera estaticamente todas as páginas de documentos no build
export function generateStaticParams() {
  return DOCUMENTS.filter((doc) => !doc.isReady).map((doc) => ({
    slug: doc.slug,
  }));
}

// SEO: Gera o título e metadados com base no slug dinâmico
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const document = DOCUMENTS.find((doc) => doc.slug === slug);

  if (!document) {
    return constructMetadata({ 
      title: 'Documento não encontrado | FFC',
      description: 'O documento solicitado não existe ou ainda não foi publicado.'
    });
  }

  return constructMetadata({
    title: `${document.title} | FFC`,
    description: document.description,
  });
}

export default async function DocumentoDinamicoPage({ params }: Props) {
  const { slug } = await params;
  const document = DOCUMENTS.find((doc) => doc.slug === slug);

  if (!document) {
    notFound();
  }

  return <EmBreveDocumentView docConfig={document} />;
}
