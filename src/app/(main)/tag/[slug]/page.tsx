import { constructMetadata } from 'src/lib/seo/metadata';

import { ComingSoonView } from 'src/sections/coming-soon/view';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return constructMetadata({
    title: `Postagens sobre a Tag "${slug.replace(/-/g, ' ').toUpperCase()}"`,
    description: `Aprofunde-se no cluster de conteúdo focado na temática ${slug.replace(/-/g, ' ')} aplicado ao ecossistema FFC.`,
  });
}

export default function TagClusterPage() {
  return <ComingSoonView />;
}
