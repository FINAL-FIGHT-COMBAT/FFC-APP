'use client';

import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';
import type { UseCarouselReturn } from 'src/components/carousel';

import Box from '@mui/material/Box';

import { Carousel, CarouselArrowFloatButtons } from 'src/components/carousel';

export type ResponsiveCarouselGridProps<T> = BoxProps & {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  carousel: UseCarouselReturn;
  gridColumns?: string | Record<string, string>;
  gridGap?: number | string;
  showArrows?: boolean;
  getGridItemProps?: (item: T, index: number) => SxProps<Theme>;
};

export function ResponsiveCarouselGrid<T>({
  data,
  renderItem,
  carousel,
  gridColumns = { md: 'repeat(3, 1fr)' },
  gridGap = 3,
  showArrows = true,
  getGridItemProps,
  ...other
}: ResponsiveCarouselGridProps<T>) {
  return (
    <Box {...other}>
      {/* ── MOBILE/TABLET: CAROUSEL ── */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'relative' }}>
        {showArrows && (
          <CarouselArrowFloatButtons {...carousel.arrows} options={carousel.options} />
        )}
        <Carousel carousel={carousel} sx={{ px: 0.5, py: 2 }}>
          {data.map((item, index) => (
            <Box key={index} sx={{ py: { xs: 1, sm: 2 } }}>
              {renderItem(item, index)}
            </Box>
          ))}
        </Carousel>
      </Box>

      {/* ── DESKTOP: GRID ── */}
      <Box 
        sx={{ 
          display: { xs: 'none', md: 'grid' }, 
          gridTemplateColumns: gridColumns, 
          gap: gridGap 
        }}
      >
        {data.map((item, index) => (
          <Box 
            key={index} 
            sx={{ 
              height: '100%',
              minWidth: 0, // 🟢 PREVINE QUE O CONTEÚDO ESTOURE A COLUNA DO CSS GRID
              ...(getGridItemProps ? getGridItemProps(item, index) : {})
            }}
          >
            {renderItem(item, index)}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
