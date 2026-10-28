// All page copy lives here so the client can edit text without touching components.
// Source: client deck "the-midlife-reset" (22pp), supplied 2026-10-27.

export const site = {
  name: 'The Reset and Longevity Clinic',
  nameShort: 'The Reset & Longevity Clinic',
  domain: 'themidlifereset.uk',
  bookingUrl: '#discovery', // TODO: replace with Cal.com / booking link
  email: 'mailto:hello@themidlifereset.uk', // TODO: confirm
  whatsapp: '#', // TODO: confirm
  byline: 'Dr Sarika Gorantyal · GP · Lifestyle Medicine · Health Coach',
}

export const nav = [
  { label: 'How we can help', href: '#support' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Menopause', href: '#menopause' },
  { label: 'Longevity', href: '#longevity' },
  { label: 'Dr Sarika', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  kicker: 'Dr Sarika Gorantyal · NHS GP',
  lead: 'Doctor-led longevity, lifestyle medicine & menopause care —',
  // the italic tail types/erases through these; first entry is the deck's own line
  tail: [
    'feel like yourself again.',
    'metabolic health.',
    'healthy weight.',
    'midlife & menopause.',
    'longevity & healthspan.',
    'strength & healthy ageing.',
    'sustainable lifestyle change.',
  ],
  intro:
    'Built around your metabolic health, nutrition, strength and sleep — not a one-size-fits-all plan.',
  primary: 'Book your complimentary discovery call',
  secondary: 'Why a doctor-led approach',
  trust: [
    ['Evidence-informed', 'longevity medicine'],
    ['100% virtual', 'across the UK'],
  ],
  image: '/images/dr-sarika-seated.jpg',
  imageAlt: 'Dr Sarika Gorantyal, GP and Lifestyle Medicine physician',
  // Full-bleed background montage, silent 10s loop, client-supplied. Phones get
  // the lighter 640px cut; reduced-motion visitors get the poster frame.
  video: '/video/hero-story.mp4',
  videoSmall: '/video/hero-story-sm.mp4',
  videoPoster: '/video/hero-story.jpg',
  videoPosterSmall: '/video/hero-story-sm.jpg',
}

// Not rendered in the hero any more: the rotating headline already cycles all
// six, and the chips repeated them on the same screen. Kept for reuse.
export const focusAreas = {
  kicker: 'Focus areas',
  items: [
    'Metabolic health',
    'Healthy weight',
    'Midlife & menopause',
    'Longevity & healthspan',
    'Strength & healthy ageing',
    'Sustainable lifestyle change',
  ],
}

export const stats = {
  items: [
    ['44', 'The age surgical menopause changed how Dr Sarika practises medicine.'],
    ['100%', 'Virtual consultations, available anywhere in the UK.'],
  ],
}

export const about = {
  kicker: 'About Dr Sarika Gorantyal',
  title: 'A doctor-led approach to longevity, lifestyle medicine & menopause care',
  quote:
    'I’m a GP with a special interest in prevention, lifestyle medicine, longevity and helping people make changes that actually last.',
  body: [
    'My interest in midlife health became personal after my own experience of surgical menopause at 44. It showed me the gap between “your bloods are normal” and “I don’t feel like myself” — and how much lifestyle, nutrition, movement, sleep and wellbeing can do to close it.',
    'That experience, alongside my training in longevity medicine, shapes how I think about healthspan — not just treating symptoms as they arise, but building the habits and biomarker awareness that support how well you live for decades to come.',
    'My approach combines medical knowledge with practical behaviour-change strategies, so your plan fits your actual life — not the other way around.',
  ],
  creds: [
    'Lifestyle Medicine, British Society of Lifestyle Medicine',
    'Certified Health Coach, Health Coaches Academy',
    'Advanced Longevity Certification, Apex Academy',
    'Nutrition Certification, Precision Nutrition',
    'Currently completing: British Menopause Society Certificate in the Principles and Practice of Menopause Care',
  ],
  cta: 'Book a discovery call with Dr Sarika',
  image: '/images/dr-sarika-studio.jpg',
  imageAlt: 'Dr Sarika Gorantyal',
}

export const pillars = {
  kicker: 'What is Lifestyle Medicine?',
  title: 'A whole-person approach, not a symptom checklist',
  intro:
    'Rather than treating symptoms in isolation, lifestyle medicine looks at how you nourish your body, move, sleep, manage stress, connect with others and build habits that stick. The aim isn’t perfection — it’s realistic change that supports your health now and later.',
  items: [
    ['Nutrition', 'Supporting balanced, sustainable eating patterns that nourish your body and support metabolic health.', '/images/pillars/nutrition.jpg'],
    ['Physical activity', 'Helping you build enjoyable movement into your lifestyle.', '/images/pillars/activity.jpg'],
    ['Strength & muscle health', 'Supporting strength, independence and healthy ageing through resistance-based activity.', '/images/pillars/strength.jpg'],
    ['Sleep', 'Improving sleep habits to support energy, recovery and wellbeing.', '/images/pillars/sleep.jpg'],
    ['Stress & emotional wellbeing', 'Developing strategies to improve resilience, balance and coping.', '/images/pillars/wellbeing.jpg'],
    ['Social connection', 'Recognising the importance of relationships, belonging and support.', '/images/pillars/connection.jpg'],
  ],
}

export const menopause = {
  kicker: 'Understanding Menopause & Perimenopause',
  title: 'A gradual transition, not a single event',
  cards: [
    ['Perimenopause', 'The transition leading up to menopause, often starting in your late 30s or 40s and lasting several years. Hormone levels — particularly oestrogen and progesterone — begin to fluctuate during this time, often well before periods become irregular.'],
    ['Menopause', 'Reached once you’ve gone 12 months without a period. From this point, oestrogen remains consistently low, which can continue to affect the body well beyond this milestone.'],
  ],
  quotesIntro:
    'This stage shows up differently for everyone. Many women describe it in their own words, long before they connect it to perimenopause:',
  quotes: [
    'I don’t recognise my own body anymore.',
    'I keep losing words mid-sentence.',
    'I’m gaining weight around my midsection, and nothing I do seems to shift it.',
  ],
  outro:
    'If any of this sounds familiar, you’re not imagining it — and you don’t have to work it out alone.',
}

export const longevity = {
  kicker: 'Understanding Longevity Medicine',
  title: 'Healthspan, not just lifespan',
  cards: [
    ['Lifespan', 'How many years you live. This is what most healthcare has traditionally focused on — detecting and treating disease once it appears.'],
    ['Healthspan', 'How many of those years you spend in good health — strong, mobile, cognitively sharp and free from chronic disease. Longevity medicine is built around extending this, not just lifespan alone.'],
  ],
  quotesIntro:
    'This applies well beyond any one life stage — the goal is understanding your own trajectory early, before small changes become harder to reverse:',
  quotes: [
    'I want to know what’s actually happening inside my body, not just wait until something goes wrong.',
    'I’m fit on the outside, but I have no idea what my real risk markers look like.',
    'I want to stay strong and independent well into my 70s and 80s, not just add years at the end.',
  ],
}

export const support = {
  kicker: 'How We Can Support You',
  title: 'Three starting points, depending on what brought you here',
  cards: [
    {
      title: 'Lifestyle & Biometabolic Health Assessment',
      intro: 'For women and men who want to understand the lifestyle factors influencing their health.',
      list: [
        'Nutrition and eating patterns',
        'Healthy weight goals',
        'Metabolic health',
        'Physical activity, strength and sleep',
        'Stress, wellbeing and lifestyle habits',
        'Existing health information, where available',
      ],
    },
    {
      title: 'Midlife & Menopause Assessment',
      intro: 'For women navigating perimenopause, menopause and midlife changes.',
      list: [
        'Menopause stage and symptoms',
        'Nutrition, weight and body composition',
        'Strength, muscle health and sleep',
        'Energy, wellbeing and stress',
        'Healthy ageing and long-term metabolic health',
      ],
    },
    {
      title: 'Longevity Assessment',
      intro: 'For those who want to understand and actively extend their healthspan.',
      list: [
        'Key biomarkers and body composition',
        'Strength and cardiovascular health',
        'Metabolic and cardiometabolic risk markers',
        'Sleep, recovery and resilience',
        'Long-term healthspan priorities',
      ],
    },
  ],
}

export const consultations = {
  kicker: 'Appointments (Virtual)',
  title: 'Consultations, when you need a single conversation',
  intro:
    'Not every question needs a programme. These are stand-alone appointments, all held virtually.',
  items: [
    {
      name: 'Focused Health Consultation',
      price: '£85',
      meta: '30 minutes',
      body: 'A shorter appointment for a specific question about your health. You might want to go through recent blood test results, talk about your longer-term health risks, or work out how to approach a health problem through changes to sleep, nutrition, activity, stress or other areas of daily life. You will leave with a clear understanding and practical next steps.',
    },
    {
      name: 'Personalised Lifestyle Medicine Consultation',
      price: '£195',
      meta: 'Initial consultation: 60 minutes, plus pre-appointment questionnaire and written plan',
      body: 'A thorough review of your health, symptoms and goals, followed by a personalised consultation summary and action plan designed to support lasting, sustainable change.',
    },
    {
      name: 'Follow-up appointment',
      price: '£85',
      meta: '30 minutes',
      body: 'To review progress, revisit your plan and adjust as needed.',
    },
  ],
}

const TIER_NOTE =
  'Ad hoc 30-minute follow-up appointments are available at any point for £85. All consultations are virtual.'

export const programmes = [
  {
    id: 'menopause-packages',
    tab: 'Menopause coaching',
    kicker: 'Menopause Coaching Packages',
    title: 'Three levels of support, built around this stage of life',
    tiers: [
      {
        level: 'Tier 1',
        name: 'Foundation',
        price: '£325',
        body: 'Midlife & Menopause Assessment: a 60-minute first appointment, a 45-minute second appointment, and a written plan with practical next steps.',
        best: 'Best for clarity on where to start.',
      },
      {
        level: 'Tier 2',
        name: 'Signature',
        price: '£425',
        body: 'The full assessment plus a 45-minute review at 3 months, to check progress and adjust your plan.',
        best: 'Best for sustained, guided support through the transition.',
        popular: true,
      },
      {
        level: 'Tier 3',
        name: 'Premium',
        price: '£650',
        body: 'The full assessment plus a 6-week check-in and 45-minute reviews at 3 and 6 months, for the most continuity of care.',
        best: 'Best for continuity of care through the transition.',
      },
    ],
    note: TIER_NOTE,
  },
  {
    id: 'longevity-programme',
    tab: 'Longevity medicine',
    kicker: 'Longevity Medicine Programme',
    title: 'Evidence-informed support for a longer, healthier healthspan',
    intro:
      'Alongside menopause coaching, I now offer a longevity-focused programme — looking beyond symptoms to the biomarkers, habits and strength foundations that shape how you age.',
    tiers: [
      {
        level: 'Tier 1',
        name: 'Foundation',
        price: '£325',
        body: 'Longevity Assessment covering key biomarkers, body composition, strength and metabolic health: a 60-minute first appointment, a 45-minute second appointment, and a written plan.',
        best: 'Best for a clear baseline before deciding on ongoing support.',
      },
      {
        level: 'Tier 2',
        name: 'Signature',
        price: '£425',
        body: 'The full assessment plus a 45-minute review at 3 months, to revisit your markers and adjust your plan.',
        best: 'Best for sustained, structured healthspan support.',
        popular: true,
      },
      {
        level: 'Tier 3',
        name: 'Premium',
        price: '£650',
        body: 'The full assessment plus a 6-week check-in and 45-minute reviews at 3 and 6 months, for the most continuity of care.',
        best: 'Best for the most comprehensive approach to healthspan optimisation.',
      },
    ],
    note: TIER_NOTE,
  },
]

export const cardiometabolic = {
  kicker: 'Cardiometabolic Health in Midlife',
  title: 'Why this stage of life changes your risk profile',
  intro:
    'The decline in oestrogen during perimenopause and menopause doesn’t just affect symptoms — it also changes how your body manages cholesterol, blood pressure, blood sugar and fat distribution. Midlife is a key window for addressing this proactively, rather than after a diagnosis.',
  changes: {
    title: 'What tends to change',
    items: [
      'Blood pressure often rises',
      'Cholesterol profile tends to worsen (higher LDL, lower protective HDL)',
      'Insulin resistance becomes more common',
      'Fat redistributes toward the abdomen, raising metabolic risk',
      'Muscle mass declines, lowering resting metabolic rate',
    ],
  },
  focus: {
    title: 'What we focus on',
    items: [
      'Reviewing relevant biomarkers where appropriate',
      'Nutrition strategies supporting metabolic and cardiovascular health',
      'Strength training to preserve muscle and support metabolism',
      'Sleep and stress management, both linked to cardiometabolic risk',
      'Ongoing monitoring as part of your personalised plan',
    ],
  },
  why: {
    title: 'Why this happens',
    intro:
      'Oestrogen does far more than regulate the menstrual cycle — it also plays a direct role in how your body handles blood sugar and fat. As levels decline, several connected changes make insulin resistance, and related cardiometabolic risk, more likely:',
    items: [
      ['Reduced insulin sensitivity', 'Oestrogen normally helps muscle and fat cells respond efficiently to insulin. As it declines, cells become less responsive, so more insulin is needed to manage the same amount of blood sugar.'],
      ['Fat redistribution', 'Falling oestrogen shifts fat storage away from hips and thighs toward the abdomen. This visceral (abdominal) fat is metabolically active and itself drives further insulin resistance.'],
      ['Increased low-grade inflammation', 'Oestrogen has anti-inflammatory effects; as it drops, background inflammation rises, which is closely linked to both insulin resistance and cardiovascular risk.'],
      ['Changes in cholesterol handling', 'Oestrogen supports healthy LDL and HDL balance. Its decline tends to raise LDL (“bad”) cholesterol and lower protective HDL, independent of diet.'],
      ['Muscle loss', 'Oestrogen supports muscle maintenance; as levels fall, muscle mass tends to decline too — and since muscle is where most blood sugar is cleared after eating, less muscle means less capacity to manage glucose.'],
    ],
  },
  outro: [
    'These changes compound each other, which is why cardiometabolic risk often rises noticeably during perimenopause and menopause — and why addressing them proactively, rather than after a diagnosis, is so valuable at this stage.',
    'This is also why cardiometabolic health sits at the centre of both our Midlife & Menopause and Longevity Assessments — these changes are closely linked, and addressing them together is more effective than treating each in isolation.',
  ],
}

export const nutrition = {
  kicker: 'Nutrition Approach',
  title: 'Practical nutrition for real life',
  intro: 'There is no one-size-fits-all diet.',
  considerTitle: 'Your approach will consider',
  consider: [
    'Your goals',
    'Your lifestyle',
    'Your cultural background',
    'Your relationship with food',
  ],
  supportTitle: 'Support may include',
  support: [
    'Balanced meal structure',
    'Protein and fibre optimisation',
    'Meal-planning strategies',
    'Practical food choices & eating out strategies',
    'Sustainable habits, not short-term rules',
  ],
  image: '/images/dr-sarika-kitchen.webp',
  imageAlt: 'Dr Sarika Gorantyal preparing fresh fruit and vegetables',
}

export const journey = {
  kicker: 'Your Health Journey',
  title: 'Assess → Personalise → Support → Sustain',
  steps: [
    ['Discovery Call', 'A conversation to understand your goals and whether we’re the right fit.'],
    ['Comprehensive Assessment', 'A detailed review of your lifestyle, health goals and priorities.'],
    ['Personalised Health Plan', 'Clear, practical recommendations focused on what matters most.'],
    ['Ongoing Support', 'Regular reviews, accountability and adjustments.'],
    ['Long-Term Lifestyle Strategy', 'Help maintaining changes well beyond the programme.'],
  ],
}

export const why = {
  kicker: 'Why Choose This Approach?',
  title: 'Medical expertise, combined with lifestyle support',
  items: [
    ['Doctor-led', 'Medical knowledge combined with lifestyle medicine principles.'],
    ['Personalised', 'Your goals and circumstances guide your plan.'],
    ['Evidence-informed', 'Based on established lifestyle and preventative health principles.'],
    ['Practical', 'Designed around real life, not an idealised one.'],
    ['Whole-person', 'Looking beyond weight alone.'],
    ['Sustainable', 'Helping you create habits for long-term health.'],
  ],
}

// ⚠️ CLINICAL GOVERNANCE — the source deck flags this statement as NOT FINAL:
//   "[CONFIRM EXACT WORDING WITH YOUR CLINICAL GOVERNANCE LEAD BEFORE PUBLISHING —
//    this statement should match how prescribing/investigations are described under
//    your CQC registration.]"
// Do not publish without that sign-off. The same applies to the prescribing/HRT FAQ.
export const notice = {
  title: 'Please note',
  lines: [
    'This service combines lifestyle medicine coaching with doctor-led clinical assessment. Where clinically appropriate, investigations will be organised and treatment, including prescribing, may be offered as part of your care — always following a full assessment and in line with recognised clinical guidelines.',
    'This service does not provide emergency care. If you have an urgent health concern, please contact your GP, NHS 111, 999 or emergency services.',
  ],
}

export const faqs = [
  ['Is this the same as seeing my NHS GP?', 'No. This is a doctor-led private service combining lifestyle medicine coaching with clinical assessment. It runs alongside, not instead of, your NHS GP care.'],
  ['Will I need blood tests or investigations?', 'Where clinically appropriate, investigations will be organised as part of your assessment. Existing results can also be reviewed if you already have them.'],
  ['Can you prescribe treatment, including HRT?', 'Yes — where clinically indicated and following a full assessment, treatment including prescribing may be offered as part of your care, in line with recognised clinical guidelines.'],
  ['I’m not sure if I’m perimenopausal — can you help me find out?', 'Yes. A large part of the Midlife & Menopause Assessment is exactly this — understanding your symptoms and history to build a clearer picture of where you are in this transition.'],
  ['Do I need to choose a package before booking?', 'No. Most people start with a complimentary discovery call, where we discuss your goals and agree together which level of support makes sense.'],
  ['Are appointments in person or online?', 'All consultations are virtual, so you can access support from anywhere in the UK.'],
  ['What if I have an urgent health concern?', 'This service does not provide emergency care. For urgent concerns, please contact your GP, NHS 111, 999 or emergency services.'],
]

export const discovery = {
  kicker: 'Ready to Begin?',
  title: 'You don’t need to know exactly what support you need yet.',
  intro:
    'Start with a complimentary 15-minute discovery call to talk through your goals and find the right next step — no obligation to continue.',
  bullets: [
    'Discuss your goals and what brought you here',
    'Understand how the assessments and packages work',
    'Decide together whether we’re the right fit',
  ],
  cta: 'Book your complimentary discovery call',
  image: '/images/dr-sarika-garden.webp',
  imageAlt: 'Dr Sarika Gorantyal',
}

export const footer = {
  tagline: site.byline,
  columns: [
    ['Focus', [
      ['Lifestyle & biometabolic health', '#support'],
      ['Midlife & menopause', '#menopause'],
      ['Longevity & healthspan', '#longevity'],
      ['Healthy ageing', '#lifestyle'],
    ]],
    ['Site', [
      ['Privacy policy', '#'],
      ['Terms & conditions', '#'],
      ['Disclaimer', '#'],
      ['Contact', '#contact'],
    ]],
  ],
}
