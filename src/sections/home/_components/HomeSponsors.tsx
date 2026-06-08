import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { varFade, MotionViewport } from 'src/components/animate';
import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { CyberButton } from 'src/components/cyber-button';
import { Marquee } from 'src/components/marquee';
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
            <CyberCard
              sx={{
                width: '100%',
                maxWidth: 800,
                mx: 'auto',
                p: { xs: 4, md: 6 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                transition: theme.transitions.create(['transform', 'box-shadow']),
                '&:hover': {
                  boxShadow: `0 0 25px 0 ${alpha(theme.palette.info.main, 0.2)}`,
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
            </CyberCard>
          </m.div>

          {/* Secondary Sponsors Marquee */}
          <Box sx={{ mt: 4 }}>
            <Marquee duration={50} reverse>
              {SECONDARY_SPONSORS.map((sponsor, index) => (
                <Box key={index} sx={{ width: 280 }}>
                  <CyberCard
                    sx={{
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      transition: theme.transitions.create(['transform']),
                      '&:hover': {
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
                  </CyberCard>
                </Box>
              ))}
            </Marquee>
          </Box>
        </Stack>

        <Stack alignItems="center" sx={{ mt: 8 }}>
          <m.div variants={varFade('inUp')}>
            <CyberButton
              href="#contato"
              glowColor="warning"
            >
              SEJA UM PATROCINADOR
            </CyberButton>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}
