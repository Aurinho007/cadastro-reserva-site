import { useEffect, useState } from 'react'
import { banda, links } from '../../data/banda.js'
import { proximosShows } from '../../data/shows.js'
import logoMao from '../../assets/images/logo-mao.png'
import Icone from '../Icone/Icone.jsx'
import './Header.css'

// Ordem do menu = ordem das seções na página. Agenda só aparece se houver shows.
const itensMenu = [
  { href: '#sobre', rotulo: 'A banda' },
  { href: '#repertorio', rotulo: 'Repertório' },
  { href: '#integrantes', rotulo: 'Integrantes' },
  { href: '#informacoes', rotulo: 'Como contratar' },
  proximosShows.length > 0 ? { href: '#agenda', rotulo: 'Agenda' } : null,
  { href: '#contato', rotulo: 'Contato' },
].filter(Boolean)

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false)

  // Menu do celular aberto: trava a rolagem da página e fecha com Esc
  useEffect(() => {
    if (!aberto) return undefined
    const raiz = document.documentElement
    raiz.classList.add('menu-aberto')
    const aoTeclar = (evento) => {
      if (evento.key === 'Escape') setAberto(false)
    }
    window.addEventListener('keydown', aoTeclar)
    return () => {
      raiz.classList.remove('menu-aberto')
      window.removeEventListener('keydown', aoTeclar)
    }
  }, [aberto])

  return (
    <header className="header">
      <div className="container header__conteudo">
        <a href="#inicio" className="header__marca" onClick={fechar}>
          <img src={logoMao} alt="" width="390" height="340" />
          <span>{banda.nome}</span>
        </a>

        <button
          className={`header__menu-botao ${aberto ? 'header__menu-botao--aberto' : ''}`}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAberto((valor) => !valor)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="menu-principal"
          className={`header__nav ${aberto ? 'header__nav--aberto' : ''}`}
          aria-label="Principal"
        >
          <ul className="header__links">
            {itensMenu.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={fechar}>
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>

          <div className="header__acoes">
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="header__instagram"
              aria-label="Instagram da Cadastro Reserva"
            >
              <Icone nome="instagram" tamanho={20} />
              <span className="header__instagram-texto">{banda.contato.instagram}</span>
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="header__cta"
              onClick={fechar}
            >
              <span className="header__cta-celular">Contratar pelo WhatsApp</span>
              <span className="header__cta-computador">Contratar</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
