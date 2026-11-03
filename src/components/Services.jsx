import { services } from '../data/content'
import FillText from './FillText'

// The three ways in. Each card links down to the section that explains it, so
// this reads as a map of the page rather than a list of claims.
export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="svc-head">
          <p className="kicker">{services.kicker}</p>
          <FillText>{services.title}</FillText>
          <p className="lede">{services.intro}</p>
        </div>
        <div className="svc">
          {services.items.map((s) => (
            <article key={s.name} data-reveal>
              <div className="svc-who">{s.who}</div>
              <h3>{s.name}</h3>
              <p>{s.body}</p>
              <a className="link" href={s.href}>Learn more ›</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
