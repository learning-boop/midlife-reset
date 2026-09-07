import Img from './Img'
import { about, site } from '../data/content'

export default function About() {
  return (
    <section className="founder" id="about">
      <div className="wrap">
        <div>
          <p className="kicker" style={{ color: '#CFDAD3' }}>{about.kicker}</p>
          <h2>{about.title}</h2>
          <blockquote>“{about.quote}”</blockquote>
          <p style={{ color: '#DDE6E1', marginBottom: 26 }}>{about.body}</p>
          <div className="creds">{about.creds.map((c) => <span key={c}>{c}</span>)}</div>
          <a className="btn btn-white" href={site.bookingUrl}>{about.cta}</a>
        </div>
        <Img src={about.image} alt="Dr Sarika Gorantyal" />
      </div>
    </section>
  )
}
