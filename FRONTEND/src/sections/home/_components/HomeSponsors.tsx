import { useMemo } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { Marquee } from 'src/components/marquee';
import { CyberCard } from 'src/components/cyber-card';
import { CyberButton } from 'src/components/cyber-button';
import { varFade, MotionViewport } from 'src/components/animate';

import { useTranslate } from 'src/locales';

import { SectionTitle } from './HomeSectionTitle';

// ----------------------------------------------------------------------

export function HomeSponsors() {
  const theme = useTheme();
  const { t } = useTranslate();

  const masterSponsor = useMemo(
    () => ({
      name: t('sponsors.master_sponsor_name', 'Patrocinador Master'),
      tier: t('sponsors.master_tier', 'Master'),
      icon: 'solar:crown-star-bold-duotone',
    }),
    [t]
  );

  const secondarySponsors = useMemo(
    () => [
      { name: t('sponsors.secondary_sponsor_1_name', 'Marca Parceira 1'), tier: t('sponsors.gold_tier', 'Ouro'), icon: 'solar:medal-star-bold-duotone' },
      { name: t('sponsors.secondary_sponsor_2_name', 'Marca Parceira 2'), tier: t('sponsors.gold_tier', 'Ouro'), icon: 'solar:medal-star-bold-duotone' },
      { name: t('sponsors.secondary_sponsor_3_name', 'Marca Parceira 3'), tier: t('sponsors.silver_tier', 'Prata'), icon: 'solar:shield-star-bold-duotone' },
      { name: t('sponsors.secondary_sponsor_4_name', 'Marca Parceira 4'), tier: t('sponsors.silver_tier', 'Prata'), icon: 'solar:shield-star-bold-duotone' },
    ],
    [t]
  );

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 15 },
        bgcolor: 'transparent',
        overflow: 'hidden',
      }}
    >
      <Container component={MotionViewport}>
        <m.div variants={varFade('inUp')}>
          <SectionTitle
            title={t('sponsors.title', 'PATROCINADORES')}
            txtGradient={t('sponsors.title_highlight', 'OFICIAIS')}
            description={t('sponsors.description', 'Empresas e marcas que fortalecem o esporte e tornam o Final Fight Combat o maior evento do Brasil.')}
            sx={{ mb: { xs: 6, md: 10 }, alignItems: 'center', textAlign: 'center' }}
            slotProps={{
              title: {
                sx: {
                  color: 'common.white',
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  textTransform: 'uppercase',
                  lineHeight: 1.15,
                },
              },
              description: { sx: { color: 'grey.400', maxWidth: 600, mx: 'auto' } },
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
                {t('sponsors.tier_label', 'Cota')} {masterSponsor.tier}
              </Typography>

              <Iconify
                icon={masterSponsor.icon as any}
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
                {masterSponsor.name}
              </Typography>
            </CyberCard>
          </m.div>

          {/* Secondary Sponsors Marquee */}
          <Box sx={{ mt: 4 }}>
            <Marquee duration={50} reverse>
              {secondarySponsors.map((sponsor, index) => (
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
                      sx={{
                        color: 'warning.main',
                        mb: 2,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        fontWeight: 700,
                      }}
                    >
                      {t('sponsors.tier_label', 'Cota')} {sponsor.tier}
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
            <CyberButton href="#contato" glowColor="warning">
              {t('sponsors.btn_become_sponsor', 'SEJA UM PATROCINADOR')}
            </CyberButton>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}
