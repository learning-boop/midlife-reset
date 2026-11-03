import App from './App'
import AboutPage from './AboutPage'
import MenopausePage from './MenopausePage'
import MetabolicPage from './MetabolicPage'
import LongevityPage from './LongevityPage'
import FeesPage from './FeesPage'

// Every page of the site in one place: its address, what renders there, and
// the title and description it sets for itself once it has mounted. The copy
// is the wording each page carried in its own .html file before the site
// became a single app.
export const routes = [
  {
    path: '/',
    element: <App />,
    title: 'Kaya Reset Clinic | Metabolic Health, Menopause Support & Longevity | Dr Sarika Gorantyal',
    description:
      'Doctor-led care for metabolic health, weight, perimenopause and menopause support, and longevity with Dr Sarika Gorantyal, Lifestyle Medicine & Longevity Doctor. Virtual and face-to-face appointments across the UK.',
  },
  {
    path: '/about',
    element: <AboutPage />,
    title: 'Dr Sarika Gorantyal | Kaya Reset Clinic',
    description:
      'Dr Sarika Gorantyal, GP, on her own experience of surgical menopause at 44 and the doctor-led approach to longevity, lifestyle medicine and menopause care that came out of it. Qualifications and accreditation.',
  },
  {
    path: '/menopause',
    element: <MenopausePage />,
    title: 'Menopause & perimenopause care | Kaya Reset Clinic',
    description:
      'Symptom-led assessment and a personalised plan for perimenopause and menopause — sleep, mood, energy, focus and weight. Doctor-led, virtual or face to face.',
  },
  {
    path: '/metabolic',
    element: <MetabolicPage />,
    title: 'Metabolic health in midlife women | Kaya Reset Clinic',
    description:
      'A medical, whole-picture approach to midlife weight change, looking beyond calories to the hormonal and metabolic factors behind it, with blood tests and a personalised plan.',
  },
  {
    path: '/longevity',
    element: <LongevityPage />,
    title: 'Longevity care for men and women | Kaya Reset Clinic',
    description:
      'Advanced blood panel, DEXA scan and optional VO2 max testing, with a personalised plan to protect your heart, metabolic, muscle and bone health.',
  },
  {
    path: '/fees',
    element: <FeesPage />,
    title: 'Fees | Kaya Reset Clinic',
    description:
      'Fees for consultations, the Weight & Metabolic Health Programme and the Longevity Assessment with Dr Sarika Gorantyal, including the cancellation policy. Appointments virtually or face to face.',
  },
]
