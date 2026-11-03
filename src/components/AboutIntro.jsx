import Shot from './Shot'
import { aboutIntro as a } from '../data/content'
import FillText from './FillText'

// A light band, so it does not repeat the hero's dark green one screen above
// it, with a different photograph for the same reason. The full biography is
// on her own page; this only has to introduce her and point there.
export default function AboutIntro() {
  return (
    <section className="aboutintro" id="about">
      <div className="wrap">
        <div>
          <p className="kicker">{a.kicker}</p>
          <FillText>{a.title}</FillText>
          {a.body.map((p) => <p key={p}>{p}</p>)}
          <a className="btn btn-ghost" href="/about.html">{a.cta} →</a>
        </div>
        <Shot src={a.image} alt={a.imageAlt} />
      </div>
    </section>
  )
}

