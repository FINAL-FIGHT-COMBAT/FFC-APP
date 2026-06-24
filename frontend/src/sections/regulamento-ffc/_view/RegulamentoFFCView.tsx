'use client';

import { HomeBackground } from 'src/components/background';
import {
  A4Page,
  DefaultHeader,
  DefaultFooter,
  PdfViewerLayout,
  DocumentDataProvider,
} from 'src/components/abnt-document';

import { RegulamentoFFCContent } from './RegulamentoFFCContent';

export function RegulamentoFFCView() {
  const documentData = {};

  return (
    <>
      <HomeBackground />
      <DocumentDataProvider data={documentData}>
        <PdfViewerLayout documentTitle="Regulamento_FFC">
          <A4Page
            pageNumber={1}
            headerContent={<DefaultHeader />}
            footerContent={<DefaultFooter />}
          >
            <RegulamentoFFCContent />
          </A4Page>
        </PdfViewerLayout>
      </DocumentDataProvider>
    </>
  );
}
