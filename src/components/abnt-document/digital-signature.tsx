import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { DataTag } from './data-tag';

type DigitalSignatureProps = {
  title: string;
  name: string;
  color?: 'success' | 'info' | 'primary' | 'warning' | 'error';
};

export function DigitalSignature({ title, name, color = 'info' }: DigitalSignatureProps) {
  // Padronização com as cores do logo / Bandeira do Brasil
  const getBrandColor = (type: string) => {
    switch (type) {
      case 'success': return '#0A3B18'; // Verde Escuro Institucional FFC
      case 'info': return '#002776'; // Azul Marinho Brasil
      case 'warning': return '#D4AF37'; // Dourado FFC
      default: return '#0A3B18';
    }
  };

  const mainColor = getBrandColor(color);

  return (
    <Stack 
      spacing={2} 
      sx={{ 
        mt: 3, 
        p: 3, 
        bgcolor: `${mainColor}0D`, // 0D hex = 8% de opacidade
        border: `2px dashed ${mainColor}`, 
        borderRadius: 2 
      }}
    >
      <Typography variant="subtitle2" sx={{ color: mainColor, textTransform: 'uppercase' }}>
        <DataTag text={title} />
      </Typography>
      <Typography variant="body2" sx={{ color: '#000000', fontSize: '12pt', fontWeight: 'bold' }}>
        {name}
      </Typography>
    </Stack>
  );
}
