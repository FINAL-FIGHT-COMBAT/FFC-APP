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
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 15 },
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
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
