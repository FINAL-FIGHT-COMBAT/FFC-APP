'use client';

import { HomeBackground } from 'src/components/background';
import {
  A4Page,
  DefaultHeader,
  DefaultFooter,
  PdfViewerLayout,
  DocumentDataProvider,
} from 'src/components/abnt-document';

import { ImprensaContent } from './ImprensaContent';

// ----------------------------------------------------------------------

export function ImprensaView() {
  const documentData = {};

  return (
    <>
      <HomeBackground />
      <DocumentDataProvider data={documentData}>
        <PdfViewerLayout documentTitle="Manual_Imprensa_FFC">
          <A4Page pageNumber={1} headerContent={<DefaultHeader />} footerContent={<DefaultFooter />}>
            <ImprensaContent />
          </A4Page>
        </PdfViewerLayout>
      </DocumentDataProvider>
    </>
  );
}
