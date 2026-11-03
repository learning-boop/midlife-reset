import Img from './Img'
import { services } from '../data/content'
import FillText from './FillText'

// The three ways in, as three rows rather than a three-across grid: a
// photograph, the service, and the way through to its page. The rhythm is the
// point — nothing else on the page is laid out this way, so these stop reading
// as more of the six pillar cards directly above them.
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
                {/* who it is for reads as a label on the service, so it sits
                    over the name rather than stranded at the far right */}
                <p className="svc-who">{s.who}</p>
                <h3>{s.name}</h3>
                <p>{s.body}</p>
              </div>
              <div className="svc-meta">
                <a className="link" href={s.href}>
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

