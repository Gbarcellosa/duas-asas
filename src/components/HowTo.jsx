import { steps } from '../data/content'
import WhatsAppButton from './WhatsAppButton'

export default function HowTo() {
  return (
    <section id="agendar" className="section section--sage" aria-labelledby="agendar-titulo">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Como agendar</p>
          <h2 id="agendar-titulo">Falar com a gente é simples</h2>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step reveal">
              <span className="step__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="center reveal">
          <WhatsAppButton variant="dark" size="lg">
            Falar com a Duas Asas
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
