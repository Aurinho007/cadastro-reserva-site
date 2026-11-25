import { useState } from 'react'
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
  { href: '#informacoes', rotulo: 'Informações' },
  proximosShows.length > 0 ? { href: '#agenda', rotulo: 'Agenda' } : null,
  { href: '#contato', rotulo: 'Contato' },
].filter(Boolean)

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false)

  return (
    <header className="header">
      <div className="container header__conteudo">
        <a href="#inicio" className="header__marca" onClick={fechar}>
          <img src={logoMao} alt="" width="390" height="340" />
          <span>{banda.nome}</span>
        </a>

        <nav className={`header__nav ${aberto ? 'header__nav--aberto' : ''}`} aria-label="Principal">
          {itensMenu.map((item) => (
            <a key={item.href} href={item.href} onClick={fechar}>
              {item.rotulo}
            </a>
          ))}
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="header__instagram"
            aria-label="Instagram da Cadastro Reserva"
          >
            <Icone nome="instagram" />
            <span className="header__instagram-texto">Instagram</span>
          </a>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="header__cta"
            onClick={fechar}
          >
            Contratar
          </a>
        </nav>

        <button
          className={`header__menu-botao ${aberto ? 'header__menu-botao--aberto' : ''}`}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          onClick={() => setAberto((valor) => !valor)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
