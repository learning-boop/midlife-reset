import { cancellation as c } from '../data/content'

export default function Cancellation() {
  return (
    <section className="cancellation" id="cancellation">
      <div className="wrap">
        <div className="narrow-head">
          <p className="kicker">{c.kicker}</p>
          <h2>{c.title}</h2>
          <p className="lede">{c.intro}</p>
        </div>
        <dl className="cancel-list">
          {c.items.map(([t, b]) => (
            <div key={t} data-reveal>
              <dt>{t}</dt>
              <dd>{b}</dd>
            </div>
          ))}
        </dl>
        <p className="note-line">{c.outro}</p>
      </div>
    </section>
  )
}
