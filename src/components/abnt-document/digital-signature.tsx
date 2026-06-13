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
  const theme = useTheme();
  return (
    <Stack 
      spacing={2} 
      sx={{ 
        mt: 3, 
        p: 3, 
        bgcolor: alpha(theme.palette[color].main, 0.08), 
        border: `1px dashed ${theme.palette[color].main}`, 
        borderRadius: 2 
      }}
    >
      <Typography variant="subtitle2" sx={{ color: `${color}.dark`, textTransform: 'uppercase' }}>
        <DataTag text={title} />
      </Typography>
      <Typography variant="body2" sx={{ color: '#000000', fontSize: '12pt' }}>
        {name}
      </Typography>
    </Stack>
  );
}
