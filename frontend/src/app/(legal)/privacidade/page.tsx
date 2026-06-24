import { constructMetadata } from 'src/lib/seo/metadata';

import { LegalView } from 'src/sections/legal/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Política de Privacidade | FFC',
  description:
    'Saiba como o Final Fight Combat coleta, gerencia e protege os seus dados pessoais, esportivos e de saúde.',
});

const CONTENT = `
  <h2>1. Informações Gerais</h2>
  <p><strong>Controlador de Dados:</strong> O FFC (Final Fight Combat) é o controlador oficial e legalmente responsável pela coleta, segurança e tratamento das suas informações dentro deste ecossistema esportivo.</p>
  <p><strong>Objetivo do Documento:</strong> Esta política estabelece de forma clara e transparente as regras sobre como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais e esportivos, em total conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>

  <h2>2. Dados Coletados</h2>
  <p><strong>Dados de Cadastro:</strong> Nome completo, e-mail, CPF, data de nascimento, telefone e vínculo com equipe ou academia.</p>
  <p><strong>Dados do Atleta:</strong> Categoria de peso, altura, graduação (faixa), histórico de lutas (cartel) e resultados obtidos na organização.</p>
  <p><strong>Dados de Saúde:</strong> Atestados médicos, declarações de aptidão física e exames laboratoriais obrigatoriamente exigidos para a liberação da participação em combates esportivos.</p>
  <p><strong>Dados de Pagamento:</strong> Informações transacionais (processadas de forma tokenizada e criptografada) necessárias para o pagamento de inscrições de atletas ou compra de ingressos.</p>
  <p><strong>Dados de Navegação:</strong> Endereço IP, modelo do dispositivo, sistema operacional e identificadores de cookies utilizados para segurança e otimização do aplicativo.</p>

  <h2>3. Finalidade do Uso</h2>
  <p><strong>Gestão do Torneio:</strong> Viabilizar a organização técnica do evento, incluindo o chaveamento de lutas, controle oficial de pesagem, ranqueamento e divulgação de resultados.</p>
  <p><strong>Segurança e Saúde:</strong> Analisar e verificar rigorosamente as condições médicas para resguardar a vida e a integridade física do competidor antes e durante o evento.</p>
  <p><strong>Processamento Técnico:</strong> Operacionalizar a validação de pagamentos, emissão de credenciais, ingressos e gestão de acessos na plataforma.</p>
  <p><strong>Comunicação:</strong> Disparar alertas essenciais sobre cronogramas, convocações, alterações no card de lutas, chamadas de pesagem e avisos importantes de operação.</p>

  <h2>4. Compartilhamento de Dados</h2>
  <p><strong>Prestadores de Serviço:</strong> Transmissão estritamente necessária de dados para gateways de pagamento parceiros, sistemas de cronometragem oficiais e equipe médica/socorristas do evento.</p>
  <p><strong>Exibição Pública:</strong> Divulgação inerente à prática esportiva pública, incluindo nome de ringue, equipe, peso, categoria e resultados nos cards de transmissão, redes sociais e chaves do evento.</p>
  <p><strong>Parceiros Comerciais:</strong> Compartilhamento de dados estatísticos, consolidados e anonimizados (sem identificação direta) com patrocinadores para relatórios de audiência e impacto esportivo.</p>

  <h2>5. Direitos do Usuário (LGPD)</h2>
  <p><strong>Acesso e Correção:</strong> Direito garantido de visualizar, atualizar e retificar seus dados cadastrais e esportivos diretamente pelo painel do aplicativo.</p>
  <p><strong>Exclusão de Dados:</strong> Opção de solicitar a eliminação definitiva da sua conta e remoção dos dados pessoais do nosso sistema, ressalvadas as guardas obrigatórias previstas em lei (como históricos financeiros).</p>
  <p><strong>Revogação de Consentimento:</strong> Direito de retirar a autorização para o uso de dados não essenciais, como o recebimento de e-mails de marketing e campanhas promocionais.</p>

  <h2>6. Segurança e Retenção</h2>
  <p><strong>Proteção da Informação:</strong> Aplicação rigorosa de criptografia, firewalls de rede e servidores seguros em nuvem para blindar o sistema contra vazamentos e acessos indevidos.</p>
  <p><strong>Prazo de Armazenamento:</strong> Seus dados são retidos apenas pelo tempo necessário para cumprir as finalidades descritas ou para atender a obrigações legais, regulatórias e de auditoria desportiva, sendo posteriormente eliminados ou anonimizados.</p>

  <h2>7. Contato e Atualizações</h2>
  <p><strong>Alterações na Política:</strong> O FFC reserva-se o direito de atualizar este documento. Você será notificado de forma proativa através do aplicativo ou por e-mail sobre mudanças materiais na forma como tratamos seus dados.</p>
  <p><strong>Canal do DPO:</strong> Para exercer seus direitos ou tirar dúvidas jurídicas sobre sua privacidade, contate diretamente o nosso Encarregado de Proteção de Dados (DPO) através dos canais oficiais de suporte do FFC.</p>
`;

export default function PrivacyPage() {
  return (
    <LegalView
      title="Política de Privacidade"
      content={CONTENT}
      lastUpdated="15 de Junho de 2026"
    />
  );
}
