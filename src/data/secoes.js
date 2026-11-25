// Ordem das seções na página. Define o menu e o número grande de cada seção (01, 02…).
// A Agenda só entra quando há shows futuros, e a numeração se ajusta sozinha.
import { proximosShows } from './shows.js'

export const secoes = [
  { id: 'sobre', menu: 'A banda' },
  { id: 'repertorio', menu: 'Repertório' },
  { id: 'integrantes', menu: 'Integrantes' },
  { id: 'informacoes', menu: 'Como contratar' },
  proximosShows.length > 0 ? { id: 'agenda', menu: 'Agenda' } : null,
  { id: 'contato', menu: 'Contato' },
]
  .filter(Boolean)
  .map((secao, i) => ({ ...secao, numero: String(i + 1).padStart(2, '0') }))

// numero.sobre === '01', numero.contato === '05' (ou '06' com agenda)
export const numero = Object.fromEntries(secoes.map((secao) => [secao.id, secao.numero]))
