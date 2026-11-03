// All page copy lives here so the client can edit text without touching components.
// Source: client page "Kaya Reset Clinic — Metabolic Health, Menopause Support &
// Longevity", supplied 2026-11-03. It replaces the earlier deck wholesale: the
// clinic is renamed, the fees are different, appointments are no longer
// virtual-only, and metabolic health becomes a service in its own right.

export const site = {
  name: 'Kaya Reset Clinic',
  nameShort: 'Kaya Reset Clinic',
  // the wordmark sets the middle word apart; kept here so a rename cannot
  // silently lose the treatment, and so the split is never guessed in markup
  nameParts: ['Kaya', 'Reset', 'Clinic'],
  domain: 'themidlifereset.uk', // TODO: confirm — may change with the rename
  // Google appointment page, '15 min discovery call', supplied 3 Nov 2026
  bookingUrl: 'https://calendar.app.google/ZEQPQbtjCvNitf2Q8',
  email: 'mailto:hello@themidlifereset.uk', // TODO: confirm
  whatsapp: '#', // TODO: confirm
  byline: 'Dr Sarika Gorantyal · Lifestyle Medicine & Longevity Doctor',
  tagline: 'The science of living better, for longer.',
}

// The bodies Dr Sarika is registered with, accredited by, or trained through.
// Logos supplied by the client on 30 October 2026 and used at their request;
// each is the property of the body named beside it.
export const accreditations = [
  ['General Medical Council', '/creds/gmc.png'],
  ['Royal College of General Practitioners', '/creds/rcgp.png'],
  ['British Society of Lifestyle Medicine', '/creds/bslm.png'],
  ['Health Coaches Academy', '/creds/hca.png'],
  ['Apex Longevity Academy', '/creds/apex.png'],
  ['Precision Nutrition', '/creds/precision-nutrition.png'],
  ["Information Commissioner's Office", '/creds/ico.png'],
]

export const nav = [
  // '/#top' rather than '/': from a service page it goes home, and from the
  // home page it scrolls to the top instead of reloading the page you are on
  { label: 'Home', href: '/#top' },
  { label: 'Menopause', href: '/menopause.html' },
  { label: 'Metabolic health', href: '/metabolic.html' },
  { label: 'Longevity', href: '/longevity.html' },
  { label: 'Dr Sarika', href: '/about.html' },
  { label: 'Fees', href: '/fees.html' },
  { label: 'FAQs', href: '/#faqs' },
]

export const hero = {
  kicker: 'Dr Sarika Gorantyal · Lifestyle Medicine & Longevity Doctor',
  lead: 'Metabolic health, menopause support and longevity care,',
  // the italic tail types/erases through these; first entry is the client's own line
  tail: [
    'led by a doctor.',
    'built around you.',
    'grounded in evidence.',
    'for midlife and beyond.',
  ],
  intro:
    'Evidence-based lifestyle medicine for women in midlife, with longevity care for both men and women. Investigations and treatment where clinically appropriate.',
  primary: 'Book your complimentary discovery call',
  secondary: 'How I can help',
  trust: [
    ['Virtual & face-to-face', 'appointments'],
    ['Doctor-led', 'across the UK'],
  ],
  image: '/images/dr-sarika-seated.jpg',
  imageAlt: 'Dr Sarika Gorantyal, Lifestyle Medicine and Longevity Doctor',
  // Full-bleed background montage, silent 10s loop, client-supplied.
  video: '/video/hero-story.mp4',
  videoSmall: '/video/hero-story-sm.mp4',
  videoPoster: '/video/hero-story.jpg',
  videoPosterSmall: '/video/hero-story-sm.jpg',
}

// The opening band of Dr Sarika's own page.
export const aboutHero = {
  kicker: 'About',
  title: 'Dr Sarika Gorantyal',
  intro:
    'GP, Lifestyle Medicine and Longevity Doctor and Certified Health Coach, with a special interest in metabolic health, longevity and women’s midlife health.',
  cta: 'Book a discovery call',
  secondary: 'How I can help',
}

