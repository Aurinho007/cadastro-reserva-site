import './CabecalhoSecao.css'

// Cabeçalho padrão das seções: barra roxa antes do rótulo + título roxo,
// com o número da seção grande e contornado ao fundo.
// classeTitulo: troca a classe do título quando a seção tem um título próprio (ex.: contato).
export default function CabecalhoSecao({ numero, rotulo, titulo, classeTitulo = 'secao__titulo' }) {
  return (
    <header className="cabecalho-secao">
      <span className="cabecalho-secao__numero" aria-hidden="true">
        {numero}
      </span>
      <span className="secao__rotulo">{rotulo}</span>
      <h2 className={classeTitulo}>{titulo}</h2>
    </header>
  )
}
