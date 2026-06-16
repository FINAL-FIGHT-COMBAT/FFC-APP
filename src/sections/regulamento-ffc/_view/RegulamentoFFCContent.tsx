import {
  Clause,
  ABNTText,
  SectionTitle,
  DocumentTitle,
} from 'src/components/abnt-document';

export function RegulamentoFFCContent() {
  return (
    <>
      <DocumentTitle>
        REGULAMENTO OFICIAL E DIRETRIZES TÉCNICAS
      </DocumentTitle>
      <DocumentTitle>
        FFC GRAPPLING (JUDÔ VS. JIU-JITSU)
      </DocumentTitle>
      <ABNTText>
        O presente Regulamento Oficial estabelece as diretrizes técnicas, desportivas e disciplinares que regerão as competições no âmbito do Projeto Final Fight Combat (FFC). Este documento é de leitura e cumprimento obrigatórios por parte de todos os atletas, córneres, técnicos e membros da equipe de arbitragem.
      </ABNTText>

      <SectionTitle>CAPÍTULO I: DISPOSIÇÕES GERAIS E OBJETO</SectionTitle>
      <Clause text="1.1. ESCOPO DO TORNEIO: O FFC Grappling caracteriza-se pelo confronto 'Estilo contra Estilo', focando exclusivamente na técnica de luta agarrada. É terminantemente proibida a aplicação de golpes traumáticos (striking/impactos), sob pena de desclassificação imediata." />
      <Clause text="1.2. CÓDIGO DE ÉTICA E FAIR PLAY: Exige-se conduta moral irrepreensível, respeito e desportividade de todos os atletas, córneres e delegações. Ameaças, agressões verbais ou qualquer conduta antidesportiva direcionada a oponentes, árbitros ou público resultarão em punição que pode variar de advertência à expulsão do evento." />
      <Clause text="1.3. UNIFORME OFICIAL (GI / KIMONO):" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>1.3.1.</strong> O kimono deve ser confeccionado em algodão, em bom estado de conservação, nas cores oficiais permitidas pela organização (branco, azul ou preto). Patches de patrocinadores são permitidos desde que não afetem a integridade física do oponente ou a aplicação de pegadas.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>1.3.2.</strong> As medições de lapela, manga e calça poderão ser verificadas pelo instrumento oficial (Sokuteiki) ou pelo avaliador de kimonos antes da entrada na área de combate. Kimonos fora do padrão exigirão substituição imediata.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>1.3.3.</strong> É obrigatório o uso de camisa elástica colada ao corpo (rashguard) por baixo do kimono para atletas femininas. Para atletas masculinos, o uso de rashguard por baixo do kimono é opcional, a menos que determinado de forma diversa pelo edital específico da etapa.
      </ABNTText>

      <SectionTitle>CAPÍTULO II: INSCRIÇÕES, CATEGORIAS DE PESO E PESAGEM</SectionTitle>
      <Clause text="2.1. DIVISÕES E CATEGORIAS: O cruzamento das tabelas de peso e classes de idade será gerenciado pelo aplicativo oficial do evento, onde o atleta deverá conferir rigorosamente sua divisão de peso antes do combate." />
      <Clause text="2.2. PROTOCOLO DE PESAGEM OFICIAL:" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>2.2.1.</strong> Os atletas deverão comparecer no local e horários designados. É estritamente proibida a pesagem de atletas menores de idade sem as vestimentas mínimas exigidas por lei (roupas íntimas/sunga/biquíni não configuram nudez esportiva permitida em espaços abertos sem proteção legal).
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>2.2.2.</strong> Haverá tolerância de peso conforme a categoria divulgada. A falha técnica no enquadramento de peso na balança acarretará em punições disciplinares ou desclassificação (W.O.), a critério da direção do evento.
      </ABNTText>
      <Clause text="2.3. PESAGEM ALEATÓRIA (DAY-OF-FIGHT): A organização reserva-se o direito de sortear atletas para pesagem de controle no dia da luta, com uma margem de tolerância máxima de 5% sobre o peso da categoria. O descumprimento gera desclassificação automatizada pelo sistema." />

      <SectionTitle>CAPÍTULO III: DINÂMICA E FORMATO DO COMBATE</SectionTitle>
      <Clause text="3.1. DURAÇÃO DO COMBATE: A luta ocorrerá em round único. O tempo regulamentar será determinado conforme a fase da seletiva ou do card principal (e.g., 5, 6, 8 ou 10 minutos), conforme divulgado no Anexo Esportivo." />
      <Clause text="3.2. ÁREAS DO TATAME: O tatame será dividido visualmente em três áreas: (i) Área de Combate (interna), (ii) Zona de Passividade ou Alerta (borda colorida indicando o limite de evasão) e (iii) Área de Segurança." />
      <Clause text="3.3. PROTOCOLO DE SAÍDA DE ÁREA (OUT OF BOUNDS):" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.3.1.</strong> O árbitro interromperá a luta caso mais de 50% do corpo dos atletas saia da Área de Combate. As posições consolidadas ou de finalização iminente perto da borda seguirão a regra de arrasto para o centro ou reinício na mesma posição, a critério técnico.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.3.2.</strong> Fleeing the Mat: A fuga deliberada da área de combate para evitar pontuação adversária ou fugir de finalização será severamente punida, podendo acarretar pontuação automática para o adversário ou desclassificação direta do fujão.
      </ABNTText>
      <Clause text="3.4. POSIÇÕES OFICIAIS DE REINÍCIO (RESTARTS NO CENTRO):" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.4.1.</strong> Reinício Neutro: A luta retorna de pé, ao centro, caso os atletas saiam sem posição de domínio estabelecida.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.4.2.</strong> Reinício nas Guardas: As guardas (Aberta, Fechada, Meia-Guarda) estabilizadas serão reiniciadas na mesma configuração exata no centro do tatame.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>3.4.3.</strong> Reinício em Controle Dominante: Imobilizações Laterais, Montada e Pegada de Costas serão arrastadas ou reposicionadas com exatidão técnica sob comando do Árbitro Central.
      </ABNTText>

      <SectionTitle>CAPÍTULO IV: SISTEMA DE PONTUAÇÃO HÍBRIDO</SectionTitle>
      <Clause text="4.1. A REGRA DOS 3 SEGUNDOS: Nenhum ponto será computado no placar eletrônico antes que o atleta dominante consolide e estabilize a posição por, no mínimo, 3 (três) segundos contínuos e irrefutáveis." />
      <Clause text="4.2. PONTUAÇÃO DE QUEDAS (TAKEDOWNS):" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>4.2.1.</strong> Quedas simples ou raspagens que resultem em transição direta para a dominância concederão 2 (dois) pontos.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>4.2.2.</strong> Projeções de Alta Amplitude e quedas de alta complexidade que aterrissem o oponente de costas no chão de forma clara e contundente concederão 3 (três) pontos.
      </ABNTText>
      <Clause text="4.3. PONTUAÇÃO DE SOLO E TRANSIÇÕES: O sistema recompensará o domínio no solo. A passagem de guarda estabelecida concederá 3 (três) pontos, e a posição estabilizada de joelho na barriga concederá 2 (dois) pontos." />
      <Clause text="4.4. POSIÇÕES DOMINANTES CLÁSSICAS: Pontuações máximas serão atribuídas à Montada clássica e à Pegada de Costas, concedendo 4 (quatro) pontos cada, condicionadas à inserção correta dos dois ganchos no adversário na pegada de costas." />
      <Clause text="4.5. BÔNUS DE OSAEKOMI (IMOBILIZAÇÃO CONTÍNUA): Uma inovação do sistema FFC. O atleta que estabilizar posições longitudinais ou transversais superiores (controle lateral ou norte-sul) por 20 (vinte) segundos contínuos será recompensado com +2 (dois) pontos extras, desincentivando o antijogo da guarda travada e prestigiando o controle de alto nível." />

      <SectionTitle>CAPÍTULO V: FALTAS, PUNIBILIDADE E SEGURANÇA</SectionTitle>
      <Clause text="5.1. FALTA DE COMBATIVIDADE (AMARRAÇÃO): O tempo limite de inércia técnica sem busca contínua por finalização ou progressão será punido por advertências verbais e marcação no placar após inércia prolongada." />
      <Clause text="5.2. PUXADA DE GUARDA SEM CONTATO (PULLING GUARD): Sentar ou pular para a guarda sem que exista pegada válida e contato com o kimono do oponente será configurado como falta leve, passível de penalidade." />
      <Clause text="5.3. FALTAS GRAVES (ADVERTÊNCIAS E CAUTIONS): É proibido segurar dentro da boca da calça, dentro da manga, aplicar pretexto falso de lesão médica para repouso ou comunicação não autorizada/instrução abusiva do córner durante a luta." />
      <Clause text="5.4. FALTAS GRAVÍSSIMAS (DESCLASSIFICAÇÃO SUMÁRIA - HANSOKU-MAKE):" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>5.4.1.</strong> Uso absoluto de impactos, socos, chutes, mordidas, cotoveladas, cabeçadas ou qualquer agressão física intencional.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>5.4.2.</strong> Aplicação de chaves cervicais, torções diretas de espinha dorsal, e chaves torcionais de calcanhar (Heel Hooks) em divisões que proíbam tal técnica no kimono.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>5.4.3.</strong> Bate-Estaca (Slams de defesa contra finalização) com projeção do adversário ao solo, e quedas perigosas que atirem intencionalmente o atleta sobre sua cabeça ou pescoço.
      </ABNTText>

      <SectionTitle>CAPÍTULO VI: FORMAS DE VITÓRIA E RESOLUÇÃO DE EMPATES</SectionTitle>
      <Clause text="6.1. VITÓRIA POR FINALIZAÇÃO (SUBMISSION): Declara-se a vitória suprema caso haja desistência física (Tap Out batendo no tatame ou no adversário), desistência verbal em alta voz, intervenção médica para resguardar a vida ou intervenção do árbitro em finalização irrecusável." />
      <Clause text="6.2. VITÓRIA POR SUPERIORIDADE TÉCNICA: Atingida uma margem de superioridade técnica de 15 (quinze) pontos de diferença, o combate sofrerá encerramento técnico precoce. Inexistindo essa margem, vencerá o atleta com mais pontos ao final do cronômetro regulamentar." />
      <Clause text="6.3. VITÓRIA POR ACÚMULO DE PUNIÇÕES: O adversário do atleta que atingir o limite estipulado de 4 (quatro) advertências ou faltas (Shidos/Penalties) será declarado vencedor, sendo o infrator imediatamente desclassificado." />
      <Clause text="6.4. SISTEMA DE OVERTIME (PRORROGAÇÃO): Em caso de empate exato no placar principal e nas vantagens, será aplicado o método de round extra de 1 (um) minuto. O competidor escolhido por sorteio iniciará na Pegada de Costas ou no Armlock (à sua escolha), vencendo quem finalizar ou defender com sucesso dentro do tempo." />

      <SectionTitle>CAPÍTULO VII: CORPO DE ARBITRAGEM E RECURSOS TÉCNICOS</SectionTitle>
      <Clause text="7.1. COMPOSIÇÃO DA MESA: O andamento e o placar são soberanamente controlados pelo Árbitro Central, auxiliado por Juízes Laterais e pelo Supervisor de Área. Apenas o Supervisor pode interromper a dinâmica de arbitragem." />
      <Clause text="7.2. SISTEMA DE DESAFIO DE VÍDEO (CHALLENGE): Se o evento contar com VAR oficial, o córner terá direito a pedir revisão de imagem em tempo real através de mecânica especificada no aplicativo FFC, submetendo-se a regras de perda de desafio em caso de erro." />
      <Clause text="7.3. PROTOCOLO DE PROTESTO PÓS-LUTA: Qualquer contestação técnico-desportiva pós-combate não impedirá a cerimônia de vitória e não gerará gritaria. Deverá ser formalizada nas instâncias oficiais do app mediante pagamento de taxa recursal e protocolo de análise pela comissão superior de arbitragem, que decidirá os méritos de forma definitiva em até 7 (sete) dias úteis." />

      <br />
      <br />
    </>
  );
}
