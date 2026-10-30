// The clinic's monogram: the interlocked S and G with two gold leaves.
//
// This is the supplied artwork, cut out of the full lockup and matted to
// transparency against its cream ground, rather than an SVG redrawn by hand.
// The mark is typographic — a particular serif S and G, interlocked — and a
// traced approximation would not be the logo, only something like it.
//
// Sizing belongs to .logo-mark in CSS, which gives the image a definite box to
// be contained within; `size` is accepted and dropped so it never reaches the
// DOM as an invalid <img> attribute.
export default function LogoMark({ size, ...rest }) {
  return (
    <img className="mark" src="/logo-mark.png" alt="" aria-hidden="true" {...rest} />
  )
}


