# 🥊 Final Fight Combat (FFC) Ecosystem
## 🏟️ A Plataforma Definitiva de Esportes de Combate e Artes Marciais

> **Infraestrutura de Elite focada em SEO e Experiência do Usuário, conectando fãs, atletas e patrocinadores ao ecossistema do Final Fight Combat com máxima performance e autoridade digital.**

---

### 🚀 Stack Tecnológica (Frontend Público 2026)

| Layer | Technology | Status | Badge |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js 16.2.1 (Turbopack) | ✅ Stable | ![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black?style=flat&logo=next.js) |
| **UI Library** | React 19.2.4 | ✅ Stable | ![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat&logo=react&logoColor=black) |
| **Styling** | Material UI 7.3.7 | ✅ Design System | ![MUI](https://img.shields.io/badge/MUI-7.3.7-007FFF?style=flat&logo=mui&logoColor=white) |
| **SEO Engine** | Dynamic Sitemap + Robots | ✅ Elite | ![SEO](https://img.shields.io/badge/SEO-Enterprise-green) |
| **Identity** | Shared Auth Bridge (JWT) | ✅ Integrated | ![Auth](https://img.shields.io/badge/Auth-Bridge-blueviolet) |

---

## 🏟️ Arquitetura de Consumo (Public Frontend)

> **Este repositório foi otimizado para atuar como o portal principal do Final Fight Combat (FFC). Toda a complexidade administrativa de gerenciamento de chaves, atletas e ingressos foi delegada ao [App Dashboard](https://app.finalfightcombat.com).**

### 1. 📰 Portal de Notícias (Blog Engine)
Sistema de alto desempenho para entrega de conteúdo editorial sobre lutas, bastidores e cobertura ao vivo:
*   **Arquitetura Diamante:** Estrutura modular escalável com separação estrita de camadas.
*   **Rotas Dinâmicas:** `/news`, `/news/[slug]`, `/news/category/[slug]`.
*   **SEO Dinâmico:** Geração automática de Metadados, RSS Feed, Sitemap e OG Images.
*   **Performance:** Renderização Híbrida (SSR/ISR) com suporte a Turbopack.

### 2. 🌍 Ecossistema de Internacionalização (i18n)
Pronto para a expansão global de transmissões (Pay-Per-View):
*   **Engine:** `i18next` com detecção automática de região.
*   **Estrutura:** Dicionários JSON organizados por módulos para suporte Multi-idioma (Português, Inglês, Espanhol).

## 🧠 Ecossistema de SEO & AI (Sinais de Autoridade)

Este projeto foi projetado com uma arquitetura **AI-First**, garantindo que o conteúdo seja facilmente consumível por buscadores tradicionais (Google) e modelos de linguagem modernos (GPT, Claude, Perplexity), consolidando o FFC como o principal hub de artes marciais.

### 📂 Mapa Técnico de SEO
Abaixo estão os arquivos e diretórios que compõem o motor de autoridade digital (E-E-A-T) do FFC:

```text
frontend/
├── public/
│   ├── .well-known/
│   │   └── ai-plugin.json           # SEO para buscadores de IA (ChatGPT, etc)
│   ├── schemas/                     # Definições estáticas de Structured Data
│   │   ├── breadcrumb.json
│   │   ├── organization.json
│   │   └── website.json
│   ├── ads.txt                      # Verificação para crawlers de anunciantes e patrocinadores
│   ├── favicon.ico                  # Identidade visual nos resultados de busca
│   └── humans.txt                   # Transparência e autoria (SEO indireto)
├── src/
│   ├── app/
│   │   ├── (main)/
│   │   │   ├── authors/             # Páginas dos redatores/jornalistas (Sinal de E-E-A-T)
│   │   │   ├── editorial-policy/    # Políticas editoriais do portal FFC
│   │   │   ├── fact-checking/       # Verificação de fatos e resultados de lutas
│   │   │   └── methodology/         # Metodologia de rankeamento e regras (E-E-A-T)
│   │   ├── news/
│   │   │   └── [slug]/
│   │   │       ├── opengraph-image.tsx # OG Image dinâmica para notícias
│   │   │       └── twitter-image.tsx   # Twitter Card dinâmico para notícias
│   │   ├── rss/
│   │   │   └── route.ts             # Feed para indexação rápida em agregadores de esportes
│   │   ├── apple-icon.tsx           # SEO Mobile / Favicons
│   │   ├── manifest.ts              # Web App Manifest (Instalação PWA para fãs)
│   │   ├── opengraph-image.tsx      # Imagem estática de compartilhamento global (Fallback)
│   │   ├── robots.ts                # Geração dinâmica do robots.txt (AI Optimized)
│   │   └── sitemap.ts               # Geração dinâmica do sitemap.xml
│   ├── components/
│   │   └── seo/                     # Componentes reutilizáveis de SEO
│   │       ├── analytics.tsx        # Rastreamento de performance e métricas
│   │       ├── breadcrumb.tsx       # Navegação estruturada para o Google
│   │       ├── canonical.tsx        # Tags para evitar conteúdo duplicado nas lutas
│   │       └── json-ld.tsx          # Injeção de dados estruturados (Schema SportsOrganization)
│   ├── lib/
│   │   └── seo/                     # Lógica e utilitários de SEO
│   │       ├── metadata.ts          # Gerador central de meta tags (AI Snippets)
│   │       ├── openGraph.ts         # Configurações de Open Graph
│   │       ├── robots.ts            # Lógica de permissões de crawlers
│   │       └── schema.ts            # Builders de JSON-LD
│   ├── next.config.ts               # Headers de Segurança (HSTS/XSS)
│   └── .lighthouserc.js             # Automação de auditoria de Performance (Fãs Mobile)
```

### 🎨 Ecossistema Tecnológico do Blog (Padrão Diamante)

Este projeto utiliza o **Padrão Diamante de Organização Modular (Elite 2026)**, garantindo que o motor de notícias (cobertura do evento) seja isolado, performático e fácil de manter.

```text
frontend/
├── public/
│   └── assets/
│       └── icons/
│           └── navbar/
│               └── ic-blog.svg             # Ícone visual do menu de navegação
├── src/
│   ├── _mock/
│   │   └── blog.mock.ts                    # Dados fakes de notícias (Padrão .mock.ts)
│   ├── actions/
│   │   ├── mappers/
│   │   │   └── blog-mapper.ts              # Transformação de dados de API (Matérias)
│   │   ├── blog-queries.ts                 # Leitura Server-Side (Queries/SEO)
│   │   └── blog-actions.ts                 # Escrita/Interações
│   ├── app/
│   │   ├── (main)/
│   │   │   ├── authors/                    # Páginas de E-E-A-T (Colunistas do FFC)
│   │   │   │   ├── [slug]/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   └── tag/                        # Taxonomias dinâmicas (ex: /tag/jiu-jitsu)
│   │   │       └── [slug]/
│   │   │           └── page.tsx
│   │   ├── news/                           # CORE do Portal (App Router)
│   │   │   ├── [slug]/                     # Página Interna da Notícia
│   │   │   │   ├── error.tsx
│   │   │   │   ├── loading.tsx
│   │   │   │   ├── opengraph-image.tsx     
│   │   │   │   ├── page.tsx
│   │   │   │   └── twitter-image.tsx       
│   │   │   ├── category/                   # Verticais de Conteúdo (MMA, Submission)
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── error.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx                    # Orquestrador Home de Notícias
│   │   └── rss/
│   │       └── route.ts                    # Feed RSS Esportivo
│   ├── hooks/
│   │   └── use-blog.ts                     # Hooks de estado e filtros do portal
│   ├── layouts/
│   │   ├── blog/                           # Wrappers de Layout do Blog
│   │   │   ├── index.ts
│   │   │   └── layout.tsx
│   │   ├── nav-config-blog.tsx             # Navegação específica das Notícias
│   │   └── nav-config-main.tsx             # Registro no Menu Global FFC
│   ├── schemas/
│   │   └── blog-zod.ts                     # Validação Zod
│   ├── sections/
│   │   └── blog/                           # MOTOR VISUAL (Private Modular)
│   │       ├── _components/                # Sub-componentes (Privados)
│   │       │   ├── PostAdvertisement.tsx   # Espaços de Patrocinadores
│   │       │   ├── PostAuthors.tsx
│   │       │   ├── PostCommunity.tsx
│   │       │   ├── PostFeatured.tsx
│   │       │   ├── PostSearch.tsx
│   │       │   ├── PostSort.tsx
│   │       │   └── PostVideo.tsx           # Destaques de Luta (VOD)
│   │       ├── _details/                   # Seções Internas
│   │       │   ├── PostCommentItem.tsx
│   │       │   ├── PostCommentList.tsx
│   │       │   └── PostDetailsHero.tsx
│   │       ├── _forms/                     # Formulários
│   │       │   ├── PostNewsletter.tsx
│   │       │   └── PostCommentForm.tsx
│   │       ├── _item/                      # Cards
│   │       │   ├── PostCardHorizontal.tsx
│   │       │   ├── PostCard.tsx            
│   │       │   ├── PostRecent.tsx          
│   │       │   ├── PostSkeleton.tsx
│   │       │   └── PostTrending.tsx        # Mais Lidas
│   │       ├── _view/                      # Orquestradores de Página
│   │       │   ├── public/                 
│   │       │   │   ├── PostDetailsHomeView.tsx
│   │       │   │   └── BlogHomeView.tsx    
│   │       │   └── index.ts
│   │       ├── ARCHITECTURE.md             
│   │       └── constants.ts                
│   └── types/
│       └── blog.ts                         # Interfaces TS
```

### 🏆 Ecossistema Institucional & Landing Page (Padrão Diamante)

A estrutura institucional do FFC foi construída para garantir atração máxima de patrocínios, engajamento de fãs e registro simplificado de atletas.

```text
frontend/
├── src/
│   ├── _mock/
│   │   └── institutional.mock.ts           # Dados dinâmicos (Lutadores, Card, Patrocinadores)
│   ├── app/
│   │   ├── (home)/
│   │   │   └── page.tsx                    # HOME FFC: Landing Page Oficial
│   │   ├── (main)/
│   │   │   ├── about/                      # Página Sobre o FFC
│   │   │   ├── chaves/                     # Brackets interativos do Torneio (NOVO)
│   │   │   ├── contact/                    # Atendimento aos Fãs e Atletas
│   │   │   ├── documentos/                 # Área restrita / Validações
│   │   │   ├── ecosystem/                  # Plataforma Tecnológica
│   │   │   ├── inscricao/                  # Formulário Oficial de Registro de Atletas
│   │   │   ├── team/                       # Equipe de Organização do FFC
│   │   │   ├── editorial-policy/           # Regras do Portal (E-E-A-T)
│   │   │   ├── fact-checking/              # Checagem de Resultados (E-E-A-T)
│   │   │   ├── methodology/                # Metodologia Esportiva (E-E-A-T)
│   │   │   └── (legal)/                    # Compliance Jurídico e Regras do Evento
│   ├── sections/
│   │   ├── home/                           # MÓDULO: LANDING PAGE FFC (DIAMANTE)
│   │   │   ├── _components/                # Blocos de Ação (UI/UX)
│   │   │   │   ├── Categorias.tsx          # Seletivas e Chaves (Grid/Carousel Global)
│   │   │   │   ├── HomeAthletes.tsx        # Atletas Convidados (Grid/Carousel Global)
│   │   │   │   ├── HomeCommunity.tsx       
│   │   │   │   ├── HomeCountdownDialog.tsx # Modal de Contagem Regressiva
│   │   │   │   ├── HomeCtaBanner.tsx       # Botão de Inscrição Magnético
│   │   │   │   ├── HomeFaqs.tsx            
│   │   │   │   ├── HomeHero.tsx            # Chamada Principal do Card
│   │   │   │   ├── HomeLatestNews.tsx      # Últimas Notícias (Grid/Carousel Global)
│   │   │   │   ├── HomePrizes.tsx          # Premiação do Evento
│   │   │   │   ├── HomeRoadmap.tsx         # Programação das Lutas (Grid/Carousel Global)
│   │   │   │   ├── HomeSponsors.tsx        # Área Dourada VIP para Patrocinadores
│   │   │   │   └── HomeTeam.tsx            # Organização do FFC (Grid/Carousel Global)
│   │   │   └── _view/
│   │   │       └── HomeView.tsx            # Orquestrador da Landing Page
│   │   ├── chaves/                         # MÓDULO: CHAVES DO CAMPEONATO
│   │   │   └── _view/
│   │   │       ├── ChavesView.tsx          # Árvore/Pirâmide do Torneio
│   │   │       └── BracketMatch.tsx        # Card Responsivo de Lutas
│   │   ├── inscricao/                      # MÓDULO: INSCRIÇÕES E REGISTRO
│   │   ├── documentos/                     # MÓDULO: GESTÃO DE DOCUMENTOS
│   │   ├── about/                          # MÓDULO: SOBRE A INSTITUIÇÃO
│   │   │   └── _view/AboutView.tsx
│   │   ├── contact/                        # MÓDULO: ATENDIMENTO
│   │   │   └── _view/ContactView.tsx
│   │   ├── team/                           # MÓDULO: ORGANIZAÇÃO
│   │   │   └── _view/TeamView.tsx
│   │   ├── ecosystem/                      # MÓDULO: TECNOLOGIA FFC
│   │   │   └── _view/EcosystemView.tsx
│   │   └── legal/                          # MÓDULO: REGRAS E COMPLIANCE
│   │       └── _view/
│   │           ├── LegalView.tsx           # Regulamentos Gerais
│   │           └── PolicyView.tsx          
```

### 4. 🎟️ Ponte de Identidade (Auth Bridge)
Integração transparente com o ecossistema para fãs e atletas:
*   **Session Sync:** O `AuthProvider` central reconhece se é um Atleta, Administrador ou Fã através do JWT.
*   **Acesso VIP (Web3):** Suporte nativo a carteiras (Wagmi/Viem) para verificação on-chain de Colecionáveis FFC e Passes VIP Tokenizados (Integração RWA Herdada).

### 5. 🎨 Design System & Padrões Globais (UI/UX)
Para manter a consistência visual "Premium/Cyber-Sports" em todas as telas, implementamos um sistema rígido de padronização onde **o design é concebido primeiro como um estilo robusto dedicado ao Desktop** e inteligentemente convertido/adaptado para múltiplos tamanhos de tela (Mobile e Tablet).

* **Tipografia Global:** `Orbitron` para Títulos, Destaques e Botões (Estética Sci-Fi/Luta). `Public Sans` para parágrafos e leitura longa (Maior legibilidade).
* **Componentes Visuais Core:** Uso extensivo e padronizado do `CyberCard` (Cards com blur, glow e neon effects) e `CyberButton` (Botões de Call to Action magnéticos).
* **Animações Fluidas:** Utilizamos `framer-motion` acoplado ao nosso utilitário estrito `varFade()` (ex: `varFade('inUp')`), garantindo que a rolagem (scroll) revele todos os elementos do ecossistema FFC com a mesma cadência.
* **Arquitetura de Responsividade Híbrida (`ResponsiveCarouselGrid`):** Como regra de ouro arquitetural, seções que exibem coleções de itens (Atletas, Últimas Notícias, Organização, Roadmap, Categorias de Peso) utilizam nosso componente global de otimização de cards. No Desktop (monitores largos), a interface renderiza um **Grid Avançado Assimétrico ou Simétrico**. Em Mobile/Tablets, para preservar o conforto do usuário, a estrutura se converte automaticamente em um **Carrossel Interativo (Swipe)**. Essa abordagem previne rolagens verticais exaustivas e unifica a experiência premium independente do dispositivo de acesso.

---

## 🏗️ Estrutura de Diretórios (Otimizada)

```text
/src/
├── app/               # Rotas Públicas, SEO e App Router CORE
├── auth/              # Lógica de Reconhecimento de Sessão e JWT Bridge
├── components/        # UI Kit Global (Iconify, Lazy Images, Glassmorphism)
├── layouts/           # Orquestradores de Frame (Header Cyber-Sports/Footer)
├── locales/           # Dicionários de Tradução Multi-idioma (i18n)
├── actions/           # Camada de Dados (Integração com API de Lutas e Inscrições)
└── sections/          # Features Modulares (Blog, Chaves de Luta, Home, Institucional)
```

---

## 🛠️ Guia de Manutenção Técnica

1.  **Build & Performance**: Utilize sempre `pnpm build` para validar a árvore de dependências. O projeto está extremamente leve após a exclusão de bibliotecas mortas (ThreeGlobe, TipTap, ApexCharts).
2.  **Sincronização**: O frontend consome os dados centralizados em `src/global-config.ts` (variáveis `serverUrl` e `siteUrl`).
3.  **Ambiente de Dev**: O comando `pnpm dev` roda o servidor Turbopack ultra-rápido na porta `8082`.

---

## 🏁 Roadmap de Evolução (Frontend FFC)

- [x] **Construção do Bracket**: Nova UI do Torneio em formato piramidal com responsividade avançada.
- [x] **Identidade Visual Cyber-Sports**: Aplicação de Glassmorphism, Fontes Orbitron e cores de aviso (Amber/Gold) na Home e Patrocinadores.
- [x] **Limpeza Profunda**: Auditoria de `depcheck` com remoção de mais de 30 pacotes Zumbis e redução drástica do bundle (Junho 2026).
- [x] **Migração de SEO para FFC**: Reestruturação do App Router Metadata, OpenGraph e `robots.txt` para engajamento de artes marciais.
- [ ] **Otimização de Ícones**: Migrar pacotes `@iconify` de carregamento online (CDN) para leitura offline (Evitar flickering).
- [ ] **Integração de API Dinâmica**: Substituir mockups de atletas (`ATHLETES`) e cardápio de lutas pelos dados reais vindos do Backend.
- [ ] **Sistema de Inscrições**: Fluxo completo de formulário Hook-Form para cadastramento seguro dos lutadores.

---
> **Final Fight Combat (FFC) - O palco onde a tecnologia encontra a tradição das artes marciais.** 🥋⚔️🏆
