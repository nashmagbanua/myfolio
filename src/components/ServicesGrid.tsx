import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: your three-step method (on a dark plate so it
 * is the first thing the eye lands on), the five services as cards that carry
 * the marks of what each one is built with, and the live automation demo
 * scaled into whatever height is left.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Understand',
    body: 'Start with the workflow, operational bottleneck, and desired result before writing code.',
    Icon: MagnetStraight,
    chips: ['Workflow Analysis', 'Requirements', 'Data Structure'],
  },
  {
    index: '02',
    label: 'Build',
    body: 'Design and build the responsive interface, application logic, and database flow around actual operator needs.',
    Icon: Timer,
    chips: ['React & TS', 'Database Setup', 'Application Logic'],
  },
  {
    index: '03',
    label: 'Test & Deploy',
    body: 'Test edge cases, verify calculations and record workflows, and deploy a stable, maintainable tool.',
    Icon: Trophy,
    chips: ['Validation', 'Vercel Deployment', 'Operator Ready'],
  },
]

/* ---------- The services ---------- */

// Verified tool marks from /public/icons/ai supporting Nash's actual stack.
const REACT = '/icons/ai/react.svg'
const TAILWIND = '/icons/ai/tailwindcss.svg'
const VITE = '/icons/ai/vite.svg'
const POSTGRES = '/icons/ai/postgresql.svg'
const NODEJS = '/icons/ai/nodedotjs.svg'
const GITHUB = '/icons/ai/github.svg'
const CHROME = '/icons/ai/googlechrome.svg'
const PLAY = '/icons/ai/googleplay.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Web Application Development',
    description: 'Custom, responsive web applications built with modern frontend frameworks and clean architecture.',
    chip: 'Web & PWA',
    logos: [REACT, VITE, TAILWIND],
    bullets: [
      'React & TypeScript single-page applications',
      'Responsive layouts tailored for desktop and mobile',
      'Clean, maintainable component architecture',
    ],
  },
  {
    index: '02',
    title: 'Internal Tools & Portals',
    description: 'Practical workforce portals and operational utilities that turn manual routines into streamlined digital processes.',
    chip: 'Operations',
    logos: [REACT, POSTGRES, VITE],
    bullets: [
      'Employee access and workplace community portals',
      'Custom logsheets, timekeeping, and visitor records',
      'Operator-friendly interfaces with clear feedback',
    ],
  },
  {
    index: '03',
    title: 'Dashboards & Monitoring',
    description: 'Clean operational dashboards for recording, viewing, and comparing telemetry, equipment, and production readings.',
    chip: 'Telemetry',
    logos: [REACT, TAILWIND, GITHUB],
    bullets: [
      'Current vs. previous reading comparisons',
      'Calculated outputs and operational status indicators',
      'Historical logsheet review and trend tracking',
    ],
  },
  {
    index: '04',
    title: 'Database-Backed Applications',
    description: 'Reliable data storage and synchronization so records can be captured, retrieved, and organized securely.',
    chip: 'Data Storage',
    logos: [POSTGRES, REACT, NODEJS],
    bullets: [
      'Structured relational and document databases',
      'Supabase and Firebase Realtime Database setup',
      'Reliable record storage with session retake logic',
    ],
  },
  {
    index: '05',
    title: 'Automation & Workflow Logic',
    description: 'Application workflows that reduce manual calculations, handle repetitive steps, and link operational data.',
    chip: 'Workflows',
    logos: [CHROME, PLAY, GITHUB],
    bullets: [
      'Formula-driven operational calculators',
      'Automated data validation and status triggers',
      'PWA and Capacitor mobile application packaging',
    ],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Practical software development for real-world operations.
        </h1>
        <p className="pgrid__lede">
          I design and build dependable web applications, internal utilities, and automated operational pipelines focused on solving everyday workflow bottlenecks.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">Process</span>
            <h2 className="sgrid__method-title" id="method-title">
              One. Two. Three.
              <br />
              <span>From workflow problem to dependable tool.</span>
            </h2>
            <p className="sgrid__method-sub">
              A straightforward, practical development approach focused on clarity, dependability, and solving the actual problem.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Areas of Focus</h2>
            <p className="sgrid__offers-sub">Practical solutions tailored to your operational needs.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* The live workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Workflow Architecture</span>
              <h2 className="sgrid__flow-title">Operational logic in action.</h2>
              <p className="sgrid__flow-sub">
                Demonstrating how structured triggers, validation gates, and automated notifications link together in real software.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}
