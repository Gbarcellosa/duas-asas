import { faqs } from '../data/content'
import { IconChevron } from './Icons'
import WhatsAppButton from './WhatsAppButton'

export default function Faq() {
  return (
    <section id="duvidas" className="section section--sage" aria-labelledby="faq-titulo">
      <div className="container container--narrow">
        <div className="section__head reveal">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 id="faq-titulo">Tire suas dúvidas</h2>
        </div>

        <div className="faq reveal">
          {faqs.map((f) => (
            <details key={f.q} className="faq__item">
              <summary>
                <span>{f.q}</span>
                <IconChevron className="faq__chevron" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <div className="center reveal">
          <p className="faq__more">Ficou com outra dúvida?</p>
          <WhatsAppButton variant="dark">Perguntar pelo WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
