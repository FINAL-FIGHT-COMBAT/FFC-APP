'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { HomeBackground } from 'src/components/background';
import { Iconify } from 'src/components/iconify';
import { BracketMatch } from './BracketMatch';

// ----------------------------------------------------------------------

const DUMMY_PLAYERS = [
  { name: 'Sandro Silva' },
  { name: 'Marcos Paulo' },
  { name: 'João Victor' },
  { name: 'Lucas Gabriel' },
  { name: 'Pedro Henrique' },
  { name: 'Gustavo Lima' },
  { name: 'Felipe Santos' },
  { name: 'Rafael Costa' },
  { name: 'Thiago Oliveira' },
  { name: 'Bruno Alves' },
  { name: 'Caio Ribeiro' },
  { name: 'Rodrigo Souza' },
  { name: 'Marcelo Vieira' },
  { name: 'Fernando Gomes' },
  { name: 'Eduardo Martins' },
  { name: 'Alexandre Pato' },
];

const getMatch = (p1: number, p2: number) => ({
  player1: DUMMY_PLAYERS[p1] || { name: '' },
  player2: DUMMY_PLAYERS[p2] || { name: '' },
});

// ----------------------------------------------------------------------

export function ChavesView() {
  const theme = useTheme();

  return (
    <>
      <HomeBackground />

      <Box
        component="main"
        sx={{
          position: 'relative',
          zIndex: 1,
          pt: { xs: 15, md: 15 },
          pb: { xs: 10, md: 15 },
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: 1600 }}>


          {/* Fight Card Pyramid Wrapper with Horizontal Scroll */}
          <Box
            sx={{
              width: '100%',
              overflowX: 'auto',
              pb: 4,
              pt: 2,
              '&::-webkit-scrollbar': { height: 8 },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: alpha(theme.palette.error.main, 0.5),
                borderRadius: 4,
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 'max-content',
                margin: '0 auto',
                px: 4,
                gap: 8, // Space between rows (levels of the pyramid)
              }}
            >
              
              {/* LEVEL 4: THE GRAND FINAL */}
              <Stack alignItems="center" spacing={4}>
                {/* Glowing Trophy Box */}
                <Box
                  sx={{
                    textAlign: 'center',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(10px)',
                    p: 2,
                    px: 4,
                    borderRadius: 2,
                    border: `1px solid ${alpha(theme.palette.warning.main, 0.4)}`,
                    boxShadow: `0 0 60px ${alpha(theme.palette.warning.main, 0.2)}`,
                  }}
                >
                  <Iconify icon="solar:cup-star-bold" width={48} sx={{ color: theme.palette.warning.main, mb: 1 }} />
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                      color: theme.palette.warning.main,
                      fontWeight: 800,
                      textTransform: 'uppercase',
                    }}
                  >
                    GRANDE FINAL
                  </Typography>
                </Box>

                <BracketMatch 
                  player1={{ name: '' }} 
                  player2={{ name: '' }} 
                  matchTitle="CINTURÃO ABSOLUTO"
                  subtitle="TITLE MATCH / NO-GI"
                  isFinal 
                />
              </Stack>

              {/* LEVEL 3: SEMI FINALS */}
              <Stack direction="row" spacing={12}>
                <BracketMatch 
                  player1={{ name: '' }} 
                  player2={{ name: '' }} 
                  matchTitle="SEMI FINAL 1"
                />
                <BracketMatch 
                  player1={{ name: '' }} 
                  player2={{ name: '' }} 
                  matchTitle="SEMI FINAL 2"
                />
              </Stack>

              {/* LEVEL 2B: QUARTER FINALS (PARTE 2) */}
              <Stack direction="row" spacing={6}>
                <BracketMatch player1={{ name: '' }} player2={{ name: '' }} matchTitle="QUARTAS DE FINAL 1" />
                <BracketMatch player1={{ name: '' }} player2={{ name: '' }} matchTitle="QUARTAS DE FINAL 2" />
                <BracketMatch player1={{ name: '' }} player2={{ name: '' }} matchTitle="REPESCAGEM 2" subtitle="QUARTAS DE FINAL" />
              </Stack>

              {/* LEVEL 2A: QUARTER FINALS (PARTE 1) */}
              <Stack direction="row" spacing={6}>
                <BracketMatch player1={{ name: '' }} player2={{ name: '' }} matchTitle="QUARTAS DE FINAL 3" />
                <BracketMatch player1={{ name: '' }} player2={{ name: '' }} matchTitle="QUARTAS DE FINAL 4" />
                <BracketMatch player1={{ name: '' }} player2={{ name: '' }} matchTitle="REPESCAGEM 1" subtitle="QUARTAS DE FINAL" />
              </Stack>

              {/* LEVEL 1B: ROUND OF 16 (PARTE 2) */}
              <Stack direction="row" spacing={4}>
                <BracketMatch {...getMatch(0, 1)} matchTitle="OITAVAS 1" isSmall />
                <BracketMatch {...getMatch(2, 3)} matchTitle="OITAVAS 2" isSmall />
                <BracketMatch {...getMatch(4, 5)} matchTitle="OITAVAS 3" isSmall />
                <BracketMatch {...getMatch(6, 7)} matchTitle="OITAVAS 4" isSmall />
              </Stack>

              {/* LEVEL 1A: ROUND OF 16 (PARTE 1 - BASE) */}
              <Stack direction="row" spacing={4}>
                <BracketMatch {...getMatch(8, 9)} matchTitle="OITAVAS 5" isSmall />
                <BracketMatch {...getMatch(10, 11)} matchTitle="OITAVAS 6" isSmall />
                <BracketMatch {...getMatch(12, 13)} matchTitle="OITAVAS 7" isSmall />
                <BracketMatch {...getMatch(14, 15)} matchTitle="OITAVAS 8" isSmall />
              </Stack>

            </Box>

          </Box>
        </Container>
      </Box>
    </>
  );
}
