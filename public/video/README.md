# Hero media

Two cuts of the same montage, one per orientation:

| File | Size | Serves |
|------|------|--------|
| `hero-story.mp4` | 1136x638, 1.0MB | wide screens (>=1025px) |
| `hero-story.jpg` | 42KB | its poster |
| `hero-story-sm.mp4` | 404x720, 402KB | phones |
| `hero-story-sm.jpg` | 19KB | its poster |

Each size fetches only its own pair. Reduced motion gets the matching poster
and no video, at any width.

Source: client-supplied, generated with Google Gemini
(`gemini_generated_video_ef1b0d1a.mp4`), 1280x720.

## How the portrait cut was made

The montage is landscape with eight scenes, none longer than 2s, and the
subject sits in a different place in each. A single centre crop cut her out of
several, so each scene is cropped with its own x offset and the pieces are
concatenated. Offsets were found from the focus map: the footage has shallow
depth of field, so the in-focus column is the subject.

    0.00-1.50  x=732   3.50-4.50  x=670   5.96-7.50  x=672   8.83-10.0  x=732
    1.50-3.50  x=493   4.50-5.96  x=722   7.50-8.83  x=719

Windows are 405px wide and capped at x=732 so the watermark (x 1137-1185,
y 576-621) stays out of every one. At scene 2's offset the generated clinician
falls outside the frame, so the portrait cut does not show them at all.

## Two things to know before this goes live

1. **The landscape cut depicts a clinician and a patient consultation that do
   not exist.** Dr Sarika is the clinician of this practice; the woman in the
   white coat is generated. Worth a look alongside the CQC wording sign-off,
   since a fabricated clinical encounter sits in the same category of claim.
   The portrait cut does not contain that shot.

2. **Both cuts are cropped to exclude Gemini's visible sparkle watermark.**
   Google's invisible SynthID watermark remains in the files, and their terms
   on output and watermarks are worth checking.

The source is 720p. The portrait cut uses only 405 of its 1280 columns, so it
is softer than the landscape one on a high-density phone screen. Regenerating
at 1080p, or shooting a native portrait version, is the only way past that.
