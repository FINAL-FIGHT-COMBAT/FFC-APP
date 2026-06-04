'use client';

import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const PRIZES = [
  {
    title: 'SELETIVAS',
    subtitle: 'Categorias de Peso',
    description: 'A premiação para os campeões de cada categoria de peso nas seletivas abertas.',
    accentColor: '#3B82F6', // Azul
    icon: 'solar:medal-ribbons-star-bold',
    items: [
      { text: 'Medalha Exclusiva FFC (Ouro, Prata, Bronze)', icon: 'solar:medal-ribbons-star-bold' },
      { text: 'Kit de Suplementação Oficial', icon: 'solar:box-minimalistic-bold' },
      { text: 'Vaga Garantida na Próxima Edição', icon: 'solar:ticket-bold' },
      { text: 'Destaque nas Redes Sociais do FFC', icon: 'solar:star-bold' },
    ]
  },
  {
    title: 'GRAND PRIX',
    subtitle: 'Absoluto Convidados',
    description: 'O prêmio máximo disputado apenas pelos atletas de elite convidados para o GP.',
    accentColor: '#EAB308', // Dourado
    icon: 'solar:cup-star-bold',
    isMain: true,
    prizeMoney: 'R$ 10.000',
    items: [
      { text: 'Cinturão de Campeão GP FFC', icon: 'solar:shield-check-bold' },
      { text: 'Premiação em Dinheiro (Pix na hora)', icon: 'solar:wad-of-money-bold' },
      { text: 'Troféu Exclusivo de Campeão Absoluto', icon: 'solar:cup-star-bold' },
      { text: 'Contrato para Lutas Casadas Futuras', icon: 'solar:document-bold' },
    ]
  }
];

// ----------------------------------------------------------------------

export function HomePrizes({ sx, ...other }: BoxProps) {
  const theme = useTheme();

  return (
    <Box
      id="premiacao"
      component="section"
      sx={[
        { position: 'relative', py: { xs: 8, md: 15 }, bgcolor: 'transparent', overflow: 'hidden' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          
          {/* ── HEADER ── */}
          <m.div variants={varFade('inUp')}>
            <Stack spacing={2} sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center', alignItems: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  fontWeight: 900,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  color: '#fff',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                }}
              >
                PREMIAÇÃO <Box component="span" sx={{ color: '#EAB308' }}>OFICIAL</Box>
              </Typography>
              
              <Typography sx={{ color: alpha('#fff', 0.6), maxWidth: 600, mx: 'auto' }}>
                Reconhecimento para os verdadeiros guerreiros. Veja o que está em jogo nos tatames do Final Fight Combat.
              </Typography>
            </Stack>
          </m.div>

          {/* ── CARDS DE PREMIAÇÃO ── */}
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {PRIZES.map((prize, index) => (
              <Grid key={prize.title} size={{ xs: 12, md: 6 }}>
                <m.div variants={varFade('inUp', { distance: 40 })} style={{ height: '100%' }}>
                  <CyberCard
                    sx={{
                      height: '100%',
                      p: { xs: 3, md: 5 },
                      display: 'flex',
                      flexDirection: 'column',
                      transition: theme.transitions.create(['transform', 'box-shadow']),
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 0 25px 0 ${alpha(theme.palette.info.main, 0.2)}`,
                      }
                    }}
                  >
                    {/* Badge "Main Event" para o GP */}
                    {prize.isMain && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          bgcolor: prize.accentColor,
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          color: '#000',
                          fontWeight: 900,
                          fontSize: 12,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                          boxShadow: `0 8px 24px ${alpha(prize.accentColor, 0.4)}`,
                        }}
                      >
                        MAIN EVENT
                      </Box>
                    )}

                    {/* Icon Header */}
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: alpha(prize.accentColor, 0.1),
                          color: prize.accentColor,
                        }}
                      >
                        <Iconify icon={prize.icon as any} width={32} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: 12, fontWeight: 700, color: alpha(prize.accentColor, 0.8), letterSpacing: '0.1em', textTransform: 'uppercase', mb: 0.5 }}>
                          {prize.subtitle}
                        </Typography>
                        <Typography sx={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif', lineHeight: 1 }}>
                          {prize.title}
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography sx={{ color: alpha('#fff', 0.5), fontSize: '0.95rem', mb: 4 }}>
                      {prize.description}
                    </Typography>

                    {/* Prize Money Highlight (Apenas GP) */}
                    {prize.prizeMoney && (
                      <Box
                        sx={{
                          mb: 4,
                          py: 3,
                          textAlign: 'center',
                          borderRadius: 2,
                          bgcolor: alpha(prize.accentColor, 0.05),
                          border: `1px dashed ${alpha(prize.accentColor, 0.3)}`,
                        }}
                      >
                        <Typography sx={{ fontSize: 12, color: alpha(prize.accentColor, 0.8), letterSpacing: '0.1em', textTransform: 'uppercase', mb: 1 }}>
                          PRÊMIO TOTAL
                        </Typography>
                        <Typography sx={{ fontSize: '3rem', fontWeight: 900, color: prize.accentColor, fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif', lineHeight: 1 }}>
                          {prize.prizeMoney}
                        </Typography>
                      </Box>
                    )}

                    {/* Lista de Prêmios */}
                    <Stack spacing={2} sx={{ mt: 'auto' }}>
                      <Typography sx={{ fontSize: 11, fontWeight: 800, color: alpha('#fff', 0.3), letterSpacing: '0.1em', textTransform: 'uppercase', mb: 1 }}>
                        O que inclui:
                      </Typography>
                      {prize.items.map((item, i) => (
                        <Stack key={i} direction="row" alignItems="center" spacing={1.5}>
                          <Box
                            sx={{
                              width: 24, height: 24, borderRadius: '50%',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              bgcolor: alpha(prize.accentColor, 0.1),
                              color: prize.accentColor,
                              flexShrink: 0
                            }}
                          >
                            <Iconify icon={item.icon as any} width={14} />
                          </Box>
                          <Typography sx={{ color: '#fff', fontSize: '0.95rem', fontWeight: 500 }}>
                            {item.text}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                  </CyberCard>
                </m.div>
              </Grid>
            ))}
          </Grid>
          
        </Container>
      </MotionViewport>
    </Box>
  );
}
