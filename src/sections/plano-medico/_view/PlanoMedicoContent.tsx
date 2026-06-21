import { Clause, SectionTitle, DocumentTitle } from 'src/components/abnt-document';

// ----------------------------------------------------------------------

export function PlanoMedicoContent() {
  return (
    <>
      <DocumentTitle>PLANO DE ATENDIMENTO MÉDICO E PROTOCOLO DE PRIMEIROS SOCORROS</DocumentTitle>

      <SectionTitle>CAPÍTULO I: DA INFRAESTRUTURA E PRESENÇA MÉDICA OBRIGATÓRIA</SectionTitle>
      <Clause text="1.1. CONDIÇÃO DE INÍCIO (HARD BLOCKER): Nenhum combate, seletiva ou card oficial poderá ter início sob nenhuma circunstância sem a presença física imediata do corpo médico e da ambulância de suporte avançado (UTI Móvel) no local do evento." />
      <Clause text="1.2. EQUIPE MÍNIMA EXIGIDA: O posto médico local deverá ser composto por, no mínimo, 1 (um) Médico-Chefe coordenador, socorristas homologados e oficiais de enfermagem equipados com materiais de primeiros socorros, oxigenoterapia e desfibrilador externo automático (DEA)." />
      <Clause text="1.3. HIGIENE DA ARENA: A superfície do tatame e as áreas adjacentes deverão ser rigorosamente higienizadas e desinfetadas antes e durante as sessões de luta para evitar qualquer tipo de contaminação biológica." />

      <SectionTitle>CAPÍTULO II: PROTOCOLO DE INTERVENÇÃO E ATENDIMENTO EM CAMPO</SectionTitle>
      <Clause text="2.1. ACIONAMENTO DO SOCORRO: Durante o andamento da luta, cabe exclusivamente ao Árbitro Central paralisar o cronômetro e solicitar a entrada imediata do atendimento médico na área de combate ao notar lesão visível ou risco à integridade física do competidor." />
      <Clause text="2.2. ACOMPANHAMENTO DO CÓRNER: O treinador ou médico particular do atleta só poderá adentrar a área de combate para acompanhar o atendimento caso receba autorização expressa da arbitragem ou do Médico-Chefe da etapa." />
      <Clause text="2.3. TRATAMENTO DE SANGRAMENTOS: Em caso de sangramento ativo, o árbitro interromperá a luta. O cronômetro médico será disparado, dispondo o atleta de um tempo máximo acumulado de 4 (quatro) minutos ao longo de todo o combate para que a equipe médica estanque a hemorragia. Caso o tempo seja estourado, o combate será encerrado." />
      <Clause text="2.4. PERDA DE SENTIDOS (NOCAUTE/ESTRANGULAMENTO): O atleta que perder os sentidos por trauma (nocaute físico) ou por aplicação de golpe legal (estrangulamento/finalização) terá o combate encerrado imediatamente pela arbitragem. A equipe médica aplicará os protocolos de reanimação em campo. O competidor ficará automaticamente suspenso do restante da competição por razões de segurança neurológica." />

      <SectionTitle>CAPÍTULO III: DA SOBERANIA E AUTORIDADE DA JUNTA MÉDICA</SectionTitle>
      <Clause text="3.1. PODER DE INTERRUPÇÃO: O Médico-Chefe do FFC detém autoridade soberana e o dever de interromper qualquer combate, por intermédio da mesa técnica, caso identifique que um dos grappleres corre risco iminente de dano físico grave ou invalidez." />
      <Clause text="3.2. IRREVOGABILIDADE DA DECISÃO: Caso a junta médica declare um atleta inapto ou incapacitado para prosseguir na luta, o combate será encerrado imediatamente. A decisão médica possui caráter soberano, técnico e não poderá ser contestada ou revertida por atletas, córneres, promotores ou pela equipe de arbitragem." />
      <Clause text="3.3. RESULTADO OFICIAL: O atleta retirado da luta por recomendação médica será declarado perdedor por lesão ou interrupção médica, resguardando-se os pontos acumulados sistemicamente na plataforma até o exato momento da parada." />

      <SectionTitle>CAPÍTULO IV: PROTOCOLO DE REMOÇÃO E EVACUAÇÃO EMERGENCIAL</SectionTitle>
      <Clause text="4.1. CRITÉRIO DE REMOÇÃO: Constatada a necessidade de intervenção hospitalar de urgência (trauma estrutural, fraturas expostas ou concussões severas), o Médico-Chefe acionará a evacuação por meio da UTI Móvel presente no ginásio." />
      <Clause text="4.2. TRANSFERÊNCIA DE CUSTÓDIA: A responsabilidade civil e técnica da Organizadora FFC sobre a integridade física do competidor cessa integralmente a partir do momento em que o paciente é estabilizado, embarcado e entregue aos cuidados da equipe da ambulância e do hospital público ou privado de apoio previamente mapeado no plano logístico." />

      <SectionTitle>CAPÍTULO V: SEGURO ATLETA E COBERTURA DE CUSTOS MÉDICOS</SectionTitle>
      <Clause text="5.1. PRIMEIROS SOCORROS: Todos os custos com insumos, medicações e atendimentos de primeiros socorros realizados exclusivamente dentro do complexo do evento e postos médicos do FFC correrão por conta da Organização." />
      <Clause text="5.2. SEGURO OBRIGATÓRIO DE ACIDENTES: Conforme determina a legislação desportiva nacional, as federações e academias vinculadas devem garantir que seus atletas possuam cobertura ativa de seguro de vida e de acidentes pessoais vinculados à atividade de combate. Internações, exames complexos externos e procedimentos cirúrgicos decorrentes da remoção hospitalar serão cobertos pelas apólices do seguro do atleta ou por sua respectiva inscrição de licença médica esportiva de base, eximindo o FFC de responsabilidades subsidiárias externas." />

      <br />
      <br />
    </>
  );
}
