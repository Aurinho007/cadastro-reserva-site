import { banda } from '../../data/banda.js'
import logoMao from '../../assets/images/logo-mao.png'
import RedesSociais from '../RedesSociais/RedesSociais.jsx'
import './Footer.css'

const ano = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__conteudo">
        <div className="footer__marca">
          <img src={logoMao} alt="" width="390" height="340" loading="lazy" />
          <span>{banda.nome}</span>
        </div>
        <RedesSociais />
        <p className="footer__copy">
          © {ano} {banda.nome}. Rock de verdade.
        </p>
      </div>
    </footer>
  )
}
