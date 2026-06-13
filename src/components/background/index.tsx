'use client';

 

import { memo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import { Space, SpaceAtmosphere } from './space';

// ----------------------------------------------------------------------

export const HomeBackground: React.FC = memo(() => (
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
    >
      <Suspense fallback={null}>
        <SpaceAtmosphere />
      </Suspense>
    </Canvas>
  </Space>
));

HomeBackground.displayName = 'HomeBackground';
