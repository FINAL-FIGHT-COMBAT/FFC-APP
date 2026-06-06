'use client';

import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme, keyframes } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { varFade, MotionViewport } from 'src/components/animate';
import { Carousel, useCarousel, CarouselArrowFloatButtons } from 'src/components/carousel';
import { CyberButton } from 'src/components/cyber-button';

// ----------------------------------------------------------------------

type Athlete = {
  id: string;
  name: string;
  nickname?: string;
  team: string;
  belt: string;
  beltColor: string;
  weightClass: string;
  city: string;
  titles: string[];
  photoUrl: string;
  isGP?: boolean;
};

const BELT_COLOR: Record<string, string> = {
  Preta:  '#6B7280',
  Marrom: '#92400E',
  Roxa:   '#7C3AED',
  Azul:   '#1D4ED8',
  Branca: '#D1D5DB',
};

const pulseKeyframe = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

// ----------------------------------------------------------------------
// DADOS DOS ATLETAS — atualize com os convidados reais do evento
// ----------------------------------------------------------------------
const ATHLETES: Athlete[] = Array.from({ length: 8 }).map((_, index) => ({
  id: `athlete-${index + 1}`,
  name: 'Atleta Convidado',
  nickname: 'EM BREVE',
  team: 'Equipe a confirmar',
  belt: 'Preta',
  beltColor: BELT_COLOR.Preta,
  weightClass: 'A DEFINIR',
  city: 'Local a confirmar',
  titles: ['Aguardando confirmação do atleta'],
  photoUrl: '/assets/images/convidados/fallback.png',
  isGP: true,
}));

// ----------------------------------------------------------------------

