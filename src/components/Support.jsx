import { support, site } from '../data/content'

export default function Support() {
  const { packages } = support
  return (
    <section className="consult" id="support">
      <div className="wrap">
        <div className="center"><p className="kicker">{support.kicker}</p><h2>{support.title}</h2></div>
        <div className="cgrid">
          {support.cards.map((c) => (
            <div className="ccard" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.intro}</p>
              <ul>{c.list.map((li) => <li key={li}>{li}</li>)}</ul>
              <p>{c.outro}</p>
              <div className="row"><a className="btn btn-plum" href={site.bookingUrl}>Book a discovery call</a></div>
              <small>Pricing confirmed on enquiry</small>
            </div>
          ))}
        </div>
        <div className="also" id="packages">
          <p className="kicker">{packages.kicker}</p>
          <h3>{packages.title}</h3>
          <div className="tiers">
            {packages.tiers.map((t) => (
              <div className={`tier${t.popular ? ' pop' : ''}`} key={t.name}>
                {t.popular && <span className="tag">Most popular</span>}
                <div className="lvl">{t.level}</div>
                <h4>{t.name}</h4>
                <p>{t.body}</p>
                <div className="best">{t.best}</div>
                <a className="link" href={site.bookingUrl}>Discuss this tier ›</a>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 22, fontSize: 14 }}>{packages.note}</p>
        </div>
      </div>
    </section>
  )
}
