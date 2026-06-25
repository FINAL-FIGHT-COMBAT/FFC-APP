'use client';

// ----------------------------------------------------------------------
import type { BoxProps } from '@mui/material/Box';

import { useMemo } from 'react';
import { m } from 'framer-motion';

// ----------------------------------------------------------------------
// MUI
// ----------------------------------------------------------------------
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------
// APP
// ----------------------------------------------------------------------
import { useTranslate } from 'src/locales';

import { CyberCard } from 'src/components/cyber-card';
import { useCarousel } from 'src/components/carousel';
import { varFade, MotionViewport } from 'src/components/animate';
import { ResponsiveCarouselGrid } from 'src/components/responsive-carousel-grid';

// ----------------------------------------------------------------------

type RoadmapPhase = {
  phase: string;
  time: string;
  title: string;
  description: string;
  color: 'info' | 'secondary' | 'error' | 'warning';
  progress: number; // 0-100
};

export function HomeRoadmap({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const { t } = useTranslate();

  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: { xs: 1, sm: 2 },
  });

  const ROADMAP_PHASES: RoadmapPhase[] = useMemo(
    () => [
      {
        phase: t('roadmap.phases.p1.label'),
        time: t('roadmap.phases.p1.time'),
        title: t('roadmap.phases.p1.title'),
        description: t('roadmap.phases.p1.description'),
        color: 'info',
        progress: 20,
      },
      {
        phase: t('roadmap.phases.p2.label'),
        time: t('roadmap.phases.p2.time'),
        title: t('roadmap.phases.p2.title'),
        description: t('roadmap.phases.p2.description'),
        color: 'secondary',
        progress: 0,
      },
      {
        phase: t('roadmap.phases.p3.label'),
        time: t('roadmap.phases.p3.time'),
        title: t('roadmap.phases.p3.title'),
        description: t('roadmap.phases.p3.description'),
        color: 'error',
        progress: 0,
      },
      {
        phase: t('roadmap.phases.p4.label'),
        time: t('roadmap.phases.p4.time'),
        title: t('roadmap.phases.p4.title'),
        description: t('roadmap.phases.p4.description'),
        color: 'warning',
        progress: 0,
      },
    ],
    [t]
  );

  return (
    <Box
      id="roadmap"
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
        <Container sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>


          {/* Título Scifi */}
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
                {t('roadmap.title')}
              </Box>
              <Box
                component="span"
                sx={{
                  color: 'warning.main',
                  ml: { xs: 0, md: 1.5 },
                  display: { xs: 'block', md: 'inline' },
                }}
              >
                {t('roadmap.title_highlight')}
              </Box>
            </Typography>
          </m.div>

          {/* Subtítulo Técnico */}
          <m.div variants={varFade('inUp')}>
            <Typography
              sx={{
                mt: 3,
                mx: 'auto',
                maxWidth: 560,
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'text.secondary',
              }}
            >
              {t('roadmap.description')}
            </Typography>
          </m.div>

          {/* ── GRID E CAROUSEL DE FASES ── */}
          <Box sx={{ mt: { xs: 8, md: 10 } }}>
            <ResponsiveCarouselGrid
              data={ROADMAP_PHASES}
              carousel={carousel}
              gridColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
              gridGap={3}
              renderItem={(item, index) => {
                const cardColor = theme.palette[item.color].main;

                return (
                  <m.div variants={varFade('inUp', { distance: 24 })} style={{ height: '100%' }}>
                    <CyberCard
                      sx={{
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        minHeight: 340,
                        textAlign: 'left',
                        transition: theme.transitions.create(['transform', 'box-shadow']),
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: `0 0 25px 0 ${alpha(theme.palette.info.main, 0.2)}`,
                        },
                      }}
                    >
                      {/* Phase + Time: Orbitron */}
                      <Typography
                        component="div"
                        sx={{
                          fontFamily: "'Orbitron', sans-serif",
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: cardColor,
                          zIndex: 3,
                          position: 'relative',
                        }}
                      >
                        {item.phase} • {item.time}
                      </Typography>

                      {/* Title: Orbitron */}
                      <Typography
                        component="h3"
                        sx={{
                          mt: 1,
                          mb: 2,
                          fontFamily: "'Orbitron', sans-serif",
                          fontWeight: 800,
                          fontSize: { xs: 18, md: 22 },
                          letterSpacing: '0.04em',
                          color: 'common.white',
                          zIndex: 3,
                          position: 'relative',
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        sx={{
                          fontSize: '0.9375rem',
                          lineHeight: 1.75,
                          color: 'text.secondary',
                          zIndex: 3,
                          position: 'relative',
                          flexGrow: 1,
                        }}
                      >
                        {item.description}
                      </Typography>

                      {/* ── BARRA DE PROGRESSO ── */}
                      <Box sx={{ mt: 3, position: 'relative', zIndex: 3 }}>
                        {/* Label + % */}
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 0.8,
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Orbitron', sans-serif",
                              fontSize: 10,
                              fontWeight: 700,
                              letterSpacing: '0.18em',
                              textTransform: 'uppercase',
                              color: alpha(cardColor, 0.8),
                            }}
                          >
                            PROGRESSO
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "'Orbitron', sans-serif",
                              fontSize: 11,
                              fontWeight: 800,
                              color: cardColor,
                            }}
                          >
                            {item.progress}%
                          </Typography>
                        </Box>

                        {/* Track */}
                        <Box
                          sx={{
                            width: '100%',
                            height: 6,
                            borderRadius: 99,
                            bgcolor: alpha(cardColor, 0.12),
                            overflow: 'hidden',
                            position: 'relative',
                          }}
                        >
                          {/* Fill */}
                          <Box
                            sx={{
                              height: '100%',
                              width: `${item.progress}%`,
                              borderRadius: 99,
                              background: `linear-gradient(90deg, ${alpha(cardColor, 0.6)} 0%, ${cardColor} 100%)`,
                              boxShadow: `0 0 10px 2px ${alpha(cardColor, 0.5)}`,
                              transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                          />
                        </Box>
                      </Box>
                    </CyberCard>
                  </m.div>
                );
              }}
            />
          </Box>
        </Container>
      </MotionViewport>
    </Box>
  );
}
