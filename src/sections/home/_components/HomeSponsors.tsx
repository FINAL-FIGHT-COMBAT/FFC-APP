import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { varFade, MotionViewport } from 'src/components/animate';
import { Iconify } from 'src/components/iconify';
import { SectionTitle } from './HomeSectionTitle';

// ----------------------------------------------------------------------

const MASTER_SPONSOR = {
  name: 'Patrocinador Master',
  tier: 'Master',
  icon: 'solar:crown-star-bold-duotone',
};

const SECONDARY_SPONSORS = [
  { name: 'Marca Parceira 1', tier: 'Ouro', icon: 'solar:medal-star-bold-duotone' },
  { name: 'Marca Parceira 2', tier: 'Ouro', icon: 'solar:medal-star-bold-duotone' },
  { name: 'Marca Parceira 3', tier: 'Prata', icon: 'solar:shield-star-bold-duotone' },
  { name: 'Marca Parceira 4', tier: 'Prata', icon: 'solar:shield-star-bold-duotone' },
];

// ----------------------------------------------------------------------

export function HomeSponsors() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 15 },
        bgcolor: 'transparent',
        overflow: 'hidden',
      }}
    >
      <Container component={MotionViewport}>
        <m.div variants={varFade('inUp')}>
          <SectionTitle
            caption="Apoiadores"
            title="PATROCINADORES OFICIAIS"
            description="Empresas e marcas que fortalecem o esporte e tornam o Final Fight Combat o maior evento do Brasil."
            sx={{ mb: { xs: 6, md: 10 } }}
            slotProps={{
              title: { 
                sx: { 
                  color: 'common.white', 
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  textTransform: 'uppercase'
                } 
              },
              caption: { sx: { color: 'warning.main', fontWeight: 700, letterSpacing: 2 } },
              description: { sx: { color: 'grey.400' } }
            }}
          />
        </m.div>

        <Stack spacing={4}>
          {/* Master Sponsor */}
          <m.div variants={varFade('inUp')}>
            <Box
              sx={{
                width: '100%',
                maxWidth: 800,
                mx: 'auto',
                p: { xs: 4, md: 6 },
                borderRadius: 3,
                bgcolor: 'rgba(10, 10, 10, 0.65)',
                backdropFilter: 'blur(12px)',
                border: '1px solid',
                borderColor: alpha(theme.palette.warning.main, 0.4),
                boxShadow: `0 0 60px ${alpha(theme.palette.warning.main, 0.15)}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: theme.transitions.create(['all']),
                '&:hover': {
                  borderColor: alpha(theme.palette.warning.main, 0.8),
                  boxShadow: `0 0 80px ${alpha(theme.palette.warning.main, 0.3)}`,
                  transform: 'translateY(-4px)',
                },
              }}
            >
              {/* Glow Radial */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.warning.main, 0.15)} 0%, transparent 60%)`,
                  pointerEvents: 'none',
                }}
              />

              <Typography
                variant="overline"
                sx={{ color: theme.palette.warning.main, mb: 2, letterSpacing: 2 }}
              >
                Cota {MASTER_SPONSOR.tier}
              </Typography>

              <Iconify
                icon={MASTER_SPONSOR.icon as any}
                width={80}
                sx={{ color: theme.palette.warning.main, mb: 3 }}
              />

              <Typography
                variant="h3"
                sx={{
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  color: '#fff',
                  textTransform: 'uppercase',
                }}
              >
                {MASTER_SPONSOR.name}
              </Typography>
            </Box>
          </m.div>

          {/* Secondary Sponsors Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 3,
            }}
          >
            {SECONDARY_SPONSORS.map((sponsor, index) => (
              <m.div key={index} variants={varFade('inUp')}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    bgcolor: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    transition: theme.transitions.create(['all']),
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      borderColor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: 'warning.main', mb: 2, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}
                  >
                    Cota {sponsor.tier}
                  </Typography>

                  <Iconify
                    icon={sponsor.icon as any}
                    width={48}
                    sx={{ color: 'warning.main', opacity: 0.8, mb: 2 }}
                  />

                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                      color: 'common.white',
                    }}
                  >
                    {sponsor.name}
                  </Typography>
                </Box>
              </m.div>
            ))}
          </Box>
        </Stack>

        <Stack alignItems="center" sx={{ mt: 8 }}>
          <m.div variants={varFade('inUp')}>
            <Button
              size="large"
              variant="outlined"
              href="#contato"
              sx={{
                color: theme.palette.warning.main,
                borderColor: alpha(theme.palette.warning.main, 0.4),
                fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: 'uppercase',
                bgcolor: alpha('#020817', 0.6),
                backdropFilter: 'blur(8px)',
                px: 4,
                '&:hover': {
                  borderColor: theme.palette.warning.main,
                  bgcolor: alpha(theme.palette.warning.main, 0.12),
                  boxShadow: `0 0 24px ${alpha(theme.palette.warning.main, 0.3)}`,
                  transform: 'translateY(-2px)'
                },
                transition: theme.transitions.create(['all']),
              }}
            >
              Seja um Patrocinador
            </Button>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}
