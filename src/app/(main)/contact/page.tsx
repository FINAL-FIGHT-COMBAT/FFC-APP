import { constructMetadata } from 'src/lib/seo/metadata';

import { ContactView } from 'src/sections/contact/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Contato | FFC',
  description:
    'Fale com a nossa equipe do Final Fight Combat. Tire suas dúvidas sobre inscrições, ingressos, chaves e credenciamento de lutas.',
});

export default function ContactPage() {
  return <ContactView />;
}
