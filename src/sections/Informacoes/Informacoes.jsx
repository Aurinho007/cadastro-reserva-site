import { banda, links } from '../../data/banda.js'
import fotoAoVivo from '../../assets/images/banda-ao-vivo.jpg'
import Botao from '../../components/Botao/Botao.jsx'
import './Informacoes.css'

export default function Informacoes() {
  return (
    <section id="informacoes" className="secao secao--alt informacoes">
      <div className="informacoes__foto">
        <img
          src={fotoAoVivo}
          alt="Colagem de fotos da Cadastro Reserva ao vivo: baixo, guitarra e a vocalista cantando"
          width="838"
          height="1100"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="informacoes__conteudo">
        <span className="secao__rotulo">Para contratar</span>
        <h2 className="secao__titulo">
          <span>Informações</span>
        </h2>

        <dl className="informacoes__grade">
          {banda.informacoes.map((item) => (
            <div key={item.titulo} className="info">
              <dt className="info__titulo">{item.titulo}</dt>
              <dd>
                <p className="info__destaque">{item.destaque}</p>
                <p className="info__texto">{item.texto}</p>
              </dd>
            </div>
          ))}
        </dl>

        <Botao href={links.whatsapp} icone="whatsapp" tamanho="grande">
          Consultar data no WhatsApp
        </Botao>
      </div>
    </section>
  )
}