function AthleteCard({ athlete }: { athlete: Athlete }) {
  const theme = useTheme();
  const accentColor = '#EAB308';

  return (
    <m.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{ height: '100%' }}
    >
      <CyberCard
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: theme.transitions.create(['all'], {
            duration: theme.transitions.duration.standard,
          }),
          boxShadow: `0 8px 32px 0 ${alpha(theme.palette.common.black, 0.5)}`,
          '&:hover': {
            boxShadow: `0 0 25px 0 ${alpha(theme.palette.info.main, 0.2)}`,
          },
        }}
      >
        {/* ── GP BADGE ── */}
        {athlete.isGP && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 10,
              px: 1,
              py: 0.25,
              borderRadius: 1,
              bgcolor: accentColor,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <Iconify icon="solar:cup-star-bold" width={10} sx={{ color: '#0A0F1E' }} />
            <Typography sx={{ fontSize: 8, fontWeight: 900, color: '#0A0F1E', letterSpacing: '0.1em', fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif' }}>
              GP
            </Typography>
          </Box>
        )}

        {/* ── FOTO ── */}
        <Box sx={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', bgcolor: '#161B22' }}>
          <Image
            alt={athlete.name}
            src={athlete.photoUrl}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              transition: 'transform 0.4s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          />

          {/* Gradient bottom overlay */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '55%',
              background: 'linear-gradient(to top, #0D1117 0%, transparent 100%)',
            }}
          />

          {/* Belt indicator */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{
              position: 'absolute',
              bottom: 8,
              left: 10,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: athlete.beltColor,
                border: athlete.belt === 'Preta' ? '1px solid #6B7280' : 'none',
                boxShadow: athlete.belt !== 'Preta' ? `0 0 6px ${alpha(athlete.beltColor, 0.8)}` : 'none',
              }}
            />
            <Typography sx={{ fontSize: 9, fontWeight: 700, color: alpha('#fff', 0.8), fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Faixa {athlete.belt}
            </Typography>
          </Stack>
        </Box>

        {/* ── INFO ── */}
        <Stack sx={{ p: 1.5, gap: 1, flex: 1 }}>

          {/* Nome e apelido */}
          <Box>
            {athlete.nickname && (
              <Typography sx={{ fontSize: 9, fontWeight: 700, color: accentColor, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif', mb: 0.2 }}>
                &quot;{athlete.nickname}&quot;
              </Typography>
            )}
            <Typography noWrap sx={{ fontSize: '0.9rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif', lineHeight: 1.1, textTransform: 'uppercase' }}>
              {athlete.name}
            </Typography>
          </Box>

          {/* Team + City */}
          <Stack spacing={0.25}>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Iconify icon="solar:shield-check-bold" width={11} sx={{ color: alpha('#fff', 0.4), flexShrink: 0 }} />
              <Typography noWrap sx={{ fontSize: 10, fontWeight: 600, color: alpha('#fff', 0.6) }}>
                {athlete.team}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Iconify icon="solar:flag-bold" width={11} sx={{ color: alpha('#fff', 0.4), flexShrink: 0 }} />
              <Typography noWrap sx={{ fontSize: 10, color: alpha('#fff', 0.45) }}>
                {athlete.city}
              </Typography>
            </Stack>
          </Stack>

          {/* Categoria de peso */}
          <Box
            sx={{
              px: 1, py: 0.25, borderRadius: 0.75,
              bgcolor: alpha('#fff', 0.05),
              border: `1px solid ${alpha('#fff', 0.08)}`,
              display: 'inline-flex',
              alignSelf: 'flex-start',
            }}
          >
            <Typography sx={{ fontSize: 9, fontWeight: 800, color: alpha('#fff', 0.6), fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {athlete.weightClass}
            </Typography>
          </Box>

          {/* Títulos */}
          <Box sx={{ borderTop: `1px solid ${alpha('#fff', 0.06)}`, pt: 1 }}>
            <Typography sx={{ fontSize: 8, fontWeight: 700, color: alpha('#fff', 0.3), letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif', mb: 0.5 }}>
              Títulos
            </Typography>
            <Stack spacing={0.25} sx={{ minHeight: 32 }}>
              {athlete.titles.slice(0, 2).map((title, i) => (
                <Stack key={i} direction="row" alignItems="center" spacing={0.5}>
                  <Iconify icon="solar:cup-star-bold" width={10} sx={{ color: accentColor, flexShrink: 0 }} />
                  <Typography noWrap sx={{ fontSize: 9, color: alpha('#fff', 0.55), lineHeight: 1.2 }}>
                    {title}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </CyberCard>
    </m.div>
  );
}

// ----------------------------------------------------------------------

export function HomeAthletes({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: { xs: 1, sm: 2, md: 3 },
  });

  return (
    <Box
      id="atletas"
      component="section"
      sx={[
        { position: 'relative', py: { xs: 8, md: 15 }, overflow: 'hidden', bgcolor: 'transparent' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        <Container sx={{ position: 'relative', zIndex: 1 }}>

          {/* ── HEADER ── */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ md: 'flex-end' }}
            justifyContent="space-between"
            sx={{ mb: 8, gap: 4 }}
          >
            <m.div variants={varFade('inUp')}>
              <Stack sx={{ alignItems: 'flex-start', textAlign: 'left' }}>
                {/* Badge */}
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                  <Box sx={{ border: '1px solid rgba(234,179,8,0.6)', borderRadius: 2, px: 1.5, py: 0.5 }}>
                    <Typography sx={{ fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#EAB308' }}>
                      GRAND PRIX
                    </Typography>
                  </Box>
                  <Box sx={{ border: '1px solid rgba(239,68,68,0.5)', borderRadius: 2, px: 1.5, py: 0.5, display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#EF4444', animation: `${pulseKeyframe} 1.5s infinite` }} />
                    <Typography sx={{ fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#EF4444' }}>
                      AO VIVO
                    </Typography>
                  </Box>
                </Stack>

                {/* Título */}
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                    color: '#fff',
                    lineHeight: 1.1,
                    textTransform: 'uppercase',
                    mb: 2,
                  }}
                >
                  Atletas e{' '}
                  <Box component="span" sx={{ color: '#EAB308' }}>
                    Convidados
                  </Box>
                </Typography>

                <Typography sx={{ fontSize: '1rem', color: alpha('#fff', 0.5), maxWidth: 560, lineHeight: 1.7 }}>
                  Os maiores nomes do Jiu-Jitsu Brasileiro se enfrentam no GP pelo
                  <Box component="span" sx={{ color: '#EAB308', fontWeight: 700 }}> prêmio em dinheiro</Box>.
                  Não perca!
                </Typography>
              </Stack>
            </m.div>

            {/* BOTÃO: VER TODAS AS CHAVES */}
            <m.div variants={varFade('inRight')}>
              <CyberButton
                component={RouterLink}
                href={paths.chaves}
                endIcon={<Iconify icon="solar:double-alt-arrow-right-bold-duotone" />}
                glowColor="info"
              >
                VER TODAS AS CHAVES
              </CyberButton>
            </m.div>
          </Stack>

          {/* ── CAROUSEL (Mobile & Tablet: xs, sm) ── */}
          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'relative' }}>
            <CarouselArrowFloatButtons {...carousel.arrows} options={carousel.options} />
            <Carousel carousel={carousel} sx={{ px: 0.5, py: 2 }}>
              {ATHLETES.map((athlete) => (
                <Box
                  key={athlete.id}
                  component={m.div}
                  variants={varFade('in')}
                  sx={{ py: { xs: 2, md: 3 } }}
                >
                  <AthleteCard athlete={athlete} />
                </Box>
              ))}
            </Carousel>
          </Box>

          {/* ── GRID DE CARDS (Desktop: md, lg, xl) ── */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Grid container spacing={2.5} justifyContent="center">
              {ATHLETES.map((athlete) => (
                <Grid key={athlete.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <m.div variants={varFade('inUp', { distance: 24 })} style={{ height: '100%' }}>
                    <AthleteCard athlete={athlete} />
                  </m.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* ── NOTA INFERIOR ── */}
          <m.div variants={varFade('inUp')}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignItems="center"
              justifyContent="center"
              spacing={1}
              sx={{ mt: 6 }}
            >
              <Iconify icon="solar:info-circle-bold" width={16} sx={{ color: alpha('#fff', 0.3) }} />
              <Typography sx={{ fontSize: 12, color: alpha('#fff', 0.35), textAlign: 'center' }}>
                Lista de atletas sujeita a alterações. Novos confirmados serão anunciados nas redes sociais.
              </Typography>
            </Stack>
          </m.div>

        </Container>
      </MotionViewport>
    </Box>
  );
}
