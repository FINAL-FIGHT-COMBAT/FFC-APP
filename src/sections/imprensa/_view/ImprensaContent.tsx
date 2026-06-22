import {
  Clause,
  SectionTitle,
  DocumentTitle,
  DigitalSignature,
} from 'src/components/abnt-document';

// ----------------------------------------------------------------------

export function ImprensaContent() {
  return (
    <>
      <DocumentTitle>MANUAL DE DIRETRIZES, CONDUTA E CREDENCIAMENTO DE IMPRENSA</DocumentTitle>

      <SectionTitle>CAPÍTULO I: DO ESCOPO E ELEGIBILIDADE DO CREDENCIAMENTO</SectionTitle>
      <Clause text="1.1. CARÁTER RESTRITO E DISCRICIONÁRIO: O credenciamento de imprensa para as etapas do FFC destina-se exclusivamente a profissionais de comunicação em efetivo exercício profissional (jornalistas, fotógrafos, cinegrafistas, criadores de conteúdo homologados e assessores de imprensa das academias afiliadas). A aprovação das credenciais é um ato discricionário da Organizadora e não gera direito adquirido." />
      <Clause text="1.2. MUTABILIDADE DAS REGRAS DE MÍDIA: Devido a contratos de exclusividade de transmissão, limitações físicas de espaço nas arenas e leis de segurança, este regulamento de imprensa não é definitivo. O FFC reserva-se o direito de alterar as zonas de acesso, cotas de fotografia e regras de captação sempre que necessário, visando o cumprimento da legislação brasileira e a boa-fé. As atualizações entram em vigor imediatamente após sua publicação neste portal." />
      <Clause text="1.3. SOLICITAÇÃO VIA APP: O pedido de credenciamento deve ser realizado individualmente pela aba 'Imprensa' no aplicativo oficial FFC, com antecedência mínima de 10 dias úteis antes da etapa. Caso aprovado, o profissional receberá um QR Code exclusivo que servirá como sua credencial digital de acesso à arena." />

      <SectionTitle>
        CAPÍTULO II: DAS REGRAS DE CAPTAÇÃO E DIREITOS AUTORAIS (COPYRIGHT)
      </SectionTitle>
      <Clause text="2.1. VETO ABSOLUTO A TRANSMISSÕES AO VIVO (LIVE STREAMING): É terminantemente proibida a transmissão ao vivo, em áudio ou vídeo, de qualquer combate, bastidores ou pesagem oficial por parte de profissionais credenciados em suas redes sociais pessoais ou canais de terceiros. A exclusividade de geração de imagens pertence ao sinal oficial de streaming do FFC." />
      <Clause text="2.2. LIMITAÇÃO DE CAPTAÇÃO DE VÍDEO: Cinegrafistas e jornalistas de veículos de imprensa estão autorizados a captar um tempo máximo acumulado de 60 segundos de imagens brutas (raw footage) por combate, estritamente para fins de reportagem jornalística e cobertura editorial pós-evento." />
      <Clause text="2.3. FOTOGRAFIA OFICIAL E USO DE FLASH: Fotógrafos credenciados devem atuar exclusivamente nas áreas delimitadas pela organização. É absolutamente proibido o uso de flash eletrônico direcionado ao tatame ou ao cage durante o transcorrer dos rounds, sob risco de atrapalhar a visão dos atletas e causar acidentes de combate." />

      <SectionTitle>CAPÍTULO III: DAS LIMITAÇÕES ESPACIAIS E ÁREAS DE TRABALHO</SectionTitle>
      <Clause text="3.1. ZONAMENTO DE CAMPO (FOP): A credencial de imprensa dá acesso estrito à Sala de Imprensa, Zona Mista de entrevistas e às cadeiras reservadas para a mídia no entorno do evento. A entrada na Área de Combate (FOP), área médica, vestiários e mesas de arbitragem é estritamente proibida." />
      <Clause text="3.2. MOVIMENTAÇÃO COORDENADA: Durante a realização das lutas e o anúncio dos vencedores, os fotógrafos e cinegrafistas devem permanecer em suas posições fixas designadas. Nenhuma movimentação que obstrua a linha de visão das câmeras da transmissão oficial ou dos árbitros de vídeo (VAR) será tolerada." />
      <Clause text="3.3. ACESSO A ASSESSORES DE IMPRENSA: Os assessores vinculados às Academias Afiliadas terão acesso liberado apenas à Zona Mista para coordenar a coleta de depoimentos de seus respectivos atletas após os combates, não possuindo direito a assento na beira do tatame." />

      <SectionTitle>CAPÍTULO IV: CÓDIGO DE VESTIMENTA (DRESS CODE) E EQUIPAMENTOS</SectionTitle>
      <Clause text="4.1. IDENTIFICAÇÃO VISUAL CONTÍNUA: É obrigatório o uso ininterrupto do colete oficial de imprensa fornecido pela organização sobre a roupa do profissional, além da exibição da credencial física ou digital no crachá sempre que solicitado pela segurança." />
      <Clause text="4.2. CÓDIGO DE VESTIMENTA (MEDIA DRESS CODE): Por se tratar de um evento televisionado e corporativo, não será permitida a permanência de profissionais de mídia vestindo camisetas regatas, shorts/bermudas de praia, chinelos de dedo, camisas de clubes de futebol ou trajes com estampas de cunho político ou ofensivo. Exige-se calça comprida fechada e calçado fechado." />
      <Clause text="4.3. RESPONSABILIDADE POR EQUIPAMENTOS: A Organização FFC não se responsabiliza por qualquer dano, furto ou extravio de equipamentos fotográficos, lentes, computadores ou gravadores trazidos pelos profissionais. O tráfego e a salvaguarda do material técnico são de responsabilidade civil e exclusiva de seus portadores." />

      <SectionTitle>CAPÍTULO V: DO DESCREDENCIAMENTO E SANÇÕES ADMINISTRATIVAS</SectionTitle>
      <Clause text="5.1. QUEBRA DE PROTOCOLO: O descumprimento de qualquer item deste manual, ofensas direcionadas ao staff, atletas ou árbitros, ou a invasão de áreas restritas resultará na revogação sumária e eletrônica do QR Code de acesso." />
      <Clause text="5.2. EFEITO SISTÊMICO DE BANIMENTO: O profissional descredenciado será imediatamente escoltado para fora do complexo pelos agentes de segurança e terá seu perfil bloqueado no banco de dados do aplicativo do FFC, ficando permanentemente impedido de solicitar novas credenciais para etapas futuras do calendário nacional." />

      <SectionTitle>ASSINATURAS E ACEITE DIGITAL</SectionTitle>
      <DigitalSignature
        title="ASSINATURA DIGITAL - PROFISSIONAL DE IMPRENSA"
        name="Aceite eletrônico autenticado via Plataforma FFC"
        color="info"
      />
    </>
  );
}
