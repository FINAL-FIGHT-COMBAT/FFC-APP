'use client';

import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

interface CyberCardProps extends BoxProps {}

export function CyberCard({ sx, children, ...other }: CyberCardProps) {
  const theme = useTheme();

  return (
    <Box
      sx={[
        {
          borderRadius: 3,
          overflow: 'hidden',
          bgcolor: alpha('#020817', 0.8), // Fundo mais denso para dar contraste máximo à borda luminosa
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          position: 'relative',
          border: 'none',
          boxShadow: `inset 0 1px 1px ${alpha(theme.palette.common.white, 0.15)}, inset 0 -1px 1px ${alpha('#000', 0.4)}`, // Condensação e volume

          // REFLEXO GLOSSY (WET GLASS)
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            background: `linear-gradient(135deg, 
              ${alpha(theme.palette.common.white, 0.15)} 0%, 
              ${alpha(theme.palette.common.white, 0)} 40%, 
              ${alpha(theme.palette.common.white, 0)} 100%
            )`,
            pointerEvents: 'none',
            zIndex: 10, // Z-INDEX 10: Garante que o vidro passe POR CIMA da foto da notícia
          },

          // BORDA MAGNÉTICA (CIANO -> ÂMBAR)
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            padding: '1.5px', // Borda um pouco mais espessa para dar o "destaque" da imagem
            background: `linear-gradient(180deg, 
              ${theme.palette.info.main} 0%, 
              ${alpha(theme.palette.common.white, 0.05)} 50%, 
              ${theme.palette.warning.main} 100%
            )`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            zIndex: 11, // Z-INDEX ALTO: Garante que a borda fique por cima da imagem e do overlay escuro
            pointerEvents: 'none',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {/* CONTEÚDO DO CARD */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 9,
          width: 1,
          height: 1,
          display: 'inherit',
          flexDirection: 'inherit',
          alignItems: 'inherit',
          justifyContent: 'inherit',
          gap: 'inherit',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
