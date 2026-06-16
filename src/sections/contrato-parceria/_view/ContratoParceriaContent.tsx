import {
  Clause,
  ABNTText,
  SectionTitle,
  DocumentTitle,
  DataTag,
} from 'src/components/abnt-document';

export function ContratoParceriaContent() {
  return (
    <>
      <DocumentTitle>CONTRATO-MÃE DE PARCERIA INSTITUCIONAL E AFILIAÇÃO</DocumentTitle>
      <DocumentTitle>FINAL FIGHT COMBAT (FFC) / ASPPIBRA</DocumentTitle>
      <ABNTText>
        Pelo presente instrumento, estabelece-se a relação contratual e de afiliação modular no ecossistema FFC, definindo-se obrigações transversais de compliance, governança e proteção de dados, além das diretrizes específicas que serão ativadas conforme a natureza do perfil corporativo aprovado na plataforma.
      </ABNTText>

      <SectionTitle>CAPÍTULO I: QUALIFICAÇÃO DAS PARTES, ASSINATURA E OBJETO</SectionTitle>
      <Clause text="1.1. QUALIFICAÇÃO DA ORGANIZADORA: A Associação de Profissionais e Praticantes de Lutas (ASPPIBRA), entidade associativa sem fins econômicos, inscrita no CNPJ sob o nº [CNPJ da ASPPIBRA], legítima gestora, titular e incubadora do projeto de inovação tecnológica e esportiva denominado FINAL FIGHT COMBAT (FFC), neste ato representada na forma de seu Estatuto Social." />
      <Clause text="1.2. QUALIFICAÇÃO DA PARCEIRA: A Pessoa Jurídica regularmente constituída e devidamente identificada através do cruzamento de dados de seu CNPJ e certificado digital na base de dados do aplicativo FFC." />
      <Clause text="1.3. ESTRUTURA MODULAR DO CONTRATO: Este instrumento opera como Contrato-Mãe. As obrigações específicas serão regidas por módulos autônomos (Módulo Academia ou Módulo Empresa), que se integram a este documento por meio do perfil eletrônico assumido pela PARCEIRA no sistema." />
      <Clause text="1.4. ASSINATURA E TRILHA DE AUDITORIA: Em conformidade com a Lei nº 14.063/2020, o aceite deste instrumento se dá por Assinatura Eletrônica Avançada dentro do aplicativo oficial. A autoria e integridade são garantidas mediante sistema de log criptografado, registrando IP, geolocalização, carimbo de tempo (timestamp) e os metadados do aceite do usuário logado." />

      <SectionTitle>CAPÍTULO II: VIGÊNCIA E RESILIÇÃO</SectionTitle>
      <Clause text="2.1. PRAZO DE VIGÊNCIA: A relação de parceria vigorará pelo prazo estabelecido no ato do credenciamento sistêmico, podendo ser fixado por temporada anual completa ou por etapa específica do card, conforme registrado em: <DataTag label='PRAZO_VIGENCIA' fallback='[Temporada Anual / Etapa]' />." />
      <Clause text="2.2. RENOVAÇÃO E RESILIÇÃO: Salvo disposição contratual em contrário (anexo de patrocínio comercial), não haverá renovação automática. A resilição unilateral, sem ônus, poderá ser operada por qualquer das Partes mediante notificação prévia e formalizada no painel do aplicativo com antecedência mínima de 30 (trinta) dias da próxima etapa oficial." />

      <SectionTitle>CAPÍTULO III: MÓDULO ACADEMIA AFILIADA (ESPORTIVO)</SectionTitle>
      <Clause text="3.1. GESTÃO E INSCRIÇÃO DE ATLETAS VIA APP: A Academia compromete-se a centralizar o cadastro sistêmico de sua equipe. Obriga-se a manter um quadro ativo mínimo de atletas no painel, atualizar rigorosamente as faixas/graduações, submeter as inscrições até a data de corte do cronograma oficial e autorizar sistemicamente seus competidores para os combates." />
      <Clause text="3.2. RESPONSABILIDADE PELA TRIAGEM PRÉVIA: A Academia exerce responsabilidade civil pela auditoria interna, controle de autenticidade documental e triagem primária da sua delegação. Cabe ao Head Coach verificar preliminarmente a regularidade de atestados cardiológicos e dermatológicos de seus alunos antes do upload na plataforma oficial." />
      <Clause text="3.3. PONTUAÇÃO INSTITUCIONAL: A Academia adimplente será elegível à pontuação institucional (ranking por peso e absoluto), acumulando métricas para disputa de troféus coletivos da temporada e ranqueamento histórico." />

      <SectionTitle>CAPÍTULO IV: MÓDULO EMPRESA PATROCINADORA (COMERCIAL E FINANCEIRO)</SectionTitle>
      <Clause text="4.1. DEFINIÇÃO DA COTA E VALORES: A Empresa Parceira fomentará o evento mediante aporte financeiro ou permuta (barter) no valor definido em seu plano de aprovação comercial (<DataTag label='VALOR_PATROCINIO' fallback='R$ 0,00' />). A liberação das contrapartidas está estritamente condicionada ao adimplemento dos boletos ou PIX gerados no ambiente do app e à emissão regular da respectiva Nota Fiscal (NF-e/NFS-e)." />
      <Clause text="4.2. CRITÉRIOS DE ENTREGA DE CONTRAPARTIDAS: As inserções de ativos digitais (notificações push, banners de app, lower thirds no streaming) e físicos (naming rights, ativação de marca em stands) seguirão um cronograma de entrega anexo. Toda peça de publicidade enviada pela Empresa estará sujeita a aprovação prévia do FFC quanto ao dimensionamento (pixels/tamanho real) e adequação ao manual da marca." />
      <Clause text="4.3. POLÍTICA DE REAJUSTE E ESTORNO: Valores fixados para múltiplas temporadas sofrerão reajuste anual pelo IGPM/FGV. Na hipótese de cancelamento do evento por força maior intransponível, proceder-se-á o estorno proporcional das cotas não executadas em mídia, ressalvados custos de produção já despendidos." />

      <SectionTitle>CAPÍTULO V: LICENCIAMENTO DE MARCA E NÃO CONCORRÊNCIA</SectionTitle>
      <Clause text="5.1. LIMITES DO USO DA MARCA: O licenciamento recíproco de marcas é temporário, não exclusivo e limitado ao território nacional, destinado unicamente à promoção institucional do evento FFC. A Empresa e a Academia estão proibidas de licenciar, sublicenciar ou utilizar a marca FFC em produtos de prateleira (merchandising para venda direta) sem instrumento autônomo de exploração comercial." />
      <Clause text="5.2. PROTEÇÃO DE LEADS E BASE DE DADOS: É terminantemente vedado à PARCEIRA o uso da base de dados de alunos, atletas, leads e perfis gerados na plataforma FFC para ações de concorrência direta ou venda de listas, configurando apropriação indevida de segredo industrial da ASPPIBRA." />

      <SectionTitle>CAPÍTULO VI: PROTEÇÃO DE DADOS (LGPD)</SectionTitle>
      <Clause text="6.1. PAPÉIS E FUNDAMENTOS: Na integração do sistema, a ASPPIBRA atua predominantemente como Controladora dos dados da plataforma FFC, cabendo à PARCEIRA (Academia) atuar como Controladora solidária nos limites dos dados de seus alunos enviados, e como Operadora na gestão das inscrições. O tratamento baseia-se na execução contratual e no legítimo interesse desportivo." />
      <Clause text="6.2. RETENÇÃO E INCIDENTES: Os dados serão retidos pelo prazo legal exigido ou até o término do período de incubação institucional. Em caso de qualquer vazamento cibernético ou acesso não autorizado, a Parte responsável deverá notificar imediatamente a outra em até 48 horas úteis, acionando o plano de resposta a incidentes (DPO)." />

      <SectionTitle>CAPÍTULO VII: COMPLIANCE E INTEGRIDADE INSTITUCIONAL</SectionTitle>
      <Clause text="7.1. ANTICORRUPÇÃO E ÉTICA: As Partes declaram atuar em conformidade com as leis de prevenção à lavagem de dinheiro e anticorrupção. É vedado associar a marca FFC a apologia ao crime, extremismo, esquemas de apostas não reguladas, pirâmides financeiras, indústrias de tabaco ou conteúdos que firam os direitos humanos." />
      <Clause text="7.2. CONDUTA EM MÍDIAS SOCIAIS E ASSÉDIO: A PARCEIRA assume a responsabilidade de zelar pela reputação institucional do ecossistema, devendo combater ativamente episódios de assédio, agressão verbal, discurso de ódio ou hostilidades praticadas por seus prepostos e atletas nas mídias sociais ou nas dependências do evento." />

      <SectionTitle>CAPÍTULO VIII: INFRAÇÕES CONTRATUAIS, SANÇÕES E MULTA</SectionTitle>
      <Clause text="8.1. PROCESSO DE APURAÇÃO E CURA: Diante de indícios de infração contratual, ética ou disciplinar, a PARCEIRA será formalmente notificada via aplicativo. Havendo possibilidade de reversão do dano operacional, será concedido o prazo de cura de até 5 (cinco) dias úteis para a regularização." />
      <Clause text="8.2. GRADAÇÃO DE SANÇÕES: Não sanada a infração ou em caso de transgressões gravíssimas (ex: corrupção esportiva, agressão física, doping acobertado institucionalmente), a ASPPIBRA aplicará de forma proporcional as seguintes sanções: (i) advertência no painel; (ii) suspensão temporária de acesso ao sistema; (iii) rescisão unilateral do contrato com exclusão sumária e banimento das próximas edições." />
      <Clause text="8.3. MULTA PENAL LIMITADA: A rescisão por culpa da PARCEIRA poderá ensejar a cobrança de multa compensatória fixada em até 30% do valor do contrato anual ou da cota da etapa. Em obediência ao Código Civil Brasileiro, a multa penal em hipótese alguma excederá o valor da obrigação principal correspondente, facultando-se à instância julgadora a redução equitativa se julgada excessiva frente ao adimplemento parcial." />

      <SectionTitle>CAPÍTULO IX: DA GOVERNANÇA DIGITAL E DO PROGRAMA DE INCUBAÇÃO</SectionTitle>
      <Clause text="9.1. FASE SANDBOX: A PARCEIRA reconhece e anui expressamente que o FFC encontra-se em fase de incubação institucional junto à ASPPIBRA, constituindo projeto experimental em formato 'sandbox' de inovação, tecnologia esportiva e governança digital." />
      <Clause text="9.2. REGISTRO DE INDICADORES: Durante esta fase de incubação, a contribuição e participação da PARCEIRA serão registradas por meio de métricas e indicadores auditáveis no aplicativo (Ex: número de atletas inscritos validados, ações comerciais, patrocínios fechados, e contribuição técnica)." />
      <Clause text="9.3. VEDAÇÃO DE PARTICIPAÇÃO SOCIETÁRIA ANTECIPADA: A participação neste programa de governança digital não consubstancia qualquer promessa ou direito adquirido a participação societária (equity), quotas acionárias, propriedade intelectual do software ou distribuição de lucros sob o guarda-chuva jurídico atual da incubadora ASPPIBRA." />
      <Clause text="9.4. ESTRUTURA FUTURA E INCENTIVOS: Ao término do processo de auditoria do programa de incubação e eventual spin-off para a constituição de Pessoa Jurídica autônoma independente de finalidade econômica (Holding/S.A./SPE), os indicadores históricos gerados pela PARCEIRA poderão servir de critério preferencial para futuras alocações em programas de fidelização, conselhos de governança ou programas de incentivo em conformidade com as regulações de mercado da época." />

      <SectionTitle>CAPÍTULO X: INSTÂNCIA ARBITRAL E FORO</SectionTitle>
      <Clause text="10.1. ACORDO AUTÔNOMO DE ARBITRAGEM: Em respeito à legislação que veda a arbitragem compulsória em contratos de adesão genéricos, as Partes declaram que a opção de submeter litígios patrimoniais resultantes deste termo à Câmara de Arbitragem Extrajudicial dependerá de concordância expressa formalizada em Termo de Aceite Autônomo da Cláusula Compromissória gerado dentro da plataforma FFC." />
      <Clause text="10.2. FORO SUBSIDIÁRIO: Na ausência da assinatura do referido Termo de Arbitragem, ou para medidas cautelares urgentes, as partes elegem o foro da sede da ASPPIBRA para dirimir quaisquer demandas, com renúncia a qualquer outro, por mais privilegiado que seja." />

      <br />
      <br />
    </>
  );
}
