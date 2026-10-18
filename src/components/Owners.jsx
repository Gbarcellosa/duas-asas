import { owners } from '../data/content'
import { IconUser } from './Icons'

const isPlaceholder = (v) => typeof v === 'string' && v.trim().startsWith('[')

function Field({ label, value }) {
  if (!value) return null
  return (
    <div className="owner__field">
      <dt>{label}</dt>
      <dd className={isPlaceholder(value) ? 'is-placeholder' : undefined}>{value}</dd>
    </div>
  )
}

export default function Owners() {
  return (
    <section id="proprietarias" className="section section--light" aria-labelledby="prop-titulo">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Quem cuida de você</p>
          <h2 id="prop-titulo">Conheça as proprietárias</h2>
        </div>

        <div className="owners">
          {owners.map((o, i) => (
            <article key={i} className="owner reveal">
              <div className="owner__photo">
                {o.photo ? (
                  <img src={o.photo} alt={o.photoAlt || o.name} width="240" height="240" loading="lazy" decoding="async" />
                ) : (
                  <span className="owner__ph" role="img" aria-label="Espaço reservado para fotografia profissional">
                    <IconUser width={44} height={44} />
                  </span>
                )}
              </div>
              <h3 className={isPlaceholder(o.name) ? 'is-placeholder' : undefined}>{o.name}</h3>
              <dl>
                <Field label="Área de atuação" value={o.area} />
                <Field label="Formação e especializações" value={o.training} />
                <Field label="Experiência profissional" value={o.experience} />
                <Field label="Apresentação" value={o.bio} />
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
