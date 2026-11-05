import Shot from './Shot'
import BookLink from './BookLink'
import { discovery, site } from '../data/content'
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
            <BookLink href={site.appointmentUrl} className="btn btn-ghost">
              {site.ctaAppointment}
            </BookLink>
            <a className="btn btn-ghost" href="#faq">Read the FAQs</a>
          </div>
          {/* the platform's own mark, naming where the second button leads.
              The discovery call is not held there — it is a Google
              appointment page — so the line says consultations, not calls. */}
          <p className="booked-via">
            {site.bookedVia}
            <img src="/images/helfy.png" alt="helfy by The Wellbeing Doctors" loading="lazy" />
          </p>
        </div>
        <Shot src={discovery.image} alt={discovery.imageAlt} />
      </div>
    </section>
  )
}
