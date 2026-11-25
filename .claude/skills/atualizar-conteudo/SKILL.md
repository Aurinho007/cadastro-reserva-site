---
name: atualizar-conteudo
description: Atualiza o conteúdo do site da Cadastro Reserva — shows na agenda, integrantes, repertório/artistas, textos, cachê, duração, WhatsApp ou Instagram. Use para qualquer mudança de informação que não exija mexer em layout.
---

# Atualizar conteúdo

Todo o conteúdo editável fica em `src/data/`. Mudanças de conteúdo **não devem** alterar componentes nem CSS.

| O que mudar | Onde |
| --- | --- |
| Chamada, descrição, tipos de evento (faixa rolando), proposta da banda | `banda.js` → `chamada`, `descricao`, `eventos`, `proposta` (lista de parágrafos) |
| Repertório e artistas | `banda.js` → `repertorio.texto`, `repertorio.pedido`, `repertorio.artistas` |
| Integrantes | `banda.js` → `integrantes` |
| Duração, cachê, equipamento, contratação | `banda.js` → `informacoes` |
| WhatsApp e Instagram (texto exibido) | `banda.js` → `contato` |
| Links do WhatsApp e Instagram | `banda.js` → `links` e `mensagemWhatsApp` |
| Agenda de shows | `shows.js` |

## WhatsApp

O número aparece em dois lugares em `banda.js`: o texto exibido (`contato.whatsapp`, ex. `(61) 98164-6762`) e o link (`links.whatsapp`, formato `https://wa.me/55DDDNUMERO`, só dígitos). **Mude os dois juntos.**

## Integrantes

```js
{ nome: 'Nome', funcao: 'Instrumento', foto: fotoNome }
```

- Foto em `src/assets/images/integrante-<nome>.jpg` (kebab-case, sem acento), importada no topo do `banda.js`.
- Proporção das fotos atuais: 520×716. Mantenha a mesma para o grid ficar alinhado.

## Shows (`shows.js`)

```js
{ data: '2027-03-15', cidade: 'Brasília - DF', local: 'Nome do Lugar', ingressos: 'https://…' }
```

- `data` sempre `AAAA-MM-DD`. Se o usuário disser "dia 15 de março", confirme o ano quando não estiver óbvio.
- `ingressos` é opcional (`''` esconde o botão).
- A seção Agenda e o link dela no menu **só aparecem quando há show futuro**. Shows antigos somem sozinhos; não precisa ordenar.

## Como escrever

Método baseado na skill de copywriting `coreyhaines31/marketingskills@copywriting`. O leitor é **quem quer contratar a banda**, quase sempre pelo celular.

- **Simples e curto.** Frases de até ~20 palavras, palavras do dia a dia ("a gente leva", não "disponibilizamos").
- **Concreto.** O leitor tem que conseguir imaginar: "som, luz e instrumentos", "50 minutos direto ou até 3 horas". Nada de "experiência inesquecível", "vibrante", "versátil", "cheio de personalidade".
- **Teste da troca:** se a frase caberia no site de qualquer outra banda, reescreva com um fato da Cadastro Reserva.
- **Uma ideia por bloco**, sem repetir a mesma informação em seções diferentes.
- **Tom:** informal e direto ("Bora fechar?", "a gente"), mas sem gíria que confunda. Um ou dois momentos de impacto por página (hoje: a chamada do topo e "A noite pega fogo").
- **Botões dizem o que a pessoa ganha:** "Contratar o show", "Ver se a sua data está livre". Evite "Saiba mais", "Clique aqui", "Enviar".
- **Evite:** pontos de exclamação, travessão (—) em títulos e botões, "não é X, é Y", listas de negações, e perguntas que você mesmo responde ("O resultado? …").
- **Mensagem do WhatsApp** (`mensagemWhatsApp` em `banda.js`) já vem com os campos que a banda precisa saber (data, cidade e local, tipo de evento).

## Regras

- Textos em português do Brasil, com acentuação correta.
- **Nunca invente** datas, locais, preços, links, depoimentos ou números. Pergunte ao usuário. Tudo que é dito no site sobre preço e estrutura tem que ser verdade.
- Se mudar o cachê ou o número, atualize também a `<meta name="description">` em `index.html`.
- No fim, rode `npm run lint` e `npm run build`.
