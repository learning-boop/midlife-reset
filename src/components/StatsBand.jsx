import { stats } from '../data/content'

export default function StatsBand() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="band-stats">
          {stats.items.map(([big, text]) => (
            <div className="stat" key={big} data-reveal>
              <div className="big">{big}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
