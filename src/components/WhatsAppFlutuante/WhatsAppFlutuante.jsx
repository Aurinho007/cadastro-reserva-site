import { links } from '../../data/banda.js'
import Icone from '../Icone/Icone.jsx'
import './WhatsAppFlutuante.css'

// Botão fixo no canto da tela: o caminho mais curto para contratar, de qualquer ponto da página.
export default function WhatsAppFlutuante() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-flutuante"
      aria-label="Contratar a Cadastro Reserva pelo WhatsApp"
    >
      <Icone nome="whatsapp" tamanho={28} />
    </a>
  )
}
