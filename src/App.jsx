import { sections } from './data/content'
import { useReveal } from './hooks/useReveal'
import Header from './components/Header'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import About from './components/About'
import Owners from './components/Owners'
import Differentials from './components/Differentials'
import HowTo from './components/HowTo'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Treatments />
        <About />
        {sections.owners && <Owners />}
        {sections.differentials && <Differentials />}
        <HowTo />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
