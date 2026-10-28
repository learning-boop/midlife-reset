import { why } from '../data/content'
import FillText from './FillText'

export default function Why() {
  return (
    <section className="whysec" id="why">
      <div className="wrap">
        <p className="kicker">{why.kicker}</p>
        <FillText>{why.title}</FillText>
        <div className="why">
          {why.items.map(([t, b]) => <div key={t} data-reveal><h3>{t}</h3><p>{b}</p></div>)}
        </div>
      </div>
    </section>
  )
}
