export const MOCK_PDF_DOCUMENTS: Record<string, { title: string; content: string }> = {
  'doc-1': {
    title: 'Regulamento Oficial FFC',
    content: `
# Regulamento Oficial - Final Fight Combat (FFC)

## Aviso Oficial

**Documentação oficial disponível em breve.**

A equipe do Final Fight Combat está finalizando as diretrizes oficiais de combate e pontuação.
    `,
  },
  'doc-2': {
    title: 'Manual de Pesagem',
    content: `
# Manual de Pesagem e Recuperação - FFC

## Aviso Oficial

**Documentação oficial disponível em breve.**

A equipe do Final Fight Combat está finalizando as regras e cronogramas oficiais de pesagem.
    `,
  },
  'doc-4': {
    title: 'Guia de Academias Parceiras',
    content: `
# Guia de Academias e Equipes Parceiras

## Aviso Oficial

**Documentação oficial disponível em breve.**

A equipe do Final Fight Combat está estruturando o programa de afiliados e logística para academias parceiras.
    `,
  },
};

// ----------------------------------------------------------------------
// NOVA ARQUITETURA DE DOCUMENTOS GLOBAIS
// ----------------------------------------------------------------------

export type DocumentCategoryType = 'esportes' | 'saude' | 'juridico' | 'modelos';
export type DocumentFormatType = 'pdf' | 'sign' | 'model';

export interface IDocumentConfig {
  slug: string;
  title: string;
  category: DocumentCategoryType;
  description: string;
  size: string;
  type: DocumentFormatType;
  icon: string;
  isReady: boolean;
  readyUrl?: string; // Ex: paths.contratoAtleta
}

export const DOCUMENT_CATEGORIES = [
  { id: 'esportes', title: 'Regulamentos Esportivos', icon: 'solar:cup-star-bold', color: 'warning' },
  { id: 'saude', title: 'Saúde e Logística', icon: 'solar:heart-pulse-bold', color: 'error' },
  { id: 'juridico', title: 'Jurídico e Privacidade', icon: 'solar:shield-check-bold', color: 'info' },
  { id: 'modelos', title: 'Modelos de Contratos', icon: 'solar:document-add-bold', color: 'success' },
] as const;

export const DOCUMENTS: IDocumentConfig[] = [
  // Esportes
  { slug: 'regulamento-oficial', title: 'Regulamento Oficial FFC', category: 'esportes', description: 'Regras de combate, pontuação, faltas e chaveamento do Grand Prix.', size: '2.4 MB', type: 'model', icon: 'solar:book-bookmark-bold', isReady: false },
  { slug: 'regras-de-pesagem', title: 'Regras de Pesagem e Categorias', category: 'esportes', description: 'Tolerâncias de peso, horários oficiais e punições financeiras.', size: '1.1 MB', type: 'model', icon: 'solar:scale-bold', isReady: false },
  { slug: 'politica-de-integridade', title: 'Política de Integridade e Antidoping', category: 'esportes', description: 'Regras rigorosas contra apostas ilegais, manipulação e doping.', size: '1.5 MB', type: 'model', icon: 'solar:shield-warning-bold', isReady: false },
  { slug: 'tabela-de-premiacoes', title: 'Tabela de Premiações e Luvas', category: 'esportes', description: 'Documento Financeiro com regras de pagamento e bônus de performance.', size: '900 KB', type: 'model', icon: 'solar:wad-of-money-bold', isReady: false },
  
  // Saúde
  { slug: 'termo-de-saude', title: 'Termo de Saúde e Aptidão Física', category: 'saude', description: 'Formulário médico obrigatório, histórico de lesões e tipo sanguíneo.', size: '850 KB', type: 'model', icon: 'solar:health-bold', isReady: false },
  { slug: 'plano-logistico', title: 'Plano Logístico e Responsabilidades', category: 'saude', description: 'Diretrizes sobre passagens aéreas, hospedagem e alimentação.', size: '1.2 MB', type: 'model', icon: 'solar:bus-bold', isReady: false },

  // Jurídico
  { slug: 'politica-de-privacidade', title: 'Política de Privacidade (LGPD)', category: 'juridico', description: 'Como seus dados pessoais e de saúde são protegidos pelo FFC.', size: '1.8 MB', type: 'model', icon: 'solar:lock-password-bold', isReady: false },
  { slug: 'cessao-de-imagem', title: 'Termo de Cessão de Imagem e Voz', category: 'juridico', description: 'Autorização para transmissão em PPV e campanhas de marketing.', size: '900 KB', type: 'model', icon: 'solar:camera-bold', isReady: false },
  { slug: 'termos-de-uso', title: 'Termos de Uso da Plataforma', category: 'juridico', description: 'Regras gerais de uso do aplicativo FFC para atletas, equipes e fãs.', size: '2.1 MB', type: 'model', icon: 'solar:smartphone-update-bold', isReady: false },

  // Modelos
  { slug: 'contrato-atleta', title: 'Modelo: Contrato de Atleta', category: 'modelos', description: 'Casca vazia do contrato de participação para leitura prévia.', size: '3.5 MB', type: 'model', icon: 'solar:users-group-two-rounded-bold', isReady: true, readyUrl: '/contrato-atleta' },
  { slug: 'prestacao-de-servicos', title: 'Modelo: Prestação de Serviços (Staff)', category: 'modelos', description: 'Contrato padrão para Árbitros, Cutmen, Locutores e Seguranças.', size: '1.4 MB', type: 'model', icon: 'solar:user-id-bold', isReady: false },
  { slug: 'termo-de-arbitragem', title: 'Termo de Arbitragem Específica', category: 'modelos', description: 'Regras para resolução de disputas financeiras fora da justiça comum.', size: '1.1 MB', type: 'model', icon: 'solar:diploma-verified-bold', isReady: false },
];
