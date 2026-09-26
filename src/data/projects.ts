export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  /** Optional - omit for gradient placeholder cards */
  imageSrc?: string
  /** CSS object-position override. Defaults to 'top center'. */
  imagePosition?: string
  /** External brand color - not a site token. Passed via --app-color inline prop. */
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

export const mobileApps: MobileApp[] = [
  {
    name: 'MYABN — Company Employee Portal & Community',
    tagline: 'Internal workforce access, timekeeping, and employee community platform.',
    description:
      'An internal employee portal bringing together access management, attendance timekeeping, visitor records, company announcements, notifications, and an employee community with posts, photos, comments, and mentions in a unified web and mobile application.',
    imageSrc: '/placeholders/project-preview-myabn.jpg',
    imagePosition: '50% 30%',
    accentColor: '#2563EB',
    badge: 'Portal & PWA',
    stats: [
      { value: 'React + TS', label: 'Frontend' },
      { value: 'Supabase', label: 'Backend' },
      { value: 'Capacitor', label: 'Platform' },
    ],
  },
  {
    name: 'ABN GPM Calculator',
    tagline: 'Operational flow rate calculation and deepwell monitoring utility.',
    description:
      'A practical utility built for operators to calculate and interpret production flow measurements using duration-based formulas, CWS indicator checks, and Supabase record logging with seamless retake workflows.',
    imageSrc: '/placeholders/project-preview-gpm.jpg',
    accentColor: '#0284C7',
    badge: 'Internal Tool',
    stats: [
      { value: 'React + TS', label: 'Frontend' },
      { value: 'Supabase', label: 'Storage' },
      { value: 'Vercel', label: 'Hosting' },
    ],
  },
  {
    name: 'ABN PowerCon',
    tagline: 'Utility monitoring and equipment power reading logsheet system.',
    description:
      'A utility monitoring application designed for capturing, reviewing, and comparing power and equipment readings over time, featuring structured logsheet entry workflows and derived calculation tracking.',
    imageSrc: '/placeholders/project-preview-powercon.jpg',
    accentColor: '#16A34A',
    badge: 'Utility Monitor',
    stats: [
      { value: 'React + TS', label: 'Frontend' },
      { value: 'Firebase', label: 'Realtime DB' },
      { value: 'Vercel', label: 'Hosting' },
    ],
  },
]

export const webApps: AppProject[] = mobileApps

