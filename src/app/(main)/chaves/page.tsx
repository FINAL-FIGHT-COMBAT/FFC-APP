import { constructMetadata } from 'src/lib/seo/metadata';

import { ChavesView } from 'src/sections/chaves/_view';
import { SportsEventSchema } from 'src/components/seo/sports-event-schema';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Chaveamento Oficial | Final Fight Combat',
  description: 'Acompanhe as chaves, confrontos e resultados do Grand Prix de Jiu-Jitsu e MMA.',
});

const EVENT_DATA = {
  title: 'Grand Prix Final Fight Combat 2026: Silva vs Santos',
  date: '2026-07-20T19:00:00-03:00',
  venueName: 'Arena FFC Brasil',
  address: 'Av. das Nações, 1500, São Paulo, SP',
  fighterA: 'Sandro Silva',
  fighterB: 'Rafael Costa',
};

export default function ChavesPage() {
  return (
    <>
      <SportsEventSchema eventData={EVENT_DATA} />
      <ChavesView />
    </>
  );
}
