const PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><rect width="100%" height="100%" fill="#C9D3CD"/><text x="50%" y="50%" font-family="sans-serif" font-size="22" fill="#1F3D33" text-anchor="middle">Photo</text></svg>'
)

// Tries `src`, then `fallback` if given, then a tinted placeholder. The
// fallback lets a page reference a photo that hasn't been added yet without
// the layout showing a hole in the meantime.
export default function Img({ src, fallback, alt = '', ...rest }) {
  const onError = (e) => {
    const el = e.currentTarget
    if (fallback && !el.dataset.fellBack) {
      el.dataset.fellBack = '1'
      el.src = fallback
      // a stand-in is not the subject the alt text describes, so it becomes decorative
      el.alt = ''
      return
    }
    el.onerror = null
    el.src = PLACEHOLDER
  }
  return <img src={src} alt={alt} loading="lazy" onError={onError} {...rest} />
}
