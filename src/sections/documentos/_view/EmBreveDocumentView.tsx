'use client';

import type { IDocumentConfig } from 'src/_mock/_documents';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { HomeBackground } from 'src/components/background';
import {
  A4Page,
  ABNTText,
  DefaultHeader,
  DefaultFooter,
  DocumentTitle,
  PdfViewerLayout,
} from 'src/components/abnt-document';

// ----------------------------------------------------------------------

type Props = {
  docConfig: IDocumentConfig;
};

export function EmBreveDocumentView({ docConfig }: Props) {
  return (
    <>
      <HomeBackground />
      <PdfViewerLayout documentTitle={`${docConfig.title}_FFC`}>
        <A4Page pageNumber={1} headerContent={<DefaultHeader />} footerContent={<DefaultFooter />}>
          
          <Box sx={{ mb: 8 }}>
            <DocumentTitle>
              {docConfig.title}
            </DocumentTitle>
          </Box>
          
          <Box 
            sx={{ 
              border: '3px dashed #0A3B18', 
              p: 6, 
              borderRadius: 2, 
              bgcolor: '#0A3B1808', 
              textAlign: 'center', 
              my: 8 
            }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#0A3B18', 
                fontWeight: 900, 
                textTransform: 'uppercase', 
                mb: 3,
                fontSize: '24pt'
              }}
            >
              EM DESENVOLVIMENTO
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#D4AF37', // Dourado
                fontWeight: 900,
                fontSize: '18pt'
              }}
            >
              A documentação oficial estará disponível em breve.
            </Typography>
          </Box>
          
          <ABNTText sx={{ textAlign: 'center', mt: 6, fontWeight: 'bold' }}>
            Este documento está passando por revisão jurídica e técnica para garantir total alinhamento e segurança jurídica com as regras oficiais do Final Fight Combat.
          </ABNTText>

        </A4Page>
      </PdfViewerLayout>
    </>
  );
}
