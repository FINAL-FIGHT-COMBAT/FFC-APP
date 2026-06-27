import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type DefaultHeaderProps = {
  logoUrl?: string;
};

export function DefaultHeader({
  logoUrl = '/logo/android-chrome-512x512.png',
}: DefaultHeaderProps = {}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #000',
        pb: 0,
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
        </Box>
      </Box>
    </Box>
  );
}
