---
name: atualizar-conteudo
description: Atualiza o conteúdo do site da Cadastro Reserva — adicionar/remover shows na agenda, lançar música, mudar integrantes, texto "sobre", e-mail, WhatsApp ou redes sociais. Use para qualquer mudança de informação que não exija mexer em layout.
---

# Atualizar conteúdo

Todo o conteúdo editável fica em `src/data/`. Mudanças de conteúdo **não devem** alterar componentes nem CSS.

| O que mudar | Arquivo |
| --- | --- |
| Nome, slogan, texto "sobre", integrantes, contato, redes sociais | `src/data/banda.js` |
| Agenda de shows | `src/data/shows.js` |
| Músicas / lançamentos | `src/data/musicas.js` |

## Shows (`shows.js`)

```js
{ data: '2027-03-15', cidade: 'Curitiba - PR', local: 'Nome do Lugar', ingressos: 'https://…' }
```

- `data` sempre em `AAAA-MM-DD`. Se o usuário disser "dia 15 de março", confirme o ano quando não estiver óbvio.
- `cidade` no formato `Cidade - UF`.
- `ingressos` é opcional (`''` esconde o botão).
- Não precisa ordenar nem apagar shows antigos: a seção Agenda ordena por data e esconde os que já passaram.

## Músicas (`musicas.js`)

```js
{ titulo: 'Nome', ano: 2027, tipo: 'Single', link: 'https://open.spotify.com/…', capa: capaNome }
```

- `tipo`: `Single`, `EP` ou `Álbum`.
- Para capa: salve a imagem em `src/assets/images/` (nome em kebab-case, ex. `capa-nome-da-musica.jpg`), importe no topo do arquivo (`import capaNome from '../assets/images/capa-nome-da-musica.jpg'`) e use em `capa`. Sem capa, use `null`.
- Coloque os lançamentos mais recentes primeiro.

## Banda (`banda.js`)

- `sobre` é um array de parágrafos.
- `whatsapp` com DDI e DDD, só números ou formatado (ex. `'55 11 91234-5678'`); vazio esconde o botão.
- Ao adicionar rede social, use a URL completa do perfil.

## Regras

- Textos em português do Brasil, com acentuação correta.
- Remova os textos marcados como "(exemplo)" ou "provisório" quando o conteúdo real for informado.
- Nunca invente datas, locais, links ou nomes de integrantes — pergunte ao usuário.
- No fim, rode `npm run build` para garantir que nada quebrou.
