# Site da Cadastro Reserva

Site oficial da banda Cadastro Reserva: banda de rock (covers nacionais e internacionais) para festas, festivais, bares e eventos. **Objetivo principal do site: levar o visitante a contratar o show pelo WhatsApp.**

React 19 + Vite, JavaScript (sem TypeScript), CSS puro com variáveis. O conteúdo veio do release comercial da banda.

## Comandos

- `npm run dev`: servidor de desenvolvimento (http://localhost:5173)
- `npm run build`: build de produção em `dist/`
- `npm run lint`: oxlint

## Estrutura

- `src/sections/`: seções da página única, montadas em `src/App.jsx` (Hero, FaixaEventos, Sobre, Repertorio, Integrantes, Informacoes, Agenda, Contato)
- `src/components/`: peças reutilizáveis (Header, Footer, Botao, Icone, Rasgo, RedesSociais, AcaoContratar)
- `src/data/`: **todo o conteúdo editável** (`banda.js`, `shows.js`)
- `src/styles/variables.css`: cores, fontes, espaçamentos; `global.css`: reset, granulado e utilitários (`.container`, `.secao`, `.secao__rotulo`, `.secao__titulo`, `.texto`)
- `src/assets/images/`: logo, mão, fotos e avatares (extraídos do release)

## Convenções

- **Mobile first**: a maioria dos contratantes vê o site pelo celular. CSS base = celular (320px+); telas maiores só com `min-width` em ordem crescente: 480 → 720 → 960 → 1200px. Sem `max-width` em media queries. Detalhes na skill `novo-componente`.

- Código, nomes e textos em português do Brasil.
- Cada componente/seção tem sua pasta com `Nome.jsx` + `Nome.css`; classes CSS em BEM.
- Sem valores fixos de cor/fonte/espaço no CSS: use as variáveis.
- Conteúdo fica em `src/data/`, nunca escrito direto nos componentes.
- Nunca inventar preços, datas, depoimentos ou números: tudo no site tem que ser verdade.

## Skills

Projeto (`.claude/skills/`):
- `identidade-visual`: preto + roxo `#be73d7`, Anton + Open Sans, papel rasgado, logo
- `novo-componente`: criar componente reutilizável
- `nova-secao`: adicionar seção à página e ao menu
- `atualizar-conteudo`: shows, integrantes, repertório, cachê, contatos

Instaladas (`.agents/skills/`):
- `create-website`: método mensagem → design → conversão (usado como guia, sem os docs/ do fluxo completo)
- `vercel-react-best-practices`: regras de performance React
- `mobile-first-website-design`: método mobile first (base no menor tamanho, breakpoints crescentes, varredura de todas as larguras, Web Vitals). Usado sem o `mise` e sem as integrações externas, que não estão instalados.
