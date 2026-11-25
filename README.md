# Cadastro Reserva — Site

Site oficial da banda **Cadastro Reserva**, feito com React + Vite.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Outros comandos

| Comando | O que faz |
| --- | --- |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Serve o build localmente para conferência |
| `npm run lint` | Verifica o código |

## Editando o conteúdo

Tudo que muda com frequência fica em `src/data/`:

- `banda.js` — nome, slogan, texto "sobre", integrantes, contato e redes sociais
- `shows.js` — agenda (shows que já passaram somem sozinhos)
- `musicas.js` — lançamentos

Cores e fontes ficam em `src/styles/variables.css`.

## Estrutura

```
src/
├── assets/images/   fotos e capas
├── components/      Header, Footer, Botao, RedesSociais
├── data/            conteúdo editável
├── sections/        Hero, Sobre, Agenda, Musicas, Contato
├── styles/          variáveis de tema e estilos globais
├── App.jsx
└── main.jsx
```
