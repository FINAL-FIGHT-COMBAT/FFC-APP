import { Clause, SectionTitle, DocumentTitle } from 'src/components/abnt-document';

// ----------------------------------------------------------------------

export function AptidaoFisicaContent() {
  return (
    <>
      <DocumentTitle>DIRETRIZES DE APTIDÃO FÍSICA</DocumentTitle>
      <DocumentTitle>REQUISITOS MÉDICOS E MUTABILIDADE DE EXAMES</DocumentTitle>

      <SectionTitle>1. OBJETO E FINALIDADE</SectionTitle>
      <Clause text="1.1. GARANTIA DE INTEGRIDADE: Regulamentação do envio obrigatório de comprovações médicas que atestem a plena capacidade física e mental do atleta para competir em modalidades de combate de alto impacto." />
      <Clause text="1.2. ACESSO AO COMBATE: O envio e a aprovação destes documentos são pré-requisitos obrigatórios para a liberação do QRCode de pesagem e participação no card." />

      <SectionTitle>2. DA LISTA DINÂMICA DE EXAMES EXIGIDOS (CLÁUSULA DE MUTABILIDADE)</SectionTitle>
      <Clause text="2.1. VARIAÇÃO POR ETAPA: O rol de exames médicos complementares e laboratoriais (ex: exames de sangue, sorologia, cardiológicos ou neurológicos) não é estático e poderá variar de acordo com as exigências da cidade-sede, da gravidade do card ou de novas imporções da legislação desportiva." />
      <Clause text="2.2. VINCULAÇÃO AO OUTLINE: A lista exata de exames obrigatórios para cada evento será publicada de forma autônoma no 'Outline/Edital Específico da Etapa' dentro do aplicativo FFC." />
      <Clause text="2.3. DIREITO DE ATUALIZAÇÃO: O FFC reserva-se o direito de alterar, expandir ou adicionar novos exames obrigatórios para as etapas subsequentes, competindo ao atleta e à sua academia consultarem periodicamente as atualizações médicas na plataforma antes de efetuarem novas inscrições." />

      <SectionTitle>3. PRAZOS E ENVIO SISTÊMICO VIA APLICATIVO</SectionTitle>
      <Clause text="3.1. UPLOAD DIGITAL: Todos os atestados e laudos laboratoriais devem ser digitalizados e enviados exclusivamente pela aba de upload no perfil do atleta dentro do app FFC." />
      <Clause text="3.2. JANELA DE ANTECEDÊNCIA: O prazo limite para o envio dos documentos médicos encerra-se estritamente junto com o prazo final de inscrições da respectiva etapa, inviabilizando envios tardios na boca da balança." />

      <SectionTitle>4. TRIAGEM, HOMOLOGAÇÃO E RECUSA TÉCNICA</SectionTitle>
      <Clause text="4.1. AUDITORIA MÉDICA: Os documentos enviados passarão por auditoria realizada pela junta médica oficial do FFC." />
      <Clause text="4.2. CRITÉRIOS DE REJEIÇÃO: Serão sumariamente recusados atestados com rasuras, ausência de carimbo legível do médico com CRM ativo, exames com prazos de validade vencidos ou laudos que apresentem qualquer inconformidade técnica." />
      <Clause text="4.3. SOBERANIA DO MÉDICO DO EVENTO: O Médico-Chefe da etapa possui autoridade soberana para desclassificar e impedir a participação de qualquer atleta caso detecte alguma anomalia clínica na pesagem ou na triagem dermatológica de última hora, mesmo que o atestado digital tenha sido pré-aprovado pelo sistema." />

      <SectionTitle>5. DECLARAÇÃO DE VERACIDADE E SANÇÕES POR FRAUDE</SectionTitle>
      <Clause text="5.1. RESPONSABILIDADE CIVIL E PENAL: O atleta (e seu responsável legal, em caso de menores de idade) assume total responsabilidade civil e penal pela autenticidade dos documentos e assinaturas médicas enviadas." />
      <Clause text="5.2. PUNIÇÃO POR ADULTERAÇÃO: A constatação de qualquer adulteração, falsificação de laudos ou uso de carimbos médicos falsos resultará na desclassificação sumária e irreversível do atleta, banimento perpétuo do ecossistema FFC, cancelamento de bolsas e denúncia imediata às autoridades competentes (Ministério Público e Polícia Civil)." />

      <br />
      <br />
    </>
  );
}
