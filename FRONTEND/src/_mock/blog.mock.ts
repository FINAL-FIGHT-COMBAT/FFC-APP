import type { IPostItem } from 'src/types/blog';

// ----------------------------------------------------------------------

const AVATAR_PATH = '/assets/images/mock/avatar';

const FALLBACK_POST = {
  title: 'Cobertura Oficial FFC em Breve',
  slug: 'cobertura-oficial-ffc',
  description:
    'Acompanhe as atualizações, resultados e bastidores oficiais do Final Fight Combat. Em breve novos conteúdos.',
  content:
    '<p>O portal de notícias do FFC está sendo preparado. Em breve, publicaremos conteúdos exclusivos, análises táticas e toda a cobertura do evento.</p>',
  coverUrl: '/assets/images/blog/news-fallback.png',
  category: 'Notícias',
  status: 'published' as const,
  totalViews: 0,
  totalShares: 0,
  totalComments: 0,
  totalFavorites: 0,
  metaTitle: 'Notícias FFC | Em breve',
  metaDescription: 'Portal oficial de notícias do Final Fight Combat.',
  metaKeywords: ['FFC', 'MMA', 'Notícias'],
  tags: ['FFC', 'Novidades'],
  featured: false,
  author: { name: 'Equipe Editorial', avatarUrl: `${AVATAR_PATH}/avatar-1.webp` },
  comments: [],
  favoritePerson: [],
};

// Gera 12 posts padronizados de fallback temporário
export const BLOG_MOCK: IPostItem[] = Array.from({ length: 12 }).map((_, index) => ({
  ...FALLBACK_POST,
  id: String(index + 1),
  featured: index === 0, // Apenas o primeiro é destaque para preencher o grid principal
  createdAt: new Date(Date.now() - index * 86400000).toISOString(),
}));

export const COMMUNITIES_MOCK = [
  {
    name: 'MMA Fighting',
    logo: '/assets/icons/communities/mmafighting.svg', // Assuma fallbacks de logo ou ícones genéricos se não tiver imagem
    url: 'https://mmafighting.com',
  },
  {
    name: 'UFC Oficial',
    logo: '/assets/icons/communities/ufc.svg',
    url: 'https://ufc.com',
  },
  { name: 'PFL MMA', logo: '/assets/icons/communities/pfl.svg', url: 'https://pflmma.com' },
  { name: 'Sherdog', logo: '/assets/icons/communities/sherdog.svg', url: 'https://sherdog.com' },
  {
    name: 'Tatame',
    logo: '/assets/icons/communities/tatame.svg',
    url: 'https://tatame.com.br',
  },
  {
    name: 'Combate',
    logo: '/assets/icons/communities/combate.svg',
    url: 'https://ge.globo.com/combate/',
  },
];

export const VIDEOS_MOCK = {
  brazil: [
    {
      id: 'zJ1h0h5nJmE', // Placeholder youtube ids
      title: 'Melhores Momentos: FFC 10 - Nocautes Brutais',
      channel: 'FFC Oficial',
      thumbnail: 'https://img.youtube.com/vi/zJ1h0h5nJmE/maxresdefault.jpg',
      postedAt: '2 dias atrás',
      duration: '12:40',
    },
    {
      id: '1vO8B04rYt0',
      title: '🔥 Treino Aberto: Os desafios de cortar peso',
      channel: 'Sexto Round',
      thumbnail: 'https://img.youtube.com/vi/1vO8B04rYt0/maxresdefault.jpg',
      postedAt: '5 horas atrás',
      duration: '08:15',
    },
    {
      id: 'X-2_s-P3p5k',
      title: 'URGENTE: A Lesão que mudou tudo no Main Event',
      channel: 'MMA Hoje',
      thumbnail: 'https://img.youtube.com/vi/X-2_s-P3p5k/maxresdefault.jpg',
      postedAt: '1 dia atrás',
      duration: '15:20',
    },
    {
      id: 'QeQ29R2m3Fw',
      title: 'ENTREVISTA: "Eu vou arrancar a cabeça dele"',
      channel: 'Papo de Luta',
      thumbnail: 'https://img.youtube.com/vi/QeQ29R2m3Fw/maxresdefault.jpg',
      postedAt: '3 dias atrás',
      duration: '22:00',
    },
  ],
  international: [
    {
      id: '6l3bI89y6vY',
      title: 'Strategy Breakdown: How to defend the Calf Kick',
      channel: 'Luke Thomas',
      thumbnail: 'https://img.youtube.com/vi/6l3bI89y6vY/maxresdefault.jpg',
      postedAt: '1 dia atrás',
      duration: '18:10',
    },
    {
      id: 'T5R2XGzL4H8',
      title: 'Post-Fight Press Conference: Full Video',
      channel: 'MMA Junkie',
      thumbnail: 'https://img.youtube.com/vi/T5R2XGzL4H8/maxresdefault.jpg',
      postedAt: '4 dias atrás',
      duration: '25:45',
    },
    {
      id: 'oDqA7f_2_A0',
      title: 'Why the Arm Triangle is the King of Submissions',
      channel: 'BJJ Scout',
      thumbnail: 'https://img.youtube.com/vi/oDqA7f_2_A0/maxresdefault.jpg',
      postedAt: '6 horas atrás',
      duration: '14:20',
    },
    {
      id: 'L0C2_QZ3s-Q',
      title: 'Fighter Salary: The Truth About MMA Money',
      channel: 'Ariel Helwani',
      thumbnail: 'https://img.youtube.com/vi/L0C2_QZ3s-Q/maxresdefault.jpg',
      postedAt: '12 horas atrás',
      duration: '32:00',
    },
  ],
};
