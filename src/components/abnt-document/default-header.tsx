import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function DefaultHeader() {
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
          src="/logo/android-chrome-512x512.png"
          alt="FFC Logo"
          sx={{
            height: 95,
            width: 'auto',
            objectFit: 'contain',
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
