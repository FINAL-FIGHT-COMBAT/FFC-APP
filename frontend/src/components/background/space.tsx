'use client';

import type { PropsWithChildren } from 'react';

import { memo, Suspense } from 'react';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

const STARS_CONFIG = {
  radius: 80,
  depth: 40,
  count: 3000,
  factor: 4,
  fade: true,
  saturation: 0,
};

/* ================================
   Componente de Fundo (Layout)
   Posicionado atrás de todo o conteúdo (Layer 0)
================================ */
export const Space = memo(({ children }: PropsWithChildren) => (
  <Box
    id="space-background"
    sx={{
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      background: '#010411',
      overflow: 'hidden',
      pointerEvents: 'none',
      '@media print': {
        display: 'none',
      },
    }}
  >
    {children}
  </Box>
));

Space.displayName = 'Space';

/* ================================
   Atmosfera 3D — apenas estrelas estáticas
   Sem luzes (Stars usam BasicMaterial, não reagem a luz)
================================ */
export const SpaceAtmosphere = memo(() => (
  <Suspense fallback={null}>
    <Stars {...STARS_CONFIG} />
  </Suspense>
));

SpaceAtmosphere.displayName = 'SpaceAtmosphere';

/* ================================
   Cena completa com Canvas otimizado
   Usada nos layouts Main e Blog como fundo fixo
================================ */
export const SpaceScene = memo(() => (
  <Space>
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
        stencil: false,
        depth: false,
      }}
      style={{ pointerEvents: 'none' }}
    >
      <SpaceAtmosphere />
    </Canvas>
  </Space>
));

SpaceScene.displayName = 'SpaceScene';
