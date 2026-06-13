import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Iconify } from 'src/components/iconify';

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
        '@media print': {
          boxShadow: 'none',
          mb: 0,
          p: 0, // Padding handled by @page margins in the parent
          width: '100%',
          minHeight: 'auto',
        }
      }}
    >
      <Box sx={{ flexGrow: 1, mt: pageNumber > 1 ? '0.5cm' : 0 }}>
        {children}
      </Box>

      {/* FOOTER - AUTENTICAÇÃO E NUMERAÇÃO */}
      <Box 
        sx={{ 
          mt: 4, 
          pt: 2, 
          borderTop: '1px solid #E0E0E0', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          gap: 2
        }}
      >
        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', flex: 1 }}>
          <Box 
            sx={{ 
              p: 0.5, 
              border: '1px solid #E0E0E0', 
              borderRadius: 1, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              bgcolor: '#F9FAFB'
            }}
          >
            <Iconify icon="mdi:qrcode" width={40} sx={{ color: '#1A3F70' }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#1A3F70', fontSize: '8pt', mb: 0.5 }}>
              AUTENTICAÇÃO DIGITAL
            </Typography>
            <Typography variant="caption" sx={{ color: '#637381', fontSize: '7pt', lineHeight: 1.2 }}>
              Este documento foi gerado pelo sistema interno da associação e possui validade <br />
              jurídica para fins de cadastro interno e prova de vínculo.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
          <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#1A3F70', fontSize: '8pt', mb: 0.5 }}>
            Página {pageNumber}
          </Typography>
          <Typography variant="caption" sx={{ color: '#637381', fontSize: '7pt', fontFamily: 'monospace' }}>
            Autenticação: FFC-2026-X8Y9Z
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
