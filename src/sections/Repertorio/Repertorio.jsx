import { banda } from '../../data/banda.js'
import './Repertorio.css'

const { texto, pedido, artistas } = banda.repertorio

export default function Repertorio() {
  return (
    <section id="repertorio" className="secao secao--alt">
      <div className="container repertorio">
        <div>
          <span className="secao__rotulo">O que tocamos</span>
          <h2 className="secao__titulo">O repertório</h2>
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
