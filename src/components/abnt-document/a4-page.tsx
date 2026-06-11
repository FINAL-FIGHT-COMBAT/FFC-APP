import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

type A4PageProps = {
  children: React.ReactNode;
  pageNumber: number;
};

export function A4Page({ children, pageNumber }: A4PageProps) {
  return (
    <Paper
      elevation={12}
      sx={{
        width: '210mm',
        minHeight: '297mm', 
        flexShrink: 0,
        mx: 'auto',
        mb: 6,
        bgcolor: '#FFFFFF',
        borderRadius: 0,
        boxSizing: 'border-box',
        p: '3cm 2cm 2cm 3cm', // ABNT Margins
        fontFamily: '"Arial", "Helvetica", sans-serif',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <Box sx={{ position: 'absolute', top: '2cm', right: '2cm' }}>
        <Typography variant="body2" sx={{ fontSize: '10pt', color: '#000000' }}>
          {pageNumber}
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, mt: pageNumber > 1 ? '0.5cm' : 0 }}>
        {children}
      </Box>
    </Paper>
  );
}
