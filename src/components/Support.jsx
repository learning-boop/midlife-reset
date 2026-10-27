import { support, site } from '../data/content'
export default function Support() {
  return (
    <section className="consult" id="support">
      <div className="wrap">
        <div className="center consult-head">
          <p className="kicker">{support.kicker}</p>
          <h2>{support.title}</h2>
        </div>
        <div className="cgrid">
          {support.cards.map((c) => (
            <div className="ccard" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.intro}</p>
              <ul>{c.list.map((li) => <li key={li}>{li}</li>)}</ul>
              <a className="btn btn-ghost" href={site.bookingUrl}>Book a discovery call</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
