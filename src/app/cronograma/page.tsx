import { constructMetadata } from 'src/lib/seo/metadata';
import { CronogramaView } from 'src/sections/cronograma/_view';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Cronograma Geral e Diretrizes da Etapa | FFC',
  description:
    'Cronograma oficial de pesagem, inspeção dermatológica, media day e ordem de lutas das etapas do Final Fight Combat.',
});

export default function CronogramaPage() {
  return <CronogramaView />;
}
