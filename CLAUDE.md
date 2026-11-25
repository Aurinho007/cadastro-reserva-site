# Site da Cadastro Reserva

Site oficial da banda Cadastro Reserva. React 19 + Vite, JavaScript (sem TypeScript), CSS puro com variáveis.

## Comandos

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção em `dist/`
- `npm run lint` — oxlint

## Estrutura

- `src/sections/` — seções da página única (Hero, Sobre, Agenda, Músicas, Contato), montadas em `src/App.jsx`
- `src/components/` — peças reutilizáveis (Header, Footer, Botao, RedesSociais)
- `src/data/` — **todo o conteúdo editável** (banda, shows, músicas)
- `src/styles/variables.css` — cores, fontes e espaçamentos; `global.css` — reset e utilitários (`.container`, `.secao`, `.secao__titulo`)
- `src/assets/images/` — fotos e capas

## Convenções

- Código, nomes e textos em português do Brasil.
- Cada componente/seção tem sua pasta com `Nome.jsx` + `Nome.css`; classes CSS em BEM.
- Sem valores fixos de cor/fonte/espaço no CSS: use as variáveis.
- Conteúdo fica em `src/data/`, nunca escrito direto nos componentes.

## Skills do projeto (`.claude/skills/`)

- `novo-componente` — criar componente reutilizável
- `nova-secao` — adicionar seção à página e ao menu
- `atualizar-conteudo` — shows, músicas, integrantes, contatos
- `identidade-visual` — cores, tipografia e tom
