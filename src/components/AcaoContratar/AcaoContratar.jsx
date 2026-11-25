import { useEffect, useState } from 'react'
import { links } from '../../data/banda.js'
import Icone from '../Icone/Icone.jsx'
import './AcaoContratar.css'

// Ação fixa de contratação, sempre ao alcance do polegar.
// Celular: barra no rodapé da tela. Computador (960px+): botão redondo flutuante.
// Some enquanto o topo ou a seção de contato estão na tela, para não duplicar os botões deles.
const SECOES_COM_BOTOES = ['inicio', 'contato']

export default function AcaoContratar() {
  // Navegador sem IntersectionObserver (muito antigo): mostra a ação sempre
  const [visivel, setVisivel] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined
    const naTela = new Set()
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) naTela.add(entrada.target.id)
          else naTela.delete(entrada.target.id)
        }
        setVisivel(naTela.size === 0)
      },
      { rootMargin: '0px 0px -35% 0px' },
    )
    for (const id of SECOES_COM_BOTOES) {
      const secao = document.getElementById(id)
      if (secao) observador.observe(secao)
    }
    return () => observador.disconnect()
  }, [])

  return (
    <div className={`acao-contratar ${visivel ? 'acao-contratar--visivel' : ''}`}>
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="acao-contratar__whatsapp"
        aria-label="Contratar a Cadastro Reserva pelo WhatsApp"
        tabIndex={visivel ? undefined : -1}
      >
        <Icone nome="whatsapp" tamanho={24} />
        <span className="acao-contratar__texto">Contratar o show</span>
      </a>
      <a
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="acao-contratar__instagram"
        aria-label="Instagram da Cadastro Reserva"
        tabIndex={visivel ? undefined : -1}
      >
        <Icone nome="instagram" tamanho={24} />
      </a>
    </div>
  )
}
