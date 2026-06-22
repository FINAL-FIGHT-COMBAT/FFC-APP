'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { HomeBackground } from 'src/components/background';

// ----------------------------------------------------------------------

export function EcosystemView() {
  return (
    <>
      <HomeBackground />

      <Box component="main" sx={{ position: 'relative', zIndex: 1, py: 12 }}>
        <Container>
          <Box sx={{ mb: 10, textAlign: 'center' }}>
            <Typography variant="h1" sx={{ mb: 3 }}>
              Ecossistema FFC
            </Typography>
            <Typography variant="h4" sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
              Uma infraestrutura esportiva completa que integra atletas, academias e apoiadores.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.05),
                  border: (theme) => `1px solid ${theme.palette.primary.main}`,
                }}
              >
                <Typography variant="h3" color="primary.main" sx={{ mb: 2 }}>
                  Gestão de Lutas
                </Typography>
                <Typography variant="body1">
                  Inscrições simplificadas, cronograma de etapas e acompanhamento de chaves ao vivo
                  via painel digital.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  bgcolor: (theme) => alpha(theme.palette.secondary.main, 0.05),
                  border: (theme) => `1px solid ${theme.palette.secondary.main}`,
                }}
              >
                <Typography variant="h3" color="secondary.main" sx={{ mb: 2 }}>
                  Ranking Unificado
                </Typography>
                <Typography variant="body1">
                  Pontuação institucional clara e transparente para todas as academias e lutadores
                  afiliados.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  bgcolor: (theme) => alpha(theme.palette.info.main, 0.05),
                  border: (theme) => `1px solid ${theme.palette.info.main}`,
                }}
              >
                <Typography variant="h3" color="info.main" sx={{ mb: 2 }}>
                  SocialFi & Fãs
                </Typography>
                <Typography variant="body1">
                  Engajamento de torcedores, venda direta de ingressos e ativações interativas da
                  comunidade.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
