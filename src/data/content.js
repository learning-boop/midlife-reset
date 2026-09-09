// All page copy lives here so the client can edit text without touching components.

export const site = {
  name: 'The Midlife-reset',
  domain: 'themidlifereset.uk',
  bookingUrl: '#discovery', // TODO: replace with Cal.com / booking link
  email: 'mailto:hello@themidlifereset.uk', // TODO: confirm
  whatsapp: '#', // TODO: confirm
}

export const nav = [
  { label: 'How we can help', href: '#support', caret: true },
  { label: 'Packages', href: '#packages' },
  { label: 'Dr Sarika', href: '#about' },
  { label: 'Lifestyle Medicine', href: '#lifestyle' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  kicker: 'Dr Sarika Gorantyal · NHS GP · Lifestyle Medicine · Health Coach',
  lead: 'Personalised support for…',
  words: ['metabolic health', 'healthy weight', 'midlife & menopause', 'strength & healthy ageing', 'sustainable change'],
  primary: 'Start your health journey — book a free discovery call',
  secondary: 'Why a GP-led approach?',
  trust: [
    ['GP-led', 'NHS GP'],
    ['Evidence-informed', 'Lifestyle Medicine'],
    ['100% virtual', 'across the UK'],
  ],
  checks: [
    'Medical knowledge combined with lifestyle medicine',
    'A plan that fits your actual life, not the other way round',
    'Sustainable habits, not a quick fix',
  ],
  image: '/images/dr-sarika-hero.jpg',
}

export const pillars = {
  kicker: 'What is Lifestyle Medicine?',
  title: 'A whole-person approach to health, not a symptom checklist',
  intro: "Rather than focusing only on symptoms, Lifestyle Medicine looks at the bigger picture: how you nourish your body, move, sleep, manage stress, connect with others and build habits that stick. The aim isn't perfection — it's realistic change that supports your health now and in the future.",
  // [title, body, image] — swap image URLs for client photography when available
  items: [
    ['Nutrition', 'Supporting balanced, sustainable eating patterns that nourish your body and support metabolic health.', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80'],
    ['Physical activity', 'Helping you build enjoyable movement into your lifestyle.', 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=900&q=80'],
    ['Strength & muscle health', 'Supporting strength, independence and healthy ageing through resistance-based activity.', 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80'],
    ['Sleep', 'Improving sleep habits to support energy, recovery and wellbeing.', 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=80'],
    ['Stress & emotional wellbeing', 'Developing strategies to improve resilience, balance and coping.', 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80'],
    ['Social connection', 'Recognising the importance of relationships, belonging and support.', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'],
  ],
}

export const journey = {
  kicker: 'Your health journey',
  title: 'Assess → Personalise → Support → Sustain',
  steps: [
    ['Discovery call', "A conversation to understand your goals and whether we're the right fit."],
    ['Comprehensive assessment', 'A detailed review of your lifestyle, health goals and priorities.'],
    ['Personalised health plan', 'Clear, practical recommendations focused on what matters most.'],
    ['Ongoing support', 'Regular reviews, accountability and adjustments.'],
    ['Long-term strategy', 'Help maintaining changes well beyond the programme.'],
  ],
}

export const stats = {
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1800&q=80',
  items: [
    ['44', 'The age surgical menopause changed how Dr Sarika practises medicine.'],
    ['100%', 'Virtual consultations, available anywhere in the UK.'],
  ],
}

export const support = {
  kicker: 'How we can support you',
  title: 'Two starting points, depending on what brought you here',
  cards: [
    {
      title: 'Lifestyle & Biometabolic Health Assessment',
      intro: 'For women and men who want to understand the lifestyle factors influencing their health. This assessment explores:',
      list: ['Nutrition and eating patterns', 'Healthy weight goals', 'Metabolic health', 'Physical activity', 'Strength and muscle health', 'Sleep', 'Stress and wellbeing', 'Lifestyle habits', 'Existing health information and blood results, where available'],
      outro: "You'll receive a personalised summary highlighting your key priorities and practical next steps.",
    },
    {
      title: 'Midlife & Menopause Assessment',
      intro: 'For women navigating perimenopause, menopause and midlife changes. Together we explore:',
      list: ['Menopause stage and symptoms', 'Nutrition', 'Weight and body composition changes', 'Strength and muscle health', 'Sleep', 'Energy and wellbeing', 'Stress', 'Healthy ageing', 'Long-term metabolic health'],
      outro: 'We identify practical lifestyle strategies to support your health during this stage of life.',
    },
  ],
  packages: {
    kicker: 'Menopause coaching packages',
    title: 'Three levels of support, built around this stage of life',
    tiers: [
      { level: 'Tier 1', name: 'Foundation', body: 'A single Midlife & Menopause Assessment, with a personalised summary highlighting your key priorities and practical next steps.', best: 'Best for clarity on where to start.' },
      { level: 'Tier 2', name: 'Signature', popular: true, body: 'Assessment plus 3 months of 1-to-1 coaching covering nutrition, movement, sleep and stress, with regular check-ins and adjustments along the way.', best: 'Best for sustained, guided support through the transition.' },
      { level: 'Tier 3', name: 'Premium', body: 'Assessment plus 6 months of 1-to-1 coaching with weekly support, meal-planning, habit tracking and priority access between sessions.', best: 'Best for the most hands-on, comprehensive support.' },
    ],
    note: 'Pricing for each tier to be confirmed — book a discovery call to discuss which level of support is right for you.',
  },
}

export const focus = {
  title: 'A personalised approach, focusing on what matters to you',
  cards: [
    ['Metabolic health', 'Understanding the lifestyle factors behind your numbers and how you feel.', '#support', 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=80'],
    ['Healthy weight', 'Looking beyond weight alone, with sustainable changes rather than quick fixes.', '#support', 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80'],
    ['Midlife & menopause', 'Practical strategies for perimenopause, menopause and midlife change.', '#packages', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80'],
    ['Strength & healthy ageing', 'Resistance-based activity to protect strength and independence.', '#lifestyle', 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=80'],
    ['Sustainable lifestyle change', 'Behaviour-change coaching so new habits become part of your life.', '#lifestyle', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80'],
  ],
  why: {
    kicker: 'Why choose this approach?',
    title: 'Medical expertise, combined with lifestyle support',
    items: [
      ['GP-led', 'Medical knowledge combined with Lifestyle Medicine principles.'],
      ['Personalised', 'Your goals and circumstances guide your plan.'],
      ['Evidence-informed', 'Based on established lifestyle and preventative health principles.'],
      ['Practical', 'Designed around real life, not an idealised one.'],
      ['Whole-person', 'Looking beyond weight alone.'],
      ['Sustainable', 'Helping you create habits for long-term health.'],
    ],
  },
}

export const about = {
  kicker: 'About Dr Sarika Gorantyal',
  title: 'A GP-led approach to sustainable health change',
  quote: "I'm a GP with a special interest in prevention, Lifestyle Medicine and helping people make changes that actually last. My interest in midlife health became personal after my own experience of surgical menopause at 44. It showed me the gap between ‘your bloods are normal’ and ‘I don't feel like myself’ — and how much lifestyle, nutrition, movement, sleep and wellbeing can do to close it.",
  body: 'My approach combines medical knowledge with practical behaviour-change strategies, so your plan fits your actual life — not the other way around.',
  creds: ['NHS GP', 'Lifestyle Medicine, British Society of Lifestyle Medicine', 'Certified Health Coach, Health Coaches Academy', 'Completing: BMS Certificate in the Principles and Practice of Menopause Care'],
  cta: 'Book a discovery call with Dr Sarika',
  image: '/images/dr-sarika-portrait.jpg',
}

export const nutrition = {
  kicker: 'Nutrition approach',
  title: 'Practical nutrition for real life',
  intro: 'There is no one-size-fits-all diet. The focus is sustainable habits, not short-term rules.',
  consider: ['Your goals', 'Your lifestyle', 'Your preferences', 'Your cultural background', 'Your family commitments', 'Your relationship with food'],
  support: ['Balanced meal structure', 'Protein and fibre optimisation', 'Meal-planning strategies', 'Practical food choices', 'Eating out strategies', 'Sustainable habits'],
}

export const discovery = {
  kicker: 'Ready to begin?',
  title: "You don't need to know exactly what support you need yet",
  intro: 'Start with a complimentary 15-minute discovery call to talk through your goals, understand how the service works and find the right next step — no obligation to continue.',
  bullets: ['Discuss your goals and what brought you here', 'Understand how the assessments and packages work', "Decide together whether we're the right fit"],
  cta: 'Book your complimentary discovery call',
  image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=900&q=80',
}

export const faqs = [
  ['Is this a private GP service?', 'No. This service is focused on Lifestyle Medicine assessment and health coaching support. It is not a private GP service and does not provide emergency care. For urgent concerns, please contact your GP, NHS 111, 999 or appropriate emergency services.'],
  ['Do you prescribe medication or order blood tests?', "Medications are not routinely prescribed and general blood tests are not ordered through this service. Existing health information and blood results may be reviewed where appropriate. If medical assessment, investigation or treatment is required, you'll be advised to seek appropriate medical care."],
  ['Are consultations online?', 'Yes — all consultations are virtual and available anywhere in the UK.'],
  ['What do I receive after an assessment?', 'A personalised summary highlighting your key priorities and practical next steps. Depending on your programme you may also receive a Personal Lifestyle Health Plan, goal-setting worksheets, meal-planning resources, habit trackers, lifestyle guides and progress reviews.'],
  ['Is this only for women going through menopause?', 'No. The Lifestyle & Biometabolic Health Assessment is for women and men who want to understand the lifestyle factors influencing their health. The Midlife & Menopause Assessment and coaching packages are designed for women navigating perimenopause, menopause and midlife changes.'],
  ['How much does it cost?', 'Pricing for each tier is being confirmed. Book a discovery call or join the mailing list to be notified first and to discuss which level of support is right for you.'],
]

export const notice = {
  title: 'Please note',
  lines: [
    'This service is focused on Lifestyle Medicine assessment and health coaching support. It is not a private GP service and does not provide emergency care or routine prescribing.',
    'For urgent concerns, please contact your GP, NHS 111, 999 or emergency services.',
  ],
}

export const footer = {
  tagline: 'Dr Sarika Gorantyal · GP · Lifestyle Medicine · Health Coach',
  columns: [
    ['Focus', [['Lifestyle & biometabolic health', '#support'], ['Midlife & menopause', '#packages'], ['Healthy ageing', '#lifestyle']]],
    ['About', [['About Dr Sarika', '#about'], ['What is Lifestyle Medicine?', '#lifestyle'], ['FAQs', '#faq']]],
    ['Get started', [['Discovery call', '#discovery'], ['Assessments', '#support'], ['Coaching packages', '#packages']]],
    ['Site', [['Privacy policy', '#'], ['Terms & conditions', '#'], ['Disclaimer', '#'], ['Contact', '#contact']]],
  ],
}