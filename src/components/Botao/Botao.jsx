import Icone from '../Icone/Icone.jsx'
import './Botao.css'

// Botão/link reutilizável.
// variante: 'cheio' (roxo, ação principal) | 'contorno' (secundária)
// Links que começam com http abrem em nova aba automaticamente.
export default function Botao({ href, children, variante = 'cheio', icone, tamanho, ...props }) {
  const classe = `botao botao--${variante}${tamanho === 'grande' ? ' botao--grande' : ''}`
  const conteudo = (
    <>
      {icone ? <Icone nome={icone} /> : null}
      <span>{children}</span>
    </>
  )

  if (href) {
    const externo = href.startsWith('http')
    return (
      <a
        href={href}
        className={classe}
        {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {conteudo}
      </a>
    )
  }

  return (
    <button className={classe} {...props}>
      {conteudo}
    </button>
  )
}