// The home page's introduction to Dr Sarika. Short on purpose: the full
// biography is on her own page, and running it in both places put the same
// photograph on a dark green band twice within one screen of the hero.
export const aboutIntro = {
  kicker: 'Your doctor',
  title: 'Care led by a doctor who understands midlife health',
  body: [
    'I’m a GP, Lifestyle Medicine and Longevity Doctor and Certified Health Coach, with a special interest in metabolic health, longevity and women’s midlife health.',
    'At 44, surgery for endometriosis left me in surgical menopause, living the same changes my patients had been describing to me for years. That is why this clinic exists.',
  ],
  cta: 'More about Dr Sarika',
  // the kitchen photograph, free since the nutrition section was retired, and
  // deliberately not the studio portrait the hero and her own page already use
  image: '/images/dr-sarika-kitchen.webp',
  imageAlt: 'Dr Sarika Gorantyal',
}

export const about = {
  kicker: 'About',
  title: 'Care led by a doctor who understands midlife health',
  quote:
    'I bring together general practice, lifestyle medicine and longevity training to offer care that is clinically thorough and genuinely personal.',
  body: [
    'At 44, I had surgery for endometriosis that resulted in surgical menopause. Almost overnight, I was living the same challenges so many women had shared with me over the years: weight gain, brain fog, fatigue, mood swings and bloating. Some days, I simply didn’t feel like myself.',
    'That experience changed me, both as a doctor and as a woman. It showed me how challenging this stage of life can be, physically and emotionally, and that women need more than reassurance. They need evidence-based guidance, compassionate support and practical strategies that truly make a difference.',
    'That’s why I created Kaya Reset Clinic: to help you nourish your body, improve your metabolic health, sleep better, manage stress and feel healthier, stronger and more confident.',
    'Today, I empower exhausted midlife women to take charge of their health, and help both men and women optimise their metabolic health through an evidence-based approach.',
  ],
  // MRCGP and the menopause certificate come from the client's list of 30 Oct;
  // the rest from the Kaya page of 3 Nov, which also restores the health coach
  // qualification that list had left out.
  creds: [
    'MRCGP',
    'Diploma in Lifestyle Medicine, British Society of Lifestyle Medicine',
    'Certified Health Coach, Health Coaches Academy',
    'Advanced Longevity Certification, Apex Longevity Academy',
    'Nutrition Certification, Precision Nutrition',
    'Currently completing: British Menopause Society Certificate in the Principles and Practice of Menopause Care',
  ],
  cta: 'Book a discovery call with Dr Sarika',
  image: '/images/dr-sarika-studio.jpg',
  imageAlt: 'Dr Sarika Gorantyal',
}

export const lifestyleMedicine = {
  title: 'What is lifestyle medicine?',
  body:
    'Lifestyle medicine is an evidence-based approach that uses everyday habits to prevent, manage and sometimes reverse long-term conditions. It focuses on six areas: healthy eating, physical activity, restorative sleep, managing stress, positive social connection and reducing harmful substances. Rather than treating symptoms in isolation, it looks at the whole person and helps you make changes that last.',
}

export const pillars = {
  kicker: 'The foundations of health',
  title: 'The six pillars of lifestyle medicine',
  intro:
    'Small, consistent changes across these six areas can improve symptoms, protect long-term health and help you feel like yourself again. Your plan is built around the pillars that matter most for you.',
  items: [
    ['Healthy eating', 'Whole foods, fibre and protein to support metabolic health and steady energy.', '/images/pillars/nutrition.jpg'],
    ['Physical activity', 'Regular movement and strength training for heart, muscle and bone health.', '/images/pillars/activity.jpg'],
    ['Restorative sleep', 'Consistent, good-quality sleep for recovery, mood and appetite control.', '/images/pillars/sleep.jpg'],
    ['Stress management', 'Practical tools to build resilience and support emotional wellbeing.', '/images/pillars/wellbeing.jpg'],
    ['Social connection', 'Relationships, belonging and purpose, which are linked to longer, healthier lives.', '/images/pillars/connection.jpg'],
    ['Reducing harmful substances', 'Cutting down on alcohol, smoking and other substances that harm long-term health.', '/images/pillars/substances.jpg'],
  ],
}

