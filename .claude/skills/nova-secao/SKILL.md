---
name: nova-secao
description: Adiciona uma nova seção à página do site da Cadastro Reserva (ex. Galeria, Vídeos, Depoimentos, Imprensa) e a liga no menu. Use quando o pedido for "adicionar uma parte/seção/página nova" ao site.
---

# Adicionar uma seção

O site é uma página única com seções empilhadas em `src/App.jsx` e navegação por âncora no `Header`. Ordem atual:

`Hero → FaixaEventos → Sobre → Repertorio → Integrantes → Informacoes → Agenda (só com shows) → Contato`

## Passo a passo

1. **Crie a pasta** `src/sections/<Nome>/` com `<Nome>.jsx` e `<Nome>.css` (mesmas regras da skill `novo-componente`).
2. **Use a estrutura padrão:**

   ```jsx
   <section id="galeria" className="secao">
     <div className="container">
       <span className="secao__rotulo">Frase curta</span>
       <h2 className="secao__titulo">Nossa galeria</h2>
       {/* conteúdo */}
     </div>
   </section>
   ```

   - `id` em minúsculas, sem acento: é a âncora do menu.
   - O título fica **inteiro em roxo** (a classe `.secao__titulo` já faz isso). Não separe palavras em `<span>` com cores diferentes.
   - **Alterne o fundo:** as seções intercalam `secao` e `secao secao--alt`. Veja a ordem acima e escolha a classe que mantém a alternância.
3. **Dados em `src/data/`**: textos e listas vão para `banda.js` (ou um arquivo novo, se for grande), nunca escritos direto no JSX.
4. **Imagens**: `src/assets/images/`, sempre com `width`, `height`, `loading="lazy"` e `decoding="async"` (exceto no topo da página), e `alt` descritivo.
5. **Estado vazio**: se a seção depende de uma lista que pode ficar vazia, retorne `null` (como a Agenda) ou mostre `<p className="vazio">…</p>`.
6. **Registre em `src/App.jsx`** na posição certa dentro de `<main>`.
7. **Adicione ao menu** no array `itensMenu` de `src/components/Header/Header.jsx`, na mesma ordem da página.
8. Se fizer sentido, termine a seção com uma ação: `<Botao href={links.whatsapp} icone="whatsapp">…</Botao>`.

9. **Desenhe primeiro para o celular (320px)**: uma coluna, na ordem de leitura do celular (título → imagem → texto → ação). Depois adicione `@media (min-width: 480px | 720px | 960px | 1200px)` em ordem crescente, só quando o conteúdo precisar. Listas longas de cards no celular podem virar carrossel com `scroll-snap` (veja `Integrantes`).
10. Se a seção tiver botões de contratação próprios, adicione o `id` dela em `SECOES_COM_BOTOES` (`src/components/AcaoContratar/AcaoContratar.jsx`), para a barra fixa não duplicar a ação.

Siga a skill `identidade-visual` para cores, tipografia e elementos da marca, e as regras mobile first da skill `novo-componente`.

## Depois de criar

Rode `npm run lint` e `npm run build`.
