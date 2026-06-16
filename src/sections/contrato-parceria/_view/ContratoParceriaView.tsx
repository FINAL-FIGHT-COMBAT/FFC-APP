'use client';

import { HomeBackground } from 'src/components/background';
import {
  A4Page,
  DefaultHeader,
  DefaultFooter,
  PdfViewerLayout,
  DocumentDataProvider,
} from 'src/components/abnt-document';

import { ContratoParceriaContent } from './ContratoParceriaContent';

export function ContratoParceriaView() {
  const documentData = {};

  return (
    <>
      <HomeBackground />
      <DocumentDataProvider data={documentData}>
        <PdfViewerLayout documentTitle="Contrato_Parceria_Afiliacao_FFC">
          <A4Page pageNumber={1} headerContent={<DefaultHeader />} footerContent={<DefaultFooter />}>
            <ContratoParceriaContent />
          </A4Page>
        </PdfViewerLayout>
      </DocumentDataProvider>
    </>
  );
}
