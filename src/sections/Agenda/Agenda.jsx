import { proximosShows } from '../../data/shows.js'
import { numero } from '../../data/secoes.js'
import Botao from '../../components/Botao/Botao.jsx'
import CabecalhoSecao from '../../components/CabecalhoSecao/CabecalhoSecao.jsx'
import './Agenda.css'

// Só aparece quando há shows futuros em src/data/shows.js
export default function Agenda() {
  if (proximosShows.length === 0) return null

  return (
    <section id="agenda" className="secao">
      <div className="container">
        <CabecalhoSecao numero={numero.agenda} rotulo="Vem ver ao vivo" titulo="Próximos shows" />

        <ul className="agenda__lista">
          {proximosShows.map((show) => (
            <li key={`${show.data}-${show.local}`} className="agenda__item">
              <div className="agenda__data">
                <span className="agenda__dia">{show.dataObj.getDate()}</span>
                <span className="agenda__mes">
                  {show.dataObj.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')}
                </span>
              </div>
              <div className="agenda__info">
                <strong>{show.local}</strong>
                <span>{show.cidade}</span>
              </div>
              {show.ingressos ? (
                <Botao href={show.ingressos} variante="contorno">
                  Comprar ingresso
                </Botao>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
