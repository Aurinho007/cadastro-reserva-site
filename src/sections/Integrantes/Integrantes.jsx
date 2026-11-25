import { banda } from '../../data/banda.js'
import './Integrantes.css'

export default function Integrantes() {
  return (
    <section id="integrantes" className="secao">
      <div className="container">
        <span className="secao__rotulo">Quem sobe no palco</span>
        <h2 className="secao__titulo">
          <span>Integrantes</span>
        </h2>
        <p className="integrantes__dica" aria-hidden="true">
          Deslize para o lado →
        </p>
      </div>

      {/* Celular: carrossel com rolagem lateral. 720px+: grade com os 5 lado a lado. */}
      <div className="integrantes__janela" tabIndex={0} role="region" aria-label="Integrantes da banda">
        <ul className="integrantes">
          {banda.integrantes.map((pessoa) => (
            <li key={pessoa.nome} className="integrante">
              <img
                src={pessoa.foto}
                alt={`Ilustração de ${pessoa.nome} tocando ${pessoa.funcao.toLowerCase()}`}
                width="520"
                height="716"
                loading="lazy"
                decoding="async"
              />
              <h3 className="integrante__nome">{pessoa.nome}</h3>
              <p className="integrante__funcao">{pessoa.funcao}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
