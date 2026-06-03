import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { Iconify } from 'src/components/iconify';

type PlayerProps = {
  name: string;
  photo?: string;
  isWinner?: boolean;
};

type BracketMatchProps = {
  player1: PlayerProps;
  player2?: PlayerProps;
  matchTitle?: string;
  subtitle?: string;
  isFinal?: boolean;
  isSmall?: boolean;
};

export function BracketMatch({ 
  player1, 
  player2, 
  matchTitle, 
  subtitle = 'GRAND PRIX ABSOLUTO', 
  isFinal = false,
  isSmall = false
}: BracketMatchProps) {
  const theme = useTheme();

  // Se não passar player2, renderiza um "AGUARDANDO" genérico
  const p2 = player2 || { name: 'A DEFINIR' };

  const name1 = player1.name || 'A DEFINIR';
  const name2 = p2.name || 'A DEFINIR';
  const displayTitle = matchTitle || (name1 === 'A DEFINIR' || name2 === 'A DEFINIR' ? 'AGUARDANDO OPONENTES' : `${name1} VS ${name2}`);

  const cardWidth = isFinal ? 200 : isSmall ? 115 : 140;
  const cardHeight = isFinal ? 280 : isSmall ? 155 : 190;

  const renderPhoto = (player: PlayerProps) => {
    const isWinner = player.isWinner;

    return (
      <Box
        sx={{
          width: cardWidth,
          height: cardHeight,
          bgcolor: 'rgba(255,255,255,0.05)',
          border: `2px solid ${isWinner ? theme.palette.warning.main : alpha('#fff', 0.1)}`,
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          transition: 'all 0.3s ease',
          boxShadow: isWinner ? `0 0 20px ${alpha(theme.palette.warning.main, 0.4)}` : 'none',
          '&:hover': {
            borderColor: alpha(theme.palette.success.main, 0.5),
            transform: 'translateY(-4px)',
          },
        }}
      >
        <Box 
          component="img" 
          src={player.photo || '/assets/images/convidados/Fallback%20atleta.png'} 
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        
        {/* Placeholder flag corner (like the reference image) */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 6,
            left: 6,
            width: 20,
            height: 14,
            bgcolor: 'rgba(255,255,255,0.2)',
            borderRadius: 0.5,
          }}
        />
      </Box>
    );
  };

  return (
    <Stack spacing={1.5} alignItems="center">
      <Stack direction="row" spacing={1}>
        {renderPhoto(player1)}
        {renderPhoto(p2)}
      </Stack>
      
      <Stack spacing={0.5} alignItems="center">
        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: '#fff',
            fontSize: isFinal ? 16 : isSmall ? 11 : 13,
            letterSpacing: 0.5,
            textAlign: 'center',
            maxWidth: cardWidth * 2 + 8, // cardWidth * 2 + spacing
            lineHeight: 1.2,
          }}
        >
          {displayTitle}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: 'text.disabled',
            fontStyle: 'italic',
            fontSize: isFinal ? 12 : isSmall ? 9 : 10,
            textTransform: 'uppercase',
          }}
        >
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
}
