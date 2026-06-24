'use client';

import { HomeBackground } from 'src/components/background';
import {
  A4Page,
  DefaultHeader,
  DefaultFooter,
  PdfViewerLayout,
  DocumentDataProvider,
} from 'src/components/abnt-document';

import { GuiaPesagemContent } from './GuiaPesagemContent';

export function GuiaPesagemView() {
  const documentData = {};

  return (
    <>
      <HomeBackground />
      <DocumentDataProvider data={documentData}>
        <PdfViewerLayout documentTitle="Guia_de_Pesagem_FFC">
          <A4Page
            pageNumber={1}
            headerContent={<DefaultHeader />}
            footerContent={<DefaultFooter />}
          >
            <GuiaPesagemContent />
          </A4Page>
        </PdfViewerLayout>
      </DocumentDataProvider>
    </>
  );
}
