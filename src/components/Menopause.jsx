import { menopause as m } from '../data/content'
import FillText from './FillText'

export default function Menopause() {
  return (
    <section className="menopause" id="menopause">
      <div className="wrap">
        <div className="narrow-head">
          <p className="kicker">{m.kicker}</p>
          <FillText>{m.title}</FillText>
          <p className="lede">{m.intro}</p>
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
          <h3 className="sub">{m.careTitle}</h3>
          <p className="lede">{m.careIntro}</p>
          <h4 className="sub-sm">{m.optionsTitle}</h4>
          <div className="cols-2">
            {m.options.map(([t, b]) => (
              <div key={t} data-reveal><h5>{t}</h5><p>{b}</p></div>
            ))}
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
