import { constructMetadata } from 'src/lib/seo/metadata';
import { AssinaturaView } from 'src/sections/assinatura/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Assinatura Biométrica | Dashboard FFC',
  description: 'Portal de registro seguro via IPFS e reconhecimento facial.',
});

type Props = {
  params: Promise<{ id: string }>;
};

export default async function AssinaturaPage({ params }: Props) {
  const { id } = await params;
  return <AssinaturaView documentId={id} />;
}
