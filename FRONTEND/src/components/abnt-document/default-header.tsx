import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useDocumentData } from './document-context';

type DefaultHeaderProps = {
  title?: string;
  logoUrl?: string;
};

export function DefaultHeader({
  title,
  logoUrl = '/logo/android-chrome-512x512.png',
}: DefaultHeaderProps = {}) {
  const data = useDocumentData();

  const displayTitle = title || (data?.documentTitle as string) || '';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #000', // Linha mais fina/sutil
        pb: 0, // Sem nenhum recuo extra, o mais colado possível
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          component="img"
          src={logoUrl}
          alt="FFC Logo"
          sx={{
            height: 95,
            width: 'auto',
            objectFit: 'contain',
          }}
        />
        <Box>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', color: '#000', fontFamily: 'Arial, sans-serif' }}
          >
            FFC - FINAL FIGHT COMBAT
          </Typography>
          {displayTitle && (
            <Typography
              variant="caption"
              sx={{ color: 'text.secondary', display: 'block', fontSize: '9pt', mt: 0.5 }}
            >
              {displayTitle}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
