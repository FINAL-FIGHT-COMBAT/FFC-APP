import { constructMetadata } from 'src/lib/seo/metadata';

import { LegalView } from 'src/sections/legal/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Termos de Uso | FFC',
  description: 'Leia os termos e condições de uso da plataforma Final Fight Combat (FFC).',
});

const CONTENT = `
  <h2>1. Aceitação dos Termos</h2>
  <p>Ao acessar e utilizar a plataforma do FFC (Final Fight Combat), você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis à navegação digital e eventos esportivos.</p>
  
  <h2>2. Cadastro e Segurança</h2>
  <p>Para se inscrever em eventos, acompanhar chaves de lutas ou assinar contratos digitais, o usuário deve manter suas credenciais de acesso seguras e fornecer dados cadastrais verídicos e atualizados.</p>
  
  <h2>3. Propriedade Intelectual</h2>
  <p>Todo o conteúdo, marcas, design e tecnologias presentes nesta plataforma são de propriedade exclusiva do FFC ou de seus parceiros e licenciados homologados.</p>
`;

export default function TermsPage() {
  return <LegalView title="Termos de Uso" content={CONTENT} lastUpdated="16 de Junho de 2026" />;
}