export const services = {
  kicker: 'How I can help',
  title: 'Care built around you, not a one-size-fits-all plan',
  intro:
    'Every person’s story, symptoms and goals are different. I start with a thorough assessment, look at the whole picture, from hormones and metabolism to sleep, stress, nutrition and activity, and build a plan that is genuinely yours.',
  items: [
    {
      name: 'Menopause & perimenopause care',
      who: 'For women',
      image: '/images/service-menopause.jpg',
      body: 'A symptom-led assessment and personalised plan for the changes affecting your sleep, mood, energy, focus and weight.',
      href: '/menopause.html',
    },
    {
      name: 'Metabolic health in midlife women',
      who: 'For women',
      image: '/images/service-metabolic.jpg',
      body: 'A medical, whole-picture approach to midlife weight change, looking beyond calories to the hormonal and metabolic factors behind it.',
      href: '/metabolic.html',
    },
    {
      name: 'Longevity care for both men and women',
      who: 'For men and women',
      image: '/images/service-longevity.jpg',
      body: 'Advanced blood panel and DEXA scan, with optional VO2 max testing and a personalised plan to protect your heart, metabolic, muscle and bone health.',
      href: '/longevity.html',
    },
  ],
}

export const menopause = {
  kicker: 'Menopause & perimenopause care',
  title: 'If your body doesn’t feel like your own any more, you’re not imagining it.',
  intro:
    'Perimenopause can begin years before your periods stop. Symptoms often creep in gradually and overlap with everyday stress, so they are easily missed. These changes are real, they can be explained, and they can be managed well with the right support.',
  // the same photograph the home page's menopause card carries, so arriving
  // here from that card lands somewhere recognisable
  leadImage: '/images/service-menopause.jpg',
  careImage: '/images/menopause-care.jpg',
  stagesTitle: 'Understanding where you are',
  stages: [
    ['Perimenopause', 'The transition before menopause, often from your late 30s or 40s. Hormone levels fluctuate, periods may become irregular and symptoms often begin. It can last several years.'],
    ['Menopause', 'Reached when you have gone 12 months without a period. In the UK the average age is 51, but it varies widely.'],
    ['Postmenopause', 'The years that follow. Some symptoms ease, but lower oestrogen has long-term effects on bone, heart and metabolic health that are worth looking after early.'],
  ],
  symptomsTitle: 'Symptoms I assess and help with',
  symptomsIntro: 'Menopause affects far more than periods and hot flushes. Common symptoms include:',
  symptoms: [
    'Hot flushes and night sweats',
    'Poor sleep and fatigue',
    'Low mood, anxiety or irritability',
    'Brain fog and losing words mid-sentence',
    'Weight gain around the middle',
    'Irregular, heavier or more painful periods',
    'Joint and muscle aches',
    'Headaches or migraines',
    'Low libido',
    'Vaginal dryness and urinary symptoms',
  ],
  careTitle: 'Care that starts with listening',
  careIntro:
    'Your appointment begins with a thorough, unhurried assessment of your history, symptoms, lifestyle and what you want from this stage of life. From there, we build a plan together that brings in nutrition, activity and lifestyle medicine alongside medical care, because these things are connected.',
  optionsTitle: 'Understanding your options',
  options: [
    ['In-depth nutrition and physical activity assessment', 'A detailed look at what, when and how you eat, and at your movement, strength and fitness, with a realistic plan to support energy, weight, muscle and bone.'],
    ['Lifestyle medicine', 'Practical changes to sleep, stress and daily routine that can improve symptoms and long-term health, and form the foundation of care alongside any other treatment.'],
    ['Medical treatment', 'Where clinically appropriate, hormonal and non-hormonal treatment options are discussed fully with you, including the evidence, benefits and risks, so any decision is an informed one made together.'],
    ['Ongoing review', 'Your plan isn’t fixed. Symptoms and needs change, so we review and adjust over time.'],
  ],
  expectTitle: 'What to expect',
  expect: [
    ['Initial consultation (60 min)', 'A full review of your story, symptoms, medical and family history and goals, using your pre-appointment questionnaire. We agree your personalised plan, including any blood tests needed.'],
    ['Your personalised plan', 'Nutrition, activity, sleep and stress guidance, with treatment where clinically appropriate.'],
    ['Follow-up reviews (30 min)', 'Usually 6 weeks after starting, then every 3 to 6 months, to check how you’re responding and refine your plan.'],
  ],
}

