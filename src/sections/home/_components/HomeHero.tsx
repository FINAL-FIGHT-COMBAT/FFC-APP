'use client';

import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CyberButton } from 'src/components/cyber-button';
import { Iconify, type IconifyName } from 'src/components/iconify';

// ----------------------------------------------------------------------

// ⏱ Data do evento — ajuste conforme necessário
const EVENT_DATE = new Date('2026-07-12T08:00:00');

const GOLD = '#EAB308';
const GOLD_DARK = '#CA8A04';

const mdKey: Breakpoint = 'md';

// ----------------------------------------------------------------------
// Dados estáticos do evento
// ----------------------------------------------------------------------

const STATS: Array<{ value: string; label: string; icon: IconifyName }> = [
  { value: '+300', label: 'ATLETAS', icon: 'solar:users-group-rounded-bold' },
  { value: '8', label: 'TATAMES', icon: 'mingcute:location-fill' },
  { value: '2', label: 'MODALIDADES', icon: 'eva:award-fill' },
  { value: 'R$ 100K', label: 'EM PRÊMIOS', icon: 'solar:cup-star-bold' },
];

// ----------------------------------------------------------------------
// Hook de contagem regressiva
// ----------------------------------------------------------------------

type TimeLeft = { dias: number; horas: number; minutos: number; segundos: number };

function useCountdown(target: Date): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

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
          width: { xs: 64, sm: 88, md: 104 },
          height: { xs: 64, sm: 88, md: 104 },
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
            fontSize: { xs: '1.75rem', sm: '2.6rem', md: '3.2rem' },
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
          minHeight: { xs: '100svh', md: '100vh' },
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'transparent',
          overflow: 'hidden',
          mt: 'calc(var(--layout-header-mobile-height) * -1)',
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
          pt: { xs: 1, md: 10 },
          pb: 2,
        }}
      >
        <Container maxWidth="lg">
          <Stack alignItems="center" spacing={{ xs: 5, md: 4 }}>
            {/* Título */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  fontWeight: 900,
                  fontSize: { xs: '2.2rem', sm: '3.6rem', md: '5.5rem', lg: '7rem' },
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  lineHeight: { xs: 1.15, md: 1.05 },
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
                  fontSize: { xs: '2.2rem', sm: '3.6rem', md: '5.5rem', lg: '7rem' },
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: GOLD,
                  lineHeight: { xs: 1.15, md: 1.05 },
                  display: 'block',
                  whiteSpace: 'nowrap',
                  textShadow: `0 4px 40px ${alpha(GOLD, 0.4)}`,
                }}
              >
                COMBAT
              </Typography>
            </Box>

            {/* Countdown */}
            <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 3.5 }}>
              <CountdownBlock value={timeLeft.dias} label="Dias" />
              <CountdownBlock value={timeLeft.horas} label="Horas" />
              <CountdownBlock value={timeLeft.minutos} label="Minutos" />
              <CountdownBlock value={timeLeft.segundos} label="Segundos" />
            </Stack>

            {/* Botões CTA */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 3, sm: 1.5 }}
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              {/* Primário — Dourado */}
              <CyberButton
                component={RouterLink}
                href={paths.inscricao}
                endIcon={<Iconify icon="eva:arrow-forward-fill" />}
                glowColor="primary"
                sx={{ width: { xs: '100%', sm: 'auto' } }}
              >
                INSCREVA-SE AGORA
              </CyberButton>

              {/* Secundário — Outline */}
              <CyberButton
                component={RouterLink}
                href="/documentos"
                glowColor="info"
                sx={{ width: { xs: '100%', sm: 'auto' } }}
              >
                DOCUMENTOS
              </CyberButton>
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
          borderBottom: `2px solid ${alpha(GOLD, 0.5)}`,
          bgcolor: 'transparent',
          boxShadow: `0 -1px 40px ${alpha(GOLD, 0.08)}`,
          py: { xs: 2, md: 4 },
        }}
      >
        <Container>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
              gap: { xs: 3, sm: 2 },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {STATS.map((stat) => (
              <Stack
                key={stat.label}
                alignItems="center"
                spacing={0.75}
                sx={{ px: { xs: 1, md: 3 } }}
              >
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
                  <Iconify icon={stat.icon} width={18} sx={{ color: GOLD }} />
                </Box>

                {/* Valor */}
                <Typography
                  sx={{
                    fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: '1.2rem', sm: '1.7rem', md: '2.1rem' },
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
                    fontSize: { xs: 9, md: 10 },
                    fontWeight: 700,
                    letterSpacing: { xs: '0.1em', md: '0.2em' },
                    color: 'rgba(255,255,255,0.45)',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  }}
                >
                  {stat.label}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
