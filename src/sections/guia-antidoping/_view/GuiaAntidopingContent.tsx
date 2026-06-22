import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { Clause, SectionTitle, DocumentTitle } from 'src/components/abnt-document';

// ----------------------------------------------------------------------

export function GuiaAntidopingContent() {
  return (
    <>
      <DocumentTitle>GUIA ANTIDOPING E INTEGRIDADE ESPORTIVA</DocumentTitle>
      <DocumentTitle>Diretrizes de Controle de Dopagem e Condutas Proibidas</DocumentTitle>

      <SectionTitle>1. ALINHAMENTO INSTITUCIONAL E GOVERNANÇA</SectionTitle>
      <Clause text="1.1. ADESÃO COMPULSÓRIA: O FFC adota integralmente o Código Mundial Antidoping e as diretrizes de integridade desportiva. Todos os atletas inscritos estão sujeitos ao controle de dopagem a qualquer momento do evento." />
      <Clause text="1.2. VALIDAÇÃO NACIONAL: No Brasil, a versão oficial traduzida e o padrão de substâncias proibidas são integralmente disponibilizados e validados pela Autoridade Brasileira de Controle de Dopagem (ABCD), órgão do Ministério do Esporte do Governo Federal." />

      <SectionTitle>2. CONSULTA À LISTA DE SUBSTÂNCIAS PROIBIDAS (PADRÃO OFICIAL)</SectionTitle>
      <Clause text="2.1. REGRA DE MUTABILIDADE: A lista de substâncias, métodos e condutas proibidas segue o padrão internacional da WADA e a regulamentação da ABCD." />
      <Clause text="2.2. ACESSO DIRETO: Para garantir que você consulte a versão mais recente e atualizada do documento oficial, o FFC disponibiliza o redirecionamento direto para a base de dados do Governo Federal." />

      <SectionTitle>3. ACESSO VIA QRCODE (PORTAL DO GOVERNO FEDERAL)</SectionTitle>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
          border: '2px solid #E0E0E0',
          borderRadius: 2,
          bgcolor: '#F8F9FA',
          my: 3,
          textAlign: 'center',
          pageBreakInside: 'avoid',
          breakInside: 'avoid',
        }}
      >
        <Box
          sx={{
            p: 2,
            bgcolor: '#FFFFFF',
            border: '2px solid #D4AF37',
            borderRadius: 1.5,
            mb: 2,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Iconify icon={'mdi:qrcode' as any} width={110} sx={{ color: '#0A3B18' }} />
        </Box>
        <Typography
          variant="subtitle2"
          sx={{ color: '#0A3B18', fontWeight: 'bold', mb: 1, fontSize: '10pt' }}
        >
          PORTAL DA AUTORIDADE BRASILEIRA DE CONTROLE DE DOPAGEM (ABCD)
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#637381',
            mb: 2.5,
            maxWidth: 440,
            display: 'block',
            fontSize: '8pt',
            lineHeight: 1.3,
          }}
        >
          Aponte a câmera do seu celular para o QR Code acima ou clique no botão abaixo para acessar
          a lista oficial e atualizada de substâncias proibidas diretamente no portal do Governo
          Federal (gov.br/abcd).
        </Typography>
        <Button
          variant="contained"
          href="https://www.gov.br/abcd"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<Iconify icon={'solar:link-bold' as any} />}
          sx={{
            bgcolor: '#0A3B18',
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: '9pt',
            textTransform: 'none',
            px: 3,
            py: 1,
            borderRadius: 1,
            '&:hover': {
              bgcolor: '#002776',
            },
          }}
        >
          Acessar Portal Oficial de Substâncias Proibidas - ABCD/Governo Federal
        </Button>
      </Box>

      <SectionTitle>4. DA RESPONSABILIDADE EXCLUSIVA DO ATLETA</SectionTitle>
      <Clause text="4.1. RESPONSABILIDADE ESTRITA: É dever absoluto e exclusivo de cada atleta garantir que nenhuma substância proibida entre em seu corpo. O desconhecimento da lista oficial da ABCD não constitui justificativa ou atenuação para resultados analíticos adversos (testes positivos)." />
      <Clause text="4.2. MEDICAMENTOS E SUPLEMENTOS: O uso de qualquer medicamento de uso contínuo que conste na lista proibida deve ser comunicado com antecedência médica e acompanhado da respectiva Autorização de Uso Terapêutico (AUT) validada pela ABCD." />

      <SectionTitle>5. SANÇÕES E PENALIDADES AUTOMATIZADAS NO APP</SectionTitle>
      <Clause text="5.1. DESCLASSIFICAÇÃO E BANIMENTO: A confirmação de resultado positivo em teste antidoping ou a recusa em coletar a amostra gerará a desclassificação sumária da etapa, perda de medalhas, suspensão de bolsas na aba 'Carteira' do app e o banimento imediato do atleta de todo o ecossistema do FFC." />

      <br />
      <br />
    </>
  );
}
