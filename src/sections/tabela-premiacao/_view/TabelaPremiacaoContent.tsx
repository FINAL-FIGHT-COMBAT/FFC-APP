import {
  Clause,
  ABNTText,
  SectionTitle,
  DocumentTitle,
} from 'src/components/abnt-document';

export function TabelaPremiacaoContent() {
  return (
    <>
      <DocumentTitle>
        TABELA OFICIAL DE PREMIAÇÃO E REGRAS DE PÓDIO
      </DocumentTitle>
      <DocumentTitle>
        FINAL FIGHT COMBAT (FFC)
      </DocumentTitle>
      <ABNTText>
        O presente documento normatiza os modelos de remuneração financeira, a distribuição de medalhas, a disputa de cinturões e os protocolos disciplinares do pódio para o ecossistema do Final Fight Combat. As diretrizes aqui estabelecidas baseiam-se nos preceitos de compliance esportivo e mérito técnico chancelados pelas grandes federações, garantindo previsibilidade legal e financeira aos atletas e agremiações filiadas.
      </ABNTText>

      <SectionTitle>CAPÍTULO I: MODELOS DE REMUNERAÇÃO E BOLSAS (PURSES)</SectionTitle>
      <Clause text="1.1. BOLSA DE PARTICIPAÇÃO (SHOW MONEY): Consiste no pagamento fixo destinado a atletas formalmente contratados para os combates principais. A liquidação deste valor condiciona-se à aprovação irrestrita nos exames médicos pré-luta, à aprovação final na balança oficial e ao efetivo comparecimento no tatame, não importando o resultado desportivo." />
      <Clause text="1.2. BOLSA DE VITÓRIA (WIN BONUS): Constitui gatilho financeiro atrelado exclusivamente ao resultado desportivo positivo. O pagamento deste montante é deflagrado apenas mediante a declaração explícita de vitória do atleta na súmula homologada pelo Árbitro Central." />
      <Clause text="1.3. CONTRATOS DE SELETIVAS (GRAND PRIX): Em formatos de chave eliminatória (Grand Prix ou Seletivas), a premiação assumirá caráter progressivo. O atleta acumulará repasses ou percentuais crescentes de bolsa ao avançar por cada fase aguda do torneio (oitavas, quartas, semifinais e final), conforme matriz de valores anexa ao edital da etapa." />
      <Clause text="1.4. RETENÇÕES E PENALIDADES FINANCEIRAS:" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>1.4.1.</strong> A falha no protocolo de pesagem oficial acarretará dedução automática do percentual da Bolsa de Participação fixado no respectivo contrato, valor este que será integralmente repassado ao oponente como compensação (Catchweight penalty).
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>1.4.2.</strong> O cometimento de conduta antidesportiva grave, injúria ou agressão determinará o bloqueio cautelar imediato de todos os pagamentos da bolsa do atleta e da equipe, revertendo o montante para o fundo disciplinar da organização.
      </ABNTText>

      <SectionTitle>CAPÍTULO II: PREMIAÇÃO INDIVIDUAL (MEDALHAS E CINTURÕES)</SectionTitle>
      <Clause text="2.1. ALOCAÇÃO DE MEDALHAS OFICIAIS: A premiação do pódio obedecerá à seguinte distribuição rígida: (a) Medalha de Ouro para o primeiro colocado (Campeão); (b) Medalha de Prata para o segundo colocado (Vice-Campeão); e (c) Medalhas de Bronze para ambos os terceiros colocados (semifinalistas derrotados)." />
      <Clause text="2.2. DISPUTAS DE CINTURÃO OFICIAL FFC: O Cinturão Oficial é propriedade intelectual e patrimonial do FFC, cuja posse transitória é concedida ao campeão. O detentor obriga-se a defender o título conforme as janelas convocatórias da organização. A inatividade prolongada ou lesão do campeão legitimará a organização a criar disputas por Cinturões Interinos ou a declarar o título vago." />
      <Clause text="2.3. BÔNUS POR PERFORMANCE EXTRA (PRÊMIOS DA NOITE):" />
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>2.3.1. Finalização da Noite (Submission of the Night):</strong> Bônus discricionário conferido pela Comissão de Arbitragem ao atleta que executar a técnica de submissão mais complexa, esteticamente perfeita ou rápida da etapa.
      </ABNTText>
      <ABNTText indent={false} sx={{ pl: '1.25cm' }}>
        <strong>2.3.2. Luta da Noite (Fight of the Night):</strong> Bônus financeiro especial e extraordinário que será dividido igualitariamente entre ambos os atletas protagonistas do combate avaliado como o mais movimentado, dramático e tecnicamente engajador.
      </ABNTText>

      <SectionTitle>CAPÍTULO III: RANKING E PREMIAÇÃO POR EQUIPES (ACADEMIAS)</SectionTitle>
      <Clause text="3.1. SISTEMA DE PONTUAÇÃO POR MEDALHAS (PADRÃO DE PESO): O ranking geral das agremiações será computado pelo método olímpico de pesos: 9 (nove) pontos por medalha de ouro, 3 (três) pontos por medalha de prata e 1 (um) ponto por medalha de bronze. Estão expressamente excluídas desta contagem as chaves compostas por um único atleta (WO sumário) e as medalhas conquistadas quando ocorrer fechamento de chaves entre dois membros de uma mesma equipe." />
      <Clause text="3.2. SISTEMA DE PONTUAÇÃO POR ESCALONAMENTO (PADRÃO ABSOLUTO): Para categorias absolutas ou eventos correlatos à chancela UWW Grappling, adotar-se-á adicionalmente a atribuição decrescente de pontos do primeiro ao décimo colocado, fomentando o ranqueamento profundo de todas as posições." />
      <Clause text="3.3. CRITÉRIOS ESTRITOS DE DESEMPATE: Persistindo a igualdade de pontos entre duas academias, o desempate obedecerá estritamente a seguinte ordem: (i) maior número de Medalhas de Ouro; (ii) maior número de Medalhas de Prata; (iii) campeões nas divisões mais graduadas ou classes mais altas (Adulto Faixa-Preta); e (iv) a mais eficiente taxa de aproveitamento, premiando a equipe que levou o menor número total de inscritos." />
      <Clause text="3.4. ALOCAÇÃO DE TROFÉUS COLETIVOS: Serão entregues troféus institucionais para as 3 (três) ou 5 (cinco) academias melhor classificadas no balanço geral, distinguindo-se as classificações por gênero e classe de idade conforme a magnitude da etapa." />

      <SectionTitle>CAPÍTULO IV: PROTOCOLO DO PÓDIO E CERIMONIAL (PODIUM CODE)</SectionTitle>
      <Clause text="4.1. CÓDIGO DE VESTIMENTA OBRIGATÓRIO (DRESS CODE): O momento do pódio é o ápice desportivo e institucional do evento. É terminantemente obrigatório subir ao estrado envergando exclusivamente o kimono oficial limpo e ajustado (para a modalidade com Gi) ou o uniforme rashguard completo (para a modalidade No-Gi). Fica proibido subir ao pódio utilizando calçados, chinelos, óculos escuros, bonés ou acessórios visuais estranhos ao combate." />
      <Clause text="4.2. RESTRIÇÕES DE MANIFESTAÇÕES E EXIBIÇÕES: A arena do pódio deve refletir o espírito marcial unificador. Portanto, não é autorizado empunhar bandeiras de natureza política, mensagens de caráter extremista, manifestos agressivos ou publicidade de patrocinadores que conflitem diretamente com as marcas oficiais do evento." />
      <Clause text="4.3. PENALIDADES POR ABANDONO OU AUSÊNCIA NO PÓDIO: A honraria da vitória pressupõe a participação nos ritos cerimoniais. O atleta que se recusar a subir ao pódio ou abandonar o ginásio antes do encerramento oficial da cerimônia fotográfica perderá em definitivo o direito material à medalha e terá suspensos todos os bônus financeiros previstos para aquela etapa." />

      <SectionTitle>CAPÍTULO V: PROCESSAMENTO E LIQUIDAÇÃO FINANCEIRA VIA APP</SectionTitle>
      <Clause text="5.1. CADASTRO DE DADOS FISCAIS E BANCÁRIOS: Para o processamento da bolsa contratual, o atleta compromete-se a validar integralmente seus dados tributários, conta-corrente ou chave PIX diretamente na aba 'Carteira' em seu perfil logado no aplicativo oficial FFC." />
      <Clause text="5.2. PRAZOS DE LIBERAÇÃO DE VALORES: A janela temporal para a liquidação dos valores obedecerá à compensação estabelecida. O pagamento estará retido temporariamente até a assinatura final e homologação das súmulas de arbitragem e a subsequente liberação por laudos das comissões médicas e de controle antidoping, quando aplicável." />
      <Clause text="5.3. AUDITORIA E CONTESTAÇÃO DE PRÊMIOS: Em caso de discrepâncias fiscais, o atleta disporá de canais de suporte técnico direto, via aplicativo, para rever planilhas de rateio, requerer notas fiscais de retenção na fonte ou contestar bloqueios disciplinares, resguardando total transparência ao repasse financeiro." />

      <br />
      <br />
    </>
  );
}
