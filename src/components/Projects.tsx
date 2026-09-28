import { mobileApps, type AppProject } from '@/data/projects'
import AIStack from '@/components/AIStack'
import Flagship from '@/components/Flagship'

/* ── App card ───────────────────────────────────────────────── */
export function AppCard({ app }: { app: AppProject }) {
  return (
    <li
      className="app-card"
      style={{ ['--app-color' as string]: app.accentColor }}
    >
      <div className="app-card__img-wrap">
        {app.imageSrc ? (
          <img
            className="app-card__img"
            src={app.imageSrc}
            alt={`${app.name} screenshot`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="app-card__img-placeholder" aria-hidden="true">
            <span className="app-card__img-initials">
              {app.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
            </span>
          </div>
        )}
        <span className="app-card__badge">{app.badge}</span>
        <span className="app-card__img-fade" aria-hidden="true" />
      </div>
      <div className="app-card__body">
        <h3 className="app-card__name">{app.name}</h3>
        <p className="app-card__tagline">{app.tagline}</p>
        <p className="app-card__desc">{app.description}</p>
        <ul className="app-card__stats" role="list">
          {app.stats.map((stat) => (
            <li key={stat.label} className="app-card__stat">
              <span className="app-card__stat-value">{stat.value}</span>
              <span className="app-card__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

/* ── Sections ───────────────────────────────────────────────
   Two exports so the Projects dialog can open each body of work on its own;
   the default still composes them (with Flagship) for anything that wants
   the whole section. */
export function AIStackSection() {
  return (
    <section
      className="projects projects--ai"
      id="projects"
      aria-labelledby="projects-heading"
      data-reveal
    >
      <header className="projects__header">
        <span className="projects__eyebrow">Architecture</span>
        <h2 className="projects__headline" id="projects-heading">
          Core Tech Stack
        </h2>
        <p className="projects__subhead">
          Production technologies and frameworks powering web applications, internal tools, and operational systems.
        </p>
      </header>
      <div className="projects__panel" id="projects-panel">
        <AIStack />
      </div>
    </section>
  )
}

export function AppsSection() {
  return (
    <section className="projects projects--apps" aria-label="Production applications" data-reveal>
      <div className="projects__panel">
        <span className="projects__ext-eyebrow">Production Applications</span>
        <ul className="projects__apps" role="list">
          {mobileApps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Projects() {
  return (
    <>
      <AIStackSection />
      <AppsSection />
      <Flagship />
    </>
  )
}
