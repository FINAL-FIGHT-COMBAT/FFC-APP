'use client';

import { HomeBackground } from 'src/components/background';
import {
  A4Page,
  DefaultHeader,
  DefaultFooter,
  PdfViewerLayout,
  DocumentDataProvider,
} from 'src/components/abnt-document';

import { ContratoStaffContent } from './ContratoStaffContent';

// ----------------------------------------------------------------------

export function ContratoStaffView() {
  const documentData = {};

  return (
    <>
      <HomeBackground />
      <DocumentDataProvider data={documentData}>
        <PdfViewerLayout documentTitle="Contrato_Staff_FFC">
          <A4Page pageNumber={1} headerContent={<DefaultHeader />} footerContent={<DefaultFooter />}>
            <ContratoStaffContent />
          </A4Page>
        </PdfViewerLayout>
      </DocumentDataProvider>
    </>
  );
}
