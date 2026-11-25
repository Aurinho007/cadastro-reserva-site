import { banda } from '../../data/banda.js'
import fotoBanda from '../../assets/images/banda-reunida.jpg'
import fotoBanda600 from '../../assets/images/banda-reunida-600.jpg'
import './Sobre.css'

// Medidor que ilustra a proposta: o show começa tranquilo e a energia vai crescendo.
const barras = Array.from({ length: 16 }, (_, i) => i)

const fotoSrcSet = `${fotoBanda600} 600w, ${fotoBanda} 1000w`
const fotoSizes = '(min-width: 960px) 520px, (min-width: 720px) 380px, 280px'

export default function Sobre() {
  return (
    <section id="sobre" className="secao">
      {/* Ordem no celular: título → foto → texto. No computador: foto à esquerda. */}
      <div className="container sobre">
        <header className="sobre__cabecalho">
          <span className="secao__rotulo">Quem somos</span>
          <h2 className="secao__titulo">A banda</h2>
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

          <figure className="energia">
            <div className="energia__barras" aria-hidden="true">
              {barras.map((i) => (
                <span key={i} style={{ '--i': i }} />
              ))}
            </div>
            <figcaption className="energia__legenda">
              <span>Começo tranquilo</span>
              <span>A noite pega fogo</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
