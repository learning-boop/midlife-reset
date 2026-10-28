import Img from './Img'

// A full-bleed photographic breather between two heavy text sections. Purely
// atmospheric, so the image is decorative and carries an empty alt — it also
// must not read as a patient portrait, which a described photo would imply.
export default function PhotoBand({ src, position = '50% 50%' }) {
  return (
    <div className="photoband" data-reveal>
      <Img src={src} alt="" style={{ objectPosition: position }} />
    </div>
  )
}
