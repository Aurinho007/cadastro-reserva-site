---
name: novo-componente
description: Cria um componente React reutilizável no site da Cadastro Reserva seguindo o padrão do projeto (pasta própria, JSX + CSS, variáveis de tema). Use quando o pedido for criar um botão, card, player, galeria, modal ou qualquer peça de UI usada em mais de um lugar.
---

# Criar um componente

Componentes ficam em `src/components/<NomeEmPascalCase>/`, cada um com:

- `<Nome>.jsx`: o componente, com `export default function <Nome>()`
- `<Nome>.css`: estilos do componente, importados no próprio JSX

## Já existem (reaproveite)

| Componente | Para quê |
| --- | --- |
| `Botao` | Links/botões. `variante="cheio"` (roxo, ação principal) ou `"contorno"`; `icone="whatsapp|instagram|seta"`; `tamanho="grande"`. Links `http` abrem em nova aba sozinhos. |
| `Icone` | Ícones SVG de traço. Novos ícones entram no objeto `icones`. |
| `Rasgo` | Borda de papel rasgado (`lado="topo"` ou `"base"`); a cor vem do `color` do pai. |
| `RedesSociais` | Lista Instagram + WhatsApp com ícones. |
| `AcaoContratar` | Ação fixa de contratação: barra no rodapé do celular, botão redondo no computador. Some enquanto o topo ou o contato estão na tela. |

## Regras

1. **Nomes em português**: PascalCase para componentes (`CardShow`), camelCase para props/variáveis.
2. **Classes CSS em BEM**, prefixadas pelo nome do componente: `.card-show`, `.card-show__titulo`, `.card-show--destaque`.
3. **Sem cores, fontes ou espaçamentos fixos**: use as variáveis de `src/styles/variables.css`. Se faltar uma, crie lá.
4. **Conteúdo não vai no componente.** Textos e links vêm de `src/data/` (por props ou import).
5. **Links externos** com `target="_blank" rel="noopener noreferrer"` (o `Botao` já faz isso).
6. **Acessibilidade**: `alt` em imagens, `aria-label` em botões só com ícone, HTML semântico, áreas de toque ≥ 44px.
7. **Performance** (skill `vercel-react-best-practices`):
   - Dados e JSX estáticos fora do componente (no nível do módulo).
   - Nunca declare componente dentro de outro componente.
   - Renderização condicional com ternário (`cond ? <X /> : null`), não `&&`.
   - Imagens com `width`/`height` e `loading="lazy"` fora da primeira tela.
   - Import direto do arquivo, sem arquivos "barril" (`index.js` reexportando tudo).
8. **Mobile first** (a maioria dos contratantes acessa pelo celular):
   - O CSS base (sem media query) é o do celular, a partir de **320px**.
   - Telas maiores só com `@media (min-width: …)`, em ordem crescente, usando apenas **480 → 720 → 960 → 1200px**. Nunca use `max-width` em media query.
   - Uma tela maior pode ganhar espaço, colunas e tamanho, mas **não pode perder conteúdo** nem esconder a ação de contratar.
   - Alvos de toque com pelo menos 44px (`var(--alvo-toque)` = 48px).
   - Efeitos de `:hover` só dentro de `@media (hover: hover)`; no toque use `:active`.
   - Imagens grandes: gere uma versão menor e use `srcSet` + `sizes` (veja `Hero.jsx` e `Sobre.jsx`).
   - Nada pode estourar a largura da tela. Elementos que "sangram" para fora precisam de um pai com `overflow: hidden` (veja `.faixa-moldura`).

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

Rode `npm run lint` e `npm run build`.
