'use client';

import type { IPostItem } from 'src/types/blog';

import { m } from 'framer-motion';
import { kebabCase } from 'es-toolkit';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { Label } from 'src/components/label';
import { CyberCard } from 'src/components/cyber-card';
import { useCarousel } from 'src/components/carousel';
import { varFade, MotionViewport } from 'src/components/animate';
import { ResponsiveCarouselGrid } from 'src/components/responsive-carousel-grid';

import { PostCard, PostItemLatest } from './PostCard';

// ----------------------------------------------------------------------

type Props = {
  category: string;
  posts: IPostItem[];
};

export function PostCategoryItem({ category, posts }: Props) {
  const theme = useTheme();

  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: { xs: 1, sm: 2 },
  });

  const viewPosts = posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());

  // Se não houver posts, o grid não renderizará a seção.
  if (viewPosts.length === 0) return null;

  const categoryId = category
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');

  return (
    <Box
      id={categoryId}
      component={MotionViewport}
      sx={{
        position: 'relative',
        bgcolor: 'transparent',
        py: { xs: 10, md: 15 },
        overflow: 'hidden',
      }}
    >
      <m.div variants={varFade('inDown')}>
        <Typography
          variant="h2"
          sx={{
            mb: 8,
            textAlign: 'center',
            fontWeight: 900,
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'common.white',
            textShadow: `0 0 20px ${alpha(theme.palette.warning.main, 0.35)}`,
          }}
        >
          {category}
        </Typography>
      </m.div>

      <Grid container spacing={4}>
        {/* Top 3 Destaques */}
        <Grid size={12}>
          <ResponsiveCarouselGrid
            data={viewPosts.slice(0, 3)}
            carousel={carousel}
            gridColumns={{ md: 'repeat(4, 1fr)' }}
            getGridItemProps={(post, index) => ({
              gridColumn: { md: index === 0 ? 'span 2' : 'span 1' },
            })}
            renderItem={(post: any, index) => (
              <m.div variants={varFade('inUp')} style={{ height: '100%' }}>
                <CyberCard sx={{ height: '100%' }}>
                  {category.toLowerCase() === 'eventos' && index > 0 && (
                    <Label
                      variant="filled"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 30,
                        fontWeight: 900,
                        fontSize: '0.65rem',
                        fontFamily: "'Orbitron', sans-serif",
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        borderRadius: 0.75,
                        bgcolor: alpha(theme.palette[index === 1 ? 'warning' : 'info'].main, 0.15),
                        color: theme.palette[index === 1 ? 'warning' : 'info'].light,
                        border: `1px solid ${alpha(theme.palette[index === 1 ? 'warning' : 'info'].main, 0.5)}`,
                        backdropFilter: 'blur(8px)',
                        boxShadow: `0 0 10px ${alpha(theme.palette[index === 1 ? 'warning' : 'info'].main, 0.2)}`,
                      }}
                    >
                      {['Ignorar', 'Card Principal', 'Card Preliminar'][index]}
                    </Label>
                  )}
                  <PostItemLatest
                    post={post}
                    index={index}
                    detailsHref={paths.post.details(post.slug || kebabCase(post.title))}
                  />
                </CyberCard>
              </m.div>
            )}
          />
        </Grid>

        {/* Lista Restante */}
        {viewPosts.slice(3, 7).map((post: any, index: number) => {
          const ffcColors: any[] = ['warning', 'info', 'error', 'primary'];

          return (
            <Grid
              key={`${categoryId}-list-${post.id}-${index}`}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            >
              <m.div variants={varFade('inUp')} style={{ height: '100%' }}>
                <CyberCard>
                  {/* Badge secundário para lista */}
                  {category.toLowerCase() === 'eventos' && (
                    <Label
                      variant="filled"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 30,
                        fontWeight: 900,
                        fontSize: '0.65rem',
                        fontFamily: "'Orbitron', sans-serif",
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        borderRadius: 0.75,
                        bgcolor: alpha(
                          theme.palette[
                            ffcColors[index] as 'success' | 'warning' | 'info' | 'error' | 'primary'
                          ].main,
                          0.15
                        ),
                        color:
                          theme.palette[
                            ffcColors[index] as 'success' | 'warning' | 'info' | 'error' | 'primary'
                          ].light,
                        border: `1px solid ${alpha(theme.palette[ffcColors[index] as 'success' | 'warning' | 'info' | 'error' | 'primary'].main, 0.5)}`,
                        backdropFilter: 'blur(8px)',
                        boxShadow: `0 0 10px ${alpha(theme.palette[ffcColors[index] as 'success' | 'warning' | 'info' | 'error' | 'primary'].main, 0.2)}`,
                      }}
                    >
                      {['Resultados', 'Luta da Noite', 'Performance', 'Bônus'][index] || 'Destaque'}
                    </Label>
                  )}
                  <PostCard
                    post={post}
                    detailsHref={paths.post.details(post.slug || kebabCase(post.title))}
                  />
                </CyberCard>
              </m.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
