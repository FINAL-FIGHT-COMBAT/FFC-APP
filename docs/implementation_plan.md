# Plano de Implementação — Etapa 1: Higiene e Organização do Workspace

Este plano descreve o primeiro passo para a melhoria da organização do ecossistema FFC, focando na eliminação de arquivos de log temporários poluindo o diretório de trabalho e na organização dos arquivos de semente (seed) SQL em pastas adequadas.

---

## Proposta de Alterações

### 📂 1. Organização de Scripts de Semente SQL (Backend)
Atualmente, existem 8 arquivos SQL de carga de dados (seed) soltos no diretório raiz do backend. Iremos movê-los para uma nova pasta estruturada dentro da camada de banco de dados:
*   **Nova pasta:** `/backend/src/db/seeds/`
*   **Arquivos a serem movidos:**
    *   `fresh_start.sql` ➔ `/backend/src/db/seeds/fresh_start.sql`
    *   `seed_associates_payments.sql` ➔ `/backend/src/db/seeds/seed_associates_payments.sql`
    *   `seed_associates_payments_final.sql` ➔ `/backend/src/db/seeds/seed_associates_payments_final.sql`
    *   `seed_associates_payments_v2.sql` ➔ `/backend/src/db/seeds/seed_associates_payments_v2.sql`
    *   `seed_associates_payments_v3.sql` ➔ `/backend/src/db/seeds/seed_associates_payments_v3.sql`
    *   `seed_blog_posts.sql` ➔ `/backend/src/db/seeds/seed_blog_posts.sql`
    *   `seed_synthetic_users.sql` ➔ `/backend/src/db/seeds/seed_synthetic_users.sql`
    *   `seed_treasury.sql` ➔ `/backend/src/db/seeds/seed_treasury.sql`

---

### 🧹 2. Limpeza de Logs Temporários e Dumps de Compilação
Iremos deletar os arquivos temporários e logs que não pertencem ao repositório para deixar o workspace limpo:
*   **No `/backend`:**
    *   `server.log` (deletar)
    *   `tsc_errors.log` (deletar)
    *   `wrangler_dev.log` (deletar)
*   **No `/dashboard`:**
    *   `tsc_errors.txt` (deletar)
    *   `tsc_errors_2.txt` (deletar)
    *   `tsc_errors_3.txt` (deletar)
    *   `tsc_errors_4.txt` (deletar)
    *   Adicionar `tsc_errors*.txt` no arquivo [dashboard/.gitignore](file:///home/sandro/FFC/dashboard/.gitignore) para prevenir que novos dumps de erro de tipo sejam commitados.

---

## Plano de Verificação

### Verificação Manual
- Garantir que nenhum arquivo SQL crucial foi perdido.
- Validar que o `.gitignore` do Dashboard impede a adição acidental de arquivos `tsc_errors.txt`.
- Executar `git status` em ambos os diretórios para assegurar que a árvore de diretórios está limpa e organizada.
