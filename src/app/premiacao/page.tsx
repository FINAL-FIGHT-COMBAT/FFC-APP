import { constructMetadata } from 'src/lib/seo/metadata';
import { TabelaPremiacaoView } from 'src/sections/tabela-premiacao/_view';

export const metadata = constructMetadata({
  title: 'Tabela de Premiação | Final Fight Combat',
  description: 'Regras de bolsas, premiações e pódio do ecossistema esportivo FFC.',
});

export default function TabelaPremiacaoPage() {
  return <TabelaPremiacaoView />;
}
