'use client';

// ----------------------------------------------------------------------
// Imports — tipos e react/motion
// ----------------------------------------------------------------------
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

// ----------------------------------------------------------------------
// Imports — MUI
// ----------------------------------------------------------------------
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------
// Imports — app
// ----------------------------------------------------------------------
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useTranslate } from 'src/locales';
import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { useCarousel } from 'src/components/carousel';
import { CyberButton } from 'src/components/cyber-button';
import { varFade, MotionViewport } from 'src/components/animate';
import { ResponsiveCarouselGrid } from 'src/components/responsive-carousel-grid';

// ----------------------------------------------------------------------
// Fallback estático — usado quando o locale não tem o array members
// ----------------------------------------------------------------------

const MEMBERS_FALLBACK = [
  {
    id: 'member-1',
    name: 'Sandro',
    role: 'CEO & Founder',
    avatarUrl: 'https://api-dev-minimal-v6.vercel.app/assets/images/mock/portrait/portrait-1.webp',
  },
  {
    id: 'member-2',
    name: 'Lucian Obrien',
    role: 'CTO',
    avatarUrl: 'https://api-dev-minimal-v6.vercel.app/assets/images/mock/portrait/portrait-2.webp',
  },
  {
    id: 'member-3',
    name: 'Deja Brady',
    role: 'Project Coordinator',
    avatarUrl: 'https://api-dev-minimal-v6.vercel.app/assets/images/mock/portrait/portrait-3.webp',
  },
  {
    id: 'member-4',
    name: 'Harrison Stein',
    role: 'Team Leader',
    avatarUrl: 'https://api-dev-minimal-v6.vercel.app/assets/images/mock/portrait/portrait-4.webp',
  },
];

// ----------------------------------------------------------------------

export function HomeTeam({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const { t } = useTranslate();

  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: { xs: 1, sm: 2, md: 3 },
  });

  const membersRaw = t('team.members', { returnObjects: true });
  const members: { id: string; name: string; role: string; avatarUrl: string }[] = Array.isArray(
    membersRaw
  )
    ? membersRaw
    : MEMBERS_FALLBACK;

  return (
    <Box
      id="team"
      component="section"
      sx={[
        {
          position: 'relative',
          overflow: 'hidden',
          bgcolor: 'transparent',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container
        component={MotionViewport}
        sx={{ position: 'relative', zIndex: 1, py: { xs: 10, md: 15 } }}
      >
        {/* HEADER: TAG + TÍTULO E BOTÃO NA DIREITA */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'flex-start', md: 'flex-end' }}
          justifyContent="space-between"
          sx={{ mb: 8, gap: 4 }}
        >
          <Box sx={{ textAlign: 'left' }}>
            {/* TAG "TEAM" */}
            <m.div variants={varFade('inUp')}>
              <Box
                sx={{
                  display: 'inline-block',
                  border: `1px solid ${theme.palette.info.main}`,
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
                    fontSize: 12,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'info.main',
                  }}
                >
                  {t('team.badge')}
                </Typography>
              </Box>
            </m.div>

            {/* TÍTULO DA SEÇÃO */}
            <m.div variants={varFade('inUp')}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 900,
                  fontSize: { xs: '2.2rem', md: '3rem' },
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                  color: 'common.white',
                }}
              >
                {t('team.title', { defaultValue: 'NOSSA EQUIPE' })}
              </Typography>
            </m.div>
          </Box>

          {/* BOTÃO ATUALIZADO: "REATIVA & CRYSTAL" */}
          <m.div variants={varFade('inRight')} style={{ width: '100%', display: 'contents' }}>
            <CyberButton
              component={RouterLink}
              href={paths.team}
              endIcon={<Iconify icon="solar:double-alt-arrow-right-bold-duotone" />}
              glowColor="info"
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              {t('team.button')}
            </CyberButton>
          </m.div>
        </Stack>

        {/* ── GRID E CAROUSEL ── */}
        <ResponsiveCarouselGrid
          data={members}
          carousel={carousel}
          gridColumns={{ md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
          gridGap={2.5}
          renderItem={(member: any) => (
            <m.div variants={varFade('inUp', { distance: 24 })} style={{ height: '100%' }}>
              <MemberCard member={member} />
            </m.div>
          )}
        />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function MemberCard({
  member,
}: {
  member: { id: string; name: string; role: string; avatarUrl: string };
}) {
  const theme = useTheme();

  return (
    <CyberCard
      sx={{
        textAlign: 'center',
        height: '100%',
        minHeight: { xs: 420, md: 480 },
        display: 'flex',
        flexDirection: 'column',
        transition: theme.transitions.create(['transform', 'box-shadow'], {
          duration: theme.transitions.duration.standard,
        }),
        boxShadow: `0 8px 32px 0 ${alpha(theme.palette.common.black, 0.5)}`,
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: `0 0 25px 0 ${alpha(theme.palette.info.main, 0.2)}`,
        },
      }}
    >
      {/* ── FOTO ── */}
      <Box
        sx={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', bgcolor: '#161B22' }}
      >
        <Image
          alt={member.name}
          src={member.avatarUrl}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            transition: 'transform 0.4s ease',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        />

        {/* Gradient bottom overlay para transição suave */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '55%',
            background: 'linear-gradient(to top, #0D1117 0%, transparent 100%)',
          }}
        />
      </Box>

      {/* ── INFO ── */}
      <Stack sx={{ p: 2, gap: 1, flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography
            noWrap
            sx={{
              fontSize: '1.1rem',
              fontWeight: 900,
              color: '#fff',
              fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
              lineHeight: 1.1,
              textTransform: 'uppercase',
            }}
          >
            {member.name}
          </Typography>

          <Typography
            noWrap
            sx={{
              mt: 0.5,
              fontSize: 11,
              fontWeight: 700,
              color: theme.palette.info.main,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            {member.role}
          </Typography>
        </Box>

        {/* ── SOCIAL ICONS ── */}
        <Box
          sx={{
            mt: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
          }}
        >
          {[
            { value: 'facebook', icon: 'eva:facebook-fill', path: CONFIG.socials.facebook },
            {
              value: 'instagram',
              icon: 'ant-design:instagram-filled',
              path: CONFIG.socials.instagram,
            },
            { value: 'linkedin', icon: 'eva:linkedin-fill', path: CONFIG.socials.linkedin },
            { value: 'twitter', icon: 'bi:twitter-x', path: CONFIG.socials.twitter },
          ].map((social) => (
            <IconButton
              key={social.value}
              onClick={() => window.open(social.path, '_blank')}
              sx={{
                color: '#919EAB',
                '&:hover': {
                  color: theme.palette.info.main,
                  bgcolor: alpha(theme.palette.info.main, 0.1),
                },
              }}
            >
              <Iconify icon={social.icon as any} />
            </IconButton>
          ))}
        </Box>
      </Stack>
    </CyberCard>
  );
}
