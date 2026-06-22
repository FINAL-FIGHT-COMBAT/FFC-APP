import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';

import { HomeBackground } from 'src/components/background';

// ----------------------------------------------------------------------

export interface StandardPageWrapperProps extends BoxProps {
  /**
   * If true, renders the global HomeBackground (the starfield/spaceship background).
   * Default is true since most FFC app pages use it.
   */
  withBackground?: boolean;
}

export function StandardPageWrapper({
  children,
  withBackground = true,
  sx,
  ...other
}: StandardPageWrapperProps) {
  return (
    <>
      {withBackground && <HomeBackground />}

      <Box
        component="main"
        sx={[
          {
            position: 'relative',
            zIndex: 1,
            // Padrão FFC de afastamento do topo para não bater no cabeçalho
            pt: { xs: 12, md: 15 },
            pb: { xs: 10, md: 15 },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        {children}
      </Box>
    </>
  );
}
