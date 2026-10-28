import { cardiometabolic as c } from '../data/content'
import FillText from './FillText'

export default function Cardiometabolic() {
  return (
    <section className="cardio" id="cardiometabolic">
      <div className="wrap">
        <div className="cardio-head">
          <p className="kicker">{c.kicker}</p>
          <FillText>{c.title}</FillText>
          <p className="lede">{c.intro}</p>
        </div>

        <div className="cardio-cols">
          {[c.changes, c.focus].map((col, i) => (
            <div className={`cardio-col${i === 1 ? ' is-focus' : ''}`} key={col.title} data-reveal>
              <h3>{col.title}</h3>
              <ul>{col.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
          ))}
        </div>

        <div className="mech">
          <h3>{c.why.title}</h3>
          <p className="lede">{c.why.intro}</p>
          <ol className="mech-list">
            {c.why.items.map(([term, body]) => (
              <li key={term}>
                <h4>{term}</h4>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="cardio-outro">
          {c.outro.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  )
}
