import Box from '@mui/material/Box';

import { Clause, ABNTText, SectionTitle, DocumentTitle } from 'src/components/abnt-document';

// ----------------------------------------------------------------------

const PROGRAMACAO_DATA = [
  {
    bloco: 'D-1 (Véspera)',
    atividade: 'Abertura do Posto Médico (Triagem Dermatológica)',
    duracao: '02 Horas',
  },
  {
    bloco: 'D-1 (Véspera)',
    atividade: 'Sessão de Pesagem Oficial (Tentativa Única/Dupla)',
    duracao: '01 Hora (Janela Estrita)',
  },
  {
    bloco: 'Day-of-Fight',
    atividade: 'Sorteio e Aferição da Pesagem Aleatória (5% de tolerância)',
    duracao: '30 Minutos (Janela Estrita)',
  },
  {
    bloco: 'Day-of-Fight',
    atividade: 'Entrada de Atletas e Córneres (Check-in de Credenciais)',
    duracao: '01 Hora antes do Card',
  },
  {
    bloco: 'Day-of-Fight',
    atividade: 'Sessão de Fotos Oficiais e Mídia (Dress Code Obrigatório)',
    duracao: 'Fluxo contínuo pós-check-in',
  },
  {
    bloco: 'Day-of-Fight',
    atividade: 'Briefing Técnico de Arbitragem (Regras de Córner e VAR)',
    duracao: '20 Minutos antes do Card',
  },
  {
    bloco: 'Day-of-Fight',
    atividade: 'Abertura Oficial e Início do Card Preliminar',
    duracao: 'Horário fixado por Etapa',
  },
  {
    bloco: 'Day-of-Fight',
    atividade: 'Encerramento do Bloco de Base e Início do Card Principal',
    duracao: 'Conforme andamento das Chaves',
  },
];

