import Box from '@mui/material/Box';

import {
  Clause,
  SectionTitle,
  DocumentTitle,
  DigitalSignature,
} from 'src/components/abnt-document';

// ----------------------------------------------------------------------

export function ContratoStaffContent() {
  return (
    <>
      <DocumentTitle>
        CONTRATO DE PRESTAÇÃO DE SERVIÇOS OPERACIONAIS E SUPORTE (STAFF)
      </DocumentTitle>

      <SectionTitle>CAPÍTULO I: DAS PARTES E DO OBJETO</SectionTitle>
      <Clause text="1.1. CONTRATANTE: A entidade promotora FINAL FIGHT COMBAT, doravante denominada ORGANIZADORA." />
      <Clause text="1.2. CONTRATADO: A pessoa física prestadora de serviço devidamente qualificada e cadastrada no banco de dados do aplicativo oficial, doravante denominada STAFF." />
      <Clause text="1.3. OBJETO: O presente instrumento regula a prestação de serviços autônomos e temporários de suporte operacional, logística, montagem, atendimento ou segurança durante a etapa específica do evento selecionada no ato do aceite digital." />

      <SectionTitle>CAPÍTULO II: DA NATUREZA CIVIL E AUSÊNCIA DE VÍNCULO EMPREGATÍCIO</SectionTitle>
      <Clause text="2.1. RELAÇÃO CIVIL AUTÔNOMA: Este contrato possui natureza estritamente civil, regendo-se pelos artigos 593 e seguintes do Código Civil Brasileiro. A prestação de serviços dar-se-á em caráter eventual, autônomo e sem qualquer exclusividade." />
      <Clause text="2.2. INEXISTÊNCIA DE VÍNCULO TRABALHISTA: Fica expressamente estabelecido que este pacto não gera vínculo empregatício de qualquer natureza (CLT), dada a ausência dos requisitos de habitualidade, subordinação jurídica e dependência econômica. O STAFF é inteiramente responsável por suas obrigações previdenciárias e fiscais." />

      <SectionTitle>CAPÍTULO III: DA VINCULAÇÃO REGULAMENTAR OBRIGATÓRIA</SectionTitle>
      <Clause text="3.1. SUBORDINAÇÃO OPERACIONAL: O STAFF declara ter plena ciência e obriga-se a cumprir integralmente o Cronograma Geral da Etapa, o Plano Médico e as diretrizes organizacionais do FFC." />
      <Clause text="3.2. ATUALIZAÇÃO VIA PLATAFORMA: O contratado reconhece que a dinâmica do evento exige ajustes logísticos e horários de última hora. Por isso, compromete-se a seguir os manuais de campo e horários operacionais que são geridos de forma autônoma pela ORGANIZADORA e encontram-se permanentemente atualizados na aba de Documentos do aplicativo oficial FFC." />

      <SectionTitle>CAPÍTULO IV: DAS OBRIGAÇÕES E CONDUTA DO STAFF</SectionTitle>
      <Clause text="4.1. PONTUALIDADE MARCIAL: O STAFF obriga-se a apresentar-se no local do evento rigorosamente nos horários fixados pelo cronograma digital, sob pena de rescisão contratual imediata por quebra de protocolo." />
      <Clause text="4.2. IDENTIFICAÇÃO E VESTIMENTA: É obrigatório o uso contínuo da camisa oficial de Staff e do crachá/QR Code de identificação fornecidos pela organização durante todo o período de atividade na arena." />
      <Clause text="4.3. POSTURA E NEUTRALIDADE: O contratado deve agir com urbanidade, presteza e absoluto profissionalismo. É terminantemente proibido manifestar torcida, colher autógrafos, tietar atletas no complexo ou assediar membros da arbitragem e do público geral." />

      <SectionTitle>CAPÍTULO V: DA REMUNERAÇÃO, DIÁRIAS E EMISSÃO FISCAL</SectionTitle>
      <Clause text="5.1. PREÇO E DIÁRIA: Como contraprestação pelos serviços efetivamente prestados, o STAFF fará jus ao valor fixado no ato da contratação por diária ou período trabalhado." />
      <Clause text="5.2. LIQUIDAÇÃO VIA APLICATIVO: O processamento do pagamento será realizado diretamente na aba 'Carteira' do perfil logado do STAFF no aplicativo FFC, obedecendo aos prazos contábeis da organização." />
      <Clause text="5.3. CONDICIONAMENTO FISCAL: Conforme as regras de compliance contábil, a liberação dos valores na carteira digital fica estritamente condicionada à emissão e envio de documento fiscal válido (Recibo de Pagamento de Autônomo - RPA ou Nota Fiscal de MEI/PJ) por parte do prestador através do sistema." />

      <SectionTitle>CAPÍTULO VI: DA CONFIDENCIALIDADE E PROTEÇÃO DE DADOS (LGPD)</SectionTitle>
      <Clause text="6.1. SIGILO PROFISSIONAL: O STAFF compromete-se a manter sigilo absoluto sobre estratégias, informações internas de bastidores, dados de chaves de lutas não publicadas e mecânicas de software do aplicativo FFC que venha a ter acesso em razão do serviço." />
      <Clause text="6.2. SEGURANÇA DE DADOS: O tratamento de qualquer dado de atletas ou público visualizado nas telas de controle deverá seguir rigidamente a Lei Geral de Proteção de Dados (LGPD), sendo vedado extrair cópias, fotografar telas ou repassar informações a terceiros." />

      <SectionTitle>CAPÍTULO VII: DA RESCISÃO POR JUSTA CAUSA E PENALIDADES</SectionTitle>
      <Clause text="7.1. RESCISÃO IMEDIATA: O descumprimento de qualquer obrigação, insubordinação administrativa, faltas injustificadas, abandono do posto antes do encerramento do card ou agressões físicas/verbais ensejarão a rescisão imediata por justa causa deste contrato." />
      <Clause text="7.2. SANÇÃO SISTÊMICA: A rescisão motivada por má conduta acarretará o bloqueio eletrônico instantâneo do QR Code de acesso à arena e a exclusão do prestador do banco de dados do aplicativo para contratações em eventos futuros." />

      <SectionTitle>CAPÍTULO VIII: DO FORO DE ELEIÇÃO</SectionTitle>
      <Clause text="8.1. ARBITRAGEM EXTRAJUDICIAL: As partes elegem a Câmara de Arbitragem Legal e Extrajudicial indicada no portal corporativo do FFC para dirimir qualquer dúvida ou litígio emergente deste contrato, com renúncia expressa a qualquer outro foro, por mais privilegiado que seja." />

      <SectionTitle>ASSINATURAS E ACEITE DIGITAL</SectionTitle>
      <Box
        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3, my: 3 }}
      >
        <DigitalSignature
          title="CONTRATADA (STAFF)"
          name="Aceite eletrônico via aplicativo"
          color="info"
        />
        <DigitalSignature
          title="CONTRATANTE (FFC)"
          name="FINAL FIGHT COMBAT LTDA"
          color="success"
        />
      </Box>
    </>
  );
}
