import {
  Clause,
  SectionTitle,
  DocumentTitle,
  DigitalSignature,
} from 'src/components/abnt-document';

// ----------------------------------------------------------------------

export function UsoDeImagemContent() {
  return (
    <>
      <DocumentTitle>TERMO DE CESSÃO DE DIREITO DE IMAGEM, VOZ E ARENA</DocumentTitle>

      <SectionTitle>CAPÍTULO I: DO ESCOPO E OBJETO DA CESSÃO</SectionTitle>
      <Clause text="1.1. CONSENTIMENTO GERAL E AMPLO: A inscrição e participação de qualquer integrante no evento (sejam atletas, treinadores, árbitros, equipe de trabalho ou estafe) está expressamente condicionada à ciência e ao aceite irrestrito deste Termo de Autorização para o Tratamento de Dados Pessoais, Direito de Imagem e Direito de Obra." />
      <Clause text="1.2. CAPTAÇÃO DE SINAIS: O aderente outorga à Organizadora do FFC o direito exclusivo, gratuito e universal de captar, fixar, gravar, reproduzir e arquivar sua imagem corpórea, fisionomia, voz, nome desportivo e interações técnicas durante todas as fases do evento (incluindo treinos, pesagens, bastidores, combates e cerimônias de pódio)." />
      <Clause text="1.3. FINALIDADE PROMOCIONAL: Os registros fotográficos, fonográficos e videográficos obtidos serão utilizados para a promoção, difusão e publicidade do evento atual ou de edições e competições que venham a ocorrer futuramente no ecossistema FFC." />

      <SectionTitle>CAPÍTULO II: DOS MEIOS DE TRANSMISSÃO E ATIVOS DIGITAIS</SectionTitle>
      <Clause text="2.1. VEICULAÇÃO MULTIPLATAFORMA: A autorização estende-se a todos os meios de comunicação conhecidos, incluindo, mas não se limitando a: transmissões de televisão aberta ou fechada, coberturas jornalísticas por imprensa escrita ou digital, vídeos promocionais em redes sociais e transmissões oficiais por streaming ou pay-per-view." />
      <Clause text="2.2. ELEMENTOS GRÁFICOS DE ARENA: O atleta e a sua agremiação concordam com a inserção de seus nomes, logomarcas, dados biométricos e estatísticas desportivas em elementos gráficos de transmissão (como lower thirds, placares digitais e artes de chaves eletrônicas) veiculados na tela do aplicativo ou em mídias parceiras." />
      <Clause text="2.3. EXCLUSÃO POR RECUSA: Caso o competidor discorde de ceder seus direitos de imagem e obra para fins de promoção e registro do evento, deverá manifestar sua recusa formal no ato da inscrição, ciente de que estará sumariamente excluído da competição por inviabilidade técnica de transmissão e registro fotográfico das chaves." />

      <SectionTitle>CAPÍTULO III: DA CONFORMIDADE LEGAL (LGPD E CÓDIGO CIVIL)</SectionTitle>
      <Clause text="3.1. FUNDAMENTAÇÃO JURÍDICA: Este documento foi estruturado em estrita conformidade com as garantias do artigo 5º, incisos X e XXVII da Constituição Federal de 1988, com o artigo 20, caput do Código Civil Brasileiro (Lei nº 10.406/2002) e segue rigorosamente os preceitos protetivos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD)." />
      <Clause text="3.2. TRATAMENTO DE DADOS SENSÍVEIS: Quaisquer dados pessoais, biométricos ou sensíveis porventura coletados durante o cadastramento ou tratamento de mídia serão armazenados e protegidos em conformidade com as diretrizes de segurança da informação previstas na LGPD." />
      <Clause text="3.3. GRATUIDADE ABSOLUTA: A presente cessão de direitos de imagem e arena é realizada em caráter gratuito, definitivo, irrevogável e irretratável, declarando o aderente que não fará jus a qualquer tipo de remuneração, indenização, royalties ou repasse financeiro retroativo em razão da exibição de sua imagem nas transmissões oficiais ou peças publicitárias do FFC." />

      <SectionTitle>CAPÍTULO IV: DA VALIDADE SISTÊMICA E ASSINATURA ELETRÔNICA</SectionTitle>
      <Clause text="4.1. ACEITE AUTOMATIZADO: A validação deste termo ocorre por meio do clique de aceite digital diretamente na plataforma mobile do FFC, vinculando sistemicamente o perfil do usuário e gerando a chave de autenticação digital criptografada no banco de dados." />
      <Clause text="4.2. PROTEÇÃO DE MENORES: Em caso de atletas menores de 18 (dezoito) anos, o aceite digital deste termo deverá ser obrigatoriamente referendado pelo perfil cadastrado de seu pai, mãe ou responsável legal, sob pena de bloqueio sistêmico imediato da inscrição." />

      <SectionTitle>ASSINATURAS E ACEITE DIGITAL</SectionTitle>
      <DigitalSignature
        title="ASSINATURA DIGITAL - DECLARANTE"
        name="Aceite eletrônico autenticado via Plataforma FFC"
        color="info"
      />
    </>
  );
}
