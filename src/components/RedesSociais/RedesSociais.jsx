import { banda, links } from '../../data/banda.js'
import Icone from '../Icone/Icone.jsx'
import './RedesSociais.css'

export default function RedesSociais() {
  return (
    <ul className="redes">
      <li>
        <a href={links.instagram} target="_blank" rel="noopener noreferrer">
          <Icone nome="instagram" />
          <span>
            <strong>Instagram</strong> {banda.contato.instagram}
          </span>
        </a>
      </li>
      <li>
        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
          <Icone nome="whatsapp" />
          <span>
            <strong>WhatsApp</strong> {banda.contato.whatsapp}
          </span>
        </a>
      </li>
    </ul>
  )
}