export const metabolic = {
  kicker: 'Weight & metabolic health',
  title: 'Metabolic health in midlife women',
  intro:
    'Many women find weight harder to manage in midlife, especially around the middle, even though nothing about their effort has changed. Eating less and moving more stops working. It isn’t that you’ve stopped trying. Your body has changed, and your plan needs to change with it.',
  changesTitle: 'What changes, and why',
  changes: [
    ['Falling oestrogen', 'Shifts fat storage towards the abdomen, where it is more metabolically active.'],
    ['Insulin resistance', 'Cells respond less well to insulin, so blood sugar is harder to control and energy dips.'],
    ['Muscle loss', 'Less muscle means fewer calories burned and less capacity to clear blood sugar after meals.'],
    ['Sleep and stress', 'Poor sleep and high stress affect appetite, cravings and where fat is stored.'],
    ['Other medical factors', 'Thyroid function, medicines and other conditions can all play a part.'],
  ],
  changesNote: 'These factors interact, which is why a plan that only counts calories so often falls short.',
  testsTitle: 'Looking beneath the surface',
  testsIntro:
    'Weight is rarely the whole story, so blood tests are used to look at what is underneath it (charged separately). Depending on your needs, this may include:',
  tests: [
    'Blood sugar and insulin markers (including HbA1c)',
    'Thyroid function',
    'Cholesterol and cardiovascular markers',
    'Liver and kidney function',
    'Relevant hormone levels',
    'Iron, vitamin D and B12, and inflammatory markers',
  ],
  testsNote:
    'Your results are explained in a dedicated 45-minute appointment and interpreted alongside your symptoms, history and goals, so your plan is based on what is really going on.',
  approachTitle: 'A medical approach, not another diet',
  approachBody:
    'I start by understanding the full picture: your history, hormones, metabolic markers, sleep, stress and routine, and what is making weight harder for you. You’ll then have a personalised plan built on lifestyle medicine, reviewed regularly as you progress. Where treatment is clinically appropriate, it is offered as part of a structured, closely monitored plan.',
  includesTitle: 'What the programme includes',
  includes: [
    ['60-minute assessment', 'The metabolic, hormonal and lifestyle factors at play, using your pre-appointment questionnaire.'],
    ['Blood tests', 'Arranged to look at your metabolic and cardiovascular health.'],
    ['45-minute results appointment', 'Your results explained and your personalised nutrition, activity, strength and sleep plan agreed.'],
    ['12-week transformation option', 'Regular check-ins over 12 weeks to track your progress and adjust your plan.'],
  ],
  outro:
    'The goal isn’t a quick number on the scales. It’s better metabolic health, more energy and changes you can keep, with a doctor alongside you.',
  southAsian: {
    kicker: 'South Asian women’s metabolic health',
    title: 'Care that reflects your background and your risk',
    body: 'South Asian women tend to develop type 2 diabetes and heart disease earlier, and at a lower body weight, than many other groups, and risk can rise further through menopause. I look at blood sugar, cholesterol, blood pressure, waist size and family history, with nutrition advice built around your food, family and culture.',
  },
}

