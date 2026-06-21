import { Clause, ABNTText, SectionTitle, DocumentTitle, DigitalSignature } from 'src/components/abnt-document';

// ----------------------------------------------------------------------

export function TermoVoluntarioContent() {
  return (
    <>
      <DocumentTitle>TERMO DE ADESÃO AO TRABALHO VOLUNTÁRIO</DocumentTitle>

      <SectionTitle>CAPÍTULO I: DO OBJETO E DA NATUREZA JURÍDICA</SectionTitle>
      <Clause text="1.1. FUNDAMENTAÇÃO LEGAL: O presente Termo de Adesão rege-se estritamente pelas disposições da Lei Federal nº 9.608, de 18 de fevereiro de 1998 (Lei do Voluntariado)." />
      <Clause text="1.2. ESCOPO DA COLABORAÇÃO: O Voluntário prestará serviços de apoio logístico, operacional, de atendimento ao público, suporte de mídia ou infraestrutura durante as etapas do FFC, conforme designação da comissão organizadora." />
      <Clause text="1.3. CARÁTER GRATUITO: A atividade voluntária é exercida por livre e espontânea vontade, motivada por espírito cívico, desportivo e de cooperação social, sendo realizada de forma totalmente gratuita e não remunerada." />

      <SectionTitle>CAPÍTULO II: DA ABSOLUTA AUSÊNCIA DE VÍNCULO EMPREGATÍCIO</SectionTitle>
      <Clause text="2.1. INEXISTÊNCIA DE RELAÇÃO DE TRABALHO: Conforme o artigo 1º, parágrafo único da Lei nº 9.608/98, o trabalho voluntário não gera vínculo empregatício de qualquer natureza, nem obrigação de natureza trabalhista, previdenciária, securitária ou afins com a Organizadora FFC." />
      <Clause text="2.2. SEM CONTRAPRESTAÇÃO FINANCEIRA: O Voluntário declara ciência de que não fará jus a salários, gratificações, horas extras, adicionais de qualquer espécie, férias ou décimo terceiro salário, não podendo pleitear tais verbas em nenhuma instância administrativa ou judicial." />

      <SectionTitle>CAPÍTULO III: DAS DESPESAS, RESSARCIMENTOS E BENEFÍCIOS</SectionTitle>
      <Clause text="3.1. REEMBOLSO DE DESPESAS: Nos termos da lei, as despesas expressamente autorizadas por escrito pela Organizadora e comprovadamente realizadas pelo Voluntário para o desempenho das atividades (como transporte e alimentação fora do padrão do evento) serão ressarcidas." />
      <Clause text="3.2. BENEFÍCIOS DE ARENA: Para garantir a boa-fé e o conforto da equipe de apoio durante a jornada de trabalho na etapa, o FFC fornecerá diretamente:" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.2.1.</strong> Alimentação/Ajuda de custo nutricional nos dias oficiais de evento;
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.2.2.</strong> Uniforme exclusivo de Staff/Voluntário (camiseta identificadora);
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.2.3.</strong> Seguro de acidentes pessoais coletivo por período de atuação na arena.
      </ABNTText>

      <SectionTitle>CAPÍTULO IV: DA VINCULAÇÃO REGULAMENTAR E ADEQUAÇÃO TÉCNICA</SectionTitle>
      <Clause text="4.1. SUBORDINAÇÃO ÀS DIRETRIZES DO APP: O Voluntário obriga-se a cumprir rigorosamente as normas disciplinares, o código de ética e os protocols contidos no Regulamento Geral, no Cronograma da Etapa e nas orientações de campo do FFC." />
      <Clause text="4.2. CONEXÃO REGULAMENTAR ATIVA: O colaborador declara estar ciente de que as diretrizes técnicas e os horários operacionais do evento são geridos de forma autônoma pela Organizadora e encontram-se permanentemente atualizados no Portal de Documentos do aplicativo oficial FFC, comprometendo-se a segui-los fielmente conforme as atualizações sistêmicas do card." />

      <SectionTitle>CAPÍTULO V: DOS DEVERES, ÉTICA E CONFIDENCIALIDADE</SectionTitle>
      <Clause text="5.1. ZELO E URBANIDADE: O Voluntário compromete-se a desempenhar suas atribuições com assiduidade, responsabilidade e urbanidade, tratando atletas, técnicos, árbitros e o público geral com o máximo respeito e espírito marcial." />
      <Clause text="5.2. SIGILO DE BASTIDORES: É vedada a divulgação não autorizada de informações internas, dados cadastrais de atletas visualizados nas telas de controle, chaves de lutas antes de sua publicação oficial ou qualquer segredo comercial do aplicativo FFC obtido em razão da colaboração." />
      <Clause text="5.3. USO DE IMAGEM: O Voluntário autoriza, a título gratuito, o uso de sua imagem e voz captadas durante a prestação dos serviços para inclusão em materiais promocionais, documentários ou transmissões oficiais do FFC." />

      <SectionTitle>CAPÍTULO VI: DO DESLIGAMENTO E RESCISÃO</SectionTitle>
      <Clause text="6.1. DISTRATO UNILATERAL IMOTIVADO: Por se tratar de um ato de cooperação voluntária, este termo poderá ser rescindido a qualquer momento por iniciativa de qualquer uma das Partes (seja pelo FFC ou pelo Voluntário), sem a necessidade de aviso prévio, justificativa ou pagamento de qualquer indenização." />
      <Clause text="6.2. DESLIGAMENTO POR FALTA DISCIPLINAR: O descumprimento das regras de conduta, atrasos injustificados, uso de vestimentas proibidas ou insubordinação administrativa ensejará o desligamento imediato do voluntário, com o cancelamento eletrônico de suas credenciais e bloqueio de acessos no aplicativo FFC." />

      <SectionTitle>ASSINATURAS E ACEITE DIGITAL</SectionTitle>
      <DigitalSignature
        title="ASSINATURA DIGITAL - VOLUNTÁRIO"
        name="Aceite eletrônico autenticado via Plataforma FFC"
        color="info"
      />
    </>
  );
}
