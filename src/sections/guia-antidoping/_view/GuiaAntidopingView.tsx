'use client';

import { HomeBackground } from 'src/components/background';
import {
  A4Page,
  DefaultHeader,
  DefaultFooter,
  PdfViewerLayout,
  DocumentDataProvider,
} from 'src/components/abnt-document';

import { GuiaAntidopingContent } from './GuiaAntidopingContent';

// ----------------------------------------------------------------------

export function GuiaAntidopingView() {
  const documentData = {};

  return (
    <>
      <HomeBackground />
      <DocumentDataProvider data={documentData}>
        <PdfViewerLayout documentTitle="Guia_Antidoping_FFC">
          <A4Page pageNumber={1} headerContent={<DefaultHeader />} footerContent={<DefaultFooter />}>
            <GuiaAntidopingContent />
          </A4Page>
        </PdfViewerLayout>
      </DocumentDataProvider>
    </>
  );
}
