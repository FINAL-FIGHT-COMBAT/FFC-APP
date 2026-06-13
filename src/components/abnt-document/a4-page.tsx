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
        p: '3cm 2cm 2cm 3cm', // ABNT Margins for screen reading
        fontFamily: '"Arial", "Helvetica", sans-serif',
        position: 'relative',
        '@media print': {
          boxShadow: 'none',
          mb: 0,
          p: 0, // Padding handled by @page margins in the parent
          width: '100%',
          minHeight: 'auto',
        }
      }}
    >
      <Box
        component="table"
        sx={{
          width: '100%',
          borderCollapse: 'collapse',
          borderSpacing: 0,
        }}
      >
        {/* REPEATING HEADER */}
        <Box
          component="thead"
          sx={{
            display: 'table-header-group',
          }}
        >
          <Box component="tr">
            <Box component="td" sx={{ pb: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '2px solid #000',
                  pb: 1.5
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    component="img"
                    src="/logo/logo-512x512.png"
                    alt="FFC Logo"
                    sx={{
                      height: 45,
                      width: 'auto',
                      objectFit: 'contain',
                      filter: 'grayscale(100%)'
                    }}
                  />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000', fontFamily: 'Arial, sans-serif' }}>
                      FFC - FINAL FIGHT COMBAT
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* MAIN CONTENT */}
        <Box component="tbody">
          <Box component="tr">
            <Box component="td" sx={{ pb: 4, pt: 3 }}>
              {children}
            </Box>
          </Box>
        </Box>

        {/* REPEATING FOOTER */}
        <Box
          component="tfoot"
          sx={{
            display: 'table-footer-group',
          }}
        >
          <Box component="tr">
            <Box component="td">
              <Box
                sx={{
                  pt: 2,
                  borderTop: '1px solid #E0E0E0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 2,
                  mt: 2
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
                    <Iconify icon={"mdi:qrcode" as any} width={40} sx={{ color: '#1A3F70' }} />
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
                    FFC Oficial
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#637381', fontSize: '7pt', fontFamily: 'monospace' }}>
                    Autenticação: FFC-2026-X8Y9Z
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

      </Box>
    </Paper>
  );
}
