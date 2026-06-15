'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { CyberButton } from 'src/components/cyber-button';
import { StandardPageWrapper } from 'src/components/standard-page';

import { DOCUMENTS, DOCUMENT_CATEGORIES } from 'src/_mock/_documents';
import type { IDocumentConfig } from 'src/_mock/_documents';

// ----------------------------------------------------------------------

export function DocumentosView() {
  const theme = useTheme();
  const router = useRouter();

  const handleDocumentAction = (doc: IDocumentConfig) => {
    if (doc.isReady && doc.readyUrl) {
      router.push(doc.readyUrl);
    } else {
      router.push(`/documento/${doc.slug}`);
    }
  };

  return (
    <StandardPageWrapper>
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
              Portal de Documentos
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.6)',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: 16, md: 18 },
              }}
            >
              Acesso centralizado a todos os regulamentos esportivos, políticas de privacidade, termos de saúde e contratos oficiais do ecossistema FFC.
            </Typography>
          </Stack>

          {/* Categories Loop */}
          {DOCUMENT_CATEGORIES.map((cat) => {
            const categoryDocs = DOCUMENTS.filter((d) => d.category === cat.id);
            if (categoryDocs.length === 0) return null;

            return (
              <Box key={cat.id} sx={{ mb: 8 }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: alpha(theme.palette[cat.color].main, 0.1),
                      color: theme.palette[cat.color].main,
                    }}
                  >
                    <Iconify icon={cat.icon as any} width={28} />
                  </Box>
                  <Typography variant="h4" sx={{ color: '#fff', fontWeight: 800 }}>
                    {cat.title}
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: 'repeat(1, 1fr)',
                      sm: 'repeat(2, 1fr)',
                      md: 'repeat(3, 1fr)',
                    },
                    gap: 3,
                  }}
                >
                  {categoryDocs.map((doc) => (
                    <CyberCard
                      key={doc.slug}
                      sx={{
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderColor: alpha(theme.palette[cat.color].main, 0.2),
                        transition: theme.transitions.create(['all']),
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          borderColor: alpha(theme.palette[cat.color].main, 0.6),
                          boxShadow: `0 0 40px ${alpha(theme.palette[cat.color].main, 0.15)}`,
                          transform: 'translateY(-4px)',
                          '& .doc-icon': {
                            transform: 'scale(1.1) rotate(-5deg)',
                            color: theme.palette[cat.color].main,
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
                          width: 120,
                          height: 120,
                          background: `radial-gradient(circle, ${alpha(theme.palette[cat.color].main, 0.1)} 0%, transparent 70%)`,
                          borderRadius: '50%',
                          pointerEvents: 'none',
                        }}
                      />

                      <Stack direction="row" alignItems="flex-start" spacing={2}>
                        <Box
                          className="doc-icon"
                          sx={{
                            width: 48,
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 1.5,
                            bgcolor: alpha(theme.palette[cat.color].main, 0.05),
                            color: alpha(theme.palette[cat.color].main, 0.5),
                            transition: theme.transitions.create(['all']),
                            flexShrink: 0,
                          }}
                        >
                          <Iconify icon={doc.icon as any} width={28} />
                        </Box>

                        <Stack spacing={0.5} flexGrow={1}>
                          <Typography variant="caption" sx={{ color: 'text.disabled', textAlign: 'right', display: 'block' }}>
                            {doc.size}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: '#fff',
                              fontWeight: 700,
                              lineHeight: 1.3,
                              minHeight: 44, // Align heights
                            }}
                          >
                            {doc.title}
                          </Typography>
                        </Stack>
                      </Stack>

                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, flexGrow: 1 }}>
                        {doc.description}
                      </Typography>

                      <CyberButton
                        onClick={() => handleDocumentAction(doc)}
                        fullWidth
                        glowColor={cat.color as any}
                        endIcon={<Iconify icon={(doc.type === 'sign' ? "solar:pen-new-round-bold" : "solar:eye-bold") as any} />}
                        sx={{ mt: 2, height: 40, fontSize: 12 }}
                      >
                        {doc.type === 'sign' ? 'ASSINAR TERMO' : (doc.type === 'model' ? 'VER MODELO' : 'LER DOCUMENTO')}
                      </CyberButton>
                    </CyberCard>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Container>
      </StandardPageWrapper>
  );
}
