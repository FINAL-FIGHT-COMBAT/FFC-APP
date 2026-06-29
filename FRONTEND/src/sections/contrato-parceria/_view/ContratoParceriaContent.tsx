import {
  Clause,
  DataTag,
  ABNTText,
  SectionTitle,
  DocumentTitle,
  DigitalSignature,
} from 'src/components/abnt-document';

export function ContratoParceriaContent() {
  return (
    <>
      <DocumentTitle>CONTRATO DE ADESÃO AO PROGRAMA DE INCUBAÇÃO, GOVERNANÇA E INTEGRAÇÃO</DocumentTitle>
      <DocumentTitle>DO ECOSSISTEMA FINAL FIGHT COMBAT (FFC)</DocumentTitle>
      <ABNTText>
        Pelo presente instrumento particular, de um lado:{' '}
        <strong>ASPPIBRA – ASSOCIAÇÃO DOS PROPRIETÁRIOS E POSSUIDORES DE IMÓVEIS NO BRASIL</strong>,
        associação civil sem fins lucrativos, inscrita no CNPJ sob nº 26.325.396/0001-30, com sede
        em <DataTag field="ENDEREÇO DA SEDE" text="[Endereço da Sede]" />, neste ato representada
        por seu <DataTag field="CARGO DO REPRESENTANTE" text="[Cargo]" />,{' '}
        <DataTag field="NOME DO REPRESENTANTE" text="[Nome do Representante]" />, doravante
        denominada simplesmente <strong>ASPPIBRA</strong> ou <strong>INCUBADORA</strong>;
      </ABNTText>
      <ABNTText>
        e, de outro lado: <strong>PESSOA JURÍDICA PARCEIRA:</strong>{' '}
        <DataTag field="RAZÃO SOCIAL" text="[Razão Social]" />, nome fantasia{' '}
        <DataTag field="NOME FANTASIA" text="[Nome Fantasia]" />, inscrita no CNPJ sob nº{' '}
        <DataTag field="CNPJ" text="[CNPJ]" />, com sede em{' '}
        <DataTag field="ENDEREÇO COMPLETO DA SEDE" text="[Endereço Completo]" />, com registro de
        CNAE principal nº <DataTag field="CNAE PRINCIPAL" text="[CNAE]" />, neste ato representada
        por seu responsável legal{' '}
        <DataTag field="NOME DO REPRESENTANTE LEGAL" text="[Nome do Representante da Parceira]" />,
        portador do CPF nº <DataTag field="CPF DO REPRESENTANTE" text="[CPF]" />, doravante
        denominada simplesmente <strong>PARCEIRA</strong>;
      </ABNTText>
      <ABNTText>
        celebram o presente Contrato de Adesão, mediante as cláusulas e condições seguintes.
      </ABNTText>
      <ABNTText>
        Fica desde logo pactuado que a incubadora do projeto (ASPPIBRA) atua estritamente sob
        natureza associativa de fins não econômicos, de modo que a presente parceria opera na
        modalidade de incubação e governança digital. O ingresso neste ambiente de tecnologia
        gera métricas auditáveis e pontuação vinculada ao Identificador de Referência do Ecossistema (IRE),
        observando-se as diretrizes de elegibilidade futuras definidas neste instrumento.
      </ABNTText>

      <SectionTitle>CAPÍTULO I: SISTEMA CONTRATUAL E PROVA ELETRÔNICA</SectionTitle>
      <Clause text="1.1. ANEXOS E MÓDULOS: O presente Contrato-Mãe é o instrumento principal que rege as disposições gerais. Detalhes operacionais e comerciais são remetidos exclusivamente aos Anexos Autônomos de Aceite Obrigatório: (I) Tabela de Entregáveis de Mídia e Finanças; (II) Regulamento Técnico e Esportivo; (III) Política de Proteção de Dados (LGPD); (IV) Matriz de Indicadores do IRE; e (V) Termo de Cláusula Compromissória." />
      <Clause text="1.2. PROVA DE ACEITE E ASSINATURA DIGITAL: Nos termos da Lei nº 14.063/2020, o aceite deste instrumento se dá por Assinatura Eletrônica Avançada dentro do aplicativo oficial. A integridade documental é assegurada mediante trilha de auditoria contendo: versão do contrato aceito, timestamping (carimbo de tempo oficial), endereço IP, device ID (identificador do dispositivo) e hash criptográfico gerado na transação sistêmica." />

      <SectionTitle>CAPÍTULO I-A: DOCUMENTOS INTEGRANTES</SectionTitle>
      <Clause text="1-A.1. INTEGRAÇÃO DO WHITEPAPER: O Whitepaper Oficial do Ecossistema FFC integra o presente instrumento para todos os fins de direito e interpretação institucional, funcionando como diretriz estratégica e técnica das obrigações e metas de incubação assumidas pelas partes." />

      <SectionTitle>CAPÍTULO II: VIGÊNCIA E RESILIÇÃO</SectionTitle>
      <Clause text="2.1. PRAZO DE VIGÊNCIA: A relação vigorará pelo prazo exato da modalidade selecionada no aplicativo, podendo ser por Temporada Anual ou Etapa Específica: <DataTag field='PRAZO_VIGENCIA' text='[Temporada Anual / Etapa]' />. Fica expressamente vedada a renovação automática, exigindo-se novo termo ou renovação expressa de aceite a cada ciclo." />
      <Clause text="2.2. RESILIÇÃO: Qualquer das partes poderá rescindir o contrato imotivadamente e sem ônus mediante aviso prévio formalizado no painel do aplicativo com antecedência mínima de 30 (trinta) dias. Caso a rescisão imotivada ocorra em prazo inferior, sujeitar-se-á a Parte infratora à multa penal." />
      <Clause text="2.3. EFEITOS DO DESLIGAMENTO E SAÍDA: Na ocorrência de denúncia, resilição voluntária ou exclusão motivada por infração contratual: (i) todos os benefícios operacionais de uso da plataforma e acessos ao software serão imediatamente revogados; (ii) os dados históricos de performance e transações gerados sob o respectivo IRE permanecerão incorporados de forma definitiva e irreversível ao banco de dados do ecossistema FFC; e (iii) a PARCEIRA perderá, de pleno direito, toda e qualquer elegibilidade para eventual participação societária futura relacionada ao cômputo daquele IRE." />

      <SectionTitle>CAPÍTULO III: MÓDULO ACADEMIA AFILIADA (ESPORTIVO)</SectionTitle>
      <Clause text="3.1. CADASTRO DE ATLETAS E OBRIGAÇÕES: A Academia deve observar as diretrizes fixadas no Anexo II (Regulamento Técnico). Obriga-se a manter cota mínima de <DataTag field='MIN_ATLETAS' text='[Quantidade Mínima]' /> atletas ativos no sistema, submeter graduações validadas e respeitar as datas de corte de chaveamento." />
      <Clause text="3.2. RESPONSABILIDADE PELA TRIAGEM PRÉVIA: A Academia exerce Responsabilidade Civil pela triagem documental preliminar de seus afiliados. O Head Coach compromete-se a não aprovar sistemicamente lutadores com pendências visíveis em atestados médicos ou exames exigidos, sendo eximida de culpa, contudo, em caso de falsificação ideológica ou adulteração documental perpetrada exclusivamente pelo atleta de má-fé." />
      <Clause text="3.3. PONTUAÇÃO E IRE: A adesão regular qualifica a Academia a pontuar no Ranking Unificado do ecossistema, habilitando o cômputo de indicadores associados ao seu Identificador de Referência do Ecossistema (IRE) correspondente." />

      <SectionTitle>CAPÍTULO IV: MÓDULO EMPRESA PATROCINADORA E FINANCEIRO</SectionTitle>
      <Clause text="4.1. COTAS E CONDIÇÕES DE ATIVAÇÃO: O aporte financeiro ou permuta obedece ao valor de <DataTag field='VALOR_PATROCINIO' text='R$ 0,00' />. A ativação comercial na plataforma está estritamente condicionada à liquidação do respectivo boleto/PIX na conta oficial da ASPPIBRA e à regular emissão de Nota Fiscal Eletrônica (NF-e/NFS-e) por prestação de serviço correlata." />
      <Clause text="4.2. INADIMPLÊNCIA E ATRASO: O atraso no pagamento gerará suspensão automática da veiculação publicitária e incidência de juros moratórios de 1% ao mês, além de multa de 2% sobre o montante inadimplido, compensáveis na fatura subsequente." />
      <Clause text="4.3. TABELA DE ENTREGÁVEIS (ANEXO I): As inserções ('Naming Rights', Banners de App, Lower Thirds, Push Notifications) observarão estritamente a quantidade, formato, dimensões (pixels/centímetros), localização e duração detalhadas no Anexo I. Todo material enviado pela Empresa deve ser submetido com 15 (quinze) dias de antecedência para aprovação prévia de adequação de marca pelo FFC." />
      <Clause text="4.4. MUDANÇA DE DATA E ESTORNO: Na eventual alteração de cronograma do evento por razões logísticas ou de força maior, as contrapartidas comerciais serão realocadas para a nova data sem custo adicional. Optando a Empresa pela retirada, proceder-se-á o estorno profissional à mídia não veiculada, sem aplicação de multa recíproca." />

      <SectionTitle>CAPÍTULO V: LICENCIAMENTO DE MARCA E PROPRIEDADE INTELECTUAL</SectionTitle>
      <Clause text="5.1. LIMITES DO USO DA MARCA: O licenciamento recíproco restringe-se ao território nacional, possui vigência idêntica ao contrato principal e destina-se apenas a finalidades promocionais diretas vinculadas ao FFC. Fica proibida a exploração, sublicenciamento ou estampagem da marca FFC em produtos comercializáveis independentes ('merchandising' de prateleira)." />
      <Clause text="5.2. PROTEÇÃO DE LEADS COMERCIAIS: O uso da base de dados (alunos, espectadores e interações digitais do app) para apropriação indevida ou ações de concorrência frontal configura desvio de finalidade, acarretando sanções disciplinares." />
      <Clause text="5.3. TITULARIDADE EXCLUSIVA DE ATIVOS TECNOLÓGICOS: Fica expressamente estabelecido que a titularidade de toda a propriedade intelectual sobre o software FFC, base de dados unificada de esportes de combate, algoritmos de chaves e rankings, metodologia do IRE, marcas associadas e qualquer tecnologia desenvolvida pertence de forma exclusiva à ASPPIBRA (ou à sua eventual sucessora empresarial), não gerando a presente adesão qualquer cessão, transferência ou direito de propriedade intelectual para a PARCEIRA." />

      <SectionTitle>CAPÍTULO VI: PROTEÇÃO DE DADOS PESSOAIS (LGPD)</SectionTitle>
      <Clause text="6.1. PAPÉIS E FUNDAMENTO LEGAL: No ecossistema FFC, a ASPPIBRA atua na qualidade de Controladora Principal dos dados processados sistemicamente. A Parceira (Academia) atua como Controladora Solidária de sua própria base primária de alunos, e como Operadora na transferência de inscrições. O tratamento baseia-se primordialmente no legítimo interesse da promoção esportiva e no consentimento/execução contratual, conforme Anexo III." />
      <Clause text="6.2. RETENÇÃO E EXCLUSÃO: Os dados atrelados aos indicadores do IRE serão retidos pela ASPPIBRA durante o ciclo da incubação. Encerrado este, poderão ser anonimizados ou definitivamente eliminados mediante requisição titular, observados os prazos legais de guarda estipulados pelo Marco Civil da Internet." />

      <SectionTitle>CAPÍTULO VII: COMPLIANCE E ÉTICA CORPORATIVA</SectionTitle>
      <Clause text="7.1. CONDUTA E INTEGRIDADE: É dever das Partes aderir às normativas anticorrupção vigentes, vedando-se práticas de suborno, fraudes ou manipulação de resultados desportivos. Exige-se conduta ilibada nas mídias sociais, proibindo-se endossos de marcas de tabaco, sites de apostas irregulares ou mensagens atentatórias à dignidade humana." />
      <Clause text="7.2. INTEGRIDADE DOS INDICADORES E MEDIDAS ANTIFRAUDE: Fica terminantemente vedada a prática de qualquer conduta destinada a inflar ou adulterar artificialmente as métricas de desempenho sob o IRE, incluindo o cadastro de atletas fictícios, simulação de tráfego sistêmico por robôs (bots), fracionamento fraudulento de volume financeiro ou geração de inscrições fictícias. A detecção de fraude, mediante procedimento de averiguação com garantia de ampla defesa, importará na exclusão motivada do Programa, perda irrevogável do status fundador e anulação do IRE." />

      <SectionTitle>CAPÍTULO VIII: INFRAÇÕES, CURA E MULTAS</SectionTitle>
      <Clause text="8.1. INFRAÇÕES SANÁVEIS E PRAZO DE CURA: Em caso de inadimplementos operacionais reversíveis, a ASPPIBRA emitirá notificação concedendo prazo de 05 (cinco) dias úteis para a regularização (cura) da conduta, sem aplicação inicial de sanções." />
      <Clause text="8.2. INFRAÇÕES GRAVÍSSIMAS E SANÇÕES: Transgressões como adulteração intencional de laudos, agressão material ou denigração frontal da marca não admitem cura. Ocorrendo tais fatos, aplicar-se-á, de imediato, a Suspensão de Acesso ao aplicativo e a respectiva rescisão unilateral motivada." />
      <Clause text="8.3. LIMITAÇÃO DA MULTA PENAL: A aplicação da cláusula penal indenizatória observará o teto de até 30% da obrigação em atraso. Cumprindo a regra do Código Civil Brasileiro, o somatório da pena não excederá, em nenhuma hipótese, o valor da obrigação principal, assegurando-se o direito de redução equitativa frente ao cumprimento parcial do ajuste." />

      <SectionTitle>CAPÍTULO IX: GOVERNANÇA DIGITAL E O PROGRAMA DE INCUBAÇÃO</SectionTitle>
      <Clause text="9.1. INDICADORES DO IRE: A PARCEIRA anui que sua participação e contribuição formam um histórico digital parametrizado por métricas objetivas (Matriz de Indicadores do IRE), registradas e consolidadas sistemicamente sob o seu Identificador de Referência do Ecossistema (IRE)." />
      <Clause text="9.2. VEDAÇÃO A DIREITOS SOCIETÁRIOS IMEDIATOS: A participação no Programa de Incubação não gera direito adquirido a participação societária, distribuição de resultados, quotas, ações ou direitos políticos na ASPPIBRA ou no ecossistema FFC." />
      <Clause text="9.3. ESTRUTURAÇÃO FUTURA E ELEGIBILIDADE: Todavia, os indicadores auditados sob o IRE poderão ser considerados como critérios objetivos de elegibilidade para eventual participação em futura estrutura empresarial (Holding / S.A. / SPE), caso esta venha a ser constituída ao término da fase de incubação e após auditoria independente de resultados, observadas as regras definidas em instrumentos próprios." />
      <Clause text="9.4. SUCESSÃO EMPRESARIAL DA HOLDING: Fica expressamente autorizado que a ASPPIBRA ceda e transfira a totalidade dos direitos, obrigações, patentes, marcas e dados que compõem o ecossistema FFC para a holding ou entidade societária sucessora constituída para fins de exploração comercial do projeto desportiva, operando-se a respectiva sucessão contratual de pleno direito." />

      <SectionTitle>CAPÍTULO IX-A: RECONHECIMENTO DOS PARCEIROS FUNDADORES</SectionTitle>
      <Clause text="9-A.1. STATUS FUNDADOR: As organizações que aderirem ao Programa de Incubação durante a fase inicial do projeto e mantiverem participação ativa receberão o reconhecimento permanente como participantes da fase fundadora do ecossistema FFC." />
      <Clause text="9-A.2. BENEFÍCIOS EXCLUSIVOS DO STATUS: O reconhecimento permanente confere à PARCEIRA: (i) tratamento prioritário e prioridade preferencial na aprovação de seus eventos operados no calendário oficial; (ii) participação ampliada nos comitês desportivos e consultivos do Conselho; e (iii) acesso antecipado a funcionalidades em beta da plataforma de software FFC." />

      <SectionTitle>CAPÍTULO IX-B: GOVERNANÇA COLABORATIVA E CONSELHO</SectionTitle>
      <Clause text="9-B.1. CONSELHO CONSULTIVO TRIPARTITE: Institui-se o Conselho de Governança Consultiva do FFC para supervisionar a integridade técnica, regras de pontuação de software e conformidade do ecossistema durante a incubação." />
      <Clause text="9-B.2. COMPOSIÇÃO E REGIMENTO: O conselho será formado por representantes eleitos das federações, academias homologadas e representantes da ASPPIBRA, reunindo-se bimestralmente com atas lavradas em livro digital auditável." />
      <Clause text="9-B.3. PREVENÇÃO A CONFLITOS DE INTERESSES: Os conselheiros integrantes estão impedidos de proferir voto ou participar de deliberações em matérias onde reste configurado o conflito de interesses, notadamente em decisões que resultem em privilégios operacionais, financeiros ou desportivos diretos e exclusivos para suas respectivas organizações associadas." />

      <SectionTitle>CAPÍTULO IX-C: COOPERAÇÃO INSTITUCIONAL E NÃO COMPETIÇÃO</SectionTitle>
      <Clause text="9-C.1. AUTONOMIA DAS ENTIDADES: O FFC reconhece a total autonomia jurídica, técnica e financeira de cada federação, academia e organização parceira participante do ecossistema." />
      <Clause text="9-C.2. CARÁTER NÃO COMPETITIVO: O ecossistema FFC atua exclusivamente como integrador tecnológico. Declara expressamente que não compete com os campeonatos, rankings ou circuitos próprios e preexistentes de cada parceiro, atuando para potencializar e unificar o alcance mercadológico dessas iniciativas." />

      <SectionTitle>CAPÍTULO IX-D: AUDITORIA INDEPENDENTE E RELATÓRIOS</SectionTitle>
      <Clause text="9-D.1. CONTRATAÇÃO DE AUDITORIA: Ao término da fase de incubação, a ASPPIBRA contratará empresa de auditoria independente de resultados e tecnologia para examinar a base de dados unificada, a segurança da informação e as transações ocorridas sob os IREs dos parceiros." />
      <Clause text="9-D.2. SUBSÍDIO AO VALUATION: O laudo de auditoria validará a integridade do ecossistema e servirá como base técnica para a emissão do valuation do ativo tecnológico." />
      <Clause text="9-D.3. RELATÓRIOS PERIÓDICOS E TRANSPARÊNCIA: A INCUBADORA fornecerá relatórios de dados operacionais e financeiros consolidados em caráter trimestral e semestral, garantindo o acompanhamento em tempo real através do painel de controle do IRE." />

      <SectionTitle>CAPÍTULO IX-E: BENEFÍCIOS DA ADESÃO E INTEGRAÇÃO</SectionTitle>
      <Clause text="9-E.1. BENEFÍCIOS IMEDIATOS: A ativação do IRE e a regular participação conferem à PARCEIRA o direito de uso das seguintes contrapartidas: (i) acesso às ferramentas do software de gestão; (ii) página de perfil próprio no aplicativo e painel de controle; (iii) inserção automatizada de seus combates e graduações no ranking nacional; (iv) exposição preferencial perante patrocinadores nacionais e marcas associadas; e (v) relatórios periódicos de tração de dados." />

      <SectionTitle>CAPÍTULO X: INSTÂNCIA ARBITRAL E FORO</SectionTitle>
      <Clause text="10.1. CLÁUSULA COMPROMISSÓRIA AUTÔNOMA: Qualquer disputa originada deste Contrato-Mãe que não comporte composição amigável poderá ser submetida à Arbitragem, desde que haja manifestação de vontade expressa por meio da assinatura independente do Anexo V (Termo de Cláusula Compromissória), com custos previamente estipulados e partilhados, elegendo-se o idioma Português e a câmara arbitral da Sede Institucional." />
      <Clause text="10.2. FORO CONTRATUAL: Inexistindo a aceitação autônoma para via arbitral, elegem as Partes o foro material da Comarca da sede da ASPPIBRA para dirimir quaisquer contenciosos residuais emergentes deste contrato, não obstante privilégios preexistentes." />

      <SectionTitle>ANEXO IV: MATRIZ DE INDICADORES DO IRE</SectionTitle>
      <Clause text="A.4.1. METRICAS COMPOSITORAS E PESOS DA AVALIAÇÃO: A performance operacional da PARCEIRA será medida de forma objetiva, aplicando-se pesos específicos aos indicadores sob o respectivo IRE, conforme aprovado formalmente e calibrado periodicamente pelo Conselho de Governança Consultiva:" />
      <Clause text="- (a) Atletas Ativos (Peso: 30%): Número de competidores cadastrados e regulares com prontuário de exames médicos;" />
      <Clause text="- (b) Eventos Operados (Peso: 20%): Etapas locais, regionais ou nacionais operadas pelo software proprietário FFC;" />
      <Clause text="- (c) Patrocínios e Recursos Captados (Peso: 25%): Contratos de marcas nacionais integrados ou veiculados no ecossistema;" />
      <Clause text="- (d) Volume Transacional Processado (Peso: 15%): Volume financeiro de inscrições e vendas geradas pela PARCEIRA no sistema;" />
      <Clause text="- (e) Engajamento, Governança e Retenção (Peso: 10%): Tempo de permanência ativa e engajamento no aplicativo FFC." />

      <SectionTitle>ASSINATURAS E VALIDAÇÃO DIGITAL</SectionTitle>
      <DigitalSignature
        title="ASSINATURA DIGITAL - ASPPIBRA"
        name="Assinatura eletrônica do Representante Legal"
        color="success"
      />
      <DigitalSignature
        title="ASSINATURA DIGITAL - PARCEIRA"
        name="Assinatura eletrônica autenticada via Plataforma FFC"
        color="info"
      />

      <br />
      <br />
    </>
  );
}
