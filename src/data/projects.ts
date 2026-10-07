export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  imageSrc?: string
  imagePosition?: string
  accentColor: string
  stats: AppStat[]
  badge: string
}

export type MobileApp = AppProject

export const mobileApps: MobileApp[] = [
  {
    name: "MY PORTAL — Company Employee Portal & Community",
    tagline: "Internal workforce access, timekeeping, and employee community platform.",
    description: "An internal employee portal bringing together access management, attendance timekeeping, visitor records, company announcements, notifications, and an employee community with posts, photos, comments, and mentions in a unified web and mobile application.",
    imageSrc: "/placeholders/project-preview-myportal.jpg",
    imagePosition: "50% 30%",
    accentColor: "#2563EB",
    badge: "Portal & PWA",
    stats: [
      { value: "React + TS", label: "Frontend" },
      { value: "Supabase", label: "Backend" },
      { value: "Capacitor", label: "Platform" },
    ],
  },
  {
    name: "Coal Dumping",
    tagline: "Tracking of coal dumped on industrial boilers (coal fired).",
    description: "Tracking of coal dumped on industrial boilers (coal fired). Real-time tracking of tonnage, boiler intake rates, feeder schedules, and combustion feed logs.",
    imageSrc: "/placeholders/project-preview-coaldumping.jpg",
    accentColor: "#EA580C",
    badge: "Boiler Systems",
    stats: [
      { value: "Industrial", label: "Boiler Track" },
      { value: "Tonnage/Hr", label: "Combustion" },
      { value: "Realtime", label: "Telemetry" },
    ],
  },
  {
    name: "Chemical Trac",
    tagline: "Tracking of total chemical used, used per dept., used per area, updating stocks.",
    description: "Tracking of total chemical used, used per dept., used per area, and updating stocks with automated inventory management and dosage logs.",
    imageSrc: "/placeholders/project-preview-chemicaltrac.jpg",
    accentColor: "#0284C7",
    badge: "Chemical Ops",
    stats: [
      { value: "Dept & Area", label: "Consumption" },
      { value: "Automated", label: "Stock Sync" },
      { value: "React + TS", label: "Stack" },
    ],
  },
  {
    name: "Coal Delivery",
    tagline: "Logs delivery record of coal for coal fired boilers.",
    description: "Logs delivery record of coal for coal fired boilers. Comprehensive intake ledger recording truck weighbridge net weights, delivery batches, and supplier records.",
    imageSrc: "/placeholders/project-preview-coaldelivery.jpg",
    accentColor: "#D97706",
    badge: "Logistics Log",
    stats: [
      { value: "Weighbridge", label: "Net Weight" },
      { value: "Supplier Logs", label: "Intake" },
      { value: "Database", label: "Persistence" },
    ],
  },
  {
    name: "Auto Coalyard Mapping FIFO",
    tagline: "First-In, First-Out yard mapping and bunker stock rotation.",
    description: "First-In, First-Out (FIFO) coalyard mapping and stockpile management. Visualizes age tiers, pile locations, reclaimed batches, and prevents spontaneous heating through systematic stock rotation.",
    imageSrc: "/placeholders/project-preview-coalyardmapping.jpg",
    accentColor: "#16A34A",
    badge: "Yard Mapping",
    stats: [
      { value: "FIFO Logic", label: "Rotation" },
      { value: "Visual Map", label: "Yard Grid" },
      { value: "Bunker Feed", label: "Safety" },
    ],
  },
  {
    name: "GPM Calculator",
    tagline: "Operational flow rate calculation and deepwell monitoring utility.",
    description: "A practical utility built for operators to calculate and interpret production flow measurements using duration-based formulas, CWS indicator checks, and record logging with seamless retake workflows.",
    imageSrc: "/placeholders/project-preview-gpm.jpg",
    accentColor: "#0EA5E9",
    badge: "Internal Tool",
    stats: [
      { value: "React + TS", label: "Frontend" },
      { value: "Supabase", label: "Storage" },
      { value: "Vercel", label: "Hosting" },
    ],
  },
  {
    name: "PowerCon",
    tagline: "Utility monitoring and equipment power reading logsheet system.",
    description: "A utility monitoring application designed for capturing, reviewing, and comparing power and equipment readings over time, featuring structured logsheet entry workflows and derived calculation tracking.",
    imageSrc: "/placeholders/project-preview-powercon.jpg",
    accentColor: "#059669",
    badge: "Utility Monitor",
    stats: [
      { value: "React + TS", label: "Frontend" },
      { value: "Firebase", label: "Realtime DB" },
      { value: "Vercel", label: "Hosting" },
    ],
  },
];

export const webApps: AppProject[] = mobileApps;
