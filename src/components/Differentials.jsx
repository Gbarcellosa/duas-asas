import { differentials } from '../data/content'
import { Leaf } from './Ornaments'

export default function Differentials() {
  return (
    <section id="diferenciais" className="section section--dark" aria-labelledby="dif-titulo">
      <div className="container">
        <div className="section__head section__head--light reveal">
          <p className="eyebrow eyebrow--gold">Por que conhecer</p>
          <h2 id="dif-titulo">Por que conhecer a Duas Asas?</h2>
        </div>
        <ul className="diffs">
          {differentials.map((d) => (
            <li key={d.title} className="diff reveal">
              <Leaf className="diff__leaf" />
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
