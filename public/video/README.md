# Hero media

`hero-story.mp4` — silent 10s montage, 1280x718, 409KB, h264.
`hero-story.jpg` — poster frame, 29KB.

Source: client-supplied, generated with Google Gemini
(`gemini_generated_video_ef1b0d1a.mp4`).

## Two things to know before this goes live

1. **It depicts a clinician and a patient consultation that do not exist.**
   Dr Sarika is the clinician of this practice; the woman in the white coat is
   generated. Worth a look alongside the CQC wording sign-off, since a
   fabricated clinical encounter sits in the same category of claim.

2. **The frame is cropped to exclude Gemini's visible sparkle watermark**,
   which sat at x 1010-1270 in the 1280x720 original. The crop was needed to
   remove it; Google's invisible SynthID watermark remains in the file, and
   their terms on output and watermarks are worth checking.

Resolution is the weak point: the source is 720p, cropped to 1008px wide and
scaled back to 1280, so it is soft on a large display. Regenerating at 1080p or
higher, landscape, would fix that.

`HeroMedia.jsx` plays the clip above 1025px with reduced motion off, and shows
the poster otherwise, so phones never download the mp4. The hero is full-bleed
because the montage is landscape and its eight scenes, none longer than 2s,
cannot be cropped to a tall column without cutting subjects out of frame.
