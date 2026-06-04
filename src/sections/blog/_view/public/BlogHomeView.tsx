'use client';

import type { IPostItem } from 'src/types/blog';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { varFade, MotionViewport } from 'src/components/animate';

import { PostRecent } from '../../_item/PostRecent';
import { PostVideo } from '../../_components/PostVideo';
import { PostTrending } from '../../_item/PostTrending';
import { PostAuthors } from '../../_components/PostAuthors';
import { PostNewsletter } from '../../_forms/PostNewsletter';
import { PostFeatured } from '../../_components/PostFeatured';
import { PostCommunity } from '../../_components/PostCommunity';
import { PostCategoryItem } from '../../_item/PostCategoryItem';
import { PostAdvertisement } from '../../_components/PostAdvertisement';

// ----------------------------------------------------------------------

type Props = {
  posts: IPostItem[];
  communities?: any[];
  videos?: any;
};

export function BlogHomeView({ posts, communities, videos }: Props) {
  return (
    <Stack
      spacing={0}
      sx={{
        pb: 10,
        bgcolor: 'transparent', 
        position: 'relative',
        zIndex: 1,
        overflowX: 'hidden', 
      }}
    >
      <Container maxWidth="lg">
        {/* 1. HERO PRINCIPAL */}
        <Box key="view-featured">
          <PostFeatured posts={posts} />
        </Box>

        {/* 2. DESTAQUES SECUNDÁRIOS */}
        <Box key="view-trending" sx={{ mt: { xs: 4, md: 8 } }}>
          <PostTrending posts={posts} />
        </Box>

        {/* 3. PROVA SOCIAL */}
        <Box key="view-community" sx={{ my: 10 }}>
          <PostCommunity communities={communities || []} />
        </Box>

        {/* 4. O "AGORA" */}
        <Box key="view-recent">
          <PostRecent posts={posts} />
        </Box>

        {/* 5. EVENTOS */}
        <Box key="view-section-eventos" sx={{ bgcolor: 'transparent' }}>
          <PostCategoryItem category="Eventos" posts={posts} />
        </Box>

        {/* 6. VÍDEOS */}
        <Box key="view-video" sx={{ my: 10 }}>
          <PostVideo videos={videos} />
        </Box>

        {/* 7. ATLETAS */}
        <Box key="view-section-atletas" sx={{ bgcolor: 'transparent' }}>
          <PostCategoryItem category="Atletas" posts={posts} />
        </Box>

        {/* 8. ANÚNCIO */}
        <Box key="view-ads" sx={{ my: 10 }}>
          <PostAdvertisement />
        </Box>

        {/* 9. TÉCNICAS */}
        <Box key="view-section-tecnicas" sx={{ bgcolor: 'transparent' }}>
          <PostCategoryItem category="Técnicas" posts={posts} />
        </Box>

        {/* 10. BASTIDORES */}
        <Box key="view-section-bastidores" sx={{ bgcolor: 'transparent' }}>
          <PostCategoryItem category="Bastidores" posts={posts} />
        </Box>

        {/* 11. AUTORES */}
        <Box key="view-authors" sx={{ my: 10 }}>
          <PostAuthors posts={posts} />
        </Box>

        {/* 12. NEWSLETTER */}
        <Box key="view-newsletter">
          <PostNewsletter />
        </Box>
      </Container>
    </Stack>
  );
}
