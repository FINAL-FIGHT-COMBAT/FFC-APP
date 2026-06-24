import { constructMetadata } from 'src/lib/seo/metadata';

import { PolicyView } from 'src/sections/legal/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Política Editorial | FFC',
  description:
    'Conheça nossos padrões de integridade, transparência e governança de conteúdo jornalístico e técnico.',
});

const CONTENT = `
  <h2>1. Nossa Missão Editorial</h2>
  <p>O compromisso do FFC é fornecer informações precisas, imparciais e atualizadas sobre o ecossistema de lutas, rankings e eventos esportivos.</p>
  
  <h2>2. Independência e Imparcialidade</h2>
  <p>Todo o nosso conteúdo é produzido de forma independente. Repórteres e assessores que contribuem com matérias e análises devem zelar pelas boas práticas jornalísticas.</p>
  
  <h2>3. Correção e Transparência</h2>
  <p>Erros identificados em matérias ou chaves publicadas são corrigidos imediatamente com uma nota de transparência indicando o que foi alterado.</p>
`;

export default function EditorialPolicyPage() {
  return (
    <PolicyView
      title="Política Editorial"
      subtitle="O padrão de excelência e transparência da FFC."
      content={CONTENT}
    />
  );
}
