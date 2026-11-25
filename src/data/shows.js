// Agenda de shows. Datas no formato AAAA-MM-DD.
// Enquanto não houver shows futuros, a seção Agenda e o link dela no menu ficam escondidos.
//
// Exemplo:
// { data: '2027-01-20', cidade: 'Brasília - DF', local: 'Nome do Bar', ingressos: 'https://…' }
export const shows = []

// 'AAAA-MM-DD' -> Date no fuso local (evita o show "voltar" um dia por causa do UTC)
function paraData(texto) {
  const [ano, mes, dia] = texto.split('-').map(Number)
  return new Date(ano, mes - 1, dia)
}

// Calculado uma vez quando a página carrega: só shows de hoje em diante, em ordem.
const hoje = new Date()
hoje.setHours(0, 0, 0, 0)

export const proximosShows = shows
  .map((show) => ({ ...show, dataObj: paraData(show.data) }))
  .filter((show) => show.dataObj >= hoje)
  .sort((a, b) => a.dataObj - b.dataObj)
