import { nutrition } from '../data/content'

export default function Nutrition() {
  return (
    <section className="nutri">
      <div className="wrap">
        <div>
          <p className="kicker">{nutrition.kicker}</p>
          <h2>{nutrition.title}</h2>
          <p>{nutrition.intro}</p>
        </div>
        <div className="cols">
          <div><h3>Your approach will consider</h3><ul>{nutrition.consider.map((i) => <li key={i}>{i}</li>)}</ul></div>
          <div><h3>Support may include</h3><ul>{nutrition.support.map((i) => <li key={i}>{i}</li>)}</ul></div>
        </div>
      </div>
    </section>
  )
}
