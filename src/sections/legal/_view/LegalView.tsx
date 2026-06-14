'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DefaultHeader, PdfViewerLayout, A4Page } from 'src/components/abnt-document';

// ----------------------------------------------------------------------

type Props = {
  title: string;
  content: string;
  lastUpdated: string;
};

export function LegalView({ title, content, lastUpdated }: Props) {
  return (
    <PdfViewerLayout documentTitle={title}>
      <A4Page
        headerContent={<DefaultHeader />}
        footerContent={
          <Box sx={{ mt: 2, borderTop: '1px solid #ccc', pt: 1, textAlign: 'center' }}>
            <Typography variant="caption">Última atualização: {lastUpdated}</Typography>
          </Box>
        }
      >
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#000', mb: 2 }}>{title}</Typography>
        </Box>

        <Box
          sx={{
            color: '#000',
            fontFamily: '"Arial", "Helvetica", sans-serif',
            textAlign: 'justify',
            '& h2': { fontSize: '1.2rem', fontWeight: 'bold', mt: 4, mb: 2, textTransform: 'uppercase' },
            '& p': { fontSize: '1rem', mb: 2, lineHeight: 1.5, textIndent: '1.25cm' },
            '& ul': { mb: 2, pl: '1.25cm' },
            '& li': { mb: 1, fontSize: '1rem', lineHeight: 1.5 },
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </A4Page>
    </PdfViewerLayout>
  );
}
