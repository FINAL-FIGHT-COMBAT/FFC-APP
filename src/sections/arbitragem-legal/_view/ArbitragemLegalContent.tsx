import { Clause, SectionTitle, DocumentTitle, DigitalSignature } from 'src/components/abnt-document';

// ----------------------------------------------------------------------

export function ArbitragemLegalContent() {
  return (
    <>
      <DocumentTitle>CONVENÇÃO DE ARBITRAGEM E RESOLUÇÃO EXTRAJUDICIAL DE DISPUTAS</DocumentTitle>

      <SectionTitle>CAPÍTULO I: DO OBJETO E DA CLÁUSULA COMPROMISSÓRIA ESPORTIVA</SectionTitle>
      <Clause text="1.1. RENÚNCIA À JUSTIÇA COMUM: Ao ingressar no ecossistema do Final Fight Combat (FFC) — seja como atleta, treinador, agremiação afiliada, patrocinador, staff ou prestador de serviço —, o aderente declara ciência e renuncia expressamente ao direito de submeter quaisquer litígios decorrentes do evento à Jurisdição Estatal (Justiça Comum)." />
      <Clause text="1.2. OPÇÃO PELA VIA ARBITRAL: Todas as controvérsias, conflitos operacionais, disputas financeiras ou contratuais emergentes das atividades do FFC serão resolvidas de forma definitiva por meio da Arbitragem Extrajudicial, nos termos da Lei Brasileira de Arbitragem (Lei nº 9.307/1996) e em conformidade com as diretrizes de autonomia da justiça desportiva previstas na Lei Geral do Esporte (Lei nº 14.597/2023)." />

      <SectionTitle>CAPÍTULO II: DAS MATÉRIAS ELEGÍVEIS À ARBITRAGEM</SectionTitle>
      <Clause text="2.1. CONFLITOS CONTRATUAIS E FINANCEIROS: São passíveis de procedimento arbitral as disputas que envolvam o repasse de bolsas de luta (Show Money ou Win Bonus), aplicação de retenções por quebra de peso, multas rescisórias de contratos de patrocínio ou inadimplência de cotas comerciais." />
      <Clause text="2.2. LIMITAÇÃO TÉCNICO-DESPORTIVA: Questões estritamente técnicas ocorridas sobre o tatame (como pontuação de lutas, aplicação de faltas, desclassificações ou decisões de VAR/Challenge) são de autoridade soberana do Corpo de Arbitragem e da Mesa Diretora do FFC. Tais matérias só serão admitidas na esfera arbitral legal caso seja comprovada fraude manifesta, corrupção ou após esgotados todos os prazos e recursos administrativos previstos no Regulamento Geral (prazo de 7 dias úteis)." />
      <Clause text="2.3. DANOS E RESPONSABILIDADE CIVIL: Demandas que envolvam reparações por danos materiais, quebras de sigilo industrial ou infrações de propriedade intelectual relacionadas ao uso da marca FFC e do aplicativo." />

      <SectionTitle>CAPÍTULO III: DO PROCEDIMENTO E ESCOLHA DA CÂMARA ARBITRAL</SectionTitle>
      <Clause text="3.1. INDICAÇÃO DA CÂMARA: Os litígios serão submetidos, julgados e dirimidos por árbitro único ou tribunal arbitral vinculado à Câmara de Arbitragem Legal e Extrajudicial formalmente indicada e homologada no portal corporativo do FFC no momento da abertura do chamado." />
      <Clause text="3.2. RITO FAST-TRACK (CELERIDADE): Em razão do dinamismo do calendário esportivo, o procedimento arbitral adotará o rito sumário acelerado. A Câmara Arbitral deverá proferir a sentença final no prazo máximo de 30 (trinta) dias corridos, contados a partir da data de instituição da arbitragem." />
      <Clause text="3.3. CUSTOS E HONORÁRIOS: As custas administrativas da Câmara e os honorários dos árbitros serão inicialmente adiantados pela parte requerente. A decisão final do árbitro fixará a responsabilidade pelo pagamento das custas, determinando que a parte vencida reembolse integralmente a parte vencedora pelos gastos incorridos." />

      <SectionTitle>CAPÍTULO IV: DO CARÁTER DEFINITIVO E SIGILO DA SENTENÇA</SectionTitle>
      <Clause text="4.1. FORÇA DE TÍTULO EXECUTIVO: A sentença arbitral possui eficácia equivalente a uma sentença judicial transitada em julgado. Nos termos do artigo 31 da Lei nº 9.307/1996, ela constitui título executivo judicial, sendo juridicamente vinculante para todas as partes e passível de execução direta em caso de descumprimento." />
      <Clause text="4.2. IRRECORRIBILIDADE: Da decisão do árbitro ou tribunal arbitral não caberá qualquer recurso ao Poder Judiciário, ressalvadas exclusivamente as raras hipóteses de nulidade expressamente previstas em lei." />
      <Clause text="4.3. CLÁUSULA DE CONFIDENCIALIDADE: Todo o procedimento arbitral, depoimentos, provas documentais e a sentença final correrão sob o mais estrito segredo de justiça e sigilo comercial. A divulgação não autorizada de informações do processo por qualquer das partes ensejará multa penal compensatória e o banimento imediato do infrator do ecossistema FFC." />

      <SectionTitle>CAPÍTULO V: DA VALIDADE E ASSINATURA ELETRÔNICA</SectionTitle>
      <Clause text="5.1. CONSENTIMENTO SISTÊMICO: A aceitação desta Convenção de Arbitragem ocorre de forma eletrônica por meio do clique de anuência obrigatório no aplicativo FFC, integrando de pleno direito todos os contratos de atletas, termos de voluntários, cadastros de academias e contratos com patrocinadores." />
      <Clause text="5.2. AUTONOMIA DA CLÁUSULA: Esta cláusula compromissória possui autonomia jurídica em relação aos demais regulamentos do portal. O reconhecimento de eventual nulidade de um artigo específico de luta ou de pesagem não afetará a validade desta Convenção de Arbitragem." />

      <SectionTitle>ASSINATURAS E ACEITE DIGITAL</SectionTitle>
      <DigitalSignature
        title="ASSINATURA DIGITAL - ADERENTE"
        name="Aceite eletrônico autenticado via Plataforma FFC"
        color="info"
      />
    </>
  );
}
