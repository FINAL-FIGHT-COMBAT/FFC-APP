'use client';

// ----------------------------------------------------------------------
import type { BoxProps } from '@mui/material/Box';

import { useMemo } from 'react';
import { m } from 'framer-motion';

// ----------------------------------------------------------------------
// MUI
// ----------------------------------------------------------------------
import Box from '@mui/material/Box';
import { CyberCard } from 'src/components/cyber-card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------
// APP
// ----------------------------------------------------------------------
import { useTranslate } from 'src/locales';

import { varFade, MotionViewport } from 'src/components/animate';

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
          py: { xs: 10, md: 15 },
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
          {/* Badge Padronizada */}
          <m.div variants={varFade('inUp')}>
            <Box
              sx={{
                display: 'inline-block',
                border: `1px solid ${theme.palette.info.main}`,
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
                mb: 5,
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'info.main',
                }}
              >
                {t('roadmap.badge')}
              </Typography>
            </Box>
          </m.div>

          {/* Título Scifi */}
          <m.div variants={varFade('inUp')}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 900,
                fontSize: { xs: '2.2rem', md: '3rem' },
                letterSpacing: '0.08em',
                lineHeight: 1.2,
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
                fontFamily: "'Public Sans', sans-serif",
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1.7,
                color: '#919EAB',
              }}
            >
              {t('roadmap.description')}
            </Typography>
          </m.div>

          {/* Grid de Fases com Bordas Reativas */}
          <Grid
            container
            display="grid"
            gridTemplateColumns={{ xs: '1fr', md: '1fr 16px 1fr' }}
            rowGap={{ xs: 3, md: 4 }}
            columnGap={3}
            sx={{ mt: { xs: 8, md: 10 } }}
          >
            {ROADMAP_PHASES.map((item, index) => {
              const isEven = index % 2 === 0;
              const cardColor = theme.palette[item.color].main;

              return (
                <Grid
                  key={item.title}
                  gridColumn={{ xs: '1 / -1', md: isEven ? '1 / 2' : '3 / 4' }}
                  gridRow={{ md: index + 1 }}
                  sx={{ textAlign: { xs: 'center', md: isEven ? 'right' : 'left' } }}
                >
                  <m.div variants={isEven ? varFade('inRight') : varFade('inLeft')}>
                    <CyberCard
                      sx={{
                        p: 4,
                        display: 'inline-block',
                        width: '100%',
                        maxWidth: 400,
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

                      {/* Description: Public Sans */}
                      <Typography
                        sx={{
                          fontFamily: "'Public Sans', sans-serif",
                          fontSize: 15,
                          lineHeight: 1.75,
                          color: '#919EAB',
                          zIndex: 3,
                          position: 'relative',
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
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </MotionViewport>
    </Box>
  );
}
