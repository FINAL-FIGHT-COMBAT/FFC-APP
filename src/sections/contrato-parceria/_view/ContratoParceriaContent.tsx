import {
  Clause,
  ABNTText,
  SectionTitle,
  DocumentTitle,
  DataTag,
  DigitalSignature,
} from 'src/components/abnt-document';

export function ContratoParceriaContent() {
  return (
    <>
      <DocumentTitle>CONTRATO-MÃE DE PARCERIA INSTITUCIONAL E AFILIAÇÃO</DocumentTitle>
      <DocumentTitle>PROJETO DE INCUBAÇÃO FINAL FIGHT COMBAT (FFC)</DocumentTitle>
      <ABNTText>
        Pelo presente instrumento, estabelece-se a relação contratual matriz aplicável ao ecossistema FFC. Fica desde logo pactuado que a incubadora do projeto (ASPPIBRA) atua estritamente sob natureza associativa de fins não econômicos, de modo que a presente parceria opera na modalidade "sandbox" (teste/incubação). O ingresso neste ambiente de Governança Digital gera métricas auditáveis e pontuação institucional, não implicando, em nenhuma hipótese atual, promessa de distribuição de lucros, transferência de propriedade intelectual ou emissão de quotas societárias (equity).
      </ABNTText>

      <SectionTitle>CAPÍTULO I: QUALIFICAÇÃO DAS PARTES, ANEXOS E PROVA ELETRÔNICA</SectionTitle>
      <Clause text="1.1. QUALIFICAÇÃO DA ORGANIZADORA: ASSOCIAÇÃO DE PROFISSIONAIS E PRATICANTES DE LUTAS (ASPPIBRA), entidade associativa sem fins econômicos, inscrita no CNPJ sob o nº [CNPJ DA ASPPIBRA], com sede em [ENDEREÇO COMPLETO], legítima gestora e incubadora do projeto FFC, neste ato representada por seu Presidente/Diretor Executivo conforme Estatuto Social e ata de posse vigente." />
      <Clause text="1.2. QUALIFICAÇÃO DA PARCEIRA: A Pessoa Jurídica aderente, devidamente qualificada no banco de dados corporativo do aplicativo por meio do cruzamento sistêmico de sua Razão Social, CNPJ, CNAE Principal, endereço sede e dados do Representante Legal." />
      <Clause text="1.3. SISTEMA CONTRATUAL E ANEXOS: O presente Contrato-Mãe é o instrumento principal que rege as disposições gerais. Detalhes operacionais e comerciais são remetidos exclusivamente aos Anexos Autônomos de Aceite Obrigatório: (I) Tabela de Entregáveis de Mídia e Finanças; (II) Regulamento Técnico e Esportivo; (III) Política de Proteção de Dados (LGPD); (IV) Matriz de Indicadores Sandbox; e (V) Termo de Cláusula Compromissória." />
      <Clause text="1.4. PROVA DE ACEITE E ASSINATURA DIGITAL: Nos termos da Lei nº 14.063/2020, o aceite deste instrumento se dá por Assinatura Eletrônica Avançada dentro do aplicativo oficial. A integridade documental é assegurada mediante trilha de auditoria contendo: versão do contrato aceito, timestamping (carimbo de tempo oficial), endereço IP, device ID (identificador do dispositivo) e hash criptográfico gerado na transação sistêmica." />

      <SectionTitle>CAPÍTULO II: VIGÊNCIA E RESILIÇÃO</SectionTitle>
      <Clause text="2.1. PRAZO DE VIGÊNCIA: A relação vigorará pelo prazo exato da modalidade selecionada no aplicativo, podendo ser por Temporada Anual ou Etapa Específica: <DataTag label='PRAZO_VIGENCIA' fallback='[Temporada Anual / Etapa]' />. Fica expressamente vedada a renovação automática, exigindo-se novo termo ou renovação expressa de aceite a cada ciclo." />
      <Clause text="2.2. RESILIÇÃO: Qualquer das partes poderá rescindir o contrato imotivadamente e sem ônus mediante aviso prévio formalizado no painel do aplicativo com antecedência mínima de 30 (trinta) dias. Caso a rescisão imotivada ocorra em prazo inferior, sujeitar-se-á a Parte infratora à multa penal." />

      <SectionTitle>CAPÍTULO III: MÓDULO ACADEMIA AFILIADA (ESPORTIVO)</SectionTitle>
      <Clause text="3.1. CADASTRO DE ATLETAS E OBRIGAÇÕES: A Academia deve observar as diretrizes fixadas no Anexo II (Regulamento Técnico). Obriga-se a manter cota mínima de <DataTag label='MIN_ATLETAS' fallback='[Quantidade Mínima]' /> atletas ativos no sistema, submeter graduações validadas e respeitar as datas de corte de chaveamento." />
      <Clause text="3.2. RESPONSABILIDADE PELA TRIAGEM PRÉVIA: A Academia exerce Responsabilidade Civil pela triagem documental preliminar de seus afiliados. O Head Coach compromete-se a não aprovar sistemicamente lutadores com pendências visíveis em atestados médicos ou exames exigidos, sendo eximida de culpa, contudo, em caso de falsificação ideológica ou adulteração documental perpetrada exclusivamente pelo atleta de má-fé." />
      <Clause text="3.3. PONTUAÇÃO INSTITUCIONAL: A adesão regular qualifica a Academia a pontuar no Ranking Unificado do ecossistema, habilitando-a ao cômputo institucional aplicável para futuros programas de incentivo no formato Sandbox." />

      <SectionTitle>CAPÍTULO IV: MÓDULO EMPRESA PATROCINADORA E FINANCEIRO</SectionTitle>
      <Clause text="4.1. COTAS E CONDIÇÕES DE ATIVAÇÃO: O aporte financeiro ou permuta obedece ao valor de <DataTag label='VALOR_PATROCINIO' fallback='R$ 0,00' />. A ativação comercial na plataforma está estritamente condicionada à liquidação do respectivo boleto/PIX na conta oficial da ASPPIBRA e à regular emissão de Nota Fiscal Eletrônica (NF-e/NFS-e) por prestação de serviço correlata." />
      <Clause text="4.2. INADIMPLÊNCIA E ATRASO: O atraso no pagamento gerará suspensão automática da veiculação publicitária e incidência de juros moratórios de 1% ao mês, além de multa de 2% sobre o montante inadimplido, compensáveis na fatura subsequente." />
      <Clause text="4.3. TABELA DE ENTREGÁVEIS (ANEXO I): As inserções ('Naming Rights', Banners de App, Lower Thirds, Push Notifications) observarão estritamente a quantidade, formato, dimensões (pixels/centímetros), localização e duração detalhadas no Anexo I. Todo material enviado pela Empresa deve ser submetido com 15 (quinze) dias de antecedência para aprovação prévia de adequação de marca pelo FFC." />
      <Clause text="4.4. MUDANÇA DE DATA E ESTORNO: Na eventual alteração de cronograma do evento por razões logísticas ou de força maior, as contrapartidas comerciais serão realocadas para a nova data sem custo adicional. Optando a Empresa pela retirada, proceder-se-á o estorno proporcional à mídia não veiculada, sem aplicação de multa recíproca." />

      <SectionTitle>CAPÍTULO V: LICENCIAMENTO DE MARCA E PROPRIEDADE INTELECTUAL</SectionTitle>
      <Clause text="5.1. LIMITES DO USO DA MARCA: O licenciamento recíproco restringe-se ao território nacional, possui vigência idêntica ao contrato principal e destina-se apenas a finalidades promocionais diretas vinculadas ao FFC. Fica proibida a exploração, sublicenciamento ou estampagem da marca FFC em produtos comercializáveis independentes ('merchandising' de prateleira)." />
      <Clause text="5.2. PROTEÇÃO DE LEADS COMERCIAIS: O uso da base de dados (alunos, espectadores e interações digitais do app) para apropriação indevida ou ações de concorrência frontal configura desvio de finalidade, acarretando sanções disciplinares." />

      <SectionTitle>CAPÍTULO VI: PROTEÇÃO DE DADOS PESSOAIS (LGPD)</SectionTitle>
      <Clause text="6.1. PAPÉIS E FUNDAMENTO LEGAL: No ecossistema FFC, a ASPPIBRA atua na qualidade de Controladora Principal dos dados processados sistemicamente. A Parceira (Academia) atua como Controladora Solidária de sua própria base primária de alunos, e como Operadora na transferência de inscrições. O tratamento baseia-se primordialmente no legítimo interesse da promoção esportiva e no consentimento/execução contratual, conforme Anexo III." />
      <Clause text="6.2. RETENÇÃO E EXCLUSÃO: Os dados atrelados aos indicadores do Sandbox serão retidos pela ASPPIBRA durante o ciclo da incubação. Encerrado este, poderão ser anonimizados ou definitivamente eliminados mediante requisição titular, observados os prazos legais de guarda estipulados pelo Marco Civil da Internet." />

      <SectionTitle>CAPÍTULO VII: COMPLIANCE E ÉTICA CORPORATIVA</SectionTitle>
      <Clause text="7.1. CONDUTA E INTEGRIDADE: É dever das Partes aderir às normativas anticorrupção vigentes, vedando-se práticas de suborno, fraudes ou manipulação de resultados desportivos. Exige-se conduta ilibada nas mídias sociais, proibindo-se endossos de marcas de tabaco, sites de apostas irregulares ou mensagens atentatórias à dignidade humana." />

      <SectionTitle>CAPÍTULO VIII: INFRAÇÕES, CURA E MULTAS</SectionTitle>
      <Clause text="8.1. INFRAÇÕES SANÁVEIS E PRAZO DE CURA: Em caso de inadimplementos operacionais reversíveis, a ASPPIBRA emitirá notificação concedendo prazo de 05 (cinco) dias úteis para a regularização (cura) da conduta, sem aplicação inicial de sanções." />
      <Clause text="8.2. INFRAÇÕES GRAVÍSSIMAS E SANÇÕES: Transgressões como adulteração intencional de laudos, agressão material ou denigração frontal da marca não admitem cura. Ocorrendo tais fatos, aplicar-se-á, de imediato, a Suspensão de Acesso ao aplicativo e a respectiva rescisão unilateral motivada." />
      <Clause text="8.3. LIMITAÇÃO DA MULTA PENAL: A aplicação da cláusula penal indenizatória observará o teto de até 30% da obrigação em atraso. Cumprindo a regra do Código Civil Brasileiro, o somatório da pena não excederá, em nenhuma hipótese, o valor da obrigação principal, assegurando-se o direito de redução equitativa frente ao cumprimento parcial do ajuste." />

      <SectionTitle>CAPÍTULO IX: GOVERNANÇA DIGITAL E O PROGRAMA DE INCUBAÇÃO SANDBOX</SectionTitle>
      <Clause text="9.1. INDICADORES DO SANDBOX: A PARCEIRA anui que sua participação e contribuição formam um histórico digital (Anexo IV - Matriz de Indicadores Sandbox), parametrizado por métricas objetivas: engajamento em mídias, aprovação de atletas, faturamento gerado em patrocínio e adequação técnica." />
      <Clause text="9.2. VEDAÇÃO A DIREITOS SOCIETÁRIOS: Ratifica-se que a pontuação auferida na governança digital em fase incubadora não garante, promete ou constitui formação de 'equity', propriedade intelectual sobre software, debêntures, distribuição de lucros ou direito de voto acionário na ASPPIBRA." />
      <Clause text="9.3. ESTRUTURAÇÃO FUTURA: Apenas ao término da fase de incubação e após auditoria independente dos indicadores, caso ocorra eventual transição para um modelo corporativo de exploração com fins econômicos ( Holding / S.A. ), a matriz histórica poderá balizar a inclusão em futuros conselhos de governança." />

      <SectionTitle>CAPÍTULO X: INSTÂNCIA ARBITRAL E FORO</SectionTitle>
      <Clause text="10.1. CLÁUSULA COMPROMISSÓRIA AUTÔNOMA: Qualquer disputa originada deste Contrato-Mãe que não comporte composição amigável poderá ser submetida à Arbitragem, desde que haja manifestação de vontade expressa por meio da assinatura independente do Anexo V (Termo de Cláusula Compromissória), com custos previamente estipulados e partilhados, elegendo-se o idioma Português e a câmara arbitral da Sede Institucional." />
      <Clause text="10.2. FORO CONTRATUAL: Inexistindo a aceitação autônoma para via arbitral, elegem as Partes o foro material da Comarca da sede da ASPPIBRA para dirimir quaisquer contenciosos residuais emergentes deste contrato, não obstante privilégios preexistentes." />

      <SectionTitle>ASSINATURAS E VALIDAÇÃO DIGITAL</SectionTitle>
      <DigitalSignature title="ASSINATURA DIGITAL - ASPPIBRA" name="Assinatura eletrônica do Representante Legal" color="success" />
      <DigitalSignature title="ASSINATURA DIGITAL - PARCEIRA" name="Assinatura eletrônica autenticada via Plataforma FFC" color="info" />

      <br />
      <br />
    </>
  );
}
