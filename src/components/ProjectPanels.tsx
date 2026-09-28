import { type ReactNode } from 'react'
import { lazy, Suspense } from 'react'
import WorkflowSamples from './WorkflowSamples'
import AIStackGrid from './AIStackGrid'
import { AppsSection, AppCard } from './Projects'
import { useFunnelModal } from './FunnelModal'
import { websiteFunnel } from '@/data/funnels'
import { mobileApps, type AppProject } from '@/data/projects'

const FunnelBarrel = lazy(() => import('./FunnelBarrel'))

/**
 * What the Projects dialogs show. Each panel is the work itself, on screen
 * the moment the dialog opens - no section chrome to read past and no second
 * dialog to click into.
 */

/** Only the strip of macOS windows, drifting on the backdrop. No window. */
export function AutomationsPanel() {
  return (
    <div className="ppanel ppanel--strip">
      <WorkflowSamples />
    </div>
  )
}

/** A plain mac window with a scrolling body, for the sections that are
 *  pages rather than frames. */
function SectionWindow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ppanel__url">
          <span className="ppanel__url-host">{label}</span>
        </span>
      </div>
      <div className="ppanel__scroll">{children}</div>
    </div>
  )
}

/** Only the barrel, spinning on the backdrop. Its own page preview still
 *  stacks above (z 9000). */
export function BarrelPanel() {
  const { openFull, modal } = useFunnelModal()
  return (
    <div className="ppanel ppanel--barrel">
      <Suspense fallback={<div className="funnels__barrel-skeleton" aria-hidden="true" />}>
        <FunnelBarrel funnels={websiteFunnel} onOpen={openFull} />
      </Suspense>
      {modal}
    </div>
  )
}

/** The systems as a logo-first grid, in a scrolling window. */
export function AIWindow() {
  return (
    <SectionWindow label="Core Tech Stack">
      <AIStackGrid />
    </SectionWindow>
  )
}
export function AppsWindow() {
  return (
    <SectionWindow label="Production Applications">
      <AppsSection />
    </SectionWindow>
  )
}

/** The plan document rendered as a native, structured architectural plan. */
export function PlanPanel() {
  return (
    <div className="ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ppanel__url">
          <span className="ppanel__url-host">opsdesk.local</span>
          <span className="ppanel__url-path">/project-structure</span>
        </span>
      </div>
      <div className="ppanel__scroll" style={{ padding: 'clamp(28px, 4.5vh, 52px) clamp(20px, 3.5vw, 44px)' }}>
        <article style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <header style={{ borderBottom: '1px solid var(--line)', paddingBottom: '24px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--orange-ink)', background: 'var(--tint)', padding: '5px 12px', borderRadius: '999px', marginBottom: '14px' }}>
              Project Architecture
            </span>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.02em', margin: '0 0 12px', lineHeight: 1.2 }}>
              A practical structure for turning an operational workflow into a usable application.
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>
              Implementation methodology applied across internal portals, calculators, and telemetry monitoring systems to deliver dependable software.
            </p>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <section style={{ border: '1px solid var(--line)', borderRadius: '14px', background: 'var(--white)', padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ font: '700 13px/1 ui-monospace, SFMono-Regular, monospace', color: 'var(--orange)', background: 'var(--tint)', padding: '4px 8px', borderRadius: '6px' }}>01</span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>Understand</h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Map the workflow and operator handoffs</li>
                <li>Identify users, roles, and necessary actions</li>
                <li>Define required records, field rules, and validation</li>
              </ul>
            </section>

            <section style={{ border: '1px solid var(--line)', borderRadius: '14px', background: 'var(--white)', padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ font: '700 13px/1 ui-monospace, SFMono-Regular, monospace', color: 'var(--orange)', background: 'var(--tint)', padding: '4px 8px', borderRadius: '6px' }}>02</span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>Build</h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Responsive interface structured for desktop and mobile</li>
                <li>Application logic with deterministic calculation states</li>
                <li>Database-backed persistence for operational history</li>
              </ul>
            </section>

            <section style={{ border: '1px solid var(--line)', borderRadius: '14px', background: 'var(--white)', padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ font: '700 13px/1 ui-monospace, SFMono-Regular, monospace', color: 'var(--orange)', background: 'var(--tint)', padding: '4px 8px', borderRadius: '6px' }}>03</span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>Connect</h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Supabase / PostgreSQL or Firebase where appropriate</li>
                <li>Session state, secure queries, and record handling</li>
                <li>Clean API and service integration boundaries</li>
              </ul>
            </section>

            <section style={{ border: '1px solid var(--line)', borderRadius: '14px', background: 'var(--white)', padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ font: '700 13px/1 ui-monospace, SFMono-Regular, monospace', color: 'var(--orange)', background: 'var(--tint)', padding: '4px 8px', borderRadius: '6px' }}>04</span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>Verify</h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Test calculations against known production cases</li>
                <li>Validate edge cases, network drops, and error handling</li>
                <li>Check responsive touch targets and field ergonomics</li>
                <li>Deploy to global edge and verify production builds</li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

/** Dedicated project showcase panel reusing verified application data and AppCard component. */
function SingleAppPanel({ app }: { app: AppProject }) {
  return (
    <SectionWindow label={app.name}>
      <div className="projects projects--apps" style={{ padding: 'clamp(20px, 3vh, 40px)' }}>
        <ul className="projects__apps" role="list" style={{ maxWidth: '680px', margin: '0 auto' }}>
          <AppCard app={app} />
        </ul>
      </div>
    </SectionWindow>
  )
}

export const TicketingPanel = () => <SingleAppPanel app={mobileApps[0]} />
export const FrameworkPanel = () => <SingleAppPanel app={mobileApps[1]} />
export const WorkflowPanel = () => <SingleAppPanel app={mobileApps[2]} />
