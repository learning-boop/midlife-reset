import { pillars } from '../data/content'
import FillText from './FillText'

export default function Pillars() {
  return (
    <section className="pillars" id="lifestyle">
      <div className="wrap">
        <div className="pillars-head center">
          <p className="kicker">{pillars.kicker}</p>
          <FillText>{pillars.title}</FillText>
          <p className="lede">{pillars.intro}</p>
        </div>
        <div className="six">
          {pillars.items.map(([title, body], i) => (
            <div key={title} data-reveal>
              <span className="ico">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
