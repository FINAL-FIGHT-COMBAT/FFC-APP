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
  const mockData = {
    "NOME COMPLETO": "Sandro Antunes",
    "NACIONALIDADE": "Brasileiro",
    "ESTADO CIVIL": "Solteiro",
    "PROFISSÃO": "Desenvolvedor e Atleta",
    "CPF": "123.456.789-00",
    "RG": "MG-12.345.678",
    "ENDEREÇO COMPLETO": "Rua Fictícia, 123 - Rio de Janeiro, RJ",
    "ENDEREÇO DA SEDE": "Sede Oficial FFC - Maricá, RJ"
  };

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
