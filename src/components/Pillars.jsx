import Img from './Img'
import FillText from './FillText'
import { pillars } from '../data/content'

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
          {pillars.items.map(([title, body, image], i) => (
            <article key={title} data-reveal>
              <div className="six-img">
                <Img src={image} alt="" />
                <span className="ico">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
