import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import { useDocumentData } from './document-context';

type DataTagProps = {
  text?: string;
  field?: string;
};

export function DataTag({ text = 'PREENCHIMENTO AUTOMÁTICO', field }: DataTagProps) {
  const theme = useTheme();
  const contextData = useDocumentData();
  
  const lookupField = field || text;
  const contextValue = contextData ? contextData[lookupField] : undefined;

  if (contextValue) {
    return (
      <Box component="span" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
        {contextValue}
      </Box>
    );
  }

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
