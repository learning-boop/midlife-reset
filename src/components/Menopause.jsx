import Shot from './Shot'
import { menopause as m } from '../data/content'
import FillText from './FillText'

// Both photographs are decorative and carry an empty alt: the headings beside
// them already say what the page is about, and neither woman should read as a
// patient of the clinic.
export default function Menopause() {
  return (
    <section className="menopause" id="menopause">
      <div className="wrap">
        <div className="narrow-head">
          <p className="kicker">{m.kicker}</p>
          <FillText>{m.title}</FillText>
          <p className="lede">{m.intro}</p>
        </div>

        <div className="page-lead">
          <Shot src={m.leadImage} alt="" />
        </div>

        <h3 className="sub">{m.stagesTitle}</h3>
        <div className="stages">
          {m.stages.map(([name, body]) => (
            <div className="stage" key={name} data-reveal>
              <h4>{name}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <h3 className="sub">{m.symptomsTitle}</h3>
        <p className="lede">{m.symptomsIntro}</p>
        <ul className="symptoms">
          {m.symptoms.map((s) => <li key={s}>{s}</li>)}
        </ul>

        <div className="care">
          <div className="page-split">
            <div>
              <h3 className="sub">{m.careTitle}</h3>
              <p className="lede">{m.careIntro}</p>
              <h4 className="sub-sm">{m.optionsTitle}</h4>
              <div className="cols-2">
                {m.options.map(([t, b]) => (
                  <div key={t} data-reveal><h5>{t}</h5><p>{b}</p></div>
                ))}
              </div>
            </div>
            <Shot src={m.careImage} alt="" wrapClass="split-shot" />
          </div>

          <h4 className="sub-sm">{m.expectTitle}</h4>
          <ol className="expect">
            {m.expect.map(([t, b]) => (
              <li key={t}><strong>{t}</strong> — {b}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

