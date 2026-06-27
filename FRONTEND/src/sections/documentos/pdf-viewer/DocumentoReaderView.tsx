'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';

import { MOCK_PDF_DOCUMENTS } from 'src/_mock/_documents';

import { HomeBackground } from 'src/components/background';
import {
  A4Page,
  Clause,
  ABNTText,
  SectionTitle,
  DocumentTitle,
  DefaultHeader,
  DefaultFooter,
  PdfViewerLayout,
  DocumentDataProvider,
} from 'src/components/abnt-document';

// ----------------------------------------------------------------------

type Props = {
  documentId: string;
};

export function DocumentoReaderView({ documentId }: Props) {
  const router = useRouter();
  const document = MOCK_PDF_DOCUMENTS[documentId];

  if (!document) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#323639',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ color: '#fff' }}>Documento não encontrado.</Typography>
        <Typography sx={{ color: '#aaa', mt: 2 }}>ID recebido: {String(documentId)}</Typography>
      </Box>
    );
  }

  const documentData = {
    documentTitle: document.title,
  };

  return (
    <>
      <HomeBackground />
      <DocumentDataProvider data={documentData}>
        <PdfViewerLayout documentTitle={document.title.replace(/\s+/g, '_')}>
          <A4Page
            pageNumber={1}
            headerContent={<DefaultHeader />}
            footerContent={<DefaultFooter />}
          >
            {document.content.split('\n').map((line, index) => {
              const trimmed = line.trim();
              if (trimmed === '') return null;

              if (trimmed.startsWith('# ')) {
                return (
                  <DocumentTitle key={index}>
                    {trimmed.replace('# ', '')}
                  </DocumentTitle>
                );
              }
              if (trimmed.startsWith('## ')) {
                return (
                  <SectionTitle key={index}>
                    {trimmed.replace('## ', '')}
                  </SectionTitle>
                );
              }
              if (trimmed.startsWith('- ')) {
                return (
                  <Clause
                    key={index}
                    text={trimmed.replace('- ', '')}
                  />
                );
              }
              return (
                <ABNTText key={index}>
                  {trimmed}
                </ABNTText>
              );
            })}
          </A4Page>
        </PdfViewerLayout>
      </DocumentDataProvider>
    </>
  );
}
