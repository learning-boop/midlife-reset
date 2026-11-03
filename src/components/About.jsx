import Shot from './Shot'
import BookLink from './BookLink'
import { about } from '../data/content'
import FillText from './FillText'

export default function About() {
  return (
    <section className="founder" id="about">
      <div className="wrap">
        <div>
          <FillText>{about.title}</FillText>
          <blockquote>“{about.quote}”</blockquote>
          {about.body.map((p) => <p key={p}>{p}</p>)}
          <BookLink className="btn btn-white">{about.cta}</BookLink>
        </div>
        <Shot src={about.image} alt={about.imageAlt} />
      </div>
    </section>
  )
}
