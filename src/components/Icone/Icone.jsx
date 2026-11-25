import iconeWhatsapp from '../../assets/icones/icone-whatsapp.png'
import iconeInstagram from '../../assets/icones/icone-instagram.png'
import './Icone.css'

// Logos oficiais do WhatsApp e do Instagram (PNG transparente, usados como máscara).
// A cor vem do texto em volta (currentColor): branco no fundo preto, preto no botão roxo.
// Para um ícone novo: PNG preto com fundo transparente em src/assets/icones/ e uma entrada aqui.
const icones = {
  whatsapp: `url("${iconeWhatsapp}")`,
  instagram: `url("${iconeInstagram}")`,
}

export default function Icone({ nome, tamanho = 18 }) {
  return (
    <span
      className="icone"
      aria-hidden="true"
      style={{ width: tamanho, height: tamanho, '--icone': icones[nome] }}
    />
  )
}
