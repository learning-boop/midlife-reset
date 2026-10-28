import { journey } from '../data/content'
import FillText from './FillText'

export default function Journey() {
  return (
    <section id="journey">
      <div className="wrap">
        <p className="kicker">{journey.kicker}</p>
        <FillText>{journey.title}</FillText>
        <ol className="track5">
          {journey.steps.map(([title, body], i) => (
            <li className="stop" key={title} data-reveal>
              <span className="dot" aria-hidden="true" />
              <div className="n">{String(i + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
