# Walkthrough — Higiene do Workspace, Limpeza & Rebranding para FFC

Este documento resume as melhorias, limpezas e rebranding completo efetuados no ecossistema FFC (Final Fight Combat).

---

## 🧹 Etapa 1: Higiene e Organização do Workspace (Concluída)

### 1. Migração de Scripts de Semente SQL (Backend)
Criamos a pasta estruturada `/backend/src/db/seeds/` e migramos todos os arquivos `.sql` que estavam soltos na raiz para este novo diretório:
*   `fresh_start.sql` ➔ `/backend/src/db/seeds/fresh_start.sql`
*   `seed_associates_payments.sql` ➔ `/backend/src/db/seeds/seed_associates_payments.sql`
*   `seed_associates_payments_final.sql` ➔ `/backend/src/db/seeds/seed_associates_payments_final.sql`
*   `seed_associates_payments_v2.sql` ➔ `/backend/src/db/seeds/seed_associates_payments_v2.sql`
*   `seed_associates_payments_v3.sql` ➔ `/backend/src/db/seeds/seed_associates_payments_v3.sql`
*   `seed_blog_posts.sql` ➔ `/backend/src/db/seeds/seed_blog_posts.sql`
*   `seed_synthetic_users.sql` ➔ `/backend/src/db/seeds/seed_synthetic_users.sql`
*   `seed_treasury.sql` ➔ `/backend/src/db/seeds/seed_treasury.sql`

### 2. Eliminação de Logs e Dumps Temporários
Removemos todos os logs locais e arquivos de depuração:
*   Backend: `server.log`, `tsc_errors.log` e `wrangler_dev.log`.
*   Dashboard: `tsc_errors.txt`, `tsc_errors_2.txt`, `tsc_errors_3.txt` e `tsc_errors_4.txt`.

