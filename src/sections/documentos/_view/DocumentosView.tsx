'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { HomeBackground } from 'src/components/background';
import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { CyberButton } from 'src/components/cyber-button';

// ----------------------------------------------------------------------

const DOCUMENTS = [
  {
    id: 'doc-1',
    title: 'Regulamento Oficial FFC',
    category: 'Geral',
    description: 'Regras detalhadas de combate, critérios de pontuação, faltas e chaveamento do Grand Prix.',
    size: '2.4 MB',
    url: '#',
  },
  {
    id: 'doc-2',
    title: 'Manual de Pesagem',
    category: 'Atletas',
    description: 'Cronograma oficial de pesagem, trajes permitidos, tolerância de peso e punições.',
    size: '1.1 MB',
    url: '#',
  },
  {
    id: 'doc-3',
    title: 'Termo de Responsabilidade Médica',
    category: 'Atletas',
    description: 'Documento obrigatório de aptidão física e liberação de direitos de imagem para o evento.',
    size: '850 KB',
    url: '#',
  },
  {
    id: 'doc-4',
    title: 'Guia de Academias Parceiras',
    category: 'Academias',
    description: 'Regras para inscrição de equipes completas, alojamento e distribuição de lucros/PPV.',
    size: '3.2 MB',
    url: '#',
  },
];

// ----------------------------------------------------------------------

export function DocumentosView() {
  const theme = useTheme();

  return (
    <>
      <HomeBackground />

      <Box
        component="main"
        sx={{
          position: 'relative',
          zIndex: 1,
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 15 },
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#fff',
                textShadow: '0 4px 40px rgba(0,0,0,0.8)',
              }}
            >
              Documentos Oficiais
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.6)',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: 16, md: 18 },
              }}
            >
              Acesse todos os regulamentos, guias de pesagem e formulários obrigatórios para participação no Final Fight Combat.
            </Typography>
          </Stack>

          {/* Document Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              },
              gap: 4,
            }}
          >
            {DOCUMENTS.map((doc) => (
              <CyberCard
                key={doc.id}
                sx={{
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  borderColor: alpha(theme.palette.warning.main, 0.2),
                  transition: theme.transitions.create(['all']),
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: alpha(theme.palette.warning.main, 0.6),
                    boxShadow: `0 0 40px ${alpha(theme.palette.warning.main, 0.15)}`,
                    transform: 'translateY(-4px)',
                    '& .doc-icon': {
                      transform: 'scale(1.1) rotate(-5deg)',
                      color: theme.palette.warning.main,
                    },
                  },
                }}
              >
                {/* Glow Effect on Hover */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 150,
                    height: 150,
                    background: `radial-gradient(circle, ${alpha(theme.palette.warning.main, 0.1)} 0%, transparent 70%)`,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                  }}
                />

                <Stack direction="row" alignItems="flex-start" spacing={2.5}>
                  <Box
                    className="doc-icon"
                    sx={{
                      width: 56,
                      height: 56,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 1.5,
                      bgcolor: alpha(theme.palette.warning.main, 0.1),
                      color: alpha(theme.palette.warning.main, 0.7),
                      transition: theme.transitions.create(['all']),
                      flexShrink: 0,
                    }}
                  >
                    <Iconify icon={"solar:document-text-bold-duotone" as any} width={32} />
                  </Box>

                  <Stack spacing={1} flexGrow={1}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.warning.main,
                          fontWeight: 700,
                          letterSpacing: 1,
                          textTransform: 'uppercase',
                        }}
                      >
                        {doc.category}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                        {doc.size}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="h6"
                      sx={{
                        color: '#fff',
                        fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                        lineHeight: 1.3,
                      }}
                    >
                      {doc.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                      {doc.description}
                    </Typography>
                  </Stack>
                </Stack>

                <CyberButton
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  glowColor="warning"
                  endIcon={<Iconify icon={"solar:download-minimalistic-bold" as any} />}
                  sx={{ mt: 'auto', height: 44, fontSize: 13 }}
                >
                  Baixar PDF
                </CyberButton>
              </CyberCard>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
