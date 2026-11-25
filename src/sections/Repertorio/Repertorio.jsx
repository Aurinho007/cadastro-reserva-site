import { banda } from '../../data/banda.js'
import { numero } from '../../data/secoes.js'
import CabecalhoSecao from '../../components/CabecalhoSecao/CabecalhoSecao.jsx'
import './Repertorio.css'

const { texto, pedido, artistas } = banda.repertorio

export default function Repertorio() {
  return (
    <section id="repertorio" className="secao secao--alt">
      <div className="container repertorio">
        <div>
          <CabecalhoSecao numero={numero.repertorio} rotulo="O que tocamos" titulo="O repertório" />
          <p className="texto">{texto}</p>
          <p className="texto">
            <strong>{pedido.pergunta}</strong> {pedido.resposta}
          </p>
        </div>

        <div>
          <p className="repertorio__intro">Hits de</p>
          <ul className="repertorio__artistas">
            {artistas.map((artista) => (
              <li key={artista}>{artista}</li>
            ))}
            <li className="repertorio__mais">e outros nomes do rock nacional e internacional</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
