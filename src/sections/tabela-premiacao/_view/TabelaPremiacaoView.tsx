'use client';

import { HomeBackground } from 'src/components/background';
import {
  A4Page,
  DefaultHeader,
  DefaultFooter,
  PdfViewerLayout,
  DocumentDataProvider,
} from 'src/components/abnt-document';

import { TabelaPremiacaoContent } from './TabelaPremiacaoContent';

export function TabelaPremiacaoView() {
  const documentData = {};

  return (
    <>
      <HomeBackground />
      <DocumentDataProvider data={documentData}>
        <PdfViewerLayout documentTitle="Tabela_Premiacao_FFC">
          <A4Page pageNumber={1} headerContent={<DefaultHeader />} footerContent={<DefaultFooter />}>
            <TabelaPremiacaoContent />
          </A4Page>
        </PdfViewerLayout>
      </DocumentDataProvider>
    </>
  );
}
