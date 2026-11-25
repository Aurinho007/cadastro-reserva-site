import { banda } from '../../data/banda.js'
import './Repertorio.css'

const { texto, artistas } = banda.repertorio

export default function Repertorio() {
  return (
    <section id="repertorio" className="secao secao--alt">
      <div className="container repertorio">
        <div>
          <span className="secao__rotulo">O que tocamos</span>
          <h2 className="secao__titulo">
            O <span>repertório</span>
          </h2>
          <p className="texto">{texto}</p>
          <p className="texto">
            <strong>Quer uma música específica na sua festa?</strong> Dá para negociar a inclusão no
            repertório na hora de fechar o show.
          </p>
        </div>

        <div>
          <p className="repertorio__intro">Hits de</p>
          <ul className="repertorio__artistas">
            {artistas.map((artista) => (
              <li key={artista}>{artista}</li>
            ))}
            <li className="repertorio__mais">e muito mais rock nacional e internacional</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
