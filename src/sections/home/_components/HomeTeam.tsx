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
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
import { varFade, MotionViewport } from 'src/components/animate';
import { Carousel, useCarousel, CarouselArrowFloatButtons } from 'src/components/carousel';
import { CyberButton } from 'src/components/cyber-button';

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
    slidesToShow: { xs: 1, sm: 2, md: 3, lg: 4 },
  });

  const membersRaw = t('team.members', { returnObjects: true });
  const members: { id: string; name: string; role: string; avatarUrl: string }[] =
    Array.isArray(membersRaw) ? membersRaw : MEMBERS_FALLBACK;

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
          alignItems={{ md: 'flex-end' }}
          justifyContent="space-between"
          sx={{ mb: 8, gap: 3 }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            {/* TAG "TEAM" */}
            <m.div variants={varFade('inUp')}>
              <Box
                sx={{
                  display: 'inline-block',
                  border: `1px solid ${theme.palette.info.main}`,
                  borderRadius: 2,
                  px: 1.5,
                  py: 0.5,
                  mb: 4,
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
          </Box>

          {/* BOTÃO ATUALIZADO: "REATIVA & CRYSTAL" */}
          <m.div variants={varFade('inRight')}>
              <CyberButton
                component={RouterLink}
                href={paths.team}
                endIcon={<Iconify icon="solar:double-alt-arrow-right-bold-duotone" />}
                glowColor="info"
              >
                {t('team.button')}
              </CyberButton>
          </m.div>
        </Stack>

        {/* CAROUSEL */}
        <Box sx={{ position: 'relative' }}>
          <CarouselArrowFloatButtons {...carousel.arrows} options={carousel.options} />

          <Carousel carousel={carousel} sx={{ px: 0.5 }}>
            {members.map((member) => (
              <Box
                key={member.id}
                component={m.div}
                variants={varFade('in')}
                sx={{ py: { xs: 4, md: 5 } }}
              >
                <MemberCard member={member} />
              </Box>
            ))}
          </Carousel>
        </Box>
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
        display: 'flex',
        flexDirection: 'column',
        transition: theme.transitions.create(['transform', 'box-shadow'], {
          duration: theme.transitions.duration.standard,
        }),
        boxShadow: `0 8px 32px 0 ${alpha(theme.palette.common.black, 0.5)}`,
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: `0 0 25px 0 ${alpha(theme.palette.info.main, 0.2)}`,
        },
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          mt: 3,
          mb: 0.5,
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 700,
          textTransform: 'uppercase',
          color: 'common.white',
          letterSpacing: '0.05em',
        }}
      >
        {member.name}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mb: 2.5,
          fontFamily: "'Public Sans', sans-serif",
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#919EAB',
        }}
      >
        {member.role}
      </Typography>

      <Box sx={{ px: 2.5, pb: 1 }}>
        <Image
          alt={member.name}
          src={member.avatarUrl}
          ratio="1/1"
          visibleByDefault
          disablePlaceholder
          sx={{
            borderRadius: 2,
            border: `1px solid ${alpha(theme.palette.common.white, 0.05)}`,
          }}
        />
      </Box>

      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
        {[
          { value: 'facebook', icon: 'eva:facebook-fill', path: CONFIG.socials.facebook },
          { value: 'instagram', icon: 'ant-design:instagram-filled', path: CONFIG.socials.instagram },
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
    </CyberCard>
  );
}
