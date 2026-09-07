import { pillars } from '../data/content'

export default function Pillars() {
  return (
    <section className="pillars" id="lifestyle">
      <div className="wrap">
        <div className="pillars-head center">
          <p className="kicker">{pillars.kicker}</p>
          <h2>{pillars.title}</h2>
          <p style={{ marginTop: 16 }}>{pillars.intro}</p>
        </div>
        <div className="six">
          {pillars.items.map(([icon, title, body]) => (
            <div key={title}><div className="ico">{icon}</div><h3>{title}</h3><p>{body}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
