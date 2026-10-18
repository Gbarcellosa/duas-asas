import { treatments } from '../data/content'
import { IconLaser, IconEar } from './Icons'
import WhatsAppButton from './WhatsAppButton'

const icons = { laser: IconLaser, ear: IconEar }

export default function Treatments() {
  return (
    <section id="tratamentos" className="section section--light" aria-labelledby="tratamentos-titulo">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Nossos tratamentos</p>
          <h2 id="tratamentos-titulo">Dois caminhos de cuidado</h2>
          <p className="section__lead">Conheça os atendimentos oferecidos pela Duas Asas.</p>
        </div>

        <div className="cards">
          {treatments.map((t) => {
            const Icon = icons[t.icon]
            return (
              <article key={t.id} className="card reveal">
                <div className="card__icon">
                  <Icon width={30} height={30} />
                </div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <ul className="tags" aria-label={`Temas de ${t.title}`}>
                  {t.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <WhatsAppButton
                  variant="dark"
                  message={t.message}
                  ariaLabel={`Quero saber mais sobre ${t.title}`}
                >
                  Quero saber mais
                </WhatsAppButton>
              </article>
            )
          })}
        </div>

        <p className="notice reveal">
          As informações deste site têm caráter informativo e não substituem avaliação, diagnóstico ou tratamento
          médico. A indicação e os resultados variam de pessoa para pessoa.
        </p>
      </div>
    </section>
  )
}
