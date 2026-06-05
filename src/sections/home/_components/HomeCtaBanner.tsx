'use client';

// ----------------------------------------------------------------------
// Imports — tipos e motion
// ----------------------------------------------------------------------
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

// ----------------------------------------------------------------------
// Imports — MUI
// ----------------------------------------------------------------------
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------
// Imports — app
// ----------------------------------------------------------------------
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useTranslate } from 'src/locales';
import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function CtaBanner({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const { t } = useTranslate();

  const renderDescription = () => (
    <Stack
      spacing={5}
      sx={{
        zIndex: 9,
        alignItems: { xs: 'center', md: 'flex-start' },
      }}
    >
      <Stack spacing={2}>
        <Typography
          component={m.h2}
          variants={varFade('inDown', { distance: 24 })}
          sx={{
            m: 0,
            color: 'common.white',
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 900,
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            lineHeight: 1.1,
            textTransform: 'uppercase',
          }}
        >
          <Box component="span" sx={{ color: 'common.white' }}>
            {t('cta.title') || 'Pronto para'}
          </Box>
          <br />
          <Box component="span" sx={{ color: alpha('#fff', 0.5) }}>
            {t('cta.title_bridge') || 'Começar a'}
          </Box>
          <br />
          <Box component="span" sx={{ color: 'warning.main' }}>
            {t('cta.title_highlight') || 'Evoluir?'}
          </Box>
        </Typography>
      </Stack>

      {/* Botão CTA */}
      <m.div variants={varFade('inRight', { distance: 24 })}>
        <Button
          component={RouterLink}
          href={paths.inscricao}
          endIcon={<Iconify icon="solar:double-alt-arrow-right-bold-duotone" />}
          sx={{
            height: 56,
            px: 4,
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 700,
            textTransform: 'uppercase',
            color: 'common.white',
            border: 'none',
            position: 'relative',
            bgcolor: alpha(theme.palette.warning.main, 0.15),
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            transition: theme.transitions.create(['all']),
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              padding: '1px',
              background: `linear-gradient(180deg,
                ${alpha(theme.palette.warning.main, 1)} 0%,
                ${alpha(theme.palette.warning.main, 0.2)} 50%,
                ${alpha(theme.palette.warning.main, 0.8)} 100%
              )`,
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            },
            '&:hover': {
              bgcolor: alpha(theme.palette.warning.main, 0.25),
              transform: 'scale(1.05)',
              boxShadow: `0 0 24px 0 ${alpha(theme.palette.warning.main, 0.4)}`,
            },
          }}
        >
          {t('cta.button') || 'INSCREVER-SE AGORA'}
        </Button>
      </m.div>

      {/* Data e Local */}
      <m.div variants={varFade('inUp', { distance: 16 })}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            mt: 0.5,
          }}
        >
          <Iconify
            icon="solar:calendar-date-bold"
            width={16}
            sx={{ color: alpha(theme.palette.warning.main, 0.8) }}
          />
          <Box
            component="span"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: alpha(theme.palette.warning.main, 0.9),
            }}
          >
            {t('cta.event_date') || '20 DE DEZEMBRO'}
          </Box>
          <Box
            component="span"
            sx={{ color: alpha('#fff', 0.2), fontSize: 12 }}
          >
            ·
          </Box>
          <Box
            component="span"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: alpha('#fff', 0.5),
            }}
          >
            {t('cta.event_venue') || 'GINÁSIO DO IBIRAPUERA'}
          </Box>
        </Box>
      </m.div>
    </Stack>
  );

  const renderImage = () => (
    <m.div variants={varFade('inUp')}>
      <Box
        component={m.img}
        animate={{ y: [-12, 0, -12] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        alt="FFC Final Fight Combat"
        src={`${CONFIG.assetsDir}/assets/illustrations/ffc-logo-cta.webp`}
        sx={{
          zIndex: 9,
          width: { xs: 200, md: 300 },
          aspectRatio: '1/1',
          position: 'relative',
        }}
      />
    </m.div>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          position: 'relative',
          py: { xs: 8, md: 15 },
          overflow: 'hidden',
          bgcolor: 'transparent',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        <Container sx={{ position: 'relative', zIndex: 9 }}>
          <CyberCard
            sx={{
              ...theme.mixins.bgGradient({
                images: [
                  `linear-gradient(0deg, ${alpha(theme.palette.grey[500], 0.04)} 1px, transparent 1px)`,
                  `linear-gradient(90deg, ${alpha(theme.palette.grey[500], 0.04)} 1px, transparent 1px)`,
                ],
                sizes: ['36px 36px'],
                repeats: ['repeat'],
              }),
              py: { xs: 6, md: 10 },
              px: { xs: 3, md: 10 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: { xs: 'center', md: 'left' },
                flexDirection: { xs: 'column', md: 'row-reverse' },
                gap: 4,
                position: 'relative',
                zIndex: 9,
              }}
            >
              {renderImage()}
              {renderDescription()}
            </Box>
          </CyberCard>
        </Container>
      </MotionViewport>
    </Box>
  );
}
