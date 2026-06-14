import type { IconButtonProps } from '@mui/material/IconButton';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export interface MenuButtonProps extends IconButtonProps {
  open?: boolean;
}

export function MenuButton({ open = false, sx, ...other }: MenuButtonProps) {
  return (
    <IconButton 
      sx={[
        {
          width: 44,
          height: 44,
          bgcolor: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: 'rgba(212, 175, 55, 0.08)', 
            borderColor: 'rgba(212, 175, 55, 0.3)',
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.15)',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]} 
      {...other}
    >
      <Box
        sx={{
          position: 'relative',
          width: '24px',
          height: '18px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          '& .bar': {
            display: 'block',
            width: '24px',
            height: '2.5px',
            borderRadius: '40px',
            bgcolor: '#FFFFFF', 
            transition: 'all 0.3s cubic-bezier(0.37, -1.11, 0.79, 2.02)',
            transformOrigin: 'center',
          },
          ...(open && {
            '& .bar:nth-of-type(1)': {
              transform: 'translateY(7.75px) rotate(45deg)',
              bgcolor: '#D4AF37', // Acende no dourado ao abrir
            },
            '& .bar:nth-of-type(2)': {
              opacity: 0,
            },
            '& .bar:nth-of-type(3)': {
              transform: 'translateY(-7.75px) rotate(-45deg)',
              bgcolor: '#D4AF37',
            },
          }),
        }}
      >
        <Box component="span" className="bar" />
        <Box component="span" className="bar" />
        <Box component="span" className="bar" />
      </Box>
    </IconButton>
  );
}
