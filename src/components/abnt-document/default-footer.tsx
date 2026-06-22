import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { useDocumentData } from './document-context';

type DefaultFooterProps = {
  authCode?: string;
  message?: React.ReactNode;
  qrCodeIcon?: string;
};

export function DefaultFooter({ authCode, message, qrCodeIcon = 'mdi:qrcode' }: DefaultFooterProps = {}) {
  const data = useDocumentData();

  const finalAuthCode = authCode || (data?.authCode as string) || 'FFC-2026-X8Y9Z';

  const finalMessage = message || (data?.message as React.ReactNode) || (
    <>
      Este documento foi gerado pelo sistema interno da associação e possui validade <br />
      jurídica para fins de cadastro interno e prova de vínculo.
    </>
  );

  return (
    <Box
      sx={{
        position: 'relative',
        pt: 2,
        borderTop: '1px solid #E0E0E0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 2,
        mt: 2,
        minHeight: '2.2cm',
        boxSizing: 'border-box',
      }}
    >
      {/* MARGIN QR CODE */}
      <Box
        sx={{
          position: 'absolute',
          left: '-2.5cm',
          top: 0,
          width: '2.2cm',
          height: '2.2cm',
          border: '2px solid #D4AF37', // Gold border
          borderRadius: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#FFFFFF',
        }}
      >
        {/* Dark Green QR Code */}
        <Iconify icon={qrCodeIcon as any} width={70} sx={{ color: '#0A3B18' }} />
      </Box>
      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', flex: 1 }}>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="caption" sx={{ fontWeight: '900', color: '#0A3B18', fontSize: '8pt', mb: 0.5, textTransform: 'uppercase' }}>
            AUTENTICAÇÃO DIGITAL
          </Typography>
          <Typography variant="caption" sx={{ color: '#637381', fontSize: '7pt', lineHeight: 1.2 }}>
            {finalMessage}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
        <Typography variant="caption" sx={{ fontWeight: '900', color: '#D4AF37', fontSize: '8pt', mb: 0.5 }}>
          FFC Oficial
        </Typography>
        <Typography variant="caption" sx={{ color: '#0A3B18', fontSize: '7pt', fontFamily: 'monospace', fontWeight: 'bold' }}>
          Autenticação: {finalAuthCode}
        </Typography>
      </Box>
    </Box>
  );
}
