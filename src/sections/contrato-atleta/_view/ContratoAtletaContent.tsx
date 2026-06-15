import {
  Clause,
  DataTag,
  ABNTText,
  SectionTitle,
  DocumentTitle,
  DigitalSignature,
} from 'src/components/abnt-document';

export function ContratoAtletaContent() {
  return (
    <>
      <DocumentTitle>
        INSTRUMENTO PARTICULAR DE CONTRATO
      </DocumentTitle>
      <DocumentTitle>
        PARTICIPAÇÃO DE ATLETA CONVIDADO, CESSÃO DE IMAGEM E OUTRAS AVENÇAS
      </DocumentTitle>
      <ABNTText>
        Pelo presente instrumento particular, de um lado: <strong>ASPPIBRA – ASSOCIAÇÃO DOS PROPRIETÁRIOS E POSSUIDORES DE IMÓVEIS NO BRASIL</strong>, associação civil sem fins lucrativos, inscrita no CNPJ sob nº 26.325.396/0001-30, com sede em <DataTag text="ENDEREÇO DA SEDE" />, neste ato representada por seu <DataTag text="CARGO DO REPRESENTANTE" />, <DataTag text="NOME DO REPRESENTANTE" />, doravante denominada simplesmente <strong>ASPPIBRA</strong> ou <strong>ORGANIZADORA</strong>;
      </ABNTText>
      <ABNTText>
        e, de outro lado: <strong>ATLETA CONVIDADO:</strong> <DataTag text="NOME COMPLETO" />, <DataTag text="NACIONALIDADE" />, <DataTag text="ESTADO CIVIL" />, <DataTag text="PROFISSÃO" />, portador do CPF nº <DataTag text="CPF" /> e RG nº <DataTag text="RG" />, residente e domiciliado em <DataTag text="ENDEREÇO COMPLETO" />, doravante denominado simplesmente <strong>ATLETA</strong>;
      </ABNTText>
      <ABNTText>
        celebram o presente contrato, mediante as cláusulas e condições seguintes.
      </ABNTText>

      <SectionTitle>CLÁUSULA 1ª – DO ENQUADRAMENTO INSTITUCIONAL</SectionTitle>
      <Clause text="1.1. O Projeto FFC – Final Fight Combat integra, nesta fase, a estrutura institucional, administrativa, financeira e operacional da ASPPIBRA, sem personalidade jurídica autônoma própria, constituindo iniciativa vinculada à associação até eventual deliberação formal em sentido diverso." />
      <Clause text="1.2. O presente instrumento não cria sociedade, empresa, parceria societária, associação autônoma, vínculo empregatício, relação societária ou participação econômica do ATLETA na estrutura da ASPPIBRA ou do Projeto FFC." />
      <Clause text="1.3. O ATLETA reconhece que sua participação decorre de convite específico da ORGANIZADORA, com natureza desportiva, promocional, institucional e eventual, limitada às condições deste contrato, dos anexos e do regulamento oficial do evento." />
      <Clause text="1.4. Caso o Projeto FFC venha futuramente a constituir nova pessoa jurídica, essa circunstância dependerá de deliberação formal e instrumento próprio, sem prejuízo da validade dos atos praticados sob a estrutura atual." />
      <SectionTitle>CLÁUSULA 2ª – DA AUTORIZAÇÃO INTERNA E DA HIERARQUIA DOCUMENTAL</SectionTitle>
      <Clause text="2.1. A celebração deste contrato foi autorizada por deliberação interna da ASPPIBRA, conforme ata e/ou documento de aprovação arquivado em seus registros." />
      <Clause text="2.2. Integram este instrumento, para todos os fins:" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>(i) o regulamento oficial do evento;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>(ii) a programação técnica;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>(iii) a tabela de Bolsa de Luta e logística do atleta convidado;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>(iv) a política de imagem;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>(v) a política de privacidade e proteção de dados;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>(vi) o termo de saúde e aptidão física; e</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>(vii) os demais anexos assinados ou aceitos pelo ATLETA.</ABNTText>
      <Clause text="2.3. Em caso de conflito entre este contrato, seus anexos e o regulamento oficial, prevalecerá a ordem de hierarquia definida no regulamento; na omissão, prevalecerá o texto mais específico e, subsidiariamente, a boa-fé, a finalidade do evento e a legislação aplicável." />
      <Clause text="2.4. Qualquer alteração de regra, valor, agenda, card, categoria, formato ou logística somente produzirá efeitos se formalizada por escrito, por anexo, comunicado oficial ou aceite eletrônico rastreável." />
      <SectionTitle>CLÁUSULA 3ª – DAS DEFINIÇÕES</SectionTitle>
      <Clause text="3.1. Para fins deste contrato, considera-se:" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>I – <strong>Evento:</strong> a competição, card, luta casada, apresentação, seletiva, exibição, festival ou ação promocional vinculada ao Projeto FFC;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>II – <strong>Atleta Convidado:</strong> o participante selecionado pela ORGANIZADORA por convite direto, com condições previamente estabelecidas por escrito;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>III – <strong>Card:</strong> a composição oficial dos confrontos, lutas, apresentações ou exibições do evento;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>IV – <strong>Luta Casada:</strong> confronto previamente ajustado entre dois atletas, com categoria, regras e condições definidas;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>V – <strong>Bolsa de Luta / Cachê de Participação:</strong> valor contratual pago ao ATLETA convidado pela presença, participação esportiva e obrigações promocionais previstas neste instrumento;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>VI – <strong>Ajuda Logística:</strong> valores, passagens, deslocamentos, hospedagem, alimentação ou outros apoios previstos neste contrato;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>VII – <strong>Pesagem:</strong> procedimento oficial de aferição de peso e enquadramento de categoria;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>VIII – <strong>Corner/Staff:</strong> treinador, auxiliar, assessor, médico, massagista, filmador, fotógrafo, acompanhante técnico ou pessoa credenciada para apoio ao ATLETA;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>IX – <strong>Conteúdo:</strong> toda imagem, voz, nome, apelido, performance, entrevista, bastidor, registro audiovisual, fotografia, transmissão e peças de divulgação do evento;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>X – <strong>Dados Pessoais:</strong> qualquer informação relacionada a pessoa natural identificada ou identificável;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>XI – <strong>Dados Sensíveis:</strong> dados pessoais de saúde, biometria, imagem e outras informações legalmente protegidas;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>XII – <strong>Regulamento Oficial:</strong> conjunto de regras, comunicados e anexos editados pela ORGANIZADORA para disciplinar o evento;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>XIII – <strong>Documento Financeiro Específico do Evento:</strong> tabela ou instrumento apartado que trata das premiações gerais do evento, quando houver, sem integrar este contrato.</ABNTText>
      <SectionTitle>CLÁUSULA 4ª – DO OBJETO</SectionTitle>
      <Clause text="4.1. O presente contrato tem por objeto a participação do ATLETA, na qualidade de atleta convidado, em evento e/ou ação vinculada ao Projeto FFC, incluindo, conforme o caso: combate, apresentação, card principal, luta casada, participação promocional, pesagem, coletiva, gravações, entrevistas, captações audiovisuais, uso de imagem e demais obrigações previstas neste instrumento." />
      <Clause text="4.2. A condição de atleta convidado decorre de convite direto da ORGANIZADORA e não gera, por si só, direito adquirido a luta específica, adversário determinado, horário imutável, posição fixa no card, pagamento adicional não previsto, premiação automática ou vantagem não expressamente confirmada por escrito." />
      <Clause text="4.3. O ATLETA reconhece que o convite pode estar condicionado à confirmação de documentos, aptidão física, cumprimento de peso, aceite de regulamento, disponibilidade de card, aprovação técnica e assinatura dos anexos obrigatórios." />
      <Clause text="4.4. A disciplina de premiações gerais do evento, quando houver, será tratada exclusivamente em Documento Financeiro Específico do Evento, não integrando este contrato, salvo para fins de mera referência operacional." />
      <SectionTitle>CLÁUSULA 5ª – DO PRAZO E DA VIGÊNCIA</SectionTitle>
      <Clause text="5.1. Este contrato entra em vigor na data de sua assinatura e permanecerá válido até o cumprimento integral das obrigações principais e acessórias assumidas pelas partes." />
      <Clause text="5.2. As cláusulas sobre imagem, confidencialidade, proteção de dados, responsabilidade civil, penalidades, rescisão, uso de conteúdo, logística e solução de controvérsias permanecerão vigentes mesmo após o término do evento, pelo prazo nelas previsto ou, na omissão, pelo prazo necessário à sua finalidade." />
      <SectionTitle>CLÁUSULA 6ª – DA NATUREZA DA PARTICIPAÇÃO E DA AUSÊNCIA DE VÍNCULO EMPREGATÍCIO</SectionTitle>
      <Clause text="6.1. As partes reconhecem que a presente relação possui natureza civil-desportiva, eventual e específica, não gerando vínculo empregatício, societário, associativo permanente ou relação de consumo, salvo se a legislação ou a realidade fática impuserem entendimento diverso." />
      <Clause text="6.2. A participação do ATLETA restringe-se ao objeto deste contrato e não caracteriza exclusividade ampla, salvo se houver cláusula específica em anexo relativo a patrocinadores, mídia ou marca do evento." />
      <Clause text="6.3. Eventual prestação de serviços acessórios, quando existente, deverá constar expressamente em instrumento próprio, sem se presumir a partir deste contrato." />
      <SectionTitle>CLÁUSULA 7ª – DA ELEGIBILIDADE E DAS DECLARAÇÕES DO ATLETA</SectionTitle>
      <Clause text="7.1. O ATLETA declara que todos os dados fornecidos à ORGANIZADORA são verdadeiros, completos e atualizados." />
      <Clause text="7.2. O ATLETA declara possuir capacidade civil plena para celebrar este contrato." />
      <Clause text="7.3. O ATLETA declara possuir habilitação esportiva compatível com a categoria, regras e natureza do evento, comprometendo-se a informar imediatamente qualquer impedimento relevante." />
      <Clause text="7.4. A falsidade documental, fraude de peso, omissão de informação relevante, uso indevido de identidade ou qualquer declaração inverídica autoriza desclassificação, rescisão imediata, cancelamento de valores pendentes e adoção das medidas cabíveis." />
      <Clause text="7.5. O ATLETA declara que não possui impedimento disciplinar, médico ou regulatório que inviabilize sua participação, salvo se previamente informado e aceito pela ORGANIZADORA por escrito." />
      <SectionTitle>CLÁUSULA 8ª – DA SAÚDE, APTIDÃO FÍSICA E RISCO ESPORTIVO</SectionTitle>
      <Clause text="8.1. O ATLETA declara que se encontra apto, física e mentalmente, para participar do evento, inclusive das atividades de aquecimento, pesagem, combate, deslocamento, entrevistas e captação de imagem." />
      <Clause text="8.2. O ATLETA deverá informar qualquer condição de saúde relevante, incluindo lesões, cirurgias recentes, fraturas, doenças infectocontagiosas, histórico cardíaco, epilepsia, restrições médicas, uso contínuo de medicamentos ou qualquer fator que possa comprometer sua integridade." />
      <Clause text="8.3. A ORGANIZADORA poderá exigir atestado, laudo, exame, declaração de aptidão ou documento complementar, conforme a modalidade, o risco, a categoria ou exigência legal." />
      <Clause text="8.4. O ATLETA reconhece que a prática desportiva de combate envolve riscos inerentes, inclusive lesões leves, moderadas ou graves, impactos, quedas, torções, cortes, concussões, sangramentos e eventual atendimento hospitalar." />
      <Clause text="8.5. A assinatura deste instrumento representa consentimento livre e informado para participação nos limites do regulamento, sem afastar direitos legalmente indisponíveis." />
      <Clause text="8.6. A ORGANIZADORA poderá recusar ou suspender a participação do ATLETA caso, por critério médico ou técnico razoável, identifique risco incompatível com a atividade." />
      <SectionTitle>CLÁUSULA 9ª – DOS EXAMES, DOCUMENTOS E PRAZOS</SectionTitle>
      <Clause text="9.1. Quando exigidos, os documentos, exames, autorizações e laudos deverão ser apresentados até o prazo estabelecido pela organização antes do evento ou até a data limite definida em comunicado oficial." />
      <Clause text="9.2. O não envio, o envio incompleto, a divergência documental, a expiração da validade ou a ausência de confirmação poderá impedir a participação do ATLETA, sem prejuízo das demais consequências contratuais." />
      <Clause text="9.3. Os dados de saúde eventualmente fornecidos serão utilizados exclusivamente para segurança, elegibilidade, organização, atendimento e cumprimento de obrigação legal." />
      <Clause text="9.4. A ORGANIZADORA poderá exigir atualização documental a qualquer tempo, sempre que houver alteração relevante de categoria, data, condição clínica, logística ou exigência operacional." />
      <SectionTitle>CLÁUSULA 10ª – DO SEGURO E DO ATENDIMENTO MÉDICO</SectionTitle>
      <Clause text="10.1. A ORGANIZADORA fornecerá cobertura obrigatória de seguro de vida e de acidentes pessoais compatível com a atividade desportiva de combate para o ATLETA durante sua participação no evento, quando prevista no regulamento ou anexo específico." />
      <Clause text="10.2. As condições do seguro, sua vigência, capital segurado, exclusões, procedimento de sinistro e eventual beneficiário deverão ser informados em anexo ou comunicado oficial." />
      <Clause text="10.3. O ATLETA autoriza, desde já, a adoção de primeiros socorros, remoção, atendimento pré-hospitalar e encaminhamento para unidade de saúde, se necessário." />
      <Clause text="10.4. Em situação de urgência ou emergência, a ORGANIZADORA poderá tomar as providências necessárias para preservar a vida e a integridade do ATLETA, comunicando o contato indicado o quanto antes." />
      <Clause text="10.5. O seguro, quando houver, não substitui o dever de observância às regras, a necessidade de aptidão física e a responsabilidade do ATLETA por informar corretamente sua condição de saúde." />
      <SectionTitle>CLÁUSULA 11ª – DO CONVITE, DA CONFIRMAÇÃO E DA POSIÇÃO NO CARD</SectionTitle>
      <Clause text="11.1. O convite ao ATLETA somente se aperfeiçoa com a confirmação formal da ORGANIZADORA, a assinatura deste contrato e o cumprimento integral das condições exigidas." />
      <Clause text="11.2. A ORGANIZADORA poderá ajustar card, ordem das lutas, substituições, horário, enquadramento de categoria, adversário e composição da programação por motivo técnico, logístico, sanitário, de segurança, de transmissão ou de força maior." />
      <Clause text="11.3. O ATLETA reconhece que a participação no card principal, em luta casada ou em apresentação promocional depende de critérios técnicos e operacionais definidos pela ORGANIZADORA." />
      <Clause text="11.4. A confirmação do convite não gera exclusividade permanente, tampouco obrigação de manutenção do ATLETA em eventos futuros." />
      <SectionTitle>CLÁUSULA 12ª – DA PESAGEM E DO ENQUADRAMENTO DE CATEGORIA</SectionTitle>
      <Clause text="12.1. O ATLETA compromete-se a comparecer à pesagem no local, horário e formato definidos pela ORGANIZADORA, observando a categoria contratada e as tolerâncias previstas no regulamento." />
      <Clause text="12.2. O descumprimento de peso, a fraude de pesagem, a utilização de artifícios para manipular categoria ou a ausência injustificada poderá acarretar desclassificação, reclassificação, multa, perda de bolsa, cancelamento do combate ou outra penalidade prevista no regulamento." />
      <Clause text="12.3. Eventuais tolerâncias, cortes de peso, pesagem alternativa ou segunda tentativa somente terão validade se expressamente autorizados pela ORGANIZADORA." />
      <Clause text="12.4. A ORGANIZADORA poderá recusar a participação caso haja suspeita fundada de manipulação, risco à saúde, inconsistência documental ou descumprimento de prazo obrigatório." />
      <SectionTitle>CLÁUSULA 13ª – DAS OBRIGAÇÕES DO ATLETA</SectionTitle>
      <Clause text="13.1. São obrigações do ATLETA:" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>I – comparecer pontualmente às atividades oficiais;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>II – manter conduta respeitosa com organização, arbitragem, adversário, público, imprensa e demais participantes;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>III – observar as regras técnicas e disciplinares;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>IV – zelar por seus documentos, equipamentos e pertences;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>V – comunicar imediatamente qualquer impedimento relevante;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>VI – cumprir a agenda promocional assumida;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>VII – responder pelos atos de seu corner, staff e acompanhantes credenciados;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>VIII – preservar a imagem institucional do evento e da ASPPIBRA;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>IX – manter contato atualizado para comunicações oficiais;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>X – cumprir as determinações do regulamento e dos responsáveis técnicos.</ABNTText>
      <Clause text="13.2. O ATLETA deverá adotar postura compatível com a ética esportiva, sendo vedadas condutas agressivas fora do contexto do combate, insultos, ameaças, hostilidade ou qualquer comportamento que comprometa a segurança do evento." />
      <Clause text="13.3. O ATLETA deverá informar à ORGANIZADORA, com antecedência razoável, qualquer patrocínio, vínculo comercial ou conflito de marca que possa interferir em uniforme, mídia ou divulgação." />
      <Clause text="13.4. O ATLETA não poderá assumir compromissos com terceiros que inviabilizem o cumprimento deste contrato sem prévia anuência escrita da ORGANIZADORA." />
      <SectionTitle>CLÁUSULA 14ª – DAS OBRIGAÇÕES DA ORGANIZADORA</SectionTitle>
      <Clause text="14.1. São obrigações da ORGANIZADORA, dentro dos limites deste contrato e do regulamento oficial:" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>I – fornecer as informações essenciais do evento;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>II – indicar horário, local e condições da participação;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>III – comunicar mudanças relevantes por canal oficial;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>IV – adotar medidas razoáveis de segurança e integridade;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>V – manter a segregação contábil dos valores do projeto, quando aplicável;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>VI – realizar os pagamentos contratualmente devidos, quando devidos;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>VII – preservar os dados pessoais do ATLETA nos termos da legislação aplicável;</ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>VIII – manter canais oficiais para dúvidas, comunicações e exercício de direitos do participante.</ABNTText>
      <Clause text="14.2. A ORGANIZADORA poderá suspender, adiar ou alterar a programação por razões técnicas, de segurança, de autoridade pública, de mídia ou de força maior, sem que isso, por si só, caracterize inadimplemento." />
      <SectionTitle>CLÁUSULA 15ª – DA INTEGRIDADE ESPORTIVA E DA PROIBIÇÃO DE FRAUDE</SectionTitle>
      <Clause text="15.1. O ATLETA compromete-se a preservar a lisura e a integridade do evento, sendo vedadas práticas de fraude de peso, manipulação de resultado, combinação prévia indevida, conluio, simulação, uso indevido de substâncias ou métodos proibidos e qualquer conduta lesiva à ética esportiva." />
      <Clause text="15.2. A violação desta cláusula autoriza desclassificação imediata, cancelamento de bônus ou premiação contratada, retenção de valores pendentes e adoção das medidas administrativas, civis e, se cabível, penais." />
      <Clause text="15.3. A ORGANIZADORA poderá, a seu critério técnico, submeter o ATLETA a verificação documental, conferência de identidade, validação de peso e checagem de elegibilidade." />
      <Clause text="15.4. O ATLETA autoriza a adoção de procedimentos de controle antidopagem e integridade esportiva, observando as diretrizes da Agência Mundial Antidoping (WADA) e da Autoridade Brasileira de Controle de Dopagem (ABCD), conforme detalhado no regulamento oficial ou exigido pela legislação aplicável." />
      <SectionTitle>CLÁUSULA 16ª – DO CÓDIGO DE CONDUTA, CREDENCIAIS E ACESSO</SectionTitle>
      <Clause text="16.1. O ATLETA, seu corner, staff e acompanhantes credenciados deverão respeitar as áreas de acesso restrito, a arbitragem, a mesa de controle, a equipe médica, a produção e os demais fluxos operacionais do evento." />
      <Clause text="16.2. É vedada interferência indevida na condução do evento, incluindo invasão de área técnica, contato não autorizado com árbitros, tumulto, agressão verbal ou física, ou descumprimento de ordem legítima da organização." />
      <Clause text="16.3. A ORGANIZADORA poderá advertir, suspender, retirar credenciais, restringir acesso, desclassificar ou excluir do evento quem violar este contrato ou o regulamento." />
      <Clause text="16.4. O ATLETA responde pelos atos praticados por pessoas por ele indicadas, autorizadas ou vinculadas ao seu ambiente de participação, na extensão permitida pela legislação aplicável." />
      <SectionTitle>CLÁUSULA 17ª – DA MÍDIA, ENTREVISTAS E AGENDA PROMOCIONAL</SectionTitle>
      <Clause text="17.1. O ATLETA compromete-se a comparecer às ações oficiais de mídia previamente comunicadas, incluindo fotos, gravações, entrevistas, coletiva, pesagem aberta, chamada de card, live, bastidores e ativações promocionais." />
      <Clause text="17.2. A ausência injustificada poderá acarretar advertência, retenção de valor, perda de bônus, descumprimento contratual ou outra penalidade prevista no regulamento." />
      <Clause text="17.3. A ORGANIZADORA poderá ajustar a agenda por razões de segurança, transmissão, logística, autoridade pública ou adequação técnica." />
      <Clause text="17.4. O ATLETA obriga-se a participar apenas das divulgações previamente autorizadas e a não divulgar, por conta própria, informações estratégicas do evento sem anuência da ORGANIZADORA, quando tais informações ainda não forem públicas." />
      <SectionTitle>CLÁUSULA 18ª – DA LICENÇA DE USO DE IMAGEM E DIREITO DE ARENA</SectionTitle>
      <Clause text="18.1. O ATLETA autoriza a captação, transmissão, retransmissão, gravação, reprodução e exploração audiovisual do combate realizado no âmbito do Evento FFC. Os direitos de arena e transmissão comercial da participação esportiva do ATLETA consideram-se remunerados pela Bolsa de Luta prevista no Anexo III, em caráter permanente." />
      <Clause text="18.2. O ATLETA concede licença não exclusiva para utilização de sua imagem, voz, nome, apelido esportivo e performance exclusivamente para fins institucionais, promocionais, jornalísticos, históricos e de divulgação das atividades do Projeto FFC." />
      <Clause text="18.3. A utilização da imagem do ATLETA em campanhas publicitárias de terceiros, ações de merchandising, licenciamento de produtos ou publicidade comercial específica dependerá de autorização adicional ou da previsão expressa no instrumento financeiro correspondente." />
      <Clause text="18.4. A licença institucional vigorará pelo prazo de 10 (dez) anos, e o uso comercial perdurará somente enquanto durar a campanha específica previamente acordada, ambas sem limitação territorial." />
      <Clause text="18.5. A ORGANIZADORA poderá realizar cortes, ajustes técnicos, legendagem, tradução, adaptação de formato, enquadramento e edição necessária à divulgação do conteúdo, vedada a manipulação que deturpe a imagem, honra, reputação ou contexto da participação do ATLETA." />
      <Clause text="18.6. A revogação da licença em casos excepcionais não produzirá efeitos retroativos nem obrigará a retirada de conteúdos já produzidos, distribuídos ou publicados legitimamente. Fica vedada a revogação para vídeos da luta, transmissões e registros históricos." />
      <Clause text="18.7. As licenças previstas nesta cláusula poderão ser transferidas à futura pessoa jurídica sucessora do Projeto FFC, desde que mantidas as mesmas finalidades e limites aqui estabelecidos." />
      <Clause text="18.8. A imagem do ATLETA não poderá ser utilizada para associá-lo a causas políticas, religiosas, ideológicas, ilícitas ou estranhas às atividades do Projeto FFC sem autorização específica." />
      <SectionTitle>CLÁUSULA 19ª – DA CONFIDENCIALIDADE</SectionTitle>
      <Clause text="19.1. O ATLETA obriga-se a manter sigilo sobre informações não divulgadas oficialmente, incluindo valores de bolsa, termos comerciais, estratégia de card, bastidores, documentos internos, contatos operacionais, dados técnicos e informações sensíveis do evento." />
      <Clause text="19.2. O dever de confidencialidade permanece antes, durante e após o evento, pelo prazo de 5 (cinco) anos ou enquanto a informação não se tornar pública por meio legítimo." />
      <Clause text="19.3. A violação da confidencialidade autoriza multa contratual, indenização por perdas e danos e demais medidas cabíveis." />
      <Clause text="19.4. O sigilo não se aplica a informações cuja divulgação seja exigida por lei, ordem judicial ou autoridade competente, hipótese em que a parte obrigada deverá, sempre que possível, comunicar previamente a ORGANIZADORA." />
      <SectionTitle>CLÁUSULA 20ª – DA PROTEÇÃO DE DADOS PESSOAIS</SectionTitle>
      <Clause text="20.1. A ORGANIZADORA poderá tratar dados pessoais do ATLETA para inscrição, credenciamento, comunicação, organização, segurança, prevenção à fraude, atendimento médico, pagamento, prestação de contas e cumprimento de obrigações legais ou regulatórias, em estrita observância à Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)." />
      <Clause text="20.2. Poderão ser tratados, quando necessário, dados cadastrais, documentos, imagem, voz, informações esportivas, dados de localização operacional, dados de contato e dados sensíveis (saúde e biometria). O tratamento de dados sensíveis possui como base legal a execução deste contrato e a proteção da vida e incolumidade física do ATLETA." />
      <Clause text="20.3. A ORGANIZADORA adotará medidas de segurança, controle de acesso, retenção e descarte compatíveis com a natureza dos dados tratados." />
      <Clause text="20.4. O ATLETA poderá exercer os direitos previstos na legislação aplicável por meio dos canais oficiais informados pela ORGANIZADORA." />
      <Clause text="20.5. A organização manterá, em política específica, as informações sobre finalidade, base legal, compartilhamento, retenção e canal de atendimento do titular, observada a legislação de proteção de dados." />
      <SectionTitle>CLÁUSULA 21ª – DA REMUNERAÇÃO, BOLSA E PREMIAÇÃO</SectionTitle>
      <Clause text="21.1. O ATLETA fará jus exclusivamente ao pagamento da Bolsa de Luta, cujo valor exato, forma de pagamento, prazo de liberação e incidência de taxas estarão previamente definidos no Anexo III." />
      <Clause text="21.2. O valor bruto, forma de pagamento, prazo de liberação, incidência de taxas, descontos legais, retenções permitidas e condições de pagamento deverão estar claramente definidos antes do evento." />
      <Clause text="21.3. A bolsa não se confunde com participação societária, distribuição de lucro, dividendo ou remuneração de natureza empresarial." />
      <Clause text="21.4. A premiação geral e variável do evento por desempenho, como bônus de luta ou vitória, será disciplinada exclusivamente no Documento Financeiro Específico do Evento, não integrando os valores fixos garantidos neste contrato." />
      <Clause text="21.5. A Bolsa de Luta somente se refere aos valores contratados em favor do ATLETA convidado, não se presumindo qualquer outra vantagem financeira não prevista de forma expressa." />
      <SectionTitle>CLÁUSULA 22ª – DAS CONDIÇÕES PARA PAGAMENTO</SectionTitle>
      <Clause text="22.1. O pagamento somente será considerado devido após a confirmação das condições contratadas, do comparecimento exigido e da validação documental correspondente." />
      <Clause text="22.2. Em caso de inaptidão por culpa do ATLETA, abandono injustificado, fraude, ausência sem justificativa idônea ou descumprimento grave das obrigações assumidas, a ORGANIZADORA poderá reter total ou parcialmente valores ainda não pagos. Eventuais multas contratuais e retenções ficam limitadas ao teto máximo de 100% (cem por cento) do valor da Bolsa de Luta do ATLETA, aplicadas de forma proporcional à gravidade da infração, em observância ao Código Civil." />
      <Clause text="22.3. Eventuais reembolsos, devoluções ou compensações somente ocorrerão nas hipóteses previstas neste contrato, no regulamento ou por determinação legal." />
      <Clause text="22.4. A definição de valores para bolsa, ajuda de custo, reembolso ou bonificação deverá constar em tabela anexa, assinada ou aceita eletronicamente pelo ATLETA." />
      <Clause text="22.5. Quando houver pagamento em etapas, o cronograma de liberação deverá constar em anexo ou comunicado específico." />
      <SectionTitle>CLÁUSULA 23ª – DA LOGÍSTICA, TRANSPORTE, HOSPEDAGEM E ALIMENTAÇÃO</SectionTitle>
      <Clause text="23.1. A ORGANIZADORA fornecerá ao ATLETA os serviços essenciais de transporte, hospedagem e alimentação, cujas condições, limites e padrões estarão detalhados no Anexo III deste instrumento." />
      <Clause text="23.2. Despesas pessoais não expressamente assumidas pela ORGANIZADORA correrão por conta do ATLETA, inclusive deslocamentos extras, consumos adicionais, acompanhante não credenciado, suplementação, material esportivo e gastos fora do pacote contratado." />
      <Clause text="23.3. O ATLETA compromete-se a respeitar as regras de hotel, transporte, horários, segurança e uso dos espaços disponibilizados." />
      <Clause text="23.4. Havendo apoio logístico, o descumprimento das regras de uso poderá gerar cobrança de danos e despesas diretamente imputáveis ao responsável." />
      <Clause text="23.5. As condições mínimas de transporte, hospedagem e alimentação deverão ser compatíveis com a finalidade do evento e descritas de forma objetiva no Anexo III ou em documento equivalente." />
      <SectionTitle>CLÁUSULA 24ª – DOS UNIFORMES, PATROCÍNIO E EXCLUSIVIDADE VISUAL</SectionTitle>
      <Clause text="24.1. O ATLETA deverá observar as regras de uniforme, branding, patrocinadores, marcas, kimonos, shorts, rash guards, faixas, luvas e demais itens visuais eventualmente definidos pela ORGANIZADORA." />
      <Clause text="24.2. É vedada a veiculação de publicidade ou marca não autorizada nos espaços, vídeos, uniformes ou materiais do evento, quando tal restrição estiver prevista no regulamento ou em anexo." />
      <Clause text="24.3. O ATLETA é responsável por obter as autorizações necessárias junto a seus patrocinadores pessoais, se houver conflito com as marcas do evento." />
      <Clause text="24.4. A ORGANIZADORA poderá aprovar, reprovar ou restringir marcas e peças por critério de padronização visual, segurança, transmissão e integridade comercial do evento." />
      <SectionTitle>CLÁUSULA 25ª – DA RESCISÃO, DESISTÊNCIA E NÃO COMPARECIMENTO</SectionTitle>
      <Clause text="25.1. O ATLETA poderá desistir do contrato por comunicação formal, mas a desistência após a confirmação do convite poderá acarretar perda total ou parcial de valores, bônus ou benefícios, conforme a fase em que ocorrer e o regulamento aplicável." />
      <Clause text="25.2. O não comparecimento injustificado ao evento, pesagem, entrevista, compromisso promocional ou combate poderá ensejar penalidade, inclusive multa contratual, retenção proporcional, desclassificação e impedimento de convites futuros." />
      <Clause text="25.3. A desistência por motivo médico idôneo, caso fortuito, força maior ou fato imputável à ORGANIZADORA deverá ser tratada de forma proporcional e documentada." />
      <Clause text="25.4. Qualquer multa ou retenção deverá ser objetiva, previamente informada e compatível com a boa-fé contratual." />
      <Clause text="25.5. Sempre que houver retenção de valores, a ORGANIZADORA deverá apresentar justificativa mínima e memória de cálculo ou critério contratual correspondente, quando aplicável." />
      <SectionTitle>CLÁUSULA 26ª – DO CASO FORTUITO E DA FORÇA MAIOR</SectionTitle>
      <Clause text="26.1. Nenhuma das partes será responsabilizada por atraso, adiamento, interrupção, remarcação ou cancelamento do evento em razão de caso fortuito ou força maior, incluindo, sem limitação, eventos climáticos severos, pane estrutural, falta de energia, interdição do local, ordem de autoridade pública, greve, risco coletivo ou evento imprevisível e inevitável." />
      <Clause text="26.2. Nessas hipóteses, a ORGANIZADORA poderá remarcar, reestruturar ou cancelar o evento, comunicando os participantes por canal oficial." />
      <Clause text="26.3. A destinação de pagamentos, remarcações e reaproveitamento de vagas seguirá o regulamento específico ou comunicado oficial aplicável." />
      <SectionTitle>CLÁUSULA 27ª – DA RESPONSABILIDADE CIVIL</SectionTitle>
      <Clause text="27.1. Cada parte responderá pelos danos que causar à outra ou a terceiros, inclusive por ato ilícito, fraude, dolo, culpa, descumprimento contratual ou violação de dever legal." />
      <Clause text="27.2. O ATLETA responderá por danos causados à estrutura, ao patrimônio, à imagem da ORGANIZADORA, a outros participantes ou a terceiros, quando decorrentes de sua conduta dolosa ou culposa." />
      <Clause text="27.3. A ORGANIZADORA responderá pelos danos que lhe forem juridicamente imputáveis, observados os limites legais." />
      <Clause text="27.4. A exclusão ou limitação de responsabilidade prevista neste contrato não se aplica a dolo, fraude, violação legal, descumprimento grave de deveres de segurança ou hipóteses em que a lei proíba a limitação." />
      <SectionTitle>CLÁUSULA 28ª – DA SEGURANÇA DA INFORMAÇÃO E DAS COMUNICAÇÕES OFICIAIS</SectionTitle>
      <Clause text="28.1. As comunicações oficiais poderão ser realizadas por e-mail, aplicativo de mensagem, site, plataforma digital, portal do evento ou outro canal formalmente indicado pela ORGANIZADORA." />
      <Clause text="28.2. O ATLETA compromete-se a manter seus contatos atualizados e a verificar regularmente os canais oficiais." />
      <Clause text="28.3. A ORGANIZADORA não responderá por falhas decorrentes de mau uso de credenciais, perda de senha, aparelho comprometido, conexão instável do usuário ou informação incorreta prestada pelo ATLETA." />
      <Clause text="28.4. Em caso de indício de fraude, invasão, uso irregular ou risco à integridade do sistema, a ORGANIZADORA poderá suspender preventivamente o acesso até apuração." />
      <Clause text="28.5. Sempre que houver comunicação eletrônica relevante, a ORGANIZADORA deverá manter evidência mínima de envio, recebimento ou disponibilização, conforme o meio utilizado." />
      <SectionTitle>CLÁUSULA 29ª – DA INTEGRIDADE, CONDUTA E PENALIDADES</SectionTitle>
      <Clause text="29.1. Sem prejuízo das demais cláusulas, a violação de deveres de conduta, integridade esportiva, confidencialidade, imagem, pesagem, mídia ou regulamento poderá ensejar advertência, multa, desclassificação, retenção de valores, perda de bônus, exclusão do card e impedimento de participação futura, conforme gravidade e previsão regulamentar." />
      <Clause text="29.2. As penalidades deverão observar proporcionalidade, motivação mínima e coerência com a natureza da infração." />
      <Clause text="29.3. A aplicação de penalidade deverá ser registrada por escrito, ainda que em sistema interno ou comunicação formal, com indicação objetiva da conduta, da consequência e do fundamento contratual." />
      <SectionTitle>CLÁUSULA 30ª – DA CESSÃO E TRANSFERÊNCIA</SectionTitle>
      <Clause text="30.1. O ATLETA não poderá ceder ou transferir seus direitos e obrigações sem anuência expressa da ORGANIZADORA." />
      <Clause text="30.2. A ORGANIZADORA poderá ceder a operação, a produção, a transmissão, a gestão ou a exploração do evento a parceiros ou terceiros, desde que preservados os direitos contratualmente assumidos e as autorizações necessárias." />
      <SectionTitle>CLÁUSULA 31ª – DA SOLUÇÃO DE CONTROVÉRSIAS</SectionTitle>
      <Clause text="31.1. As partes envidarão esforços para solucionar divergências de forma amigável antes da adoção de medidas formais." />
      <Clause text="31.2. Controvérsias patrimoniais disponíveis poderão ser submetidas à arbitragem somente mediante convenção válida e, quando exigido, em instrumento apartado com assinatura específica do ATLETA, observada a legislação aplicável." />
      <Clause text="31.3. Na ausência de convenção arbitral válida, fica eleito o foro previsto na cláusula seguinte." />
      <Clause text="31.4. A cláusula compromissória arbitral, quando adotada, deverá constar em termo próprio, com manifestação específica e destacada do ATLETA, especialmente se o instrumento for de adesão." />
      <SectionTitle>CLÁUSULA 32ª – DO FORO</SectionTitle>
      <Clause text="32.1. Fica eleito o foro da Comarca de Maricá, Estado do Rio de Janeiro, para dirimir quaisquer controvérsias oriundas deste contrato, com renúncia a qualquer outro, por mais privilegiado que seja, salvo disposição legal específica em sentido diverso." />
      <SectionTitle>CLÁUSULA 33ª – DO REGISTRO, AUDITORIA E RASTREABILIDADE</SectionTitle>
      <Clause text="33.1. A ORGANIZADORA manterá, sempre que possível, registro interno das versões deste contrato, dos anexos e dos aceites eletrônicos ou físicos realizados pelo ATLETA." />
      <Clause text="33.2. As comunicações relevantes deverão ser arquivadas em meio idôneo, com data, hora e identificação mínima da parte emissora, para fins de prova e auditoria." />
      <Clause text="33.3. O ATLETA concorda com a utilização de assinatura eletrônica simples, avançada ou qualificada, conforme o nível de risco do ato e a política interna da ORGANIZADORA." />
      <SectionTitle>CLÁUSULA 34ª – DA PRESTAÇÃO DE CONTAS E SEGREGAÇÃO FINANCEIRA</SectionTitle>
      <Clause text="34.1. A ORGANIZADORA manterá os valores vinculados ao Projeto FFC segregados contabilmente, quando aplicável, em centro de custo próprio ou mecanismo equivalente." />
      <Clause text="34.2. As receitas, despesas, pagamentos, reembolsos e retenções vinculados ao ATLETA convidado deverão poder ser conciliados internamente, na forma da governança do Projeto FFC." />
      <Clause text="34.3. A prestação de contas do projeto, quando exigível, observará os documentos, o regulamento e a legislação aplicável à entidade sem fins econômicos." />
      <SectionTitle>CLÁUSULA 35ª – DA INTEGRIDADE INSTITUCIONAL E CONFLITO DE INTERESSES</SectionTitle>
      <Clause text="35.1. Qualquer conflito de interesse real ou potencial deverá ser comunicado à ORGANIZADORA tão logo identificado." />
      <Clause text="35.2. A pessoa envolvida em conflito de interesses deverá se abster de participar de deliberações sobre o tema, quando aplicável." />
      <Clause text="35.3. A ORGANIZADORA poderá adotar políticas internas de integridade, canal de denúncias e apuração de ocorrências, compatíveis com o porte do Projeto FFC." />
      <SectionTitle>CLÁUSULA 36ª – DA MUDANÇA DE CATEGORIA, DATA OU FORMATO</SectionTitle>
      <Clause text="36.1. A ORGANIZADORA poderá, por motivo técnico ou operacional, ajustar categoria, adversário, formato de confronto, ordem de lutas, data de pesagem ou programação do evento." />
      <Clause text="36.2. Alterações dessa natureza, quando devidamente justificadas e comunicadas, não configuram, por si só, inadimplemento contratual." />
      <Clause text="36.3. Caso a alteração inviabilize substancialmente a utilidade do convite, as partes negociarão de boa-fé a manutenção ou a rescisão do vínculo, conforme o caso." />
      <SectionTitle>CLÁUSULA 37ª – DA MIGRAÇÃO FUTURA PARA NOVA PESSOA JURÍDICA</SectionTitle>
      <Clause text="37.1. As partes reconhecem que, encerrada a fase sandbox e mediante aprovação institucional, o Projeto FFC poderá ser transferido, total ou parcialmente, para nova pessoa jurídica, associação, empresa ou estrutura jurídica compatível com a legislação brasileira." />
      <Clause text="37.2. Em caso de migração, os contratos, base de dados, marca, identidade visual, aplicativo, conteúdos, direitos de imagem e obrigações operacionais poderão ser objeto de cessão, transferência, sucessão, licenciamento ou novo instrumento, conforme a lei e os consentimentos necessários." />
      <Clause text="37.3. Até a formalização da nova pessoa jurídica, a ASPPIBRA permanecerá como responsável institucional, administrativa e contratual pelo projeto, na extensão prevista neste instrumento." />
      <SectionTitle>CLÁUSULA 38ª – DA CESSÃO DE DIREITOS E LIMITES</SectionTitle>
      <Clause text="38.1. O ATLETA não poderá ceder ou transferir direitos decorrentes deste contrato sem autorização expressa da ORGANIZADORA." />
      <Clause text="38.2. A ORGANIZADORA poderá ceder a operação, a produção, a transmissão ou a gestão do evento a parceiros, patrocinadores ou terceiros, desde que preservados os direitos contratualmente assumidos." />
      <SectionTitle>CLÁUSULA 39ª – DAS DISPOSIÇÕES SOBRE ANEXOS</SectionTitle>
      <Clause text="39.1. Os anexos integram este contrato e possuem a mesma força obrigacional do instrumento principal, quando assinados ou aceitos eletronicamente." />
      <Clause text="39.2. A ausência de assinatura em anexo essencial poderá impedir a eficácia da participação do ATLETA até regularização." />
      <Clause text="39.3. O Anexo III, especialmente, deverá conter a disciplina financeira do atleta convidado, incluindo Bolsa de Luta, ajuda logística, transporte, hospedagem e alimentação, sem prejuízo do Documento Financeiro Específico do Evento para premiações gerais." />
      <SectionTitle>CLÁUSULA 40ª – DA INTERPRETAÇÃO E DA BOA-FÉ</SectionTitle>
      <Clause text="40.1. Este contrato será interpretado de maneira sistemática, buscando preservar sua finalidade, a boa-fé objetiva, o equilíbrio contratual e a viabilidade do evento." />
      <Clause text="40.2. As cláusulas deverão ser compreendidas em conjunto, evitando interpretações que esvaziem o objeto principal do convite ou tornem inexequível a operação do evento." />
      <SectionTitle>CLÁUSULA 41ª – DA INTEGRALIDADE, TOLERÂNCIA E NULIDADE PARCIAL</SectionTitle>
      <Clause text="41.1. O presente contrato representa a totalidade do entendimento entre as partes sobre o objeto aqui regulado." />
      <Clause text="41.2. A eventual tolerância de uma parte em relação à outra não importará novação, renúncia, perdão ou alteração tácita de cláusula." />
      <Clause text="41.3. A eventual nulidade de qualquer disposição não invalidará as demais, que permanecerão plenamente eficazes." />
      <SectionTitle>CLÁUSULA 42ª – DAS COMUNICAÇÕES OFICIAIS</SectionTitle>
      <Clause text="42.1. As notificações, convocações, alterações de card, ajustes de cronograma, pedidos de documento, comunicados de pesagem e demais informações oficiais serão feitas por e-mail, WhatsApp oficial, app, site ou outro canal definido pela ORGANIZADORA." />
      <Clause text="42.2. As mensagens enviadas ao contato informado pelo ATLETA serão consideradas válidas, salvo prova de falha técnica relevante." />
      <Clause text="42.3. O ATLETA compromete-se a manter seus dados de contato sempre atualizados." />
      <SectionTitle>CLÁUSULA 43ª – DO SUPORTE NORMATIVO E COMPATIBILIDADE LEGAL</SectionTitle>
      <Clause text="43.1. O presente contrato deverá ser executado em conformidade com a legislação civil, de proteção de dados, de arbitragem, de organização associativa sem fins econômicos e demais normas aplicáveis às atividades do Projeto FFC." />
      <Clause text="43.2. A aplicação de regras internas, políticas, anexos e regulamentos da ORGANIZADORA não poderá contrariar a legislação vigente." />
      <SectionTitle>CLÁUSULA 44ª – DAS DISPOSIÇÕES FINAIS</SectionTitle>
      <Clause text="44.1. Este instrumento poderá ser assinado fisicamente ou por meio eletrônico/digital, total ou parcialmente, produzindo os mesmos efeitos jurídicos admitidos em lei." />
      <Clause text="44.2. As partes declaram que leram, compreenderam e aceitaram todas as cláusulas, anexos e documentos correlatos." />
      <Clause text="44.3. A eventual tolerância de uma parte não implicará novação, renúncia ou alteração tácita de cláusula." />
      <Clause text="44.4. A eventual nulidade de qualquer disposição não invalidará as demais, que permanecerão plenamente eficazes." />
      <Clause text="44.5. O presente instrumento representa a totalidade do entendimento e deve ser lido em conjunto com seus anexos, que integram a relação contratual para todos os fins." />
      <Clause text="44.6. A assinatura eletrônica, quando utilizada, deverá ser preservada com trilha de auditoria, data, hora e identificação mínima do signatário, conforme o nível de risco do ato." />
      <Clause text="44.7. Este contrato é firmado em meio digital validado, para que produza seus jurídicos e legais efeitos." />

      <SectionTitle>ANEXOS INTEGRANTES</SectionTitle>
      <ABNTText>
        Integram este contrato, para todos os fins:
      </ABNTText>
      <ABNTText indent={false}><strong>Anexo I</strong> – Convite formal e identificação do atleta convidado;</ABNTText>
      <ABNTText indent={false}><strong>Anexo II</strong> – Regulamento oficial do evento;</ABNTText>
      <ABNTText indent={false}><strong>Anexo III</strong> – Tabela de Bolsa de Luta, ajuda logística, transporte, hospedagem e alimentação;</ABNTText>
      <ABNTText indent={false}><strong>Anexo IV</strong> – Termo de saúde, aptidão física e declaração de risco;</ABNTText>
      <ABNTText indent={false}><strong>Anexo V</strong> – Termo de autorização de imagem, voz, nome e performance;</ABNTText>
      <ABNTText indent={false}><strong>Anexo VI</strong> – Termo de uso de comunicações e meios digitais;</ABNTText>
      <ABNTText indent={false}><strong>Anexo VII</strong> – Regras de pesagem, categoria e penalidades;</ABNTText>
      <ABNTText indent={false}><strong>Anexo VIII</strong> – Política de privacidade e proteção de dados;</ABNTText>
      <ABNTText indent={false}><strong>Anexo IX</strong> – Política de confidencialidade e integridade esportiva;</ABNTText>
      <ABNTText indent={false}><strong>Anexo X</strong> – Matriz de responsabilidades e plano logístico;</ABNTText>
      <ABNTText indent={false}><strong>Anexo XI</strong> – Termo específico de arbitragem, se adotado;</ABNTText>
      <ABNTText indent={false}><strong>Anexo XII</strong> – Documento Financeiro Específico do Evento, se houver premiações gerais.</ABNTText>

      <SectionTitle>ASSINATURAS E VALIDAÇÃO DIGITAL</SectionTitle>
      <DigitalSignature title="ASSINATURA DIGITAL - ASPPIBRA" name="Assinatura eletrônica do Representante Legal" color="success" />
      <DigitalSignature title="ASSINATURA DIGITAL - ATLETA" name="Assinatura eletrônica autenticada via Plataforma FFC" color="info" />
    </>
  );
}
