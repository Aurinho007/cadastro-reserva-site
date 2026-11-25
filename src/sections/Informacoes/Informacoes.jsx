import { banda, links } from '../../data/banda.js'
import { numero } from '../../data/secoes.js'
import fotoAoVivo from '../../assets/images/banda-ao-vivo.jpg'
import Botao from '../../components/Botao/Botao.jsx'
import CabecalhoSecao from '../../components/CabecalhoSecao/CabecalhoSecao.jsx'
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
        <CabecalhoSecao numero={numero.informacoes} rotulo="Informações" titulo="Como contratar" />

        {/* Cada informação é um ingresso: canhoto com o nome + corpo com o destaque */}
        <ul className="ingressos">
          {banda.informacoes.map((item) => (
            <li key={item.titulo} className="ingresso">
              {/* li = sombra; bilhete = recorte do picote (a máscara cortaria a sombra se fosse o mesmo elemento) */}
              <div className="ingresso__bilhete">
                <div className="ingresso__canhoto">
                  <span>{item.titulo}</span>
                </div>
                <div className="ingresso__corpo">
                  <p className="ingresso__destaque">{item.destaque}</p>
                  <p className="ingresso__texto">{item.texto}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Botao href={links.whatsapp} icone="whatsapp" tamanho="grande">
          Ver se a sua data está livre
        </Botao>
      </div>
    </section>
  )
}
