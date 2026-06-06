import type { ButtonProps } from '@mui/material/Button';

import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export interface CyberButtonProps extends ButtonProps {
  glowColor?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | string;
  target?: string;
  rel?: string;
  component?: any;
}

export function CyberButton({ glowColor = 'info', sx, children, ...other }: CyberButtonProps) {
  const theme = useTheme();

  // Resolve the main color from theme palette or custom hex
  const mainColor = 
    glowColor === 'primary' ? theme.palette.primary.main :
    glowColor === 'secondary' ? theme.palette.secondary.main :
    glowColor === 'info' ? theme.palette.info.main :
    glowColor === 'success' ? theme.palette.success.main :
    glowColor === 'warning' ? theme.palette.warning.main :
    glowColor === 'error' ? theme.palette.error.main :
    glowColor;

  return (
    <Button
      sx={[
        {
          height: 56,
          px: 4,
          borderRadius: 1.5,
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 700,
          textTransform: 'uppercase',
          color: 'common.white',
          border: 'none',
          position: 'relative',
          bgcolor: alpha('#020817', 0.6),
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          transition: theme.transitions.create(['all']),

          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            padding: '1px',
            background: `linear-gradient(180deg, 
              ${alpha(mainColor, 1)} 0%, 
              ${alpha(mainColor, 0.1)} 50%, 
              ${alpha(mainColor, 0.6)} 100%
            )`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          },

          '&:hover': {
            bgcolor: alpha(mainColor, 0.08),
            transform: 'scale(1.05)',
            boxShadow: `0 0 20px 0 ${alpha(mainColor, 0.3)}`,
            '& .MuiButton-endIcon': {
              transform: 'translateX(4px)',
            },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {children}
    </Button>
  );
}
