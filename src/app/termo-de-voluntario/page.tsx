import { constructMetadata } from 'src/lib/seo/metadata';

import { TermoVoluntarioView } from 'src/sections/termo-de-voluntario/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Termo de Adesão ao Trabalho Voluntário | FFC',
  description:
    'Termo de adesão e acordo de colaboração de trabalho voluntário sem vínculo empregatício para as etapas do Final Fight Combat.',
});

export default function TermoVoluntarioPage() {
  return <TermoVoluntarioView />;
}
