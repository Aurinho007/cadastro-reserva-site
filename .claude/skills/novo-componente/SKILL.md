---
name: novo-componente
description: Cria um componente React reutilizável no site da Cadastro Reserva seguindo o padrão do projeto (pasta própria, JSX + CSS, variáveis de tema). Use quando o pedido for criar um botão, card, player, galeria, modal ou qualquer peça de UI usada em mais de um lugar.
---

# Criar um componente

Componentes ficam em `src/components/<NomeEmPascalCase>/`, cada um com:

- `<Nome>.jsx` — o componente, com `export default function <Nome>()`
- `<Nome>.css` — estilos do componente, importados no próprio JSX

## Regras

1. **Nomes em português**, em PascalCase para componentes (`CardShow`, `PlayerMusica`) e camelCase para props/variáveis.
2. **Classes CSS no padrão BEM**, prefixadas pelo nome do componente em minúsculas: `.card-show`, `.card-show__titulo`, `.card-show--destaque`.
3. **Nunca use cores, fontes ou espaçamentos fixos** no CSS — use as variáveis de `src/styles/variables.css` (`var(--cor-destaque)`, `var(--espaco-md)` etc.). Se faltar uma variável, crie-a lá.
4. **Conteúdo não vai no componente.** Textos, links e listas da banda vêm de `src/data/`. O componente recebe dados por props ou importa de `src/data/`.
5. Reaproveite o que já existe: `Botao` (links/botões, variantes `cheio` e `contorno`) e `RedesSociais`.
6. Links externos sempre com `target="_blank" rel="noopener noreferrer"`.
7. Acessibilidade: `alt` em imagens, `aria-label` em botões só com ícone, HTML semântico (`<nav>`, `<ul>`, `<button>`).
8. Responsivo: teste mentalmente em ~360px de largura; use `@media (max-width: 720px)` quando precisar.

## Modelo

```jsx
import './CardExemplo.css'

export default function CardExemplo({ titulo, children }) {
  return (
    <article className="card-exemplo">
      <h3 className="card-exemplo__titulo">{titulo}</h3>
      <div className="card-exemplo__corpo">{children}</div>
    </article>
  )
}
```

## Depois de criar

Rode `npm run lint` e `npm run build` para conferir que não quebrou nada.
