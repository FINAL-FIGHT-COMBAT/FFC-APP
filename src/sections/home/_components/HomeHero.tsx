'use client';

import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

// ⏱ Data do evento — ajuste conforme necessário
const EVENT_DATE = new Date('2026-07-12T08:00:00');

const GOLD = '#EAB308';
const GOLD_DARK = '#CA8A04';

const mdKey: Breakpoint = 'md';

// ----------------------------------------------------------------------
// Dados estáticos do evento
// ----------------------------------------------------------------------

const STATS = [
  { value: '+300', label: 'ATLETAS', icon: 'solar:users-group-rounded-bold' },
  { value: '8', label: 'TATAMES', icon: 'solar:map-bold' },
  { value: '2', label: 'MODALIDADES', icon: 'solar:medal-ribbons-star-bold' },
  { value: 'R$ 100K', label: 'EM PRÊMIOS', icon: 'solar:cup-star-bold' },
];

// ----------------------------------------------------------------------
// Hook de contagem regressiva
// ----------------------------------------------------------------------

type TimeLeft = { dias: number; horas: number; minutos: number; segundos: number };

function useCountdown(target: Date): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const calc = () => {
      const distance = target.getTime() - Date.now();
      if (distance <= 0) {
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
        return;
      }
      setTimeLeft({
        dias: Math.floor(distance / 86_400_000),
        horas: Math.floor((distance % 86_400_000) / 3_600_000),
        minutos: Math.floor((distance % 3_600_000) / 60_000),
        segundos: Math.floor((distance % 60_000) / 1_000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

// ----------------------------------------------------------------------
// Subcomponente: bloco do countdown
// ----------------------------------------------------------------------

function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <Stack alignItems="center" spacing={1}>
      <Box
        sx={{
          width: { xs: 72, sm: 88, md: 104 },
          height: { xs: 72, sm: 88, md: 104 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(10,10,10,0.75)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 2,
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
            fontWeight: 900,
            fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
            color: '#fff',
            lineHeight: 1,
          }}
        >
          {String(value).padStart(2, '0')}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.45)',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
}

// ----------------------------------------------------------------------
// Componente Principal
// ----------------------------------------------------------------------

export function HomeHero({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const timeLeft = useCountdown(EVENT_DATE);

  return (
    <Box
      component="section"
      sx={[
        {
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'transparent',
          overflow: 'hidden',
          [theme.breakpoints.up(mdKey)]: {
            mt: `calc(var(--layout-header-desktop-height) * -1)`,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {/* ── GLOW SUTIL (não bloqueia o fundo animado) ── */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: `radial-gradient(ellipse at 50% 60%, rgba(180,130,0,0.10) 0%, transparent 65%)`,
        }}
      />

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: { xs: 12, md: 10 },
          pb: 4,
        }}
      >
        <Container maxWidth="lg">
          <Stack alignItems="center" spacing={{ xs: 2.5, md: 3 }}>

            {/* Badge — Fase do Evento */}
            <Box
              sx={{
                px: 2.5,
                py: 0.75,
                borderRadius: 10,
                bgcolor: 'rgba(0,0,0,0.55)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.85)',
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                }}
              >
                FASE 1 · AS SELETIVAS
              </Typography>
            </Box>

            {/* Título */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  fontWeight: 900,
                  fontSize: { xs: '2.8rem', sm: '4.2rem', md: '6rem', lg: '7rem' },
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  lineHeight: 0.92,
                  display: 'block',
                  whiteSpace: 'nowrap',
                  textShadow: '0 4px 40px rgba(0,0,0,0.6)',
                }}
              >
                FINAL FIGHT
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  fontWeight: 900,
                  fontSize: { xs: '2.8rem', sm: '4.2rem', md: '6rem', lg: '7rem' },
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: GOLD,
                  lineHeight: 1.05,
                  display: 'block',
                  whiteSpace: 'nowrap',
                  textShadow: `0 4px 40px ${alpha(GOLD, 0.4)}`,
                }}
              >
                COMBAT
              </Typography>
            </Box>

            {/* Countdown */}
            <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 2.5 }}>
              <CountdownBlock value={timeLeft.dias} label="Dias" />
              <CountdownBlock value={timeLeft.horas} label="Horas" />
              <CountdownBlock value={timeLeft.minutos} label="Minutos" />
              <CountdownBlock value={timeLeft.segundos} label="Segundos" />
            </Stack>

            {/* Botões CTA */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              {/* Primário — Dourado */}
              <Button
                component={RouterLink}
                href="/#categorias"
                endIcon={<Iconify icon={"solar:arrow-right-bold" as any} />}
                sx={{
                  height: 52,
                  px: 4,
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  fontWeight: 800,
                  fontSize: 12,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  bgcolor: GOLD,
                  color: '#0A0A0A',
                  borderRadius: 1,
                  transition: theme.transitions.create(['all']),
                  '&:hover': {
                    bgcolor: GOLD_DARK,
                    boxShadow: `0 0 28px ${alpha(GOLD, 0.55)}`,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                INSCREVA-SE AGORA
              </Button>

              {/* Secundário — Outline */}
              <Button
                component={RouterLink}
                href="/#categorias"
                sx={{
                  height: 52,
                  px: 4,
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  fontWeight: 800,
                  fontSize: 12,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  bgcolor: 'rgba(255,255,255,0.06)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 1,
                  transition: theme.transitions.create(['all']),
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.12)',
                    borderColor: 'rgba(255,255,255,0.4)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                SAIBA MAIS
              </Button>
            </Stack>

          </Stack>
        </Container>
      </Box>

      {/* ── BARRA DE STATS (rodapé do hero) ── */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          borderTop: `2px solid ${alpha(GOLD, 0.5)}`,
          bgcolor: 'transparent',
          boxShadow: `0 -1px 40px ${alpha(GOLD, 0.08)}`,
          py: { xs: 3, md: 4 },
        }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: `${alpha(GOLD, 0.15)}` }}
              />
            }
          >
            {STATS.map((stat) => (
              <Stack key={stat.label} alignItems="center" spacing={0.75} sx={{ px: { xs: 1, md: 3 } }}>
                {/* Ícone */}
                <Box
                  sx={{
                    width: { xs: 32, md: 38 },
                    height: { xs: 32, md: 38 },
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: alpha(GOLD, 0.12),
                    border: `1px solid ${alpha(GOLD, 0.25)}`,
                    mb: 0.5,
                  }}
                >
                  <Iconify
                    icon={stat.icon as any}
                    width={18}
                    sx={{ color: GOLD }}
                  />
                </Box>

                {/* Valor */}
                <Typography
                  sx={{
                    fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: '1.4rem', sm: '1.7rem', md: '2.1rem' },
                    color: GOLD,
                    lineHeight: 1,
                    textShadow: `0 0 20px ${alpha(GOLD, 0.4)}`,
                  }}
                >
                  {stat.value}
                </Typography>

                {/* Label */}
                <Typography
                  sx={{
                    fontSize: { xs: 8, md: 10 },
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.45)',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  }}
                >
                  {stat.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
