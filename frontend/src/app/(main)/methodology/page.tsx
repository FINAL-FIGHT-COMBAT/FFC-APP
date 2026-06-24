import { constructMetadata } from 'src/lib/seo/metadata';

import { PolicyView } from 'src/sections/legal/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Metodologia | FFC',
  description:
    'Conheça os métodos técnicos e esportivos que fundamentam nosso ranking e sistema de combate.',
});

const CONTENT = `
  <h2>1. Ranking de Atletas</h2>
  <p>Nossa metodologia de classificação pontua atletas com base no histórico recente de vitórias, importância do card e nível técnico do oponente.</p>
  
  <h2>2. Algoritmos de Casamento de Lutas</h2>
  <p>Utilizamos critérios objetivos de pareamento por peso, experiência e performance recente para garantir combates equilibrados e competitivos.</p>
  
  <h2>3. Transparência de Dados</h2>
  <p>Todos os dados de pesagem, pontuações dos rounds e súmulas são catalogados digitalmente e disponibilizados publicamente para consulta de corners, atletas e torcedores.</p>
`;

export default function MethodologyPage() {
  return (
    <PolicyView
      title="Metodologia"
      subtitle="A base técnica e esportiva do ecossistema FFC."
      content={CONTENT}
    />
  );
}
