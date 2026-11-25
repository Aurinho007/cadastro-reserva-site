---
name: identidade-visual
description: Guia de identidade visual do site da Cadastro Reserva — preto e roxo (#be73d7), logo de letras recortadas, papel rasgado, tipografia Anton + Open Sans. Use ao estilizar qualquer coisa, mudar cores/fontes ou criar seções novas, para manter tudo consistente com o release da banda.
---

# Identidade visual

A identidade vem do **release comercial** da banda: fundo preto com textura de papel amassado, papel rasgado, letras recortadas tipo "bilhete de resgate" e a mão roxa fazendo o sinal do rock com um microfone.

## Fonte da verdade

Todas as decisões visuais vivem em `src/styles/variables.css`. Para mudar a cara do site, altere **as variáveis**, não o CSS dos componentes.

## Cores

| Variável | Valor | Uso |
| --- | --- | --- |
| `--cor-fundo` | `#0b0b0b` | Fundo principal (preto quente, não `#000`) |
| `--cor-fundo-alt` | `#141414` | Seções alternadas (`.secao--alt`) |
| `--cor-superficie` | `#1c1c1c` | Cards |
| `--cor-texto` / `--cor-texto-suave` | `#f4f1ec` / `#b4b0aa` | Texto principal / secundário |
| `--cor-destaque` | `#be73d7` | **Roxo da banda**: títulos de seção (inteiros), botões, detalhes |
| `--cor-destaque-claro` / `-escuro` | `#dcaaec` / `#9a4fb4` | Hover / variações |
| `--cor-papel` | `#e9e6e0` | Papel rasgado (faixa, etiquetas, molduras) |

Regras:
- **Texto sobre roxo é sempre preto** (`--cor-sobre-destaque`). Branco sobre `#be73d7` não passa no contraste (3:1).
- **Títulos de seção são inteiros em roxo**: nada de artigo branco e o resto roxo.
- Fora os títulos, o roxo é tempero: um botão principal por bloco e detalhes. Nunca em blocos grandes de fundo nem em texto corrido.
- Nada de gradiente roxo→azul. Brilhos roxos só como `radial-gradient` sutil (opacidade ≤ 0.25).

## Tipografia

- **Títulos:** `--fonte-titulo` (Anton), sempre em caixa alta — igual aos títulos do release.
- **Texto:** `--fonte-texto` (Open Sans), 17px, linha 1.65, largura máx. ~62ch (`.texto`).
- **Rótulos** acima dos títulos (`.secao__rotulo`): 0.8rem, negrito, caixa alta, `letter-spacing: 0.18em`, **branco** (`--cor-texto`), em contraste com o título roxo logo abaixo.
- Títulos responsivos com `clamp()`.
- O nome da banda em letras recortadas **é a logo** (`src/assets/images/logo.png`). Não tente recriar com fontes.

## Elementos da marca

- **Logo completa** (`logo.png`): só no topo (Hero). PNG transparente, feita para fundo preto.
- **Mão com microfone** (`logo-mao.png`): cabeçalho, rodapé e favicon.
- **Papel rasgado**: componente `Rasgo` (bordas) + `--cor-papel`. Use em faixas e divisórias, com parcimônia.
- **Etiquetas recortadas**: listas curtas e marcantes (ex.: artistas do repertório) alternando papel/preto contornado/roxo, levemente giradas.
- **Granulado**: já aplicado no `body::after` do `global.css`; não adicione outro.
- **Fotos do release** já vêm com moldura de papel rasgado. Use `mask-image: radial-gradient(...)` para sumir com os cantos escuros.

## Movimento

- Curva padrão `--curva` (expo-out). Anime só `transform` e `opacity`.
- Entradas com atraso escalonado (~80 ms por item) usando a variável CSS `--i`.
- `prefers-reduced-motion` já desliga animações no `global.css`.

## Tom

Rock, direto, festeiro, em português do Brasil. Frases curtas. O foco do site é **fazer a pessoa contratar o show pelo WhatsApp**: toda seção importante termina perto de uma ação.

## Ao mudar a identidade

1. Atualize `variables.css` **e esta skill**.
2. Fontes do Google Fonts ficam no `<head>` de `index.html`.
3. Confira o contraste (mínimo 4.5:1 para texto).
