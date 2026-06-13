import type { NavMainProps } from './main/nav/types';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData: NavMainProps['data'] = [
  {
    title: 'EVENTOS',
    path: `${paths.news.root}#eventos`,
    icon: <Iconify width={22} icon={'solar:calendar-bold-duotone' as any} />,
  },
  {
    title: 'ATLETAS',
    path: `${paths.news.root}#atletas`,
    icon: <Iconify width={22} icon={'solar:user-bold-duotone' as any} />,
  },
  {
    title: 'TÉCNICAS',
    path: `${paths.news.root}#tecnicas`,
    icon: <Iconify width={22} icon={'solar:shield-bold-duotone' as any} />,
  },
  {
    title: 'BASTIDORES',
    path: `${paths.news.root}#bastidores`,
    icon: <Iconify width={22} icon={'solar:camera-bold-duotone' as any} />,
  },
];
