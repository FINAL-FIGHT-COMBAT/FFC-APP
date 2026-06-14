import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function DefaultHeader() {
  return (
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
  );
}
