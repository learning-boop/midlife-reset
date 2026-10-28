import Img from './Img'

// A photograph that arrives rather than appears: a curtain in the section's own
// colour slides off it while the image settles back from a slight scale-up.
//
// The wrapper carries data-reveal and the curtain is a separate element, so the
// photograph's own geometry is never clipped. Clipping the image itself would
// collapse its visible area, and IntersectionObserver measures intersection
// after clipping — a clipped image reports as off screen and hides itself from
// the observer meant to reveal it.
//
// Every prop other than the wrapper's own class goes through to Img, so the
// existing per-image CSS (.nutri-img and friends) keeps applying to the img.
export default function Shot({ wrapClass = '', ...rest }) {
  return (
    <div className={`shot ${wrapClass}`.trim()} data-reveal>
      <Img {...rest} />
      <span className="shot-curtain" aria-hidden="true" />
    </div>
  )
}
