import Shot from './Shot'
import { about, site } from '../data/content'
import FillText from './FillText'

export default function About() {
  return (
    <section className="founder" id="about">
      <div className="wrap">
        <div>
          <p className="kicker">{about.kicker}</p>
          <FillText>{about.title}</FillText>
          <blockquote>“{about.quote}”</blockquote>
          {about.body.map((p) => <p key={p}>{p}</p>)}
          <ul className="creds">{about.creds.map((c) => <li key={c}>{c}</li>)}</ul>
          <a className="btn btn-white" href={site.bookingUrl}>{about.cta}</a>
        </div>
        <Shot src={about.image} alt={about.imageAlt} />
      </div>
    </section>
  )
}
