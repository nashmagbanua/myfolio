import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the portrait
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with.
 */

const REACT = { src: '/icons/ai/react.svg', name: 'React' }
const VITE = { src: '/icons/ai/vite.svg', name: 'Vite' }
const TAILWIND = { src: '/icons/ai/tailwindcss.svg', name: 'Tailwind CSS' }
const NODEJS = { src: '/icons/ai/nodedotjs.svg', name: 'Node.js' }
const POSTGRES = { src: '/icons/ai/postgresql.svg', name: 'PostgreSQL' }
const DOCKER = { src: '/icons/ai/docker.svg', name: 'Docker' }
const GITHUB = { src: '/icons/ai/github.svg', name: 'GitHub' }
const CLOUDFLARE = { src: '/icons/ai/cloudflare.svg', name: 'Cloudflare' }
const N8N = { src: '/icons/ai/n8n.svg', name: 'n8n' }
const ZAPIER = { src: '/icons/ai/zapier.svg', name: 'Zapier' }
const SLACK = { src: '/icons/ai/slack-color.svg', name: 'Slack' }
const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const CHROME = { src: '/icons/ai/googlechrome.svg', name: 'Chrome' }
const EXPO = { src: '/icons/ai/expo.svg', name: 'Expo' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Web Applications & Operational Portals',
    marks: [REACT, VITE, TAILWIND, NODEJS],
  },
  {
    index: '02',
    title: 'Database-Backed Tools & Internal Utilities',
    marks: [REACT, POSTGRES, DOCKER, GITHUB],
  },
  {
    index: '03',
    title: 'Automated Workflows & API Integrations',
    marks: [N8N, ZAPIER, SLACK, CLOUDFLARE],
  },
  {
    index: '04',
    title: 'Mobile-Friendly & Logsheet Monitoring',
    marks: [REACT, EXPO, CHROME, GWS],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Building web applications, internal tools, and automation workflows that solve real operational bottlenecks.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I build software around real operational problems.
            <span> Turning complex workflows into clean, dependable tools.</span>
          </p>

          <p className="agrid__note">
            <strong>Independent development</strong> across{' '}
            <span className="agrid__link">
              internal tools & web apps
            </span>{' '}
            — from scoping practical workflows to frontend interfaces, database storage, and automated operational pipelines.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/icons/ai/react.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Full-Stack & Workflows</span>
                <span className="agrid__cell-meta">Frontend · Backend · DB</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">GMT+8 · Active & Available</span>
              </span>
            </span>

            <a
              className="agrid__cell agrid__cell--wide"
              href="https://github.com/nashmagbanua"
              target="_blank"
              rel="noreferrer"
            >
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/icons/ai/github.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">GitHub Portfolio & Repositories</span>
                <span className="agrid__cell-meta">github.com/nashmagbanua</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt={profile.hero.portraitAlt || profile.name}
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}

