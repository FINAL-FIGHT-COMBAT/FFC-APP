import {
  Clause,
  SectionTitle,
  DocumentTitle,
  DigitalSignature,
} from 'src/components/abnt-document';

// ----------------------------------------------------------------------

export function TermoDeRiscoContent() {
  return (
    <>
      <DocumentTitle>TERMO DE CONSENTIMENTO DE RISCO E ASSUNÇÃO DE LESÕES ESPORTIVAS</DocumentTitle>
      <DocumentTitle>Documento de Aceite Obrigatório para Inscrição e Participação</DocumentTitle>

      <SectionTitle>1. DO CONHECIMENTO E ASSUNÇÃO DOS RISCOS INERENTES</SectionTitle>
      <Clause text="1.1. NATUREZA DA MODALIDADE: O atleta (e seu responsável legal, quando menor de idade) declara ter pleno conhecimento de que o FFC Grappling é um esporte de combate de alto impacto e intensidade física." />
      <Clause text="1.2. RISCOS DECLARADOS: Fica expressamente reconhecido que a prática de quedas, imobilizações e finalizações traz o risco inerente de lesões físicas, incluindo, mas não se limitando a: contusões, estiramentos, fraturas, luxações, lesões articulares, concussões cerebrais, traumas diversos e, em casos extremos, invalidez ou morte." />
      <Clause text="1.3. ASSUNÇÃO VOLUNTÁRIA: Ao clicar em 'Aceito' no aplicativo FFC, o competidor assume, de forma livre, voluntária e consciente, todos os riscos de danos físicos e mentais decorrentes de sua participação nos combates, pesagens e treinos na arena." />

      <SectionTitle>2. DA ISENÇÃO DE RESPONSABILIDADE DA ORGANIZADORA</SectionTitle>
      <Clause text="2.1. EXCLUSÃO DE RESPONSABILIDADE: Em caráter irrevogável, irretratável e intransferível, a Organizadora do FFC, seus patrocinadores, diretores, parceiros e a equipe de arbitragem ficam totalmente isentos de qualquer responsabilidade civil ou subsidiária por danos físicos, mentais ou patrimoniais sofridos pelo atleta durante o evento." />
      <Clause text="2.2. RENÚNCIA DE PLEITOS: O atleta renuncia expressamente ao direito de pleitear indenizações, pensões ou reparações financeiras da Organização FFC decorrentes de acidentes de combate normais da dinâmica das artes marciais." />

      <SectionTitle>3. DA CLÁUSULA DE ADAPTABILIDADE LEGAL E SEGURANÇA AUTOMÁTICA</SectionTitle>
      <Clause text="3.1. RECEPÇÃO LEGISLATIVA: Este termo possui natureza jurídica evolutiva. Fica estabelecido que se novas regras de segurança, diretrizes médicas, decretos federais/estaduais ou exigências de combate forem impostos por lei ou por órgãos reguladores do esporte, este documento se adaptará de forma automática e imediata às novas exigências legais." />
      <Clause text="3.2. INEXISTÊNCIA DE NOVAS ASSINATURAS: O surgimento de novas obrigações de segurança impostas por lei integrará este contrato de pleno direito, não exigindo uma nova assinatura ou o reenvio do termo pelo aplicativo. O consentimento original do atleta cobrirá o cumprimento de toda e qualquer nova norma de proteção à integridade física adotada de última hora pela Organização para o cumprimento da lei." />

      <SectionTitle>4. DA AUTORIZAÇÃO PARA ATENDIMENTO MÉDICO DE EMERGÊNCIA</SectionTitle>
      <Clause text="4.1. CONSENTIMENTO DE SOCORRO: Caso o atleta sofro qualquer lesão ou perda de sentidos durante o combate, o córner e o competidor autorizam a imediata intervenção da equipe médica oficial e dos socorristas do evento." />
      <Clause text="4.2. ENCAMINHAMENTO HOSPITALAR: Se a junta médica do FFC decretar a necessidade de remoção por ambulância para ambiente hospitalar externo, a Organização fica autorizada a realizar o encaminhamento, cessando sua responsabilidade de custeio a partir do momento da entrega do atleta à equipe do hospital de apoio." />

      <SectionTitle>5. DA ASSINATURA ELETRÔNICA E EFICÁCIA JURÍDICA</SectionTitle>
      <Clause text="5.1. VALIDADE DIGITAL: As partes elegem o clique de aceite digital na plataforma mobile do FFC como assinatura eletrônica perfeitamente válida e vinculante para todos os efeitos da legislação brasileira." />
      <Clause text="5.2. EFICÁCIA DAS CHAVES: O aceite deste termo blinda as chaves de lutas do evento, impedindo que atletas eliminados ou lesionados busquem travar o andamento das seletivas ou do card principal na justiça comum ou extrajudicial." />

      <SectionTitle>ASSINATURAS E ACEITE DIGITAL</SectionTitle>
      <DigitalSignature
        title="ASSINATURA DIGITAL - ATLETA"
        name="Aceite eletrônico autenticado via Plataforma FFC"
        color="info"
      />
    </>
  );
}
