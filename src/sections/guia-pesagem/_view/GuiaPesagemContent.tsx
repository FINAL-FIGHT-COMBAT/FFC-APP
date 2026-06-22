import { Clause, ABNTText, SectionTitle, DocumentTitle } from 'src/components/abnt-document';

export function GuiaPesagemContent() {
  return (
    <>
      <DocumentTitle>GUIA OFICIAL DE PESAGEM E ELEGIBILIDADE TÉCNICA</DocumentTitle>
      <DocumentTitle>FINAL FIGHT COMBAT (FFC)</DocumentTitle>
      <ABNTText>
        O presente Guia de Pesagem Oficial estabelece os protocolos técnicos, logísticos, sanitários
        e de vestimenta obrigatórios para o processo de aferição de peso do evento FFC. A
        inobservância destas regras importará sanções imediatas que incluem a perda da vaga por
        W.O., eliminação sistêmica e o cancelamento das obrigações contratuais assumidas pela
        Organização.
      </ABNTText>

      <SectionTitle>CAPÍTULO I: PROTOCOLO DA PESAGEM OFICIAL</SectionTitle>
      <Clause text="1.1. JANELA DE TEMPO E PRAZOS: O processo de aferição oficial ocorrerá única e exclusivamente dentro dos horários estipulados no cronograma do aplicativo. Não haverá pesagens em horários isolados ou após o fechamento da balança. O atleta que não se apresentar no horário de sua chamada estará sumariamente desclassificado." />
      <Clause text="1.2. FLUXO E TENTATIVAS NA BALANÇA: O atleta terá direito a uma aferição inicial. Caso falhe na primeira tentativa, disporá do restante do tempo regulamentar da sessão de pesagem oficial, cuja duração máxima e inegociável é de 01 (uma) hora, para tentar uma nova aferição. São vedadas manobras de apoio estrutural, segurar em equipamentos ou qualquer manipulação física que interfira no sensor de carga." />
      <Clause text="1.3. CRITÉRIO DE ARREDONDAMENTO: A aferição eletrônica considerará exclusivamente a primeira casa decimal (100 gramas). Qualquer valor numérico das casas decimais subsequentes será desconsiderado sumariamente. Por exemplo: o registro de 57,09 kg será cravado oficialmente como 57,0 kg." />
      <Clause text="1.4. IDENTIFICAÇÃO OBRIGATÓRIA: É terminantemente proibido subir à balança sem documentação válida. A identidade do atleta deverá ser comprovada mediante apresentação de documento oficial (físico ou digital com fé pública) contendo foto atualizada, ou por meio do credenciamento validado no app FFC." />

      <SectionTitle>CAPÍTULO II: VESTIMENTA E NUDEZ ESPORTIVA</SectionTitle>
      <Clause text="2.1. TRAJE DE PESAGEM MASCULINO E FEMININO: O atleta deverá comparecer à balança trajando vestimentas leves, sendo obrigatório o uso de bermuda, shorts de combate ou rashguard. É absolutamente proibida a aferição com calçados, luvas, bandagens, óculos, bonés, joias, relógios ou equipamentos de proteção." />
      <Clause text="2.2. PROTEÇÃO LEGAL A MENORES DE IDADE (ECA): Em estrito cumprimento ao Estatuto da Criança e do Adolescente, é absolutamente proibida a pesagem de qualquer atleta menor de 18 (dezoito) anos sem os trajes mínimos de combate (rashguard e shorts). Como mecanismo de justiça desportiva, aos menores será concedida tolerância automática e inegociável de 200g (duzentas gramas) acima do limite teto de sua divisão, compensando exclusivamente o peso da roupa obrigatória." />
      <Clause text="2.3. PESAGEM NU (ATLETAS ADULTOS): Exclusivamente para atletas maiores de 18 (dezoito) anos que falhem na aferição inicial com roupa, será permitida, a critério do comitê oficial e em ambiente reservado ou com anteparo (toalha/biombo), a pesagem sem vestimentas íntimas para atingir o limite numérico exato da categoria." />

      <SectionTitle>CAPÍTULO III: PESAGEM POR EQUIPES E ACADEMIAS (SELETIVAS)</SectionTitle>
      <Clause text="3.1. APRESENTAÇÃO EM BLOCO COLETIVO: Nas fases de seletivas, delegações formadas por associações ou academias devem se apresentar à zona de controle de pesagem em bloco conjunto, respeitando a ordem da súmula eletrônica." />
      <Clause text="3.2. VALIDAÇÃO MULTICATEGORIA (INSCRIÇÕES DUPLAS): O atleta legalmente inscrito para competir em mais de uma classe (ex: Juvenil e Adulto na mesma data) realizará apenas uma única pesagem oficial, cujo resultado numérico validará sistemicamente seu enquadramento em todas as chaves previamente requeridas." />

      <SectionTitle>CAPÍTULO IV: INSPEÇÃO DE SAÚDE E UNIFORMES (PRÉ-BALANÇA)</SectionTitle>
      <Clause text="4.1. CHECAGEM FÍSICA DE COMBATE: A coordenação de arbitragem promoverá a checagem obrigatória das unhas das mãos e dos pés, que deverão estar curtas e aparadas. Cabelos longos deverão obrigatoriamente permanecer presos durante o processo." />
      <Clause text="4.2. TRIAGEM DERMATOLÓGICA: O fiscal de balança inspecionará preventivamente a pele dos competidores. Na suspeita de patologias dermatológicas ativas (infecções, micoses severas, estafilococos), o atleta será retido e dependerá de liberação expressa da equipe médica do evento. Lesões não contagiosas pré-existentes devem ser acobertadas por atestado médico emitido e validado com antecedência." />

      <SectionTitle>CAPÍTULO V: PESAGEM ALEATÓRIA (DAY-OF-FIGHT)</SectionTitle>
      <Clause text="5.1. SORTEIO AUTOMATIZADO: Em eventos com pesagem oficial realizada no dia anterior à luta, a Organização poderá realizar, no dia do evento, sorteio via sistema para selecionar 2 (dois) a 4 (quatro) atletas por categoria para a Pesagem Aleatória de Controle (Day-of-Fight)." />
      <Clause text="5.2. MARGEM DE TOLERÂNCIA (5%): O atleta sorteado não poderá exceder a margem máxima de 5% (cinco por cento) de rebote hídrico e alimentar sobre o limite máximo oficial de sua categoria." />
      <Clause text="5.3. JANELA DE AFERIÇÃO E DESCLASSIFICAÇÃO: O sorteado disporá de uma janela estrita de 30 (trinta) minutos, iniciada imediatamente após o sorteio, para se apresentar à balança. O não comparecimento à chamada dentro deste limite, ou a falha na confirmação do peso com a tolerância de 5%, gerará exclusão imediata via sistema, vetando sua participação no combate." />

      <SectionTitle>CAPÍTULO VI: PENALIDADES POR FALHA DE PESO</SectionTitle>
      <Clause text="6.1. ESTOURO DE PESO NA PESAGEM OFICIAL: A falha definitiva no enquadramento de categoria dentro da janela de 1 hora acarretará desclassificação sumária, vitória por W.O. do oponente e perda das garantias contratuais de Bolsa de Luta. Excepcionam-se exclusivamente as classes infantis e juvenis, que poderão ser remanejadas extraordinariamente de chave, ficando tal manobra estritamente condicionada ao pagamento de uma nova taxa de inscrição para cobrir o retrabalho logístico do sistema." />
      <Clause text="6.2. ESTOURO DE PESO NA PESAGEM ALEATÓRIA (DAY-OF-FIGHT): A falha técnica no limite de 5% da pesagem surpresa ensejará eliminação irreversível. Esta hipótese não admite remanejamento de chaves ou recursos à mesa diretora, blindando a integridade física do adversário e a isonomia técnica do card." />

      <br />
      <br />
    </>
  );
}
