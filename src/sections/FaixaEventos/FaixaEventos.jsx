import { banda } from '../../data/banda.js'
import Rasgo from '../../components/Rasgo/Rasgo.jsx'
import './FaixaEventos.css'

// Faixa de papel rasgado rolando com os tipos de evento.
// A lista é duplicada para o loop da animação não ter emenda.
const itens = [...banda.eventos, ...banda.eventos]

export default function FaixaEventos() {
  return (
    <div className="faixa">
      <Rasgo lado="topo" />
      <p className="visualmente-oculto">Tocamos em: {banda.eventos.join(', ')}.</p>
      <div className="faixa__trilho" aria-hidden="true">
        {itens.map((evento, i) => (
          <span key={i} className="faixa__item">
            {evento}
            <span className="faixa__separador">✦</span>
          </span>
        ))}
      </div>
      <Rasgo lado="base" />
    </div>
  )
}
