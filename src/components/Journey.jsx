import { journey } from '../data/content'
export default function Journey() {
  return (
    <section id="journey">
      <div className="wrap">
        <p className="kicker">{journey.kicker}</p>
        <h2>{journey.title}</h2>
        <div className="steps steps5">
          {journey.steps.map(([title, body], i) => (
            <div className="step" key={title}>
              <div className="n">{String(i + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
