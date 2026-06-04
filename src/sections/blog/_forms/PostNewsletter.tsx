'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function PostNewsletter() {
  const theme = useTheme();

  return (
    <Box
      component={MotionViewport}
      sx={{
        py: 4,
        bgcolor: 'transparent',
        position: 'relative',
      }}
    >
      <Stack
        spacing={3}
        alignItems="center"
        sx={{
          px: { xs: 3, md: 8 },
          py: 6,
          borderRadius: 3,
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
          color: 'common.white',
          
          // 🟢 GLASSMORPHISM ELITE (Mais imersivo)
          bgcolor: alpha('#020817', 0.45),
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          
          // 💎 BORDA DE CRISTAL REATIVA
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            padding: '2px', // Borda mais grossa para mais impacto
            background: `linear-gradient(135deg, ${alpha(theme.palette.warning.main, 0.8)}, transparent 50%, ${alpha(theme.palette.info.main, 0.6)})`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            zIndex: 2,
          },
          boxShadow: `0 30px 60px -15px ${alpha('#000', 0.8)}, 0 0 40px ${alpha(theme.palette.warning.main, 0.15)}`,
        }}
      >
        {/* 🕸️ GRID PATTERN OVERLAY */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: `linear-gradient(${alpha(theme.palette.warning.main, 0.2)} 1px, transparent 1px), linear-gradient(90deg, ${alpha(theme.palette.warning.main, 0.2)} 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* 🎆 NEBULOSAS INTERNAS ANIMADAS */}
        <Box
          component={m.div}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            top: -150,
            right: -150,
            width: 400,
            height: 400,
            borderRadius: '50%',
            position: 'absolute',
            filter: 'blur(100px)',
            bgcolor: 'warning.main',
            zIndex: 0,
          }}
        />
        <Box
          component={m.div}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          sx={{
            bottom: -150,
            left: -150,
            width: 350,
            height: 350,
            borderRadius: '50%',
            position: 'absolute',
            filter: 'blur(100px)',
            bgcolor: 'info.main',
            zIndex: 0,
          }}
        />

        {/* CONTEÚDO */}
        <Stack spacing={2} sx={{ zIndex: 9, maxWidth: 560, position: 'relative' }}>
          <m.div variants={varFade('inUp')}>
            <Box
              sx={{
                width: 72,
                height: 72,
                mx: 'auto',
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20px',
                position: 'relative',
                bgcolor: alpha(theme.palette.warning.main, 0.1),
                border: `1px solid ${alpha(theme.palette.warning.main, 0.2)}`,
                boxShadow: `0 0 20px ${alpha(theme.palette.warning.main, 0.2)}`,
              }}
            >
              <Iconify
                icon={"solar:letter-bold-duotone" as any}
                width={40}
                sx={{ color: 'warning.main' }}
              />
            </Box>
          </m.div>

          <m.div variants={varFade('inUp')}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: { xs: '1.5rem', md: '2.25rem' },
                lineHeight: 1.2,
                background: `linear-gradient(135deg, ${theme.palette.common.white} 0%, ${alpha(theme.palette.warning.main, 0.8)} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              textShadow: `0 0 40px ${alpha(theme.palette.warning.main, 0.5)}`,
            }}
          >
            Sempre no Octógono
          </Typography>
          </m.div>

          <m.div variants={varFade('inUp')}>
            <Typography 
              variant="body1" 
              sx={{ 
                opacity: 0.8, 
                color: 'grey.300',
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.6,
              fontWeight: 500
            }}
          >
            Receba resultados de lutas, entrevistas exclusivas e alertas de eventos no seu e-mail.
          </Typography>
          </m.div>
        </Stack>

        {/* FORMULÁRIO */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ width: 1, maxWidth: 500, zIndex: 9, mt: 2 }}
        >
          <m.div style={{ flexGrow: 1 }} variants={varFade('inLeft')}>
            <TextField
              fullWidth
              placeholder="Seu melhor e-mail"
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: 54,
                  bgcolor: alpha(theme.palette.common.white, 0.03),
                  borderRadius: 1.5,
                  '& fieldset': { borderColor: alpha(theme.palette.common.white, 0.1) },
                  '&:hover fieldset': { borderColor: alpha(theme.palette.warning.main, 0.4) },
                  '&.Mui-focused fieldset': { borderColor: theme.palette.warning.main },
                  '& input': {
                    color: 'common.white',
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: 15,
                  },
                },
              }}
            />
          </m.div>

          <m.div variants={varFade('inRight')}>
            <Button
              variant="contained"
              size="large"
              sx={{
                height: 54,
                px: 4,
                fontSize: 14,
                fontWeight: 900,
                // CRYSTAL BUTTON EFFECT
                bgcolor: alpha(theme.palette.warning.main, 0.15),
                color: 'common.white',
                border: 'none',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  padding: '1px',
                  background: `linear-gradient(135deg, ${theme.palette.warning.main}, ${alpha(theme.palette.warning.main, 0.2)})`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                },
                borderRadius: 1.5,
                boxShadow: `0 10px 20px -5px ${alpha(theme.palette.warning.main, 0.3)}`,
                transition: theme.transitions.create(['all']),
                '&:hover': {
                  bgcolor: alpha(theme.palette.warning.main, 0.3),
                  boxShadow: `0 15px 30px -5px ${alpha(theme.palette.warning.main, 0.7)}`,
                  transform: 'translateY(-3px)',
                },
              }}
            >
              Subscrever
            </Button>
          </m.div>
        </Stack>

        <m.div variants={varFade('inUp')}>
          <Typography variant="caption" sx={{ opacity: 0.4, zIndex: 9, display: 'block', mt: 2 }}>
            Sem spam. Apenas artes marciais e conteúdo raiz.
          </Typography>
        </m.div>
      </Stack>
    </Box>
  );
}