export const longevity = {
  kicker: 'Healthspan, not just lifespan',
  title: 'Longevity care for both men and women',
  intro:
    'Lifespan is how many years you live. Healthspan is how many of those years you spend strong, mobile, sharp and free from chronic disease. Longevity medicine focuses on extending your healthspan, for women and men alike.',
  shapesTitle: 'What shapes how well you age',
  shapes: [
    ['Cardiorespiratory fitness', 'VO2 max is one of the strongest predictors of long-term health.'],
    ['Muscle and bone', 'Strength and bone density protect independence and mobility.'],
    ['Metabolic health', 'Blood sugar, cholesterol and blood pressure shape your future heart health.'],
    ['Sleep, stress and recovery', 'Daily habits that quietly influence every other marker.'],
  ],
  midlifeTitle: 'Midlife is an opportunity',
  midlifeBody:
    'Midlife is often spent reacting to symptoms and changes as they appear. But it is also one of the best times to get ahead of your long-term health. The choices you make now shape how you will feel and function in your 60s, 70s and beyond.',
  includesTitle: 'What your Longevity Assessment includes',
  includes: [
    ['In-depth consultation', 'A thorough 60-minute appointment to understand your history, family history, lifestyle and goals.'],
    ['Advanced blood panel', 'Metabolic, cardiovascular, inflammatory and hormonal markers, going beyond routine screening.'],
    ['DEXA scan', 'An accurate measure of muscle mass, visceral fat and bone density.'],
    ['Results and plan', 'Your results explained in full, with a personalised plan for fitness, strength, nutrition, sleep and stress to protect the decades ahead.'],
  ],
  optional: 'Optional: VO2 max test — your cardiorespiratory fitness, one of the strongest predictors of long-term health. Available at an extra charge.',
}

export const fees = {
  kicker: 'Fees',
  title: 'Our fees',
  intro:
    'Appointments are available virtually or face to face. Not sure which is right for you? Start with a free discovery call.',
  items: [
    {
      name: 'Initial consultation',
      price: '£195',
      meta: '60 minutes',
      body: 'A thorough first appointment for menopause, perimenopause or any midlife health concern. We go through your story, symptoms, medical and family history and goals, using your pre-appointment questionnaire, and create your personalised plan, including any blood tests needed. Your plan may include lifestyle guidance, and treatment where clinically appropriate.',
    },
    {
      name: 'Follow-up review',
      price: '£85',
      meta: '30 minutes',
      body: 'To check how you’re responding to your plan, review any changes and adjust your care.',
    },
    {
      name: 'Focused consultation',
      price: '£95',
      meta: '30 minutes',
      body: 'Not sure which package is right for you? A shorter appointment to discuss one focused problem and get practical steps to optimise your lifestyle.',
    },
    {
      name: 'Weight & Metabolic Health Programme',
      price: '£325',
      meta: '60-minute assessment · 45-minute results and plan appointment · for midlife women',
      body: 'A comprehensive, doctor-led assessment of your metabolic risk, family history, eating patterns, activity, sleep and stress, followed by a 45-minute appointment to go through your blood results and agree a personalised nutrition, activity and strength plan, built around your food and culture.',
      note: 'Covers both consultations and your personalised plan. Blood tests are charged separately.',
      popular: true,
    },
    {
      name: '12-Week Metabolic Transformation',
      price: 'Price on enquiry',
      meta: 'For midlife women',
      body: 'The Weight & Metabolic Health Programme with 12 weeks of guided support: regular check-ins to track your progress, keep you accountable and adjust your plan as your body changes.',
    },
    {
      name: 'Blood tests',
      price: 'Priced separately',
      meta: 'Arranged where clinically appropriate',
      body: 'Your blood tests are chosen around your symptoms and history, and charged at cost. You’ll be told the price before anything is ordered.',
    },
    {
      name: 'Longevity Assessment',
      price: '£625',
      meta: 'For men and women · advanced blood panel and DEXA scan included',
      body: 'A comprehensive look at how you’re ageing, with a personalised plan to protect your heart, metabolic, muscle and bone health for the decades ahead.',
      list: [
        'Pre-assessment questionnaire',
        '60-minute consultation — your medical and family history, lifestyle and goals',
        'Advanced blood panel — metabolic, cardiovascular, inflammatory and hormonal markers',
        'DEXA scan — muscle mass, visceral fat and bone density',
        '45-minute results and strategy review — everything explained in full',
        'Personalised longevity plan — fitness, strength, nutrition, sleep and stress, in writing to keep',
      ],
      note: 'VO2 max testing (cardiorespiratory fitness) can be added at an extra charge, price on enquiry.',
    },
    {
      name: 'Ongoing support packages',
      price: 'Price on enquiry',
      meta: '6-week · 3-monthly · 6-monthly check-ins',
      body: 'Regular check-ins to keep your plan on track, review progress and adjust as you go. Packages and prices are available on enquiry.',
    },
  ],
}

