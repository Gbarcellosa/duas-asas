import { about, images } from '../data/content'
import { Butterfly, LeafCluster } from './Ornaments'

export default function About() {
  return (
    <section id="sobre" className="section section--sage" aria-labelledby="sobre-titulo">
      <div className="container about">
        <div className="about__visual reveal">
          {images.about ? (
            <img src={images.about} alt={images.aboutAlt} width="560" height="640" loading="lazy" decoding="async" />
          ) : (
            <div className="about__emblem" aria-hidden="true">
              <LeafCluster className="leaf-cluster--about" />
              <Butterfly className="about__butterfly" />
            </div>
          )}
        </div>

        <div className="about__text reveal">
          <p className="eyebrow">Sobre a Duas Asas</p>
          <h2 id="sobre-titulo">{about.title}</h2>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="values">
            {about.values.map((v) => (
              <li key={v.title}>
                <strong>{v.title}</strong>
                <span>{v.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
