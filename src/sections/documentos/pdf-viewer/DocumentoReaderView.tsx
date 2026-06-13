'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useRouter } from 'src/routes/hooks';

import { MOCK_PDF_DOCUMENTS } from 'src/_mock/_documents';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  documentId: string;
};

export function DocumentoReaderView({ documentId }: Props) {
  const router = useRouter();
  const document = MOCK_PDF_DOCUMENTS[documentId];

  if (!document) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#323639', flexDirection: 'column' }}>
        <Typography sx={{ color: '#fff' }}>Documento não encontrado.</Typography>
        <Typography sx={{ color: '#aaa', mt: 2 }}>ID recebido: {String(documentId)}</Typography>
      </Box>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <Box
      sx={{
        // Simula a cor de fundo do leitor nativo de PDF do Chrome
        minHeight: '100vh',
        bgcolor: '#323639',
        py: { xs: 2, md: 5 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Top Bar - Simulating PDF Viewer Controls */}
      <Box
        sx={{
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99,
          bgcolor: '#323639',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          px: 2,
          py: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton onClick={() => router.back()} sx={{ color: '#fff' }}>
            <Iconify icon={"solar:arrow-left-bold-duotone" as any} />
          </IconButton>
          <Typography sx={{ color: '#fff', fontSize: 14, fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>
            {document.title}.pdf
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton onClick={handlePrint} sx={{ color: '#fff' }}>
            <Iconify icon={"solar:printer-bold-duotone" as any} />
          </IconButton>
          <Button 
            variant="contained" 
            size="small" 
            onClick={handlePrint}
            sx={{ bgcolor: '#8ab4f8', color: '#202124', '&:hover': { bgcolor: '#9fbff0' } }}
          >
            Baixar PDF
          </Button>
        </Stack>
      </Box>

      {/* A4 Paper Container */}
      <Container
        sx={{
          mt: 7, // espaço para a top bar
          bgcolor: '#fff',
          maxWidth: '800px !important', // A4 width proportion
          minHeight: '1123px', // A4 height proportion
          p: { xs: 4, md: 8 },
          boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
          color: '#000',
          
          // Estilo global resetado para não parecer com o app (Formato Formal de Documento)
          fontFamily: '"Times New Roman", Times, serif',
          '& h1': { fontSize: 24, fontWeight: 'bold', mb: 4, textAlign: 'center', textTransform: 'uppercase' },
          '& h2': { fontSize: 18, fontWeight: 'bold', mt: 4, mb: 2 },
          '& p': { fontSize: 14, lineHeight: 1.6, mb: 2, textAlign: 'justify' },
          '& ul': { fontSize: 14, lineHeight: 1.6, mb: 2, pl: 4 },
          '& li': { mb: 1 },
        }}
      >
        {/* Renderiza o conteúdo do documento (simulando parsing básico de markdown) */}
        {document.content.split('\n').map((line, index) => {
          if (line.startsWith('# ')) return <h1 key={index}>{line.replace('# ', '')}</h1>;
          if (line.startsWith('## ')) return <h2 key={index}>{line.replace('## ', '')}</h2>;
          if (line.startsWith('- ')) return <li key={index} style={{ marginLeft: 20 }}>{line.replace('- ', '')}</li>;
          if (line.trim() === '') return null;
          return <p key={index}>{line}</p>;
        })}
      </Container>
    </Box>
  );
}
