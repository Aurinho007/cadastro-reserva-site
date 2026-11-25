import { Fragment } from 'react'
import { banda, links } from '../../data/banda.js'
import logo from '../../assets/images/logo.png'
import Botao from '../../components/Botao/Botao.jsx'
import './Hero.css'

// Palavras da chamada, entram uma a uma (atraso escalonado via --i)
const palavrasChamada = banda.chamada.split(' ')

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__conteudo">
        <h1 className="hero__logo">
          <img src={logo} alt={banda.nome} width="783" height="849" fetchPriority="high" />
        </h1>

        <div className="hero__texto">
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
