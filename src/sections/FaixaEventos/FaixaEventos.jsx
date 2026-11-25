import { banda } from '../../data/banda.js'
import Rasgo from '../../components/Rasgo/Rasgo.jsx'
import './FaixaEventos.css'

// Faixa de papel rasgado rolando com os tipos de evento.
// A lista é duplicada para o loop da animação não ter emenda.
const itens = [...banda.eventos, ...banda.eventos]

export default function FaixaEventos() {
  // A moldura corta o que passa das laterais (sem ela o celular "arrasta" a página para o lado)
  return (
    <div className="faixa-moldura">
      <div className="faixa">
        <Rasgo lado="topo" />
        <p className="visualmente-oculto">Tocamos em: {banda.eventos.join(', ')}.</p>
        <div className="faixa__janela" aria-hidden="true">
          <div className="faixa__trilho">
            {itens.map((evento, i) => (
              <span key={i} className="faixa__item">
                {evento}
                <span className="faixa__separador">✦</span>
              </span>
            ))}
          </div>
        </div>
        <Rasgo lado="base" />
      </div>
    </div>
  )
}
