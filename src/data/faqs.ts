export type QA = { q: string; a: string }

/**
 * Frequently asked questions regarding Nash Magbanua's independent development work,
 * covering project types, workflow conversion, database persistence, and collaboration.
 */
export const FAQS: QA[] = [
  {
    q: 'What kind of projects do you build?',
    a: 'I build web applications, internal tools, dashboards, calculators, database-backed systems, and mobile-friendly or PWA applications. Most projects start with a practical workflow that needs to be simplified or digitized.',
  },
  {
    q: 'Can you build something based on an existing workflow?',
    a: 'Yes. I can start from a manual routine, spreadsheet, or operational logsheet and turn the useful parts into a dedicated web tool. The priority is understanding how the process currently works and where bottlenecks can be removed.',
  },
  {
    q: 'Do you work with databases?',
    a: 'Yes. I work with Supabase/PostgreSQL and Firebase Realtime Database for applications requiring persistent records, operational history, derived calculations, and synchronized data.',
  },
  {
    q: 'Can you build applications for mobile devices?',
    a: 'Yes. I design responsive web applications that adapt cleanly across desktop and mobile screens. When required, applications can also be configured as a PWA or packaged using Capacitor for Android.',
  },
  {
    q: 'Can you work on an existing project or codebase?',
    a: 'Yes. I can work with existing repositories when the codebase is accessible and clear. I follow an audit-first approach to understand current implementations so enhancements can be introduced safely without breaking working features.',
  },
  {
    q: 'How do you usually start a project?',
    a: 'I begin by understanding the problem, workflow, users, and expected operational results. From there, I structure the work across interface design, application logic, database integration, edge-case testing, and deployment.',
  },
]

