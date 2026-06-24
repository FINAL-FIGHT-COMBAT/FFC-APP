'use client';

import { HomeBackground } from 'src/components/background';
import {
  A4Page,
  DefaultHeader,
  DefaultFooter,
  PdfViewerLayout,
  DocumentDataProvider,
} from 'src/components/abnt-document';

import { TermoDeRiscoContent } from './TermoDeRiscoContent';

// ----------------------------------------------------------------------

export function TermoDeRiscoView() {
  const documentData = {};

  return (
    <>
      <HomeBackground />
      <DocumentDataProvider data={documentData}>
        <PdfViewerLayout documentTitle="Termo_de_Risco_FFC">
          <A4Page
            pageNumber={1}
            headerContent={<DefaultHeader />}
            footerContent={<DefaultFooter />}
          >
            <TermoDeRiscoContent />
          </A4Page>
        </PdfViewerLayout>
      </DocumentDataProvider>
    </>
  );
}
