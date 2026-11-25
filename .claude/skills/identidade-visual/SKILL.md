---
name: identidade-visual
description: Guia de identidade visual do site da Cadastro Reserva — cores, tipografia, espaçamentos e tom. Use ao estilizar qualquer coisa, mudar cores/fontes do site ou criar telas novas, para manter tudo consistente.
---

# Identidade visual

## Fonte da verdade

Todas as decisões visuais vivem em `src/styles/variables.css`. Para mudar a cara do site, altere **as variáveis**, não os CSS dos componentes.

## Paleta atual

| Variável | Uso |
| --- | --- |
| `--cor-fundo` (`#0e0e10`) | Fundo principal |
| `--cor-fundo-alt` (`#18181c`) | Fundo das seções alternadas (`.secao--alt`) |
| `--cor-superficie` (`#222228`) | Cards e blocos sobre o fundo |
| `--cor-texto` / `--cor-texto-suave` | Texto principal / secundário |
| `--cor-destaque` (`#e63946`) | Vermelho da banda: botões, detalhes, palavra destacada dos títulos |
| `--cor-borda` | Bordas sutis |

Regra: o vermelho de destaque é **tempero** — botões principais, uma palavra por título, detalhes. Nunca em blocos grandes de fundo nem em texto corrido.

## Tipografia

- **Títulos:** `--fonte-titulo` (Bebas Neue), sempre em `h1`/`h2`/`h3`. Caixa alta já é natural da fonte.
- **Texto:** `--fonte-texto` (Inter).
- Rótulos pequenos (menu, funções dos integrantes, botões): `text-transform: uppercase` + `letter-spacing: 0.08em–0.1em`.
- Tamanhos de título responsivos com `clamp()`.

## Espaçamento e forma

- Use só a escala `--espaco-xs/sm/md/lg/xl`.
- Cantos com `--raio`; transições com `--transicao`.
- Largura do conteúdo limitada por `.container` (`--largura-max`).

## Tom

Rock, escuro, direto. Visual limpo com contraste alto; nada de gradientes coloridos chamativos além do brilho vermelho sutil do Hero. Textos curtos, informais e em português do Brasil.

## Ao mudar a identidade

Se o usuário trouxer logo, cores ou fontes oficiais da banda:
1. Atualize as variáveis em `variables.css` (e este arquivo, para refletir a nova paleta).
2. Fontes do Google Fonts são carregadas no `<head>` de `index.html` — troque o link lá.
3. Logo: salve em `src/assets/images/` e substitua o texto em `Header.jsx`.
4. Confira o contraste de texto sobre fundo (mínimo 4.5:1).
