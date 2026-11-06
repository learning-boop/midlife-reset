import Shot from './Shot'
import { aboutIntro as a, about } from '../data/content'
import FillText from './FillText'
import SiteLink from './SiteLink'

// A light band, so it does not repeat the hero's dark green one screen above
// it, with a different photograph for the same reason.
//
// The quote, the biography and the qualifications come from `about`, the same
// copy Dr Sarika's own page shows, rather than a shortened retelling that
// would drift from it. Her page still has what this does not: the full
// qualifications with their awarding bodies, and the booking call at the end.
//
// The qualification names are split at the first comma, dropping the awarding
// body. In a column this width "MRCGP, Royal College of General Practitioners"
// wraps to two lines and the list stops scanning as a list.
export default function AboutIntro() {
  return (
    <section className="aboutintro" id="about">
      <div className="wrap">
        <div>
          <p className="kicker">{a.kicker}</p>
          <FillText>{a.title}</FillText>
          <p className="ai-lead">{a.lead}</p>
          <blockquote>{about.quote}</blockquote>
          {about.body.map((p) => <p key={p}>{p}</p>)}

          <h3 className="ai-creds-title">{a.credsTitle}</h3>
          <ul className="ai-creds">
            {about.creds.map((c) => {
              const split = c.indexOf(', ')
              return <li key={c}>{split === -1 ? c : c.slice(0, split)}</li>
            })}
          </ul>

          <SiteLink className="btn btn-ghost" href="/about">{a.cta} →</SiteLink>
        </div>
        <Shot src={a.image} alt={a.imageAlt} />
      </div>
    </section>
  )
}
