'use client';

// ✅ Importação do tipo para garantir a integridade
import type { IPostItem } from 'src/types/blog';

import { useState } from 'react';
import { m } from 'framer-motion';
import { kebabCase } from 'es-toolkit';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { CyberCard } from 'src/components/cyber-card';
import { CyberButton } from 'src/components/cyber-button';
import { varFade, MotionViewport } from 'src/components/animate';

import { PostCard } from './PostCard';

// ----------------------------------------------------------------------

type Props = {
  posts?: IPostItem[];
};

export function PostRecent({ posts: postsFromProps }: Props) {
  const theme = useTheme();
  const [viewLimit, setViewLimit] = useState(4);

  const handleLoadMore = () => {
    setViewLimit((prev) => prev + 4);
  };

  // ✅ Prioriza os posts da API e usa estáticos como fallback
  const posts = postsFromProps && postsFromProps.length > 0 ? postsFromProps : staticRecentPosts;

  return (
    <Box
      component={MotionViewport}
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: 'transparent', // 🟢 TRANSPARÊNCIA ESTRATÉGICA
        position: 'relative',
        overflow: 'hidden',
      }}
    >
        <Grid container spacing={4}>
          <Grid size={12}>
            <m.div variants={varFade('inDown')}>
              <Typography
                variant="h3"
                sx={{
                  mb: 6,
                  fontWeight: 900,
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'common.white',
                  textAlign: { xs: 'center', md: 'left' },
                  // 🟢 EFEITO GLOW PADRONIZADO FFC
                  textShadow: `0 0 20px ${alpha(theme.palette.warning.main, 0.35)}`,
                }}
              >
                Últimas do Octógono
              </Typography>
            </m.div>
          </Grid>

          {posts.slice(0, viewLimit).map((post) => (
            <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <m.div variants={varFade('inUp')}>
                <CyberCard>
                  <PostCard post={post as any} detailsHref={paths.post.details((post as any).slug || kebabCase(post.title))} />
                </CyberCard>
              </m.div>
            </Grid>
          ))}
        </Grid>

        {posts.length > viewLimit && (
          <Stack sx={{ mt: 8, alignItems: 'center' }}>
            <m.div variants={varFade('inUp')}>
              <CyberButton
                onClick={handleLoadMore}
                glowColor="info"
              >
                Carregar mais notícias
              </CyberButton>
            </m.div>
          </Stack>
        )}
    </Box>
  );
}

// ----------------------------------------------------------------------

const staticRecentPosts = [
  {
    id: 'rec-1',
    title: 'Pesagem Oficial FFC 10: Encaradas tensas e promessa de nocaute',
    category: 'Eventos',
    coverUrl: '/assets/images/mock/cover/cover-12.webp',
    author: { name: 'Equipe FFC', avatarUrl: '/assets/images/mock/avatar/avatar-12.webp' },
    createdAt: new Date(),
    duration: '5 min de leitura',
  },
  {
    id: 'rec-2',
    title: 'Análise Técnica: O jogo de chão que pode decidir o cinturão peso-médio',
    category: 'Técnicas',
    coverUrl: '/assets/images/mock/cover/cover-13.webp',
    author: { name: 'Equipe FFC', avatarUrl: '/assets/images/mock/avatar/avatar-13.webp' },
    createdAt: new Date(),
    duration: '8 min de leitura',
  },
  {
    id: 'rec-3',
    title: 'De volta ao octógono: A recuperação incrível de Marcos "Marreta"',
    category: 'Atletas',
    coverUrl: '/assets/images/mock/cover/cover-14.webp',
    author: { name: 'Equipe FFC', avatarUrl: '/assets/images/mock/avatar/avatar-14.webp' },
    createdAt: new Date(),
    duration: '6 min de leitura',
  },
  {
    id: 'rec-4',
    title: 'Bastidores do Grand Prix: A rotina de corte de peso dos lutadores de elite',
    category: 'Bastidores',
    coverUrl: '/assets/images/mock/cover/cover-15.webp',
    author: { name: 'Equipe FFC', avatarUrl: '/assets/images/mock/avatar/avatar-15.webp' },
    createdAt: new Date(),
    duration: '10 min de leitura',
  },
  {
    id: 'rec-5',
    title: 'Novas Regras da Comissão Atlética: O que muda na avaliação dos juízes',
    category: 'Eventos',
    coverUrl: '/assets/images/mock/cover/cover-16.webp',
    author: { name: 'Equipe FFC', avatarUrl: '/assets/images/mock/avatar/avatar-16.webp' },
    createdAt: new Date(),
    duration: '4 min de leitura',
  },
  {
    id: 'rec-6',
    title: 'Preparação Física: O segredo do condicionamento para lutas de 5 rounds',
    category: 'Técnicas',
    coverUrl: '/assets/images/mock/cover/cover-17.webp',
    author: { name: 'Equipe FFC', avatarUrl: '/assets/images/mock/avatar/avatar-17.webp' },
    createdAt: new Date(),
    duration: '7 min de leitura',
  },
  {
    id: 'rec-7',
    title: 'Entrevista Exclusiva: "Vou arrancar a cabeça dele no primeiro assalto"',
    category: 'Atletas',
    coverUrl: '/assets/images/mock/cover/cover-18.webp',
    author: { name: 'Equipe FFC', avatarUrl: '/assets/images/mock/avatar/avatar-18.webp' },
    createdAt: new Date(),
    duration: '5 min de leitura',
  },
  {
    id: 'rec-8',
    title: 'O impacto econômico do Final Fight Combat na cidade-sede',
    category: 'Bastidores',
    coverUrl: '/assets/images/mock/cover/cover-19.webp',
    author: { name: 'Equipe FFC', avatarUrl: '/assets/images/mock/avatar/avatar-19.webp' },
    createdAt: new Date(),
    duration: '9 min de leitura',
  },
];
