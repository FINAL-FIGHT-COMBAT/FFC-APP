import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// ----------------------------------------------------------------------

export interface MarqueeProps extends BoxProps {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  duplicateCount?: number;
}

export function Marquee({
  children,
  reverse = false,
  duration = 60,
  duplicateCount = 4,
  sx,
  ...other
}: MarqueeProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        py: 1.5,
        ...sx,
      }}
      {...other}
    >
      {Array.from({ length: duplicateCount }).map((_, index) => (
        <Stack
          key={index}
          component={m.div}
          direction="row"
          spacing={3}
          sx={{ px: 1.5, flexShrink: 0 }}
          animate={{ x: reverse ? ['-100%', '0%'] : ['0%', '-100%'] }}
          transition={{
            duration,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {children}
        </Stack>
      ))}
    </Box>
  );
}
