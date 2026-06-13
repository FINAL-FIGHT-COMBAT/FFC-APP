'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { CyberButton } from 'src/components/cyber-button';
import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------

type Props = {
  documentId: string;
};

export function AssinaturaView({ documentId }: Props) {
  const theme = useTheme();
  const settings = useSettingsContext();

  // Neste placeholder, simulamos o scanner biométrico
  return (
    <Container maxWidth="lg">
      <Stack spacing={3} sx={{ mb: 5 }}>
        <Typography variant="h4" sx={{ fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif' }}>
          Assinatura Biométrica Web3
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Processo de registro seguro via IPFS e Reconhecimento Facial.
          <br />
          Documento selecionado: <strong>{documentId}</strong>
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: 4,
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }}
      >
        {/* Lado Esquerdo: O Documento */}
        <CyberCard sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Iconify icon={"solar:document-text-bold-duotone" as any} width={32} sx={{ color: 'info.main' }} />
            <Typography variant="h6" sx={{ color: 'common.white' }}>Termos Legais</Typography>
          </Stack>
          
          <Box sx={{ flexGrow: 1, p: 3, bgcolor: alpha(theme.palette.grey[900], 0.5), borderRadius: 1, border: `1px solid ${alpha(theme.palette.grey[800], 0.8)}` }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'pre-wrap' }}>
              Pelo presente instrumento, declaro estar ciente de todos os riscos e obrigações envolvidos no evento Final Fight Combat...
              {'\n\n'}
              [TEXTO DO DOCUMENTO OU VISUALIZADOR PDF EMBARCADO AQUI]
              {'\n\n'}
              Ao prosseguir com o escaneamento facial, concordo que minha assinatura biométrica seja registrada em blockchain via IPFS, possuindo total validade jurídica e irrevogabilidade sobre o aceite destes termos.
            </Typography>
          </Box>
        </CyberCard>

        {/* Lado Direito: Scanner Biométrico */}
        <CyberCard 
          sx={{ 
            p: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderColor: alpha(theme.palette.info.main, 0.4),
            boxShadow: `0 0 40px ${alpha(theme.palette.info.main, 0.1)}`,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: 250,
              height: 250,
              mb: 4,
              borderRadius: '50%',
              border: `2px dashed ${alpha(theme.palette.info.main, 0.5)}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${alpha(theme.palette.info.main, 0.2)} 0%, transparent 70%)`,
                animation: 'pulse 2s infinite',
              },
              '@keyframes pulse': {
                '0%': { transform: 'scale(0.95)', opacity: 0.5 },
                '50%': { transform: 'scale(1.05)', opacity: 0.8 },
                '100%': { transform: 'scale(0.95)', opacity: 0.5 },
              }
            }}
          >
            <Iconify icon={"solar:user-scan-bold-duotone" as any} width={100} sx={{ color: 'info.main', zIndex: 1 }} />
            
            {/* Scanning Line Animation */}
            <Box
              sx={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                right: '10%',
                height: 2,
                bgcolor: 'info.main',
                boxShadow: `0 0 10px ${theme.palette.info.main}`,
                zIndex: 2,
                animation: 'scan 2s infinite linear alternate',
                '@keyframes scan': {
                  '0%': { top: '10%' },
                  '100%': { top: '90%' },
                }
              }}
            />
          </Box>

          <CyberButton
            glowColor="info"
            endIcon={<Iconify icon={"solar:camera-bold" as any} />}
            fullWidth
            sx={{ height: 56, fontSize: 16 }}
            onClick={() => alert('Simulação: Iniciando câmera para captura facial e geração do hash IPFS...')}
          >
            INICIAR ASSINATURA FACIAL
          </CyberButton>

          <Typography variant="caption" sx={{ mt: 3, color: 'text.disabled', textAlign: 'center' }}>
            Seu rosto será comparado com a base de dados do seu perfil. <br />
            O registro será imutável e armazenado na rede descentralizada.
          </Typography>
        </CyberCard>
      </Box>
    </Container>
  );
}
