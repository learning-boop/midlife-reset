import Img from './Img'
import { services } from '../data/content'
import FillText from './FillText'

// The three ways in, each led by a photograph, as on the reference site. Each
// card links down to the section that explains it, so this reads as a map of
// the page rather than a list of claims.
//
// The photographs are decorative and carry an empty alt: the heading directly
// beneath each one already names the service, so describing the picture would
// only repeat it — and none of these people should read as a patient.
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
              <div className="svc-img">
                <Img src={s.image} alt="" />
              </div>
              <div className="svc-body">
                <div className="svc-who">{s.who}</div>
                <h3>{s.name}</h3>
                <p>{s.body}</p>
                <a className="link" href={s.href}>Learn more ›</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

