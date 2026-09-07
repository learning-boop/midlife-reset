import Img from './Img'
import { discovery } from '../data/content'

export default function Discovery() {
  return (
    <section className="disc pillars" id="discovery">
      <div className="wrap">
        <div>
          <p className="kicker">{discovery.kicker}</p>
          <h2>{discovery.title}</h2>
          <p>{discovery.intro}</p>
          <ul>{discovery.bullets.map((b) => <li key={b}><span className="check">✓</span>{b}</li>)}</ul>
          <div className="row">
            <a className="btn btn-plum" href="#">{discovery.cta}</a>
            <a className="btn btn-ghost" href="#faq">Read the FAQs</a>
          </div>
        </div>
        <Img src={discovery.image} />
      </div>
    </section>
  )
}
