import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';

type DataTagProps = {
  text?: string;
};

export function DataTag({ text = 'PREENCHIMENTO AUTOMÁTICO' }: DataTagProps) {
  const theme = useTheme();
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        px: 1,
        py: 0.1,
        mx: 0.5,
        borderRadius: 0.5,
        fontSize: '10pt',
        fontWeight: 'bold',
        bgcolor: alpha(theme.palette.warning.main, 0.1),
        color: theme.palette.warning.dark,
        border: `1px solid ${alpha(theme.palette.warning.main, 0.4)}`,
        textIndent: '0cm',
      }}
    >
      {text}
    </Box>
  );
}
