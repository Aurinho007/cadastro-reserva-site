---
name: nova-secao
description: Adiciona uma nova seção à página do site da Cadastro Reserva (ex. Galeria, Vídeos, Loja, Imprensa) e a liga no menu. Use quando o pedido for "adicionar uma parte/seção/página nova" ao site.
---

# Adicionar uma seção

O site é uma página única (single page) com seções empilhadas em `src/App.jsx` e navegação por âncora no `Header`.

## Passo a passo

1. **Crie a pasta** `src/sections/<Nome>/` com `<Nome>.jsx` e `<Nome>.css` (mesmas regras da skill `novo-componente`).
2. **Use a estrutura padrão de seção:**

   ```jsx
   <section id="galeria" className="secao">
     <div className="container">
       <h2 className="secao__titulo">
         Nossa <span>galeria</span>
       </h2>
       {/* conteúdo */}
     </div>
   </section>
   ```

   - `id` em minúsculas, sem acento — é a âncora do menu.
   - A palavra dentro de `<span>` no título fica na cor de destaque.
   - **Alterne o fundo:** as seções intercalam `secao` e `secao secao--alt`. Confira a ordem em `App.jsx` e escolha a classe que mantém a alternância.
3. **Dados em `src/data/`**: se a seção lista coisas (fotos, vídeos, produtos), crie `src/data/<nome>.js` exportando um array, com um comentário no topo explicando o formato de cada item.
4. **Estado vazio:** se a lista estiver vazia, mostre `<p className="vazio">…</p>` com uma mensagem amigável.
5. **Registre em `src/App.jsx`** na posição certa dentro de `<main>`.
6. **Adicione ao menu** no array `links` de `src/components/Header/Header.jsx`, na mesma ordem em que aparece na página.

## Depois de criar

Rode `npm run lint` e `npm run build`.
