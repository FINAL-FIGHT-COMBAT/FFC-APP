'use client';

import { HomeBackground } from 'src/components/background';
import {
  A4Page,
  DefaultHeader,
  DefaultFooter,
  PdfViewerLayout,
  DocumentDataProvider,
} from 'src/components/abnt-document';

import { ContratoAtletaContent } from './ContratoAtletaContent';

export function ContratoAtletaView() {
  const mockData = {};

  return (
    <>
      <HomeBackground />
      <DocumentDataProvider data={mockData}>
        <PdfViewerLayout documentTitle="Contrato_Atleta_FFC">
        <A4Page pageNumber={1} headerContent={<DefaultHeader />} footerContent={<DefaultFooter />}>
          <ContratoAtletaContent />
        </A4Page>
      </PdfViewerLayout>
      </DocumentDataProvider>
    </>
  );
}
