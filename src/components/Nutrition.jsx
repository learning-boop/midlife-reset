import Img from './Img'
import { nutrition } from '../data/content'
import FillText from './FillText'

export default function Nutrition() {
  return (
    <section className="nutri" id="nutrition">
      <div className="wrap">
        <div className="nutri-copy">
          <p className="kicker">{nutrition.kicker}</p>
          <FillText>{nutrition.title}</FillText>
          <p className="lede">{nutrition.intro}</p>
          <div className="cols">
            <div>
              <h3>{nutrition.considerTitle}</h3>
              <ul>{nutrition.consider.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
            <div>
              <h3>{nutrition.supportTitle}</h3>
              <ul>{nutrition.support.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          </div>
        </div>
        <Img className="nutri-img" src={nutrition.image} alt={nutrition.imageAlt} data-reveal />
      </div>
    </section>
  )
}
