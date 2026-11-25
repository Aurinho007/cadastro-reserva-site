import './Rasgo.css'

// Borda de papel rasgado. Desenhada uma vez quando o módulo carrega (sempre igual).
// lado: 'topo' (o papel fica para baixo da borda) | 'base' (o papel fica para cima)
const LARGURA = 1200
const ALTURA = 28

function gerarBorda(semente) {
  let s = semente
  const aleatorio = () => {
    s = (s * 16807) % 2147483647
    return s / 2147483647
  }
  const pontos = []
  for (let x = 0; x <= LARGURA; x += 8 + aleatorio() * 18) {
    pontos.push(`${x.toFixed(1)},${(4 + aleatorio() * (ALTURA - 8)).toFixed(1)}`)
  }
  pontos.push(`${LARGURA},${(ALTURA / 2).toFixed(1)}`)
  return pontos.join(' ')
}

const bordas = {
  topo: `0,${ALTURA} ${gerarBorda(7)} ${LARGURA},${ALTURA}`,
  base: `0,0 ${gerarBorda(31)} ${LARGURA},0`,
}

export default function Rasgo({ lado = 'topo' }) {
  return (
    <svg
      className={`rasgo rasgo--${lado}`}
      viewBox={`0 0 ${LARGURA} ${ALTURA}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <polygon points={bordas[lado]} />
    </svg>
  )
}
