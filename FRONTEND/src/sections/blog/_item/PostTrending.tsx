'use client';

import type { IPostItem } from 'src/types/blog';

import { m } from 'framer-motion';
import { kebabCase } from 'es-toolkit';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { CyberCard } from 'src/components/cyber-card';
import { useCarousel } from 'src/components/carousel';
import { varFade, MotionViewport } from 'src/components/animate';
import { ResponsiveCarouselGrid } from 'src/components/responsive-carousel-grid';

import { PostCard, PostItemLatest } from './PostCard';

// ----------------------------------------------------------------------

export function PostTrending({ posts: postsFromProps }: { posts: IPostItem[] }) {
  const theme = useTheme();

  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: { xs: 1, sm: 2 },
  });

  // Ordenar posts por visualizações para simular o "Trending" e pegar os top 7
  const viewPosts = postsFromProps?.length
    ? [...postsFromProps].sort((a, b) => (b.totalViews || 0) - (a.totalViews || 0)).slice(0, 7)
    : [];

  return (
    <Box
      component={MotionViewport}
      sx={{
        py: { xs: 8, md: 10 },
        position: 'relative',
        bgcolor: 'transparent', // 🟢 TRANSPARÊNCIA ESTRATÉGICA
        overflow: 'hidden',
      }}
    >
      <Grid container spacing={4}>
        <Grid size={12}>
          <m.div variants={varFade('inDown')}>
            <Typography
              variant="h3"
              sx={{
                mb: 6,
                fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'common.white',
                textAlign: { xs: 'center', md: 'left' },
                // 🟢 EFEITO GLOW PADRONIZADO FFC
                textShadow: `0 0 20px ${alpha(theme.palette.warning.main, 0.35)}`,
              }}
            >
              Lutas em Destaque
            </Typography>
          </m.div>
        </Grid>

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
                  {/* No desktop usamos PostItemLatest, no mobile usamos PostCard.
                      Como o ResponsiveCarouselGrid não diferencia desktop/mobile no renderItem,
                      precisamos usar css ou apenas usar o PostItemLatest que é mais rico.
                      Vou usar PostItemLatest para todos os top 3, pois ele já é responsivo e fica ótimo em carrossel. */}
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

        {/* Lista Restante (Posts 4 a 7) */}
        {viewPosts.slice(3, 7).map((post, index) => (
          <Grid key={`${post.id}-${index}-rest`} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <m.div variants={varFade('inUp')}>
              <CyberCard>
                <PostCard
                  post={post as any}
                  detailsHref={paths.post.details((post as any).slug || kebabCase(post.title))}
                />
              </CyberCard>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
