import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "@/components/slab"

type Sample = {
  file: string
  label: string
  app: string
  tag: string
  description: string
}

const SAMPLES: Sample[] = [
  {
    file: "project-preview-myportal.jpg",
    label: "Workforce Timekeeping & Attendance",
    app: "MY PORTAL",
    tag: "Portal & PWA",
    description: "Operator shift check-in, attendance verification, visitor access logs, and internal bulletins.",
  },
  {
    file: "project-preview-coaldumping.jpg",
    label: "Boiler Feed Rate & Coal Dumping Telemetry",
    app: "Coal Dumping",
    tag: "Boiler Systems",
    description: "Tracking tons dumped, boiler intake rate, combustion logs, and live furnace telemetry.",
  },
  {
    file: "project-preview-chemicaltrac.jpg",
    label: "Chemical Usage & Stock Sync Engine",
    app: "Chemical Trac",
    tag: "Chemical Ops",
    description: "Total chemical consumption tracking per department and area with stock reorder sync.",
  },
  {
    file: "project-preview-coaldelivery.jpg",
    label: "Weighbridge Net Weight & Delivery Records",
    app: "Coal Delivery",
    tag: "Logistics Log",
    description: "Truck gross/tare weighing records, quality laboratory moisture logs, and intake batches.",
  },
  {
    file: "project-preview-coalyardmapping.jpg",
    label: "Stockpile FIFO Queue & Yard Grid Map",
    app: "Auto Coalyard Mapping FIFO",
    tag: "Yard Mapping",
    description: "First-In First-Out bay visualization, bunker rotation planning, and heating prevention.",
  },
  {
    file: "project-preview-gpm.jpg",
    label: "Flow Rate & Duration Calculation Engine",
    app: "GPM Calculator",
    tag: "Internal Tool",
    description: "Duration-based mathematical calculation, CWS & Deepwell telemetry checks, and log persistence.",
  },
  {
    file: "project-preview-powercon.jpg",
    label: "Telemetry & Equipment Power Logsheet",
    app: "PowerCon",
    tag: "Utility Monitor",
    description: "Equipment load monitoring, present vs. previous kWh difference tracking, and shift logsheets.",
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
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [active, close])

  return (
    <section className="wfs" id="workflow-samples" aria-labelledby="wfs-heading" data-reveal>
      <p className="wfs__caption" id="wfs-heading">
        Actual production workflows from MY PORTAL, Coal Dumping, Chemical Trac, Coal Delivery, Auto Coalyard Mapping FIFO, and telemetry systems.
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
                  alt={clone ? "" : `${s.app} - ${s.label} screenshot`}
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
