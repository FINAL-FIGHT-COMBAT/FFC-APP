'use client';

import { Suspense } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { HomeBackground } from 'src/components/background';

import { InscricaoForm } from '../InscricaoForm';

// ----------------------------------------------------------------------

export function InscricaoView() {
  return (
    <>
      <HomeBackground />

      <Box
        component="main"
        sx={{
          position: 'relative',
          zIndex: 1,
          pt: { xs: 8, sm: 9, md: 10 },
          pb: { xs: 5, sm: 6, md: 8 },
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Container maxWidth="md">
          <Suspense fallback={null}>
            <InscricaoForm />
          </Suspense>
        </Container>
      </Box>
    </>
  );
}
