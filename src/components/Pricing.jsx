import { consultations, programmes, site } from '../data/content'
function Tiers({ block }) {
  return (
    <div className="prog" id={block.id}>
      <div className="prog-head">
        <p className="kicker">{block.kicker}</p>
        <h3>{block.title}</h3>
        {block.intro && <p className="lede">{block.intro}</p>}
      </div>
      <div className="tiers">
        {block.tiers.map((t) => (
          <div className={`tier${t.popular ? ' pop' : ''}`} key={t.name}>
            {t.popular && <span className="tag">Most popular</span>}
            <div className="lvl">{t.level}</div>
            <h4>{t.name}</h4>
            <div className="price">{t.price}</div>
            <p>{t.body}</p>
            <div className="best">{t.best}</div>
            <a className="link" href={site.bookingUrl}>Discuss this tier ›</a>
          </div>
        ))}
      </div>
      <p className="prog-note">{block.note}</p>
    </div>
  )
}

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="prog-head">
          <p className="kicker">{consultations.kicker}</p>
          <h2>{consultations.title}</h2>
          <p className="lede">{consultations.intro}</p>
        </div>

        <div className="appts">
          {consultations.items.map((a) => (
            <div className="appt" key={a.name}>
              <div className="appt-top">
                <h3>{a.name}</h3>
                <div className="price">{a.price}</div>
              </div>
              <div className="appt-meta">{a.meta}</div>
              <p>{a.body}</p>
            </div>
          ))}
        </div>

        {programmes.map((b) => <Tiers block={b} key={b.id} />)}
      </div>
    </section>
  )
}
