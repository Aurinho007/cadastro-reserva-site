import { banda } from '../../data/banda.js'
import { numero } from '../../data/secoes.js'
import fotoBanda from '../../assets/images/banda-reunida.jpg'
import fotoBanda600 from '../../assets/images/banda-reunida-600.jpg'
import CabecalhoSecao from '../../components/CabecalhoSecao/CabecalhoSecao.jsx'
import './Sobre.css'

// Painel de amplificador que ilustra a proposta: o volume do show vai subindo de 1 a 11.
const niveis = Array.from({ length: 11 }, (_, i) => i + 1)

const fotoSrcSet = `${fotoBanda600} 600w, ${fotoBanda} 1000w`
const fotoSizes = '(min-width: 960px) 520px, (min-width: 720px) 380px, 280px'

export default function Sobre() {
  return (
    <section id="sobre" className="secao">
      {/* Ordem no celular: título → foto → texto. No computador: foto à esquerda. */}
      <div className="container sobre">
        <header className="sobre__cabecalho">
          <CabecalhoSecao numero={numero.sobre} rotulo="Quem somos" titulo="A banda" />
        </header>

        <div className="sobre__foto">
          <img
            src={fotoBanda600}
            srcSet={fotoSrcSet}
            sizes={fotoSizes}
            alt="Os cinco integrantes da Cadastro Reserva reunidos no palco, fazendo o sinal do rock"
            width="1000"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="sobre__corpo">
          {banda.proposta.map((paragrafo) => (
            <p key={paragrafo} className="texto">
              {paragrafo}
            </p>
          ))}

          <figure className="amp">
            <div className="amp__painel" aria-hidden="true">
              <span className="amp__marca">Volume</span>
              <div className="amp__niveis">
                {niveis.map((nivel) => (
                  <span key={nivel} className="amp__nivel" style={{ '--n': nivel }}>
                    <span className="amp__led" />
                    <span className="amp__numero">{nivel}</span>
                  </span>
                ))}
              </div>
              <span className="amp__botao" />
            </div>
            <figcaption className="amp__legenda">
              <span>Começo tranquilo</span>
              <span>A noite pega fogo</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
