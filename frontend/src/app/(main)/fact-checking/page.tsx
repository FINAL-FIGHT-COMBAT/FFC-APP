import { constructMetadata } from 'src/lib/seo/metadata';

import { PolicyView } from 'src/sections/legal/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Verificação de Fatos | FFC',
  description: 'Saiba como validamos informações esportivas, resultados de combates e rankings.',
});

const CONTENT = `
  <h2>1. Verificação de Resultados</h2>
  <p>Os resultados das lutas e pontuações do ranking são validados diretamente pela mesa de arbitragem oficial e publicados após homologação técnica.</p>
  
  <h2>2. Fontes Primárias</h2>
  <p>Priorizamos o uso de súmulas oficiais assinadas pelos árbitros das lutas, atestados médicos homologados e gravações em vídeo de alta definição para auditoria esportiva.</p>
  
  <h2>3. Processo de Revisão</h2>
  <p>Cada contestação ou atualização de ranking passa por uma revisão da comissão técnica e conselho de arbitragem do FFC antes de qualquer alteração.</p>
`;

export default function FactCheckingPage() {
  return (
    <PolicyView
      title="Verificação de Fatos"
      subtitle="Como garantimos a veracidade absoluta dos nossos dados."
      content={CONTENT}
    />
  );
}
