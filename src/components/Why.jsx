import { why } from '../data/content'
export default function Why() {
  return (
    <section className="whysec" id="why">
      <div className="wrap">
        <p className="kicker">{why.kicker}</p>
        <h2>{why.title}</h2>
        <div className="why">
          {why.items.map(([t, b]) => <div key={t}><h3>{t}</h3><p>{b}</p></div>)}
        </div>
      </div>
    </section>
  )
}
