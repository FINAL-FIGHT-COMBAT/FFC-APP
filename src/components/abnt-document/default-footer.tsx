import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Iconify } from 'src/components/iconify';

export function DefaultFooter() {
  return (
    <Box
      sx={{
        position: 'relative',
        pt: 2,
        borderTop: '1px solid #E0E0E0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 2,
        mt: 2
      }}
    >
      {/* MARGIN QR CODE */}
      <Box
        sx={{
          position: 'absolute',
          left: '-2.5cm',
          bottom: 0,
          width: '2cm',
          height: '2cm',
          border: '1px solid #E0E0E0',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#F9FAFB',
        }}
      >
        <Iconify icon={"mdi:qrcode" as any} width={60} sx={{ color: '#1A3F70' }} />
      </Box>
      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', flex: 1 }}>

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
  );
}
