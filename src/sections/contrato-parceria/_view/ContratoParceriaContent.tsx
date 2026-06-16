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
      <DocumentTitle>CONTRATO MODULAR DE PARCERIA E AFILIAÇÃO INSTITUCIONAL</DocumentTitle>
      <DocumentTitle>FINAL FIGHT COMBAT (FFC)</DocumentTitle>
      <ABNTText>
        O presente instrumento legal formaliza os termos e condições de parceria e afiliação entre o ecossistema Final Fight Combat (FFC) e a Pessoa Jurídica signatária. Empregando uma arquitetura modular, este contrato destina-se a regular simultaneamente as obrigações desportivas (Academias Afiliadas) e as contrapartidas comerciais (Empresas Patrocinadoras), ativando-se as cláusulas pertinentes conforme o perfil corporativo chancelado no momento do credenciamento digital.
      </ABNTText>

      <SectionTitle>CAPÍTULO I: DAS PARTES E DAS MODALIDADES DE PARCERIA</SectionTitle>
      <Clause text="1.1. QUALIFICAÇÃO DOS CONTRATANTES: De um lado, a entidade promotora FINAL FIGHT COMBAT (FFC), doravante denominada 'ORGANIZADORA'. De outro lado, a Pessoa Jurídica qualificada no banco de dados do aplicativo, representada por seu administrador legal e doravante denominada 'PARCEIRA'." />
      <Clause text="1.2. DEFINIÇÃO DO ESCOPO (PERFIL DO PARCEIRO): O escopo das obrigações deste contrato será modulado sistemicamente com base no perfil registrado no aplicativo. A marcação de perfil 'Academia' deflagra os efeitos do Capítulo II (Parceria Técnica/Esportiva). A marcação do perfil 'Empresa' deflagra os efeitos do Capítulo III (Parceria Comercial/Patrocínio). Em caso de parcerias híbridas, ambos os módulos incidirão solidariamente." />
      <Clause text="1.3. VIGÊNCIA CONTRATUAL: A presente afiliação terá vigência e validade atreladas à seleção do escopo temporal firmado no ato da assinatura digital: <DataTag label='PRAZO_VIGENCIA' fallback='[Temporada Anual ou Etapa Específica]' />. Encerrado o prazo, as concessões de marca e plataforma serão suspensas, ressalvadas as obrigações de confidencialidade que permanecem por 5 (cinco) anos." />

      <SectionTitle>CAPÍTULO II: MÓDULO ESPECÍFICO PARA ACADEMIAS AFILIADAS</SectionTitle>
      <Clause text="2.1. GESTÃO E INSCRIÇÃO DE ATLETAS VIA APP: A Academia Afiliada compromete-se a centralizar e auditar o cadastro sistêmico de sua equipe. Toda a gestão de atletas, inserção de graduações oficiais, confirmação de enquadramento em chaves de peso e anuência para combates deverá ser realizada impreterivelmente por meio do painel corporativo (Head Coach) do aplicativo FFC." />
      <Clause text="2.2. COMPLIANCE DE SAÚDE E RESPONSABILIDADE CIVIL: A agremiação parceira assume a Responsabilidade Civil pela Autenticidade Documental e Triagem Prévia de seus afiliados. Obriga-se a auditar e validar a regularidade de exames cardiológicos, laudos de aptidão física e triagens dermatológicas da sua delegação previamente à apresentação oficial na pesagem." />
      <Clause text="2.3. DIREITO AO RANKING E PONTUAÇÃO COLETIVA: Mediante o aceite deste termo e adimplência de sua anuidade, a Academia Afiliada torna-se elegível ao cômputo no Ranking Unificado de Equipes, habilitando-se a acumular pontos olímpicos e absolutos e a disputar os Troféus Institucionais da temporada." />

      <SectionTitle>CAPÍTULO III: MÓDULO ESPECÍFICO PARA EMPRESAS PARCEIRAS E PATROCINADORES</SectionTitle>
      <Clause text="3.1. DEFINIÇÃO DAS COTAS DE PATROCÍNIO: A Empresa Parceira compromete-se com o fomento do evento por meio do aporte financeiro ou de permuta corporativa (barter), conforme cota patrocinadora selecionada: <DataTag label='COTA_PATROCINIO' fallback='[Cota Ouro, Prata, Bronze ou Permuta]' />. O cronograma de desembolso obedecerá às faturas geradas no ambiente financeiro do app FFC, ficando a liberação de qualquer pagamento estritamente condicionada à emissão e envio da respectiva Nota Fiscal Eletrônica (NF-e ou NFS-e) por parte da PARCEIRA." />
      <Clause text="3.2. ENTREGA DE ATIVOS DIGITAIS (NO APP): Como contrapartida comercial, a ORGANIZADORA concederá a veiculação da logomarca e branding da Empresa Parceira nos ativos digitais estabelecidos, podendo incluir banners rotativos de alto impacto na plataforma, menções em notificações push aos usuários logados e inserções gráficas (lower thirds) durante as transmissões oficiais de streaming." />
      <Clause text="3.3. ENTREGA DE ATIVOS FÍSICOS (NA ARENA): A depender da modalidade acordada, fica assegurado o direito ao 'Naming Rights' ou à exposição visível em solo de evento, contemplando chancela de logomarcas nos tatames, backnumbers (costas) de atletas da organização, estruturas de cage e locação de espaços preferenciais para ativação de marca (stands comerciales)." />

      <SectionTitle>CAPÍTULO IV: PROPRIEDADE INTELECTUAL E CONFORMIDADE DE MARCA</SectionTitle>
      <Clause text="4.1. LICENCIAMENTO DE USO MÚTUO DE MARCAS: As Partes concedem uma à outra, em caráter não exclusivo, temporário e revogável, o direito de uso mútuo de suas marcas, logotipos e símbolos estritamente para os fins de promoção e marketing do ecossistema FFC." />
      <Clause text="4.2. PADRÃO TÉCNICO DE PATCHES E UNIFORMES: Caso a Empresa Parceira opte por patrocinar atletas individualmente, suas marcas aplicadas nos uniformes deverão respeitar as zonas de posicionamento estipuladas no livro de regras do FFC. É estritamente vedada a exposição, no pódio ou tatame, de marcas associadas a tabaco, apostas não regulamentadas, extremismo político ou conteúdo injurioso que fira o código de ética da transmissão." />

      <SectionTitle>CAPÍTULO V: PROTEÇÃO DE DADOS (LGPD) E CONFIDENCIALIDADE</SectionTitle>
      <Clause text="5.1. RESPONSABILIDADE COMPARTILHADA DE DADOS: Na gestão conjunta de listas de atletas, alunos matriculados e leads comerciais, as Partes atuarão sob o framework da Lei Geral de Proteção de Dados (LGPD). A coleta e repasse de métricas pelo aplicativo FFC será anonimizada em prol da parceria corporativa, sendo vedada a comercialização indiscriminada de bases de dados a terceiros não autorizados." />
      <Clause text="5.2. SIGILO COMERCIAL E INDUSTRIAL: A PARCEIRA concorda em manter a mais estrita confidencialidade acerca de todas as estratégias de marketing reveladas, modelo de remuneração e bolsa de atletas (Grand Prix), códigos operacionais e mecânicas não públicas de software relacionadas ao aplicativo FFC." />

      <SectionTitle>CAPÍTULO VI: RESCISÃO, QUEBRA DE DECORO E PENALIDADES</SectionTitle>
      <Clause text="6.1. RESCISÃO POR INFRAÇÃO DISCIPLINAR OU ÉTICA: Este contrato poderá ser sumariamente rescindido, por justa causa e sem direito a indenização compensatória, se a PARCEIRA ou qualquer de seus prepostos e atletas perpetrar fraude em arbitragem, omissão de atestados adulterados, acobertamento de doping sistêmico, injúria física no recinto do ginásio ou agressão material aos ativos físicos e digitais do FFC." />
      <Clause text="6.2. PENALIDADES FINANCEIRAS E ADMINISTRATIVAS: A quebra imotivada do contrato em prazo exíguo (inferior a 30 dias do evento) ou a inadimplência comercial acarretará multa compensatória prefixada em 30% do valor global da parceria. No campo administrativo, a sanção imporá a Suspensão de Acesso Administrativo e Ocultação Sistêmica de Perfil Corporativo no aplicativo oficial, descredenciando a academia ou a empresa para edições futuras." />

      <SectionTitle>CAPÍTULO VII: DO FORO E RESOLUÇÃO DE DISPUTAS</SectionTitle>
      <Clause text="7.1. CLÁUSULA COMPROMISSÓRIA DE ARBITRAGEM: Visando a celeridade e o sigilo, as Partes concordam que quaisquer litígios, conflitos operacionais, contestações de bônus comerciais ou disputas financeiras emergentes deste Contrato de Parceria Modular não serão levados à jurisdição da Justiça Comum. Toda controvérsia será submetida, julgada e dirimida exclusivamente por meio da Câmara de Arbitragem Legal e Extrajudicial formalmente indicada e homologada no portal corporativo do FFC." />

      <br />
      <br />
    </>
  );
}
