import { longevity as l } from '../data/content'
import FillText from './FillText'

export default function Longevity() {
  return (
    <section className="longevity" id="longevity">
      <div className="wrap">
        <div className="narrow-head">
          <p className="kicker">{l.kicker}</p>
          <FillText>{l.title}</FillText>
          <p className="lede">{l.intro}</p>
        </div>

        <h3 className="sub">{l.shapesTitle}</h3>
        <div className="cols-2">
          {l.shapes.map(([t, b]) => (
            <div key={t} data-reveal><h5>{t}</h5><p>{b}</p></div>
          ))}
        </div>

        <h3 className="sub">{l.midlifeTitle}</h3>
        <p className="lede">{l.midlifeBody}</p>

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
