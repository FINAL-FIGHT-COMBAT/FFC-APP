import { Clause, ABNTText, SectionTitle, DocumentTitle } from 'src/components/abnt-document';

// ----------------------------------------------------------------------

export function GuiaLogisticaContent() {
  return (
    <>
      <DocumentTitle>GUIA DE LOGÍSTICA, HOSPEDAGEM E TRANSPORTE OFICIAL</DocumentTitle>

      <SectionTitle>CAPÍTULO I: DAS DIRETRIZES GERAIS E MUTABILIDADE LOGÍSTICA</SectionTitle>
      <Clause text="1.1. LOGÍSTICA VIVA: O planejamento logístico de uma etapa envolve prestadores de serviços terceirizados (companhias aéreas, redes hoteleiras e empresas de transporte privado). Por essa razão, itinerários, horários de translado e locais de hospedagem estão sujeitos a alterações operacionais devido a fatores climáticos, tráfego ou malha aérea." />
      <Clause text="1.2. CENTRALIZAÇÃO NO APLICATIVO: Bilhetes aéreos, vouchers de hotel, códigos de reserva e horários das vans oficiais não serão enviados por e-mail ou aplicativos de mensagem terceiros. Toda a informação oficial e atualizada em tempo real reside exclusivamente na aba 'Logística' no perfil do atleta no app FFC." />

      <SectionTitle>CAPÍTULO II: DA HOSPEDAGEM OFICIAL (HOTEL DO EVENTO)</SectionTitle>
      <Clause text="2.1. ELEGIBILIDADE E COBERTURA:" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>2.1.1. Card Principal e Atletas Contratados:</strong> A Organização FFC cobre os
        custos de hospedagem (diárias regulamentares) estritamente para os atletas do Card Principal
        e o número de córneres previstos em seus respectivos contratos individuais.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>2.1.2. Card Preliminar e Seletivas:</strong> Atletas das fases preliminares e
        seletivas abertas são inteiramente responsáveis por seus custos de hospedagem, salvo em
        etapas específicas onde o edital preveja pacotes subsidiados ou descontos em hotéis
        parceiros conveniados via aplicativo.
      </ABNTText>

      <Clause text="2.2. REGRAS DE OCUPAÇÃO E EXTRAS (INCIDENTALS):" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>2.2.1. Acomodação:</strong> Os quartos fornecidos pela organização seguem o padrão
        duplo compartilhado entre atletas da mesma equipe ou categoria, exceto para os protagonistas
        das lutas principais (Main Event), que farão jus a quarto privativo de acordo com sua
        previsão contratual.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>2.2.2. Custos Extras Proibidos:</strong> A cobertura do FFC limita-se estritamente
        ao valor da diária de hospedagem e café da manhã (quando incluso). Quaisquer despesas extras
        — incluindo frigobar, serviço de quarto, lavanderia, chamadas telefônicas, canais de
        pay-per-view ou danos ao mobiliário do hotel — são de responsabilidade exclusiva do hóspede.
        O app FFC reterá os bônus da aba &apos;Carteira&apos; caso o hotel reporte inadimplência ou
        danos causados pelo atleta ou sua equipe.
      </ABNTText>

      <SectionTitle>CAPÍTULO III: DAS PASSAGENS E TRANSPORTE DE LONGO CURSO</SectionTitle>
      <Clause text="3.1. EMISSÃO DE BILHETES AÉREOS OU RODOVIÁRIOS:" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.1.1. Prazos de Documentação:</strong> Atletas com direito a passagens aéreas
        cobertas contratualmente devem enviar cópia legível de seus documentos de identidade e dados
        de embarque até o limite de 20 dias antes da etapa através da central de suporte do app. O
        atraso no envio desobriga o FFC de arcar com tarifas inflacionadas de última hora.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.1.2. Alterações de Bilhetes:</strong> Uma vez emitido o bilhete eletrônico pela
        agência parceira do FFC, qualquer solicitação de alteração de data, horário ou cancelamento
        por conveniência pessoal do atleta gerará custos que serão repassados integralmente ao
        competidor, com desconto automático em suas bolsas de participação.
      </ABNTText>

      <Clause text="3.2. POLÍTICA DE BAGAGEM E EQUIPAMENTO MARCIAL:" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.2.1. Franquia Padrão:</strong> O FFC garante apenas a franquia de bagagem padrão
        estipulada pela companhia aérea (geralmente uma mala de mão e uma mochila).
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.2.2. Excesso de Bagagem:</strong> Custos decorrentes de excesso de peso causados
        por múltiplos kimonos pesados, materiais de treino, proteções estruturais ou equipamentos de
        grande porte deverão ser pagos diretamente pelo atleta no balcão de check-in da companhia
        aérea.
      </ABNTText>

      <SectionTitle>CAPÍTULO IV: DO TRANSPORTE INTERNO (TRANSLADOS E SHUTTLES)</SectionTitle>
      <Clause text="4.1. ROTAS OFICIAIS (HOTEL ➔ ARENA ➔ HOTEL): O FFC disponibilizará vans e ônibus executivos exclusivos para o deslocamento dos atletas e técnicos credenciados durante os dias oficiais do evento, cobrindo os trajetos entre o Hotel Oficial, o local da Pesagem e a Arena de Lutas." />
      <Clause text="4.2. RIGOR DE HORÁRIOS E TOLERÂNCIA ZERO: Os horários de partida dos translados são fixos e cronometrados. As vans oficiais não aguardarão atletas atrasados, independentemente do status do competidor no card." />
      <Clause text="4.3. PERDA DO SHUTTLE: Caso o atleta perca o horário de saída da van oficial para a pesagem ou para o início dos combates, ele deverá se deslocar até o local do evento por meios próprios e às suas próprias custas. O atraso que resulte na perda da janela de pesagem oficial culminará na desclassificação por W.O., conforme previsto no manual de conduta." />

      <br />
      <br />
    </>
  );
}
