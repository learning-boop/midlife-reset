import Img from './Img'
import { stats } from '../data/content'

export default function StatsBand() {
  return (
    <section className="band">
      <Img src={stats.image} />
      <div className="wrap">
        <div className="band-stats">
          {stats.items.map(([big, text]) => <div className="stat" key={big}><div className="big">{big}</div><p>{text}</p></div>)}
        </div>
      </div>
    </section>
  )
}
