import Box from '@mui/material/Box';

import { Clause, ABNTText, SectionTitle, DocumentTitle, DigitalSignature } from 'src/components/abnt-document';

// ----------------------------------------------------------------------

export function ContratoAtletaSeletivaContent() {
  return (
    <>
      <DocumentTitle>CONTRATO DE PARTICIPAÇÃO DESPORTIVA – ATLETA DA SELETIVA ELIMINATÓRIA</DocumentTitle>

      <SectionTitle>CAPÍTULO I: DAS PARTES E DA NATUREZA JURÍDICA</SectionTitle>
      <Clause text="1.1. CONTRATANTE: A entidade promotora FINAL FIGHT COMBAT, doravante denominada ORGANIZADORA." />
      <Clause text="1.2. CONTRATADO: O competidor devidamente qualificado e identificado por meio de seu perfil ativo e assinatura digital no aplicativo oficial, doravante denominado ATLETA." />
      <Clause text="1.3. NATUREZA DO VÍNCULO: O presente instrumento possui natureza estritamente civil e desportiva, regido pela Lei Geral do Esporte (Lei nº 14.597/2023). Fica expressamente estabelecido que este pacto não gera vínculo empregatício de qualquer espécie (CLT), dada a total ausência de subordinação jurídica, habitualidade ou dependência econômica." />

      <SectionTitle>CAPÍTULO II: DA VINCULAÇÃO REGULAMENTAR OBRIGATÓRIA</SectionTitle>
      <Clause text="2.1. CIÊNCIA E ADESÃO: O ATLETA declara ter pleno conhecimento e obriga-se a cumprir integralmente o Regulamento Oficial de Lutas, o Guia de Pesagem, o Manual de Córner, o Guia Antidoping e o Plano Médico do FFC." />
      <Clause text="2.2. CONEXÃO SISTÊMICA: O ATLETA reconhece que tais regulamentos e diretrizes técnicas são geridos de forma autônoma pela ORGANIZADORA e encontram-se permanentemente atualizados e disponíveis no Portal de Documentos do aplicativo oficial FFC. O ATLETA aceita que sua participação em cada chave da seletiva fica estritamente condicionada ao cumprimento rigoroso das versões vigentes desses manuais no momento do combate." />

      <SectionTitle>CAPÍTULO III: DAS OBRIGAÇÕES DESPORTIVAS DO ATLETA</SectionTitle>
      <Clause text="3.1. RIGOR DE PESO E BALANÇA: O ATLETA obriga-se a apresentar-se para a pesagem oficial da etapa na janela horária estipulada no cronograma do app. O descumprimento do limite de peso da categoria ou a ausência na janela de pesagem resultará em desclassificação automática por W.O. via sistema." />
      <Clause text="3.2. AFERIÇÃO ALEATÓRIA (DAY-OF-FIGHT): Caso seja sorteado pelo algoritmo do aplicativo no dia dos combates, o ATLETA deve submeter-se à pesagem de controle em até 30 minutos após a notificação, tolerando-se um rebote hídrico máximo de 5% (cinco por cento) em relação ao limite original de sua categoria." />
      <Clause text="3.3. UNIFORME E DRESS CODE DE ARENA: O ATLETA compromete-se a combater utilizando vestuário em estrito compliance com as regras visuais da etapa (Kimono oficial higienizado para lutas de Gi; conjunto elástico/rashguard nas dimensões corretas para No-Gi). É proibida a exibição de patches ou marcas associadas a tabaco, extremismo político, conteúdo injurioso ou plataformas de apostas não regulamentadas." />
      <Clause text="3.4. MEDIA DAY OBRIGATÓRIO: O ATLETA obriga-se a comparecer às sessões de fotos oficiais, entrevistas pré-luta e pesagens cerimoniais quando convocado pela organização, portando o uniforme oficial de combate." />

      <SectionTitle>CAPÍTULO IV: DIREITOS FINANCEIROS, PREMIAÇÕES E EMISSÃO FISCAL</SectionTitle>
      <Clause text="4.1. TAXA DE INSCRIÇÃO: A validação da vaga do ATLETA na chave da seletiva eliminatória ocorre exclusivamente mediante a liquidação da taxa de inscrição através do gateway de pagamento do aplicativo FFC." />
      <Clause text="4.2. PREMIAÇÕES E BOLSAS DE ACESSO: O ATLETA disputará a premiação e as bolsas (Show Money ou Win Bonus) conforme a tabela financeira fixada especificamente para a etapa corrente dentro do app. A classificação na seletiva garante ao ATLETA o direito de acesso ao card principal/Grand Prix subsequente, conforme as regras de mérito desportivo." />
      <Clause text="4.3. LIQUIDAÇÃO E TRAVA FISCAL: Todos os repasses financeiros e pagamentos de prêmios serão creditados diretamente na aba 'Carteira' do perfil do ATLETA no aplicativo. Em estrito compliance com a legislação tributária brasileira, a liberação do saque dos valores fica 100% condicionada ao envio de documento fiscal válido (Nota Fiscal Eletrônica de MEI/PJ ou Recibo de Pagamento de Autônomo - RPA) emitido pelo ATLETA ou por sua academia afiliada representante." />

      <SectionTitle>CAPÍTULO V: DA CONDUTA DO CÓRNER E RESPONSABILIDADE SOLIDÁRIA</SectionTitle>
      <Clause text="5.1. VÍNCULO COM A DELEGAÇÃO: O ATLETA é civil e desportivamente responsável pela conduta dos técnicos e membros de equipe por ele credenciados na aba de Córner do aplicativo." />
      <Clause text="5.2. RESPONSABILIDADE SOLIDÁRIA: Atos de indisciplina, ofensas à arbitragem, invasão da área de segurança (FOP) ou agressões praticadas pelo córner do ATLETA gerarão punições diretas na súmula da luta. O acúmulo de cartões ou a aplicação de um Cartão Vermelho ao técnico resultará na perda automática de pontos técnicos do ATLETA no placar digital ou em sua desclassificação sumária, além do encaminhamento do caso ao Conselho de Ética." />

      <SectionTitle>CAPÍTULO VI: DA CESSÃO DE DIREITO DE IMAGEM E ARENA</SectionTitle>
      <Clause text="6.1. GRATUIDADE E EXCLUSIVIDADE: O ATLETA cede à ORGANIZADORA, em caráter exclusivo, gratuito, definitivo e irrevogável, os direitos de uso de seu nome desportivo, voz, imagem, fisionomia e estatísticas de combate captados durante o evento." />
      <Clause text="6.2. MEIOS DE EXIBIÇÃO: A autorização abrange a transmissão ao vivo via streaming, pay-per-view, televisão aberta ou fechada, redes sociais oficiais e materiais publicitários do ecossistema FFC, em total conformidade com a Lei Geral de Proteção de Dados (LGPD)." />

      <SectionTitle>CAPÍTULO VII: DA RESCISÃO POR JUSTA CAUSA E SANÇÕES</SectionTitle>
      <Clause text="7.1. INFRAÇÕES GRAVÍSSIMAS: Este contrato será rescindido de pleno direito, com a desclassificação imediata do ATLETA e perda de qualquer prêmio acumulado na carteira virtual, caso seja constatada:" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>7.1.1.</strong> Fraude documental ou falsificação de atestados médicos no envio do painel de saúde;
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>7.1.2.</strong> Resultado analítico positivo em testes antidoping ou recusa de coleta de amostra;
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>7.1.3.</strong> Agressão física deliberada a árbitros, adversários, público ou membros do staff;
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>7.1.4.</strong> Manipulação de resultados ou fraudes em chaves de arbitragem.
      </ABNTText>
      <Clause text="7.2. BLOQUEIO SISTÊMICO: A rescisão motivada por infração ética importará na aplicação de sanção administrativa de suspensão ou banimento, com o bloqueio imediato do QR Code de acesso e exclusão do perfil do ATLETA para inscrições em eventos futuros na plataforma FFC." />

      <SectionTitle>CAPÍTULO VIII: DO FORO DE ELEIÇÃO E ARBITRAGEM</SectionTitle>
      <Clause text="8.1. CLÁUSULA COMPROMISSÓRIA: Visando a celeridade e o sigilo técnico, as Partes concordam que qualquer litígio, conflito operacional ou disputa financeira emergente deste contrato não será levado à Justiça Comum. Toda e qualquer controvérsia será submetida e julgada exclusivamente por meio da Câmara de Arbitragem Legal e Extrajudicial indicada no portal corporativo do FFC, cuja sentença possui força de título executivo judicial nos termos da Lei nº 9.307/1996." />

      <SectionTitle>ASSINATURAS E ACEITE DIGITAL</SectionTitle>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3, my: 3 }}>
        <DigitalSignature
          title="CONTRATADA (ATLETA)"
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
