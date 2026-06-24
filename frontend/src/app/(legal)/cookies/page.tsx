import { constructMetadata } from 'src/lib/seo/metadata';

import { LegalView } from 'src/sections/legal/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Política de Cookies | FFC',
  description:
    'Entenda como o aplicativo FFC utiliza cookies, identificadores locais e SDKs para melhorar sua experiência.',
});

const CONTENT = `
  <h2>1. Introdução</h2>
  <p><strong>O que são Cookies e Rastreadores:</strong> Cookies são pequenos arquivos de texto, SDKs ou identificadores locais armazenados no seu dispositivo. Eles funcionam como uma memória do aplicativo, guardando suas preferências e dados de navegação.</p>
  <p><strong>Finalidade Geral:</strong> O aplicativo do FFC (Final Fight Combat) utiliza essas tecnologias estritamente para garantir a segurança da sua conta, melhorar o desempenho do sistema e oferecer uma experiência de usuário personalizada e fluida durante a navegação.</p>

  <h2>2. Tipos de Cookies que Utilizamos</h2>
  <p><strong>Cookies Necessários (Essenciais):</strong> São obrigatórios para o funcionamento básico e segurança do aplicativo. Incluem a manutenção da sua sessão ativa (login) e sistemas contra fraudes. Estes cookies não podem ser desligados, pois o sistema depende deles para operar de forma segura.</p>
  <p><strong>Cookies de Desempenho (Analíticos):</strong> Nos ajudam a medir o tráfego do app, entender quais telas são mais acessadas e identificar erros ou travamentos invisíveis, permitindo melhorias contínuas na estabilidade do ecossistema FFC.</p>
  <p><strong>Cookies de Funcionalidade:</strong> Têm a função de lembrar as suas escolhas para que você não precise configurá-las a cada acesso, como sua preferência de idioma, modo de visualização ou filtros específicos das categorias e chaves.</p>
  <p><strong>Cookies de Marketing (Publicidade):</strong> Utilizados para exibir anúncios personalizados, ofertas relevantes e campanhas direcionadas dos patrocinadores oficiais do FFC, otimizando o nosso ecossistema esportivo.</p>

  <h2>3. Lista de Ferramentas de Terceiros (SDKs)</h2>
  <p>Para fornecer uma infraestrutura de alto nível, o FFC integra serviços de parceiros homologados:</p>
  <ul>
    <li><strong>Firebase / Google Analytics:</strong> Rastreia de forma anônima o comportamento de uso e monitora a estabilidade do sistema, ajudando a prevenir falhas no aplicativo.</li>
    <li><strong>Gateways de Pagamento (ex: Stripe / Asaas):</strong> Geram identificadores locais essenciais para garantir a criptografia e o antifraude no processamento de compras de ingressos, assinaturas ou inscrições de atletas.</li>
  </ul>

  <h2>4. Controle do Usuário (Consentimento)</h2>
  <p><strong>Gerenciamento no App:</strong> Você possui autonomia sobre seus dados. A qualquer momento, você pode ativar ou desativar os cookies não essenciais diretamente pelo menu de Configurações de Privacidade do próprio aplicativo.</p>
  <p><strong>Configurações do Dispositivo:</strong> Além disso, você pode bloquear o rastreamento revogando permissões de atividade e anúncios nas configurações nativas do seu sistema operacional (Android ou iOS).</p>

  <h2>5. Contato e Atualizações</h2>
  <p><strong>Alterações na Política:</strong> Este documento será atualizado sempre que novas ferramentas de rastreamento ou SDKs forem integrados à plataforma FFC. Sempre prezando pela máxima transparência.</p>
  <p><strong>Canal de Suporte (DPO):</strong> Caso tenha qualquer dúvida sobre a privacidade dos seus dados, entre em contato diretamente com o nosso Encarregado de Proteção de Dados (DPO) através dos canais oficiais de atendimento do evento.</p>
`;

export default function CookiesPage() {
  return (
    <LegalView title="Política de Cookies" content={CONTENT} lastUpdated="14 de Junho de 2026" />
  );
}
