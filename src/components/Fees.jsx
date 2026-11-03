import { fees, site } from '../data/content'
import FillText from './FillText'

// One flat list rather than the old tabbed ladders: these are eight distinct
// items at eight prices, not three tiers of the same thing.
export default function Fees() {
  return (
    <section className="fees" id="fees">
      <div className="wrap">
        <div className="narrow-head">
          <p className="kicker">{fees.kicker}</p>
          <FillText>{fees.title}</FillText>
          <p className="lede">{fees.intro}</p>
        </div>
        <div className="fee-list">
          {fees.items.map((f) => (
            <article className={`fee${f.popular ? ' pop' : ''}`} key={f.name} data-reveal>
              <div className="fee-top">
                <h3>{f.name}</h3>
                <div className="price">{f.price}</div>
              </div>
              <div className="fee-meta">{f.meta}</div>
              <p>{f.body}</p>
              {f.list && (
                <ul className="fee-inc">
                  {f.list.map((i) => <li key={i}>{i}</li>)}
                </ul>
              )}
              {f.note && <p className="fee-note">{f.note}</p>}
            </article>
          ))}
        </div>
        <a className="btn btn-plum fee-cta" href={site.bookingUrl}>Book your complimentary discovery call</a>
      </div>
    </section>
  )
}
