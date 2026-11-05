import { fees, site } from '../data/content'
import BookLink from './BookLink'
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
        {/* Two bookings, two destinations. The discovery call leads, because
            the standfirst above tells anyone unsure to start there; helfy is
            for people who already know what they are booking. */}
        <div className="cta-pair">
          <BookLink className="btn btn-plum">{fees.ctaPrimary}</BookLink>
          <BookLink href={site.appointmentUrl} className="btn btn-ghost">
            {site.ctaAppointment}
          </BookLink>
        </div>
        <p className="booked-via">
          {fees.bookedVia}
          <img src="/images/helfy.png" alt="helfy by The Wellbeing Doctors" />
        </p>
      </div>
    </section>
  )
}
