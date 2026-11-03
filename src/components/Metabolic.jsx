import { metabolic as m } from '../data/content'
import FillText from './FillText'

export default function Metabolic() {
  return (
    <section className="metabolic" id="metabolic">
      <div className="wrap">
        <div className="narrow-head">
          <p className="kicker">{m.kicker}</p>
          <FillText>{m.title}</FillText>
          <p className="lede">{m.intro}</p>
        </div>

        <h3 className="sub">{m.changesTitle}</h3>
        <div className="cols-2">
          {m.changes.map(([t, b]) => (
            <div key={t} data-reveal><h5>{t}</h5><p>{b}</p></div>
          ))}
        </div>
        <p className="note-line">{m.changesNote}</p>

        <h3 className="sub">{m.testsTitle}</h3>
        <p className="lede">{m.testsIntro}</p>
        <ul className="symptoms">
          {m.tests.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <p className="note-line">{m.testsNote}</p>

        <h3 className="sub">{m.approachTitle}</h3>
        <p className="lede">{m.approachBody}</p>

        <h3 className="sub">{m.includesTitle}</h3>
        <ol className="expect">
          {m.includes.map(([t, b]) => (
            <li key={t}><strong>{t}</strong> — {b}</li>
          ))}
        </ol>
        <p className="note-line">{m.outro}</p>

        <div className="sa-panel" data-reveal>
          <p className="kicker">{m.southAsian.kicker}</p>
          <h3>{m.southAsian.title}</h3>
          <p>{m.southAsian.body}</p>
        </div>
      </div>
    </section>
  )
}
