'use client';

// ----------------------------------------------------------------------
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

// ----------------------------------------------------------------------
// MUI
// ----------------------------------------------------------------------
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------
// APP
// ----------------------------------------------------------------------
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';

import { useTranslate } from 'src/locales';
import { BLOG_MOCK } from 'src/_mock/blog.mock';

import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { useCarousel } from 'src/components/carousel';
import { CyberButton } from 'src/components/cyber-button';
import { varFade, MotionViewport } from 'src/components/animate';
// ----------------------------------------------------------------------
import { ResponsiveCarouselGrid } from 'src/components/responsive-carousel-grid';

// ----------------------------------------------------------------------

export function HomeLatestNews({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const { t } = useTranslate();

  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: { xs: 1, sm: 2 },
  });

  // 1. Tenta pegar das traduções
  const translateItems = t('news.items', { returnObjects: true });

  // 2. Garante que displayPosts seja um array, usando o BLOG_MOCK como fallback supremo
  const displayPosts = Array.isArray(translateItems) ? translateItems : BLOG_MOCK.slice(0, 4); // Pega os primeiros 4 posts do nosso novo mock

  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 8, md: 15 },
          position: 'relative',
          overflow: 'hidden',
          bgcolor: 'transparent',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        <Container sx={{ position: 'relative', zIndex: 9 }}>
          {/* HEADER: TÍTULO À ESQUERDA + BOTÃO À DIREITA */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            justifyContent="space-between"
            sx={{ mb: 10, gap: 4 }}
          >
            <Box sx={{ textAlign: 'left' }}>
              <m.div variants={varFade('inUp')}>
                <Typography
                  component="h2"
                  variant="h2"
                  sx={{
                    fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' },
                    lineHeight: 1.15,
                    textTransform: 'uppercase',
                  }}
                >
                  <Box component="span" sx={{ color: 'common.white' }}>
                    {t('news.title')}
                  </Box>
                  <br />
                  <Box
                    component="span"
                    sx={{ color: alpha(theme.palette.common.white, 0.5), mr: 1.5 }}
                  >
                    {t('news.title_bridge')}
                  </Box>
                  <Box component="span" sx={{ color: 'warning.main' }}>
                    {t('news.title_highlight')}
                  </Box>
                </Typography>
              </m.div>

              <m.div variants={varFade('inUp')}>
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: '1rem',
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    maxWidth: 560,
                  }}
                >
                  {t('news.description', 'Fique por dentro de tudo o que acontece no mundo do Jiu-Jitsu e do Final Fight Combat.')}
                </Typography>
              </m.div>
            </Box>

            {/* BOTÃO CRYSTAL ATUALIZADO */}
            <m.div variants={varFade('inRight')} style={{ width: '100%', display: 'contents' }}>
              <CyberButton
                component={RouterLink}
                href={paths.post.root}
                endIcon={<Iconify icon="solar:double-alt-arrow-right-bold-duotone" />}
                glowColor="info"
                sx={{ width: { xs: '100%', sm: 'auto' } }}
              >
                {t('news.button_view_all')}
              </CyberButton>
            </m.div>
          </Stack>

          {/* GRID E CAROUSEL DE NOTÍCIAS */}
          <ResponsiveCarouselGrid
            data={displayPosts}
            carousel={carousel}
            gridColumns={{ md: 'repeat(4, 1fr)' }}
            gridGap={4}
            getGridItemProps={(post, index) => ({
              gridColumn: { md: index === 0 ? 'span 2' : 'span 1' },
            })}
            renderItem={(post: any, index) => (
              <m.div
                variants={varFade('inUp')}
                transition={{ delay: index * 0.2 }}
                style={{ height: '100%' }}
              >
                <Link
                  component={RouterLink}
                  href={paths.post.details(post.slug || post.title)}
                  underline="none"
                  sx={{ display: 'block', height: '100%' }}
                >
                  <CyberCard
                    sx={{
                      height: '100%',
                      minHeight: 420,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: theme.transitions.create(['all'], {
                        duration: theme.transitions.duration.standard,
                      }),
                      boxShadow: `0 8px 32px 0 ${alpha(theme.palette.common.black, 0.5)}`,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 0 25px 0 ${alpha(theme.palette.info.main, 0.2)}`,
                        '& img': { transform: 'scale(1.1)' },
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={post.coverUrl}
                      alt={post.title}
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        width: 1,
                        height: 1,
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                      }}
                    />

                    {/* Overlay para profundidade e legibilidade */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 1,
                        background: `linear-gradient(180deg, transparent 40%, ${alpha('#020817', 0.95)} 100%)`,
                      }}
                    />

                    <Stack
                      spacing={1.5}
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        p: 4,
                        width: 1,
                        zIndex: 4,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#919EAB', // Texto Secundário padronizado
                          fontFamily: "'Public Sans', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {fDate(post.createdAt)}
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: 18, lg: index === 0 ? 28 : 18 },
                          color: 'common.white',
                          lineHeight: 1.2,
                          fontFamily: "'Orbitron', sans-serif",
                          textTransform: 'uppercase', // Estética Scifi
                        }}
                      >
                        {post.title}
                      </Typography>
                    </Stack>
                  </CyberCard>
                </Link>
              </m.div>
            )}
          />
        </Container>
      </MotionViewport>
    </Box>
  );
}
