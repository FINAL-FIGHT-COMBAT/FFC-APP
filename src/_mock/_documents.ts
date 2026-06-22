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

export type DocumentCategoryType = 'esportes' | 'saude' | 'juridico' | 'contratos' | 'operacional';
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
  { id: 'esportes', title: 'Esportivo', icon: 'solar:cup-star-bold', color: 'warning' },
  { id: 'saude', title: 'Saúde', icon: 'solar:heart-pulse-bold', color: 'error' },
  { id: 'juridico', title: 'Jurídico', icon: 'solar:shield-check-bold', color: 'info' },
  { id: 'contratos', title: 'Contratos', icon: 'solar:document-add-bold', color: 'success' },
  { id: 'operacional', title: 'Operacional', icon: 'solar:box-bold', color: 'primary' },
] as const;

export const DOCUMENTS: IDocumentConfig[] = [
  // 🥋 Esportivo
  {
    slug: 'regulamento-ffc',
    title: 'Regulamento FFC',
    category: 'esportes',
    description: 'Regras oficiais das lutas e do torneio.',
    size: '2.4 MB',
    type: 'model',
    icon: 'solar:book-bookmark-bold',
    isReady: true,
    readyUrl: '/regulamento',
  },
  {
    slug: 'guia-de-pesagem',
    title: 'Guia de Pesagem',
    category: 'esportes',
    description: 'Horários, tolerâncias e divisões de peso.',
    size: '1.1 MB',
    type: 'model',
    icon: 'solar:scale-bold',
    isReady: true,
    readyUrl: '/pesagem',
  },
  {
    slug: 'tabela-de-premiacao',
    title: 'Tabela de Premiação',
    category: 'esportes',
    description: 'Valores de bolsas, bônus e troféus.',
    size: '900 KB',
    type: 'model',
    icon: 'solar:wad-of-money-bold',
    isReady: true,
    readyUrl: '/premiacao',
  },
  {
    slug: 'regras-de-corner',
    title: 'Regras de Córner',
    category: 'esportes',
    description: 'Direitos e deveres dos técnicos e equipes.',
    size: '1.2 MB',
    type: 'model',
    icon: 'solar:users-group-two-rounded-bold',
    isReady: true,
    readyUrl: '/corner',
  },

  // 🩺 Saúde
  {
    slug: 'aptidao-fisica',
    title: 'Aptidão Física',
    category: 'saude',
    description: 'Declaração médica de capacidade para lutar.',
    size: '850 KB',
    type: 'model',
    icon: 'solar:health-bold',
    isReady: true,
    readyUrl: '/aptidao-fisica',
  },
  {
    slug: 'termo-de-risco',
    title: 'Termo de Risco',
    category: 'saude',
    description: 'Consentimento do atleta sobre lesões físicas.',
    size: '1.1 MB',
    type: 'model',
    icon: 'solar:danger-bold',
    isReady: true,
    readyUrl: '/termo-de-risco',
  },
  {
    slug: 'guia-antidoping',
    title: 'Guia Antidoping',
    category: 'saude',
    description: 'Lista de substâncias e condutas proibidas.',
    size: '1.5 MB',
    type: 'model',
    icon: 'solar:test-tube-bold',
    isReady: true,
    readyUrl: '/guia-antidoping',
  },
  {
    slug: 'plano-medico',
    title: 'Plano Médico',
    category: 'saude',
    description: 'Protocolo de primeiros socorros e ambulância.',
    size: '1.4 MB',
    type: 'model',
    icon: 'solar:heart-pulse-bold',
    isReady: true,
    readyUrl: '/plano-medico',
  },

  // ⚖️ Jurídico
  {
    slug: 'termos-de-uso',
    title: 'Termos de Uso',
    category: 'juridico',
    description: 'Regras de navegação no aplicativo.',
    size: '2.1 MB',
    type: 'model',
    icon: 'solar:smartphone-update-bold',
    isReady: true,
    readyUrl: '/termos',
  },
  {
    slug: 'privacidade',
    title: 'Privacidade',
    category: 'juridico',
    description: 'Uso e proteção de dados (LGPD).',
    size: '1.8 MB',
    type: 'model',
    icon: 'solar:lock-password-bold',
    isReady: true,
    readyUrl: '/privacidade',
  },
  {
    slug: 'uso-de-imagem',
    title: 'Uso de Imagem',
    category: 'juridico',
    description: 'Autorização para fotos, vídeos e transmissões.',
    size: '900 KB',
    type: 'model',
    icon: 'solar:camera-bold',
    isReady: true,
    readyUrl: '/uso-de-imagem',
  },
  {
    slug: 'arbitragem-legal',
    title: 'Arbitragem Legal',
    category: 'juridico',
    description: 'Resolução extrajudicial de disputas e conflitos.',
    size: '1.1 MB',
    type: 'model',
    icon: 'solar:diploma-verified-bold',
    isReady: true,
    readyUrl: '/arbitragem-legal',
  },

  // 📄 Contratos
  {
    slug: 'contrato-atleta-convidado',
    title: 'Contrato: Atleta Convidado',
    category: 'contratos',
    description: 'Vínculo de luta para atletas do card principal.',
    size: '3.5 MB',
    type: 'model',
    icon: 'solar:user-id-bold',
    isReady: true,
    readyUrl: '/contrato-atleta',
  },
  {
    slug: 'contrato-atleta-seletiva',
    title: 'Contrato: Atleta Seletiva',
    category: 'contratos',
    description: 'Termo de participação para as fases eliminatórias.',
    size: '3.2 MB',
    type: 'model',
    icon: 'solar:users-group-two-rounded-bold',
    isReady: true,
    readyUrl: '/contrato-atleta-seletiva',
  },
  {
    slug: 'contrato-de-parceria',
    title: 'Contrato de Parceria',
    category: 'contratos',
    description: 'Acordo comercial para empresas e academias parceiras.',
    size: '2.0 MB',
    type: 'model',
    icon: 'solar:handshake-bold',
    isReady: true,
    readyUrl: '/parcerias',
  },
  {
    slug: 'contrato-de-staff',
    title: 'Contrato de Staff',
    category: 'contratos',
    description: 'Prestação de serviço para a equipe de apoio.',
    size: '1.4 MB',
    type: 'model',
    icon: 'solar:users-group-rounded-bold',
    isReady: true,
    readyUrl: '/contrato-de-staff',
  },
  {
    slug: 'termo-de-voluntario',
    title: 'Termo de Voluntário',
    category: 'contratos',
    description: 'Acordo de colaboração voluntária sem vínculo.',
    size: '800 KB',
    type: 'model',
    icon: 'solar:hand-shake-bold',
    isReady: true,
    readyUrl: '/termo-de-voluntario',
  },

  // 📦 Operacional
  {
    slug: 'cronograma',
    title: 'Cronograma',
    category: 'operacional',
    description: 'Horários da pesagem, fotos e início do card.',
    size: '1.2 MB',
    type: 'model',
    icon: 'solar:calendar-date-bold',
    isReady: true,
    readyUrl: '/cronograma',
  },
  {
    slug: 'guia-de-logistica',
    title: 'Guia de Logística',
    category: 'operacional',
    description: 'Informações sobre hotel, passagens e transporte.',
    size: '1.5 MB',
    type: 'model',
    icon: 'solar:bus-bold',
    isReady: true,
    readyUrl: '/guia-de-logistica',
  },
  {
    slug: 'imprensa',
    title: 'Imprensa',
    category: 'operacional',
    description: 'Regras para credenciamento de fotógrafos e jornalistas.',
    size: '1.3 MB',
    type: 'model',
    icon: 'solar:videocamera-record-bold',
    isReady: true,
    readyUrl: '/imprensa',
  },
];
