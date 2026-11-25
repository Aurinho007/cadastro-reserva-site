import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import AcaoContratar from './components/AcaoContratar/AcaoContratar.jsx'
import Hero from './sections/Hero/Hero.jsx'
import FaixaEventos from './sections/FaixaEventos/FaixaEventos.jsx'
import Sobre from './sections/Sobre/Sobre.jsx'
import Repertorio from './sections/Repertorio/Repertorio.jsx'
import Integrantes from './sections/Integrantes/Integrantes.jsx'
import Informacoes from './sections/Informacoes/Informacoes.jsx'
import Agenda from './sections/Agenda/Agenda.jsx'
import Contato from './sections/Contato/Contato.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FaixaEventos />
        <Sobre />
        <Repertorio />
        <Integrantes />
        <Informacoes />
        <Agenda />
        <Contato />
      </main>
      <Footer />
      <AcaoContratar />
    </>
  )
}