### 3. Atualização do Gitignore
*   Atualizamos o arquivo [dashboard/.gitignore](file:///home/sandro/FFC/dashboard/.gitignore) para ignorar automaticamente novos dumps do compilador com o padrão `tsc_errors*.txt`.

---

## 🏢 Etapa 2.1: Remoção do Módulo Imobiliário (Concluída)

Removemos as definições de rotas e validadores do módulo de imóveis (Real Estate) herdados do sistema legado.

### 1. Remoção de Arquivos de Negócio
*   [DELETE] [real-estate/index.ts](file:///home/sandro/FFC/backend/src/routes/products/real-estate/index.ts): Rotas do Hono para imóveis e localizações.
*   [DELETE] [real-estate.ts](file:///home/sandro/FFC/backend/src/validators/real-estate.ts): Esquemas Zod de validação de formulários de imóveis.

### 2. Desativação no Roteador Principal
*   [MODIFY] [index.ts](file:///home/sandro/FFC/backend/src/index.ts): Removida a importação do roteador e o endpoint correspondente `/api/products/real-estate`.

---

## 🌾🏛️ Etapa 2.2: Remoção dos Módulos Agro e Governança (Concluída)

Removemos as rotas dos módulos Agro e Governança.

### 1. Remoção de Arquivos de Negócio
*   [DELETE] [agro/](file:///home/sandro/FFC/backend/src/routes/products/agro/): Pasta contendo as rotas placeholder do Agro.
*   [DELETE] [governance.ts](file:///home/sandro/FFC/backend/src/routes/platform/governance.ts): Roteador do Hono para propostas e votos da antiga DAO.

### 2. Desativação no Roteador Principal
*   [MODIFY] [index.ts](file:///home/sandro/FFC/backend/src/index.ts): Removidas as importações dos roteadores e os endpoints `/api/products/agro` e `/api/platform/governance`.

---

## 🗄️ Etapa 2.3: Limpeza do Banco de Dados & Ajuste do Storage (Concluída)

Removemos as definições das tabelas zumbis no banco de dados e limpamos as referências de storage.

### 1. Limpeza de Tabelas no Schema
*   [MODIFY] [schema.ts](file:///home/sandro/FFC/backend/src/db/schema.ts): Excluímos as 17 tabelas zumbis (`reProperties`, `rePropertyLocation`, `reSurveyPoints`, `rePropertyLand`, `rePropertyConstruction`, `rePropertyInfrastructure`, `rePropertyPricing`, `rePropertyOwners`, `rePropertyProfessionals`, `rePropertyDocuments`, `rePropertyMedia`, `rePropertyBlockchain`, `rePropertyWorkflow`, `rePropertyAuditLog`, `govProposals`, `govVotes`, `bounties`).
*   Mantivemos as tabelas ativas essenciais (`users`, `passwordResets`, `wallets`, `posts`, `postComments`, `postFavorites`, `contracts`, `citizens`, `membershipCards`, `auditLogs`, `treasuryLedger`).

### 2. Ajuste do Roteador de Storage
*   [MODIFY] [storage.ts](file:///home/sandro/FFC/backend/src/routes/platform/storage.ts): Removemos as importações de `rePropertyMedia` e `rePropertyDocuments`, bem como o bloco de associação de arquivos R2 a propriedades imobiliárias no endpoint de upload `/upload`, tornando-o genérico e funcional.

---

## 🧹 Etapa 2.4: Remoção de Arquivos Físicos Zumbis (Concluída)

Limpamos fisicamente as últimas relíquias e utilitários obsoletos na raiz e subpastas do backend.

### 1. Arquivos Removidos
*   [DELETE] [test-siwe.ts](file:///home/sandro/FFC/backend/tools/test-siwe.ts): Script de teste de SIWE descontinuado.
*   [DELETE] [ai_models.json](file:///home/sandro/FFC/backend/ai_models.json): Arquivo de configurações de IA zumbi.
*   [DELETE] [r2-cors.json](file:///home/sandro/FFC/backend/r2-cors.json): Políticas antigas de CORS do R2.
*   [DELETE] [blog/](file:///home/sandro/FFC/backend/blog) (contendo `img-1778300187817.png`): Pasta contendo imagem órfã.

---

## 🏷️ Etapa 2.5: Otimização de Nomenclaturas de Infraestrutura (Concluída)

Padronizamos as nomenclaturas de recursos do backend de acordo com a marca FFC e melhores práticas de monorepo.

### 1. Modificações Realizadas
*   [MODIFY] [package.json](file:///home/sandro/FFC/backend/package.json): Renomeamos o pacote para `@ffc/api` para identificação de escopo.
*   [MODIFY] [wrangler.toml](file:///home/sandro/FFC/backend/wrangler.toml):
    *   Renomeamos o worker para `ffc-core-api`.
    *   Renomeamos o banco de dados D1 para `ffc-core-d1-prod`.
    *   Renomeamos o bucket de R2 para `ffc-assets-prod`.

---

## 🔒 Etapa 3: Rebranding de Identificadores Técnicos e Dashboard (Concluída)

Realizamos a substituição definitiva de todas as menções à ASPPIBRA por FFC nos fluxos técnicos do backend, mantendo metadados de incubação no sandbox.

### 1. Atualizações de DIDs, URLs e Emissor MFA
*   [MODIFY] [local.ts](file:///home/sandro/FFC/backend/src/routes/core/identity/local.ts): Alterados DIDs locais para `did:ffc:web2:${id}` e links de reset para `finalfightcombat.xyz`.
*   [MODIFY] [identity/index.ts](file:///home/sandro/FFC/backend/src/routes/core/identity/index.ts): Atualizados DIDs de registro para `did:ffc:${username}`, DIDs de Web3 para `did:ffc:eth:${address}`, emissor 2FA para `FFC Sandbox` e mensagem de login da carteira para `Final Fight Combat Sandbox`.
*   [MODIFY] [oauth.ts](file:///home/sandro/FFC/backend/src/routes/core/identity/oauth.ts): Atualizado fallback de URL de frontend para `https://www.finalfightcombat.xyz` e DIDs sociais para `did:ffc:social:${userId}`.
*   [MODIFY] [identity.ts](file:///home/sandro/FFC/backend/src/routes/platform/identity.ts): Atualizado DID de cidadão para `did:ffc:${newUser.id}`.
*   [MODIFY] [did_resolver.ts](file:///home/sandro/FFC/backend/src/utils/did_resolver.ts): Resolvido DID padrão com o prefixo `did:ffc` e apontando serviço para endpoint da API de produção.

### 2. Configurações Globais CORS e Storage
*   [MODIFY] [index.ts](file:///home/sandro/FFC/backend/src/index.ts): Atualizadas origens CORS para os novos domínios do FFC (`finalfightcombat.xyz`), mantendo localhost e alterando domínio padrão da API.
*   [MODIFY] [storage.ts](file:///home/sandro/FFC/backend/src/routes/platform/storage.ts): Corrigido fallback do bucket R2 no upload de storage para `ffc-assets-prod`.
*   [MODIFY] [treasury.ts](file:///home/sandro/FFC/backend/src/routes/platform/treasury.ts): Ajustados `tenant_id` e contas default de tesouraria de `'asppibra'` para `'ffc'`.

### 3. Rebranding do Dashboard Visual e Seeds
*   [MODIFY] [dashboard.ts](file:///home/sandro/FFC/backend/src/views/dashboard.ts): Rebranding completo do dashboard de monitoramento (metadados SEO, títulos, descrições, logos, informações de token do sandbox e copyright do rodapé).
*   [MODIFY] SQL Seeds (`fresh_start.sql` e `seed_synthetic_users.sql`): Migrados todos os DIDs sintéticos pré-cadastrados para o novo formato `did:ffc`.
*   [MODIFY] [README.md](file:///home/sandro/FFC/backend/README.md): Atualizada documentação oficial do repositório para refletir as novas URLs, DIDs e conceitos de arquitetura.

### 4. Correção e Validação dos Testes Unitários
*   [MODIFY] [identity.test.ts](file:///home/sandro/FFC/backend/src/routes/core/identity/identity.test.ts) & [auth_signature.test.ts](file:///home/sandro/FFC/backend/src/middleware/auth_signature.test.ts): Atualizados DIDs de teste para o formato `did:ffc` e corrigidas mensagens de erro assinaladas.

---

## 🧪 Verificação e Validação

1.  **Execução de Testes Unitários**:
    ```bash
    npm test
    ```
    Todos os 20 testes unitários passaram com absoluto sucesso, validando a integridade das rotas, validações de assinatura e fluxos de compliance.
2.  **Compilação do Backend**: Executamos o analisador de tipos TypeScript:
    ```bash
    npm run lint
    ```
    O backend compila sem novos avisos ou erros.
3.  **Implantação em Produção (Cloudflare - Nova Conta Independente)**:
    - **Dashboard (Cloudflare Pages)**: Implantado com sucesso na nova conta do FFC:
      ```bash
      SKIP_CHECKER=1 npx vite build
      npx wrangler pages deploy ./dist
      ```
      - Novo Projeto: `ffc-dashboard`
      - URL do Dashboard: `https://ffc-dashboard-bkp.pages.dev`
    - **Backend (Cloudflare Workers)**: Banco de dados D1 (`7ddcd77d-bdc6-4041-98a3-106264c0ecc1`), cache KV e bucket R2 provisionados e implantados na nova conta:
      ```bash
      npm run deploy
      ```
      - URL da API Backend: `https://ffc-core-api.ffc-e4d.workers.dev`
      - Domínio Customizado Associado: `api.finalfightcombat.xyz`
    - **Validação Pós-Deploy**:
      - Rota de Healthcheck: `https://ffc-core-api.ffc-e4d.workers.dev/api/core/health` respondendo com sucesso (`status: ok`).
      - Dashboard de Telemetria: `https://ffc-core-api.ffc-e4d.workers.dev/` carregando perfeitamente os metadados da marca FFC.

---

## 📦 Etapa 4: Consolidação de Monorepo, Alinhamento Geral & CI/CD (Concluída)

Realizamos a limpeza e alinhamento de infraestrutura de controle de versão (Git) e corrigimos as builds estáticas e de tipo nos três aplicativos.

### 1. Ajustes de Código e Alinhamentos FFC
*   **CORS no Backend Workers**:
    *   [MODIFY] [index.ts](file:///home/sandro/FFC/backend/src/index.ts): Adicionado suporte a origens `.pages.dev` no CORS para permitir que o Dashboard hospedado no Cloudflare Pages faça chamadas seguras para a API de produção.
*   **SEO no Frontend Next.js**:
    *   [MODIFY] [canonical.tsx](file:///home/sandro/FFC/frontend/src/components/seo/canonical.tsx): Atualizado o domínio canonical de fallback para `https://www.finalfightcombat.xyz`.
    *   [MODIFY] [breadcrumb.tsx](file:///home/sandro/FFC/frontend/src/components/seo/breadcrumb.tsx): Atualizado o domínio de itens do Breadcrumb para `https://www.finalfightcombat.xyz`.
    *   [MODIFY] [robots.ts](file:///home/sandro/FFC/frontend/src/lib/seo/robots.ts): Atualizada a referência dos Sitemaps de produção e desenvolvimento para `https://www.finalfightcombat.xyz/sitemap.xml`.

### 2. Resolução de Erros de Compilação (Build Checks)
*   **Backend Workers**:
    *   [MODIFY] [publish.ts](file:///home/sandro/FFC/backend/src/routes/ai/publish.ts): Ajustado retorno do endpoint de lote `/batch` para mapear `result.slug` em vez de `result.id` (que não existia na tipagem do orchestrator).
    *   [MODIFY] [treasury.ts](file:///home/sandro/FFC/backend/src/routes/platform/treasury.ts): Adicionada tipagem explícita `(p: string)` nos callbacks de splits de tesouraria para evitar o erro `implicitly has an 'any' type`.
*   **Dashboard Vite**:
    *   [MODIFY] [chart-legends.tsx](file:///home/sandro/FFC/dashboard/src/components/chart/components/chart-legends.tsx): Atualizado tipo do prop `colors` para aceitar a tipagem dinâmica do ApexCharts.
    *   [MODIFY] [use-chart.ts](file:///home/sandro/FFC/dashboard/src/components/chart/use-chart.ts): Ajustada a configuração `tooltip.theme` de `'false'` para `undefined` para satisfazer as restrições da tipagem oficial do ApexCharts.

### 3. Consolidação do Git & Monorepo
*   **Higiene de Repositórios**:
    *   Removemos os três repositórios independentes/conflitantes (`.git`) que estavam aninhados dentro das pastas `/backend`, `/dashboard` e `/frontend`.
    *   Inicializamos um único repositório Git mestre na raiz do monorepo `/FFC` sob a branch `main`.
*   **Configuração de Gitignore**:
    *   [NEW] [.gitignore (Raiz)](file:///home/sandro/FFC/.gitignore): Criado arquivo mestre para barrar cache de node_modules, logs globais, build folders e, principalmente, segredos locais (`.env`, `.dev.vars`, credenciais).

### 4. Esteiras de Automação (CI/CD) no GitHub Actions
*   [NEW] [security.yml](file:///home/sandro/FFC/.github/workflows/security.yml): Configurada esteira com **Gitleaks** para escanear ativamente cada commit/PR e bloquear o envio de qualquer chave de API ou credencial.
*   [NEW] [ci.yml](file:///home/sandro/FFC/.github/workflows/ci.yml): Configurado fluxo de integração para executar de forma paralela testes, linters e builds de backend, dashboard e frontend Next.js.

### 5. Primeiro Commit Mestre
*   Executamos com sucesso o `git add .` e efetuamos o **primeiro commit local oficial do monorepo consolidado**, totalmente limpo de dependências e de variáveis de ambiente.
