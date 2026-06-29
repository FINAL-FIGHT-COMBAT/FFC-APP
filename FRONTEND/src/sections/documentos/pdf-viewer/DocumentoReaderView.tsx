'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <DocumentTitle>
                    {children}
                  </DocumentTitle>
                ),
                h2: ({ children }) => (
                  <SectionTitle>
                    {children}
                  </SectionTitle>
                ),
                h3: ({ children }) => (
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#000000',
                      mt: 3,
                      mb: 1.5,
                      fontWeight: 'bold',
                      fontSize: '12pt',
                      fontFamily: '"Arial", "Helvetica", sans-serif',
                      textAlign: 'left',
                    }}
                  >
                    {children}
                  </Typography>
                ),
                p: ({ children }) => (
                  <ABNTText>
                    {children}
                  </ABNTText>
                ),
                ul: ({ children }) => (
                  <Box component="ul" sx={{ pl: 4, mb: 2, color: '#000000', listStyleType: 'disc' }}>
                    {children}
                  </Box>
                ),
                ol: ({ children }) => (
                  <Box component="ol" sx={{ pl: 4, mb: 2, color: '#000000', listStyleType: 'decimal' }}>
                    {children}
                  </Box>
                ),
                li: ({ children }) => (
                  <Typography
                    variant="body1"
                    component="li"
                    sx={{
                      color: '#000000',
                      mb: 1,
                      lineHeight: 1.6,
                      textAlign: 'justify',
                      fontSize: '12pt',
                      fontFamily: '"Arial", "Helvetica", sans-serif',
                    }}
                  >
                    {children}
                  </Typography>
                ),
                strong: ({ children }) => (
                  <Box component="strong" sx={{ fontWeight: 'bold', display: 'inline' }}>
                    {children}
                  </Box>
                ),
                em: ({ children }) => (
                  <Box component="em" sx={{ fontStyle: 'italic', display: 'inline' }}>
                    {children}
                  </Box>
                ),
              }}
            >
              {document.content}
            </ReactMarkdown>
          </A4Page>
        </PdfViewerLayout>
      </DocumentDataProvider>
    </>
  );
}

