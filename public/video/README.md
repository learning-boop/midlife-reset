# Hero media

`hero-story.mp4` — silent 10s montage, 1136x638, 1.0MB, h264 crf 22.
`hero-story-sm.mp4` — the same cut at 640x360, 211KB, served to phones.
`hero-story.jpg` — poster frame, 42KB.

Source: client-supplied, generated with Google Gemini
(`gemini_generated_video_ef1b0d1a.mp4`).

## Two things to know before this goes live

1. **It depicts a clinician and a patient consultation that do not exist.**
   Dr Sarika is the clinician of this practice; the woman in the white coat is
   generated. Worth a look alongside the CQC wording sign-off, since a
   fabricated clinical encounter sits in the same category of claim.

2. **The frame is cropped to exclude Gemini's visible sparkle watermark**,
   measured at x 1137-1185, y 576-621 in the 1280x720 original, so the crop
   keeps 1136px of width. Google's invisible SynthID watermark remains in the
   file, and their terms on output and watermarks are worth checking.

Encoded at the cropped size with no intermediate upscale, which is what the
first pass got wrong: it cropped to 1008px then scaled back to 1280, baking in
a 27% upscale. Measured sharpness went from 10.4 to 36.8 (Laplacian variance)
on that change plus crf 30 to 22. A crf 26 encode reaches 34.8 at 606KB if the
file needs to be smaller.

The source is still 720p, so this is the ceiling. Regenerating at 1080p or
higher, landscape, is the only way past it.

`HeroMedia.jsx` plays on every screen size, choosing the 640px cut below
1025px so phones fetch 211KB rather than 1MB. Reduced motion still gets the
poster. It calls play() and swallows the rejection: mobile autoplay is refused
under Low Power Mode, Data Saver and in some in-app browsers, and the poster
sits underneath, so a refusal looks like a still rather than a dead player.

The hero is full-bleed because the montage is landscape and its eight scenes,
none longer than 2s, cannot be cropped to a tall column without cutting
subjects out of frame. On a phone that means a hard centre crop, which the
heavier mobile scrim largely covers.
