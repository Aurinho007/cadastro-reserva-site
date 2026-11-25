import { Fragment } from 'react'
import { banda, links } from '../../data/banda.js'
import logo from '../../assets/images/logo.png'
import logo500 from '../../assets/images/logo-500.png'
import Botao from '../../components/Botao/Botao.jsx'
import './Hero.css'

// Palavras da chamada, entram uma a uma (atraso escalonado via --i)
const palavrasChamada = banda.chamada.split(' ')

// Celular baixa a logo menor; computador, a maior
const logoSrcSet = `${logo500} 461w, ${logo} 783w`
const logoSizes = '(min-width: 960px) 480px, 240px'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__conteudo">
        <h1 className="hero__logo">
          {/* Logo com um disco de vinil brilhante girando atrás */}
          <span className="hero__marca">
            <span className="hero__disco" aria-hidden="true" />
            <img
              src={logo500}
              srcSet={logoSrcSet}
              sizes={logoSizes}
              alt={banda.nome}
              width="783"
              height="849"
              fetchPriority="high"
            />
          </span>
        </h1>

        <div className="hero__texto">
          <p className="hero__aovivo">
            <span className="hero__ponto" aria-hidden="true" />
                Rock nacional e internacional
          </p>
          <p className="hero__chamada">
            {palavrasChamada.map((palavra, i) => (
              <Fragment key={i}>
                <span style={{ '--i': i }}>{palavra}</span>{' '}
              </Fragment>
            ))}
          </p>
          <p className="hero__descricao">{banda.descricao}</p>
          <div className="hero__acoes">
            <Botao href={links.whatsapp} icone="whatsapp" tamanho="grande">
              Contratar o show
            </Botao>
            <Botao href={links.instagram} icone="instagram" variante="contorno" tamanho="grande">
              {banda.contato.instagram}
            </Botao>
          </div>
        </div>
      </div>
    </section>
  )
}
