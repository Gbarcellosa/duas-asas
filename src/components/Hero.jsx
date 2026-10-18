import { images } from '../data/content'
import { Butterfly, LeafCluster } from './Ornaments'
import WhatsAppButton from './WhatsAppButton'

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <LeafCluster className="leaf-cluster--hero" />
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow eyebrow--gold">Laserterapia · Auriculogia</p>
          <h1 id="hero-titulo">Cuidado, equilíbrio e bem-estar para você.</h1>
          <p className="hero__sub">
            Conheça a Duas Asas, um espaço dedicado ao cuidado e ao bem-estar, com atendimentos em laserterapia e
            auriculogia.
          </p>
          <div className="hero__actions">
            <WhatsAppButton variant="primary" size="lg">
              Agendar pelo WhatsApp
            </WhatsAppButton>
            <a className="btn btn--outline-light btn--lg" href="#tratamentos">
              <span>Conhecer nossos tratamentos</span>
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden={images.hero ? undefined : true}>
          {images.hero ? (
            <div className="hero__photo">
              <img src={images.hero} alt={images.heroAlt} width="640" height="760" loading="eager" decoding="async" />
            </div>
          ) : (
            <div className="hero__emblem">
              <Butterfly className="hero__butterfly" />
              <p className="hero__emblem-name">Duas Asas</p>
              <p className="hero__emblem-slogan">Saúde que cuida. Estética que transforma.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
