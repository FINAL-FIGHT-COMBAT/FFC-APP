'use client';

import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { Marquee } from 'src/components/marquee';
import { CyberCard } from 'src/components/cyber-card';
import { CyberButton } from 'src/components/cyber-button';

// ----------------------------------------------------------------------

const ACADEMIES = [
  { name: 'Alliance', city: 'São Paulo, SP' },
  { name: 'Gracie Barra', city: 'Rio de Janeiro, RJ' },
  { name: 'Checkmat', city: 'Curitiba, PR' },
  { name: 'Atos Jiu-Jitsu', city: 'San Diego, CA' },
  { name: 'Nova União', city: 'Rio de Janeiro, RJ' },
  { name: 'GFTeam', city: 'Rio de Janeiro, RJ' },
  { name: 'Dream Art', city: 'São Paulo, SP' },
  { name: 'Fight Sports', city: 'Miami, FL' },
  { name: 'Melqui Galvão', city: 'Manaus, AM' },
  { name: 'Unity Jiu-Jitsu', city: 'Nova York, NY' },
  { name: 'Art of Jiu Jitsu', city: 'Costa Mesa, CA' },
  { name: 'Cicero Costha', city: 'São Paulo, SP' },
];

// ----------------------------------------------------------------------

export function HomeCommunity({ sx, ...other }: BoxProps) {
  const renderCard = (academy: typeof ACADEMIES[number]) => (
    <Box key={academy.name} sx={{ width: { xs: 240, md: 280 }, flexShrink: 0 }}>
      <CyberCard
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: { xs: 1.5, md: 2 },
          p: { xs: 1.5, md: 2 },
        }}
      >
        <Box
          sx={{
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: alpha('#3B82F6', 0.1),
            color: '#3B82F6',
            flexShrink: 0,
          }}
        >
          <Iconify icon="solar:shield-check-bold" sx={{ width: { xs: 20, md: 24 }, height: { xs: 20, md: 24 } }} />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              fontWeight: 800,
              color: '#fff',
              fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
              textTransform: 'uppercase',
              lineHeight: 1.2,
              mb: 0.25,
            }}
          >
            {academy.name}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Iconify
              icon="solar:flag-bold"
              width={12}
              sx={{ color: alpha('#fff', 0.4) }}
            />
            <Typography sx={{ fontSize: { xs: 10, md: 11 }, color: alpha('#fff', 0.45) }}>
              {academy.city}
            </Typography>
          </Stack>
        </Box>
      </CyberCard>
    </Box>
  );

  return (
    <Box
      id="community"
      component="section"
      sx={[
        {
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 8, md: 15 },
          bgcolor: 'transparent',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container sx={{ position: 'relative', zIndex: 9 }}>
        {/* HEADER */}
        <Stack
          spacing={2}
          sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center', alignItems: 'center' }}
        >
          <Box
            sx={{
              display: 'inline-block',
              border: `1px solid #3B82F6`,
              borderRadius: 2,
              px: 1.5,
              py: 0.5,
              mb: 2,
            }}
          >
            <Typography
              component="span"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#3B82F6',
              }}
            >
              REDE DE APOIO
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 900,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              color: '#fff',
              textTransform: 'uppercase',
              lineHeight: 1.1,
            }}
          >
            ACADEMIAS{' '}
            <Box component="span" sx={{ color: '#3B82F6' }}>
              PARCEIRAS
            </Box>
          </Typography>

          <Typography sx={{ color: alpha('#fff', 0.6), maxWidth: 600, mx: 'auto', mt: 2 }}>
            O Final Fight Combat tem o orgulho de contar com o apoio das maiores e mais
            respeitadas equipes de Jiu-Jitsu do mundo. Juntos, fortalecemos o esporte.
          </Typography>
        </Stack>

        {/* CARROSSEIS AUTOMATIZADOS (MARQUEE) */}
        <Stack spacing={{ xs: 2, md: 3 }} sx={{ width: '100%', overflow: 'hidden' }}>
          {/* 1ª Camada (Sentido Normal) */}
          <Marquee duration={35}>
            {ACADEMIES.slice(0, 4).map(renderCard)}
          </Marquee>

          {/* 2ª Camada (Sentido Oposto) */}
          <Marquee duration={25} reverse>
            {ACADEMIES.slice(4, 8).map(renderCard)}
          </Marquee>

          {/* 3ª Camada (Sentido Normal) */}
          <Marquee duration={30}>
            {ACADEMIES.slice(8, 12).map(renderCard)}
          </Marquee>
        </Stack>

        {/* CTA SEJA PARCEIRO */}
        <Stack alignItems="center" sx={{ mt: { xs: 6, md: 8 } }}>
          <CyberButton
            component={RouterLink}
            href={`${paths.inscricao}?tab=academia`}
            endIcon={<Iconify icon="solar:users-group-rounded-bold" />}
            glowColor="success"
          >
            CADASTRE SUA ACADEMIA
          </CyberButton>
        </Stack>
      </Container>
    </Box>
  );
}
