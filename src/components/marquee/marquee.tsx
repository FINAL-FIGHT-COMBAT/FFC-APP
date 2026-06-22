import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { keyframes } from '@mui/material/styles';

// ----------------------------------------------------------------------

const marqueeAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;

const marqueeReverseAnimation = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

export interface MarqueeProps extends BoxProps {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  duplicateCount?: number;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  reverse = false,
  duration = 60,
  duplicateCount = 4,
  pauseOnHover = false,
  sx,
  ...other
}: MarqueeProps) {
  const animationName = reverse ? marqueeReverseAnimation : marqueeAnimation;

  return (
    <Box
      sx={{
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        py: 1.5,
        width: '100%',
        ...sx,
      }}
      {...other}
    >
      {Array.from({ length: duplicateCount }).map((_, index) => (
        <Stack
          key={index}
          direction="row"
          spacing={3}
          sx={{
            px: 1.5,
            flexShrink: 0,
            willChange: 'transform',
            animation: `${animationName} ${duration}s linear infinite`,
            backfaceVisibility: 'hidden',
            perspective: 1000,
            transform: 'translate3d(0, 0, 0)',
            ...(pauseOnHover && {
              '&:hover': {
                animationPlayState: 'paused',
              },
            }),
          }}
        >
          {children}
        </Stack>
      ))}
    </Box>
  );
}
