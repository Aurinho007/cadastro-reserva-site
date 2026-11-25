import { banda, links } from '../../data/banda.js'
import fotoPalco from '../../assets/images/mari-palco.jpg'
import fotoPalco640 from '../../assets/images/mari-palco-640.jpg'
import Botao from '../../components/Botao/Botao.jsx'
import RedesSociais from '../../components/RedesSociais/RedesSociais.jsx'
import './Contato.css'

const fotoSrcSet = `${fotoPalco640} 514w, ${fotoPalco} 803w`
const fotoSizes = '(min-width: 960px) 560px, 80vw'

export default function Contato() {
  return (
    <section id="contato" className="secao contato">
      <div className="container contato__conteudo">
        <span className="secao__rotulo">Bora fechar?</span>
        <h2 className="contato__titulo">
          Que tal levar essa energia para o seu evento?
        </h2>
        <p className="texto">
          Manda uma mensagem com a data e o tipo de evento. A mensagem já vai pronta, é só completar.
        </p>

        <div className="contato__acoes">
          <Botao href={links.whatsapp} icone="whatsapp" tamanho="grande">
            Chamar no WhatsApp
          </Botao>
          <Botao href={links.instagram} icone="instagram" variante="contorno" tamanho="grande">
            Seguir no Instagram
          </Botao>
        </div>

        <RedesSociais />
      </div>

      <img
        className="contato__foto"
        src={fotoPalco640}
        srcSet={fotoSrcSet}
        sizes={fotoSizes}
        alt={`Mari, vocalista da ${banda.nome}, cantando no palco sob as luzes`}
        width="803"
        height="1000"
        loading="lazy"
        decoding="async"
      />
    </section>
  )
}
