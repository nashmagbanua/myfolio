import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from '@/components/slab'

/**
 * WorkflowSamples
 *
 * A horizontally scrolling marquee of project screenshots. The strip loops
 * seamlessly; clicking any frame opens the full image in a faux macOS window
 * over the page. Swap the images in SAMPLES for your own.
 *
 * Marquee: the list is duplicated so the CSS keyframe can translate -50% and
 * land the reset on a seamless seam. The track pauses on hover/focus so frames
 * are easy to click. The duplicate half is aria-hidden + removed from the tab
 * order so screen readers and keyboard users see each frame once.
 *
 * Modal: createPortal to body (escapes any transformed ancestor), Escape +
 * backdrop close, body scroll lock, focus moved into the dialog and returned to
 * the trigger on close - the same pattern as the other in-page previews.
 */

type Sample = {
  file: string
  label: string
  app: string
  tag: string
  description: string
}

const SAMPLES: Sample[] = [
  {
    file: 'project-preview-myabn.jpg',
    label: 'Workforce Timekeeping & Attendance',
    app: 'MYABN Portal',
    tag: 'Portal & PWA',
    description: 'Operator shift check-in, attendance verification, visitor access logs, and internal bulletins.',
  },
  {
    file: 'project-preview-gpm.jpg',
    label: 'Flow Rate & Duration Calculation Engine',
    app: 'ABN GPM Calculator',
    tag: 'Internal Tool',
    description: 'Duration-based mathematical calculation, CWS & Deepwell telemetry checks, and log persistence.',
  },
  {
    file: 'project-preview-powercon.jpg',
    label: 'Telemetry & Equipment Power Logsheet',
    app: 'ABN PowerCon',
    tag: 'Utility Monitor',
    description: 'Equipment load monitoring, present vs. previous kWh difference tracking, and shift logsheets.',
  },
  {
    file: 'project-preview-myabn.jpg',
    label: 'Employee Community & Announcement Feed',
    app: 'MYABN Portal',
    tag: 'Mobile & Web',
    description: 'Unified company bulletin, real-time notifications, comment threads, and cross-team mentions.',
  },
]

const srcOf = (s: Sample) => `/placeholders/${encodeURIComponent(s.file)}`

export default function WorkflowSamples() {
  const doubled = useMemo(() => [...SAMPLES, ...SAMPLES], [])

  const [active, setActive] = useState<Sample | null>(null)
  const lastTriggerRef = useRef<HTMLElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)

  const open = useCallback((s: Sample, trigger: HTMLElement | null) => {
    lastTriggerRef.current = trigger ?? (document.activeElement as HTMLElement | null)
    setActive(s)
  }, [])

  const close = useCallback(() => {
    setActive(null)
    requestAnimationFrame(() => lastTriggerRef.current?.focus())
  }, [])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close])

  return (
    <section className="wfs" id="workflow-samples" aria-labelledby="wfs-heading" data-reveal>
      <p className="wfs__caption" id="wfs-heading">
        Actual production workflows from MYABN, ABN GPM Calculator, and ABN PowerCon — showing shift timekeeping, flow rate calculations, and telemetry logsheets.
      </p>

      <div className="wfs__strip">
        <div className="wfs__track">
          {doubled.map((s, i) => {
            const clone = i >= SAMPLES.length
            return (
              <button
                key={`${s.file}-${i}`}
                type="button"
                className="wfs__frame text-left"
                onClick={(e) => open(s, e.currentTarget)}
                aria-hidden={clone || undefined}
                tabIndex={clone ? -1 : undefined}
                aria-label={clone ? undefined : `Open ${s.app} ${s.label} screenshot`}
              >
                <span className="wfs__frame-bar justify-between" aria-hidden="true">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="wfs__dot wfs__dot--r" />
                    <span className="wfs__dot wfs__dot--y" />
                    <span className="wfs__dot wfs__dot--g" />
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal/70 font-semibold truncate ml-2">
                    {s.app}
                  </span>
                </span>
                <img
                  className="wfs__img"
                  src={srcOf(s)}
                  alt={clone ? '' : `${s.app} - ${s.label} screenshot`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="px-4 py-2.5 bg-[#faf9f5] border-t border-[var(--divider)] flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-charcoal truncate">{s.label}</div>
                    <div className="text-[11px] text-charcoal/65 truncate">{s.description}</div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-charcoal/5 border border-charcoal/10 text-charcoal/80 whitespace-nowrap shrink-0">
                    {s.tag}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {active &&
        createPortal(
          <div
            className="wfs__modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.app} ${active.label} screenshot`}
            onClick={(e) => {
              if (e.target === e.currentTarget) close()
            }}
          >
            <div className="wfs__window">
              <div className="wfs__bar">
                <span className="wfs__bar-dots" aria-hidden="true">
                  <span className="wfs__dot wfs__dot--r" />
                  <span className="wfs__dot wfs__dot--y" />
                  <span className="wfs__dot wfs__dot--g" />
                </span>
                <span className="wfs__bar-title">{active.app} — {active.label}</span>
                <button
                  ref={closeRef}
                  type="button"
                  className="wfs__close"
                  onClick={close}
                  aria-label="Close image"
                >
                  <X weight="bold" size={18} aria-hidden="true" />
                </button>
              </div>
              <div className="wfs__imgwrap">
                <img className="wfs__full" src={srcOf(active)} alt={`${active.app} ${active.label} screenshot`} />
              </div>
              <div className="p-4 bg-charcoal text-white border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">{active.app} • {active.tag}</div>
                  <div className="text-sm font-medium text-white/90 mt-0.5">{active.label}</div>
                  <div className="text-xs text-white/60 mt-0.5">{active.description}</div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  )
}
