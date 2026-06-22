import { constructMetadata } from 'src/lib/seo/metadata';

import { RegulamentoFFCView } from 'src/sections/regulamento-ffc/_view';

export const metadata = constructMetadata({
  title: 'Regulamento FFC | Final Fight Combat',
  description: 'Diretrizes oficiais técnicas, desportivas e disciplinares das competições FFC Grappling.',
});

export default function RegulamentoFFCPage() {
  return <RegulamentoFFCView />;
}
