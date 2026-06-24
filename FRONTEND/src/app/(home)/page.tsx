import type { Metadata } from 'next';

import { HomeView } from 'src/sections/home/_view/HomeView';

// ----------------------------------------------------------------------

/**
 * LANDING PAGE PRINCIPAL - FINAL FIGHT COMBAT (FFC)
 * Foco: Atração de atletas de Jiu-Jitsu, MMA e engajamento com patrocinadores.
 */

// ✅ BLINDAGEM OBRIGATÓRIA:
// Landing Pages utilizam componentes pesados de animação (Framer Motion).
// O runtime 'nodejs' garante a estabilidade do deploy e evita limites de execução.
export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: 'Final Fight Combat (FFC) - O Futuro do Esporte de Combate',
  description:
    'Acompanhe o maior circuito de Jiu-Jitsu Brasileiro e Grand Prix de lutas. Inscreva-se como atleta, acompanhe as chaves ao vivo e faça parte do ecossistema FFC.',
  keywords: [
    'FFC',
    'Final Fight Combat',
    'Artes Marciais',
    'Jiu-Jitsu Brasileiro',
    'CBJJ',
    'Grand Prix',
    'Lutas',
    'Esportes de Combate',
    'Inscrição Atletas',
    'Torneio',
  ],
  openGraph: {
    title: 'FFC - Final Fight Combat',
    description:
      'O maior palco para atletas de Jiu-Jitsu e MMA do Brasil. Acompanhe os combates ao vivo.',
  },
};

export default function Page() {
  return <HomeView />;
}
