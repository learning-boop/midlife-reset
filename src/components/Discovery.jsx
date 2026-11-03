import Shot from './Shot'
import BookLink from './BookLink'
import { discovery } from '../data/content'
import FillText from './FillText'

export default function Discovery() {
  return (
    <section className="disc" id="discovery">
      <div className="wrap">
        <div>
          <p className="kicker">{discovery.kicker}</p>
          <FillText>{discovery.title}</FillText>
          <p className="lede">{discovery.intro}</p>
          <ul>{discovery.bullets.map((b) => <li key={b}><span className="check">✓</span>{b}</li>)}</ul>
          <div className="row">
            <BookLink>{discovery.cta}</BookLink>
            <a className="btn btn-ghost" href="#faq">Read the FAQs</a>
          </div>
        </div>
        <Shot src={discovery.image} alt={discovery.imageAlt} />
      </div>
    </section>
  )
}
