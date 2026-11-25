import { banda } from '../../data/banda.js'
import logoMao from '../../assets/images/logo-mao.png'
import RedesSociais from '../RedesSociais/RedesSociais.jsx'
import './Footer.css'

const ano = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Nome gigante ocupando a largura, como fim de pôster */}
        <p className="footer__nome" aria-hidden="true">
          <span>Cadastro</span>
          <span className="contorno">Reserva</span>
        </p>

        <div className="footer__linha">
          <div className="footer__marca">
            <img src={logoMao} alt="" width="390" height="340" loading="lazy" />
            <span>Rock de verdade.</span>
          </div>
          <RedesSociais />
        </div>

        <p className="footer__copy">
          © {ano} {banda.nome}
        </p>
      </div>
    </footer>
  )
}
