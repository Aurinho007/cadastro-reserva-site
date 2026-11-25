import { banda } from '../../data/banda.js'
import './FitasCruzadas.css'

// Duas "fitas de isolamento" cruzadas em X, rolando em sentidos opostos.
// As listas são duplicadas para o loop da animação não ter emenda.
const fitaEventos = [...banda.eventos, ...banda.eventos, ...banda.eventos]
const fitaFatos = [...banda.fatos, ...banda.fatos, ...banda.fatos]

function Fita({ itens, variante }) {
  return (
    <div className={`fita fita--${variante}`}>
      <div className="fita__trilho">
        {itens.map((item, i) => (
          <span key={i} className="fita__item">
            {item}
            <span className="fita__separador">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function FitasCruzadas() {
  return (
    <div className="fitas">
      <p className="visualmente-oculto">
        Tocamos em: {banda.eventos.join(', ')}. {banda.fatos.join('. ')}.
      </p>
      <div aria-hidden="true">
        <Fita itens={fitaFatos} variante="papel" />
        <Fita itens={fitaEventos} variante="roxa" />
      </div>
    </div>
  )
}
