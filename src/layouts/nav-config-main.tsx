import type { NavMainProps } from './main/nav/types';

import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const navData: NavMainProps['data'] = [
  { title: 'Home', path: '/' },
  { title: 'Atletas GP', path: '/#atletas' },
  { title: 'Categorias', path: '/#categorias' },
  { title: 'Cronograma', path: '/#roadmap' },
  { title: 'Comunidade', path: '/#community' },
  { title: 'FAQ', path: '/#faqs' },
  { title: 'Documentos', path: paths.documentos },
];
