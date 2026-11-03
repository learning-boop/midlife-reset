import Shot from './Shot'
import { longevity as l } from '../data/content'
import FillText from './FillText'

// Both photographs are decorative with an empty alt. This section sits on the
// dark green, so its reveal curtain is set to match in the stylesheet.
export default function Longevity() {
  return (
    <section className="longevity" id="longevity">
      <div className="wrap">
        <div className="narrow-head">
          <p className="kicker">{l.kicker}</p>
          <FillText>{l.title}</FillText>
          <p className="lede">{l.intro}</p>
        </div>

        <div className="page-lead">
          <Shot src={l.leadImage} alt="" />
        </div>

        <h3 className="sub">{l.shapesTitle}</h3>
        <div className="cols-2">
          {l.shapes.map(([t, b]) => (
            <div key={t} data-reveal><h5>{t}</h5><p>{b}</p></div>
          ))}
        </div>

        <div className="page-split">
          <div>
            <h3 className="sub">{l.midlifeTitle}</h3>
            <p className="lede">{l.midlifeBody}</p>
          </div>
          <Shot src={l.midlifeImage} alt="" wrapClass="split-shot" />
        </div>

        <h3 className="sub">{l.includesTitle}</h3>
        <ol className="assess">
          {l.includes.map(([t, b]) => (
            <li key={t} data-reveal><h5>{t}</h5><p>{b}</p></li>
          ))}
        </ol>
        <p className="note-line">{l.optional}</p>
      </div>
    </section>
  )
}