// Rendered by Journey.jsx, which draws a numbered track that fills as you scroll.
export const journey = {
  kicker: 'How it works',
  title: 'Discovery call → Assessment → Your plan → Review',
  steps: [
    ['Free discovery call (15 min)', 'Talk through your goals and find the right starting point.'],
    ['Your assessment', 'Your story, symptoms, medical and family history, nutrition, activity and goals, using your pre-appointment questionnaire.'],
    ['Your personalised plan', 'Lifestyle guidance, plus investigations and treatment where clinically appropriate.'],
    ['Follow-up reviews', 'To check how you’re responding and refine your plan over time.'],
  ],
}

// CLINICAL GOVERNANCE: the client's own page marks the fuller statement — the one
// naming investigations and prescribing — as needing sign-off before publishing.
// That wording is deliberately NOT carried across. This is the notice already
// live on the site, unchanged.
export const notice = {
  title: 'Please note',
  lines: [
    'This service combines lifestyle medicine coaching with doctor-led clinical assessment. Where clinically appropriate, investigations will be organised and treatment, including prescribing, may be offered as part of your care — always following a full assessment and in line with recognised clinical guidelines.',
    'This service does not provide emergency care. If you have an urgent health concern, please contact your GP, NHS 111, 999 or emergency services.',
  ],
}

export const faqs = [
  ['Is this the same as seeing my NHS GP?', 'No. This is a private, doctor-led service combining lifestyle medicine with clinical assessment. It runs alongside your NHS GP care, not instead of it.'],
  ['Do I need a blood test?', 'Not always. Where clinically appropriate, investigations will be organised as part of your assessment. If you already have recent results, these can be reviewed.'],
  ['Are appointments online or in person?', 'Both. Virtual consultations are available anywhere in the UK, and face-to-face appointments can be booked after your discovery call.'],
  ['Do I need to choose a service before booking?', 'No. Most people start with a free discovery call, where we agree together on the right starting point.'],
  ['What if I have an urgent health concern?', 'This service does not provide emergency care. For urgent concerns, please contact your GP, NHS 111, or 999.'],
]

export const discovery = {
  kicker: 'Ready to begin?',
  title: 'You don’t need to know exactly what support you need yet.',
  intro:
    'Start with a free 15-minute discovery call to talk through your goals and find the right next step. No obligation to continue.',
  bullets: [
    'Talk through your goals and what brought you here',
    'Understand how the assessments and programmes work',
    'Decide together whether we’re the right fit',
  ],
  cta: 'Book your complimentary discovery call',
  image: '/images/dr-sarika-garden.webp',
  imageAlt: 'Dr Sarika Gorantyal',
}

export const cancellation = {
  kicker: 'Before you book',
  title: 'Cancellation policy',
  intro:
    'Appointments are set aside just for you, so I ask for as much notice as possible if you need to change one.',
  items: [
    ['48 hours’ notice or more', 'You can rearrange free of charge, or cancel for a full refund.'],
    ['Less than 48 hours’ notice', '50% of the appointment fee will be charged.'],
    ['Less than 24 hours’ notice, or a missed appointment', 'The full fee will be charged.'],
    ['Arriving late', 'Your appointment will still finish at the planned time. If you are more than 15 minutes late, it may be treated as a missed appointment.'],
    ['Packages', 'Appointments within a package follow the same notice periods. Unused appointments are not refundable once a package has started, and should be used within the package timeframe.'],
    ['Blood tests and scans', 'Once a test has been ordered or processed, its cost cannot be refunded.'],
    ['If I need to cancel', 'You will be offered the next available appointment or a full refund.'],
  ],
  outro: 'Exceptions may be made in genuine emergencies or illness.',
}

export const footer = {
  tagline: site.byline,
  columns: [
    ['Care', [
      ['Menopause & perimenopause', '/menopause.html'],
      ['Metabolic health', '/metabolic.html'],
      ['Longevity', '/longevity.html'],
      ['Dr Sarika', '/about.html'],
    ]],
    ['Practical', [
      ['Fees', '/fees.html'],
      ['How it works', '/#journey'],
      ['FAQs', '/#faqs'],
      ['Cancellation policy', '/fees.html#cancellation'],
    ]],
  ],
}