export function CronogramaContent() {
  return (
    <>
      <DocumentTitle>CRONOGRAMA GERAL E DIRETRIZES DE PROGRAMAÇÃO DA ETAPA</DocumentTitle>

      <SectionTitle>CAPÍTULO I: DA DINÂMICA E MUTABILIDADE DO CRONOGRAMA</SectionTitle>
      <Clause text="1.1. CARÁTER EVOLUTIVO: Devido à natureza viva e dinâmica de um evento de lutas, a programação horária de uma etapa está sujeita a ajustes operacionais de última hora para garantir a fluidez da transmissão, a segurança dos atletas e o cumprimento dos tempos de grade." />
      <Clause text="1.2. SOBERANIA DO APLICATIVO: O cronograma impresso ou divulgado em redes sociais é meramente informativo. A única versão oficial, válida e atualizada em tempo real é a contida na aba 'Cronograma' dentro do aplicativo FFC. Cabe exclusivamente aos atletas, chefes de equipe e córneres monitorarem as notificações push do sistema." />

      <SectionTitle>
        CAPÍTULO II: PROGRAMAÇÃO DETALHADA DA ETAPA (MATRIZ DE TEMPO PADRÃO)
      </SectionTitle>
      <ABNTText>
        Abaixo está a distribuição oficial dos blocos horários que regem o evento. Os horários
        específicos de cada luta e chamadas de chaves serão atualizados dinamicamente pelo algoritmo
        do app.
      </ABNTText>

      <Box
        component="table"
        sx={{
          width: '100%',
          borderCollapse: 'collapse',
          my: 3,
          pageBreakInside: 'avoid',
          breakInside: 'avoid',
        }}
      >
        <thead>
          <Box component="tr" sx={{ borderBottom: '2px solid #000000' }}>
            <Box
              component="th"
              sx={{ textAlign: 'left', p: 1, fontSize: '9pt', fontWeight: 'bold' }}
            >
              Bloco Operacional
            </Box>
            <Box
              component="th"
              sx={{ textAlign: 'left', p: 1, fontSize: '9pt', fontWeight: 'bold' }}
            >
              Atividade Técnica e Logística
            </Box>
            <Box
              component="th"
              sx={{ textAlign: 'left', p: 1, fontSize: '9pt', fontWeight: 'bold' }}
            >
              Janela de Duração
            </Box>
          </Box>
        </thead>
        <tbody>
          {PROGRAMACAO_DATA.map((row, index) => (
            <Box
              component="tr"
              key={index}
              sx={{
                borderBottom: '1px solid #E5E8EB',
                bgcolor: index % 2 === 0 ? '#F9FAFB' : '#FFFFFF',
              }}
            >
              <Box
                component="td"
                sx={{ p: 1.2, fontSize: '8.5pt', color: '#1C252C', fontWeight: 'bold' }}
              >
                {row.bloco}
              </Box>
              <Box component="td" sx={{ p: 1.2, fontSize: '8.5pt', color: '#1C252C' }}>
                {row.atividade}
              </Box>
              <Box
                component="td"
                sx={{ p: 1.2, fontSize: '8.5pt', color: '#637381', fontStyle: 'italic' }}
              >
                {row.duracao}
              </Box>
            </Box>
          ))}
        </tbody>
      </Box>

      <SectionTitle>CAPÍTULO III: PROTOCOLOS OBRIGATÓRIOS POR BLOCO</SectionTitle>
      <Clause text="3.1. BLOCO DE PESAGEM E TRIAGEM MÉDICA:" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.1.1. Triagem Antecipada:</strong> O atleta deve passar pela checagem de unhas,
        cabelos e inspeção dermatológica imediatamente antes de subir à balança.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.1.2. Fechamento de Balança:</strong> Encerrada a janela de 01 (uma) hora da
        pesagem oficial, o sistema do aplicativo bloqueia automaticamente novas pesagens. Atletas
        ausentes serão declarados perdedores por W.O. e excluídos do sistema de chaves.
      </ABNTText>

      <Clause text="3.2. BLOCO DE MÍDIA E FOTOS OFICIAIS (MEDIA DAY):" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.2.1. Obrigatoriedade:</strong> Todo atleta contratado ou classificado para o Card
        Principal deve comparecer ao estúdio oficial de fotografia da arena no horário designado no
        app.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.2.2. Código de Vestimenta (Dress Code):</strong> É obrigatório realizar a sessão
        de fotos vestindo o uniforme oficial completo de combate: Kimono oficial limpo (para lutas
        de Gi) ou o conjunto elástico/rashguard completo (para modalidades No-Gi). É proibido o uso
        de bonés, chinelos ou óculos escuros nesta etapa.
      </ABNTText>

      <Clause text="3.3. BLOCO DE PESAGEM ALEATÓRIA DE CONTROLE (DAY-OF-FIGHT):" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.3.1. Gatilho do App:</strong> O sorteio automatizado escolherá de 2 a 4 atletas
        por categoria. Os nomes serão disparados via notificação no celular e no telão da área de
        concentração.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.3.2. Janela de Tolerância:</strong> A partir do disparo da notificação, o atleta
        tem exatos 30 minutos para se apresentar à balança oficial e comprovar que não excedeu o
        limite de 5% de rebote hídrico. O atraso ou falha gera desclassificação imediata via
        sistema.
      </ABNTText>

      <SectionTitle>CAPÍTULO IV: REGRAS DE ATRASO, CHAMADA E TOLERÂNCIA (W.O.)</SectionTitle>
      <Clause text="4.1. PRIMEIRA CHAMADA (CONCENTRAÇÃO): O sistema emitirá o status 'Aquecimento' no app quando faltarem 3 lutas para o combate do atleta. O lutador e seus 2 córneres devem se posicionar imediatamente na Área de Segurança da Arena." />
      <Clause text="4.2. SEGUNDA CHAMADA (TATAME): Ao ser anunciado pelo sistema de som central da arena, o atleta possui o tempo máximo de 2 (dois) minutos para pisar na Área de Combate." />
      <Clause text="4.3. DECRETAÇÃO DE W.O.: Se o cronômetro de 2 minutos zerar sem a presença física do atleta devidamente trajado e acompanhado de seus documentos/QR Code de liberação, o Árbitro Central declarará a vitória por W.O. do oponente, dando início imediato ao próximo combate do cronograma." />

      <br />
      <br />
    </>
  );
}
