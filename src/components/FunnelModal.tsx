import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from '@/components/slab'
import type { Funnel } from '@/data/funnels'

/**
 * The in-page funnel preview: a browser-chrome dialog that iframes the real
 * page so a visitor never leaves the portfolio.
 *
 * It lives here rather than inside Funnels because two surfaces open it now -
 * the Projects view's full section and the reel on Home. One dialog, one focus
 * contract, one scroll lock.
 */
export function fullSrc(funnel: Funnel) {
  return `/${funnel.dir ?? 'funnels'}/${funnel.file}`
}

export function useFunnelModal() {
  const [funnel, setFunnel] = useState<Funnel | null>(null)
  // Track what opened the dialog so focus goes back there on close, instead of
  // dumping keyboard users at the top of the document.
  const lastTriggerRef = useRef<HTMLElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)

  const openFull = useCallback((next: Funnel, trigger?: HTMLElement | null) => {
    lastTriggerRef.current = trigger ?? (document.activeElement as HTMLElement | null)
    setFunnel(next)
  }, [])

  const close = useCallback(() => {
    setFunnel(null)
    requestAnimationFrame(() => lastTriggerRef.current?.focus())
  }, [])

  // Escape to dismiss, scroll locked while open, focus moved into the dialog.
  useEffect(() => {
    if (!funnel) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      // Always clear to default - never restore a possibly stale 'hidden'.
      document.body.style.overflow = ''
    }
  }, [funnel, close])

  const modal =
    funnel &&
    createPortal(
      <div
        className="funnels__modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${funnel.label} preview`}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        <div className="funnels__modal-shell">
          <div className="funnels__modal-bar">
            <div className="funnels__modal-lights" aria-hidden="true">
              <span className="funnels__modal-light funnels__modal-light--red" />
              <span className="funnels__modal-light funnels__modal-light--amber" />
              <span className="funnels__modal-light funnels__modal-light--green" />
            </div>
            <div className="funnels__modal-url" aria-hidden="true">
              <span className="funnels__modal-url-scheme">myfolio-magbanua.vercel.app</span>
              <span className="funnels__modal-url-path">/concepts/{funnel.label.toLowerCase().replace(/\s+/g, '-')}</span>
            </div>
            <div className="funnels__modal-actions">
              <button
                ref={closeRef}
                type="button"
                className="funnels__modal-close"
                onClick={close}
                aria-label="Close preview"
              >
                <X weight="bold" size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="funnels__modal-preview" style={{ flex: 1, overflowY: 'auto', background: 'var(--paper, #fbfaf6)', padding: 'clamp(28px, 4.5vh, 48px) clamp(20px, 3.5vw, 40px)' }}>
            <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <header style={{ borderBottom: '1px solid var(--line, #e4e1d6)', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--orange-ink, #ff5722)', background: 'var(--tint, #f2efe6)', padding: '5px 12px', borderRadius: '999px' }}>
                    Interface Concept Preview
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--muted, #5d6270)', fontFamily: 'ui-monospace, monospace' }}>
                    Responsive Pattern
                  </span>
                </div>
                <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: 'var(--navy, #14161c)', letterSpacing: '-0.02em', margin: '0 0 10px', lineHeight: 1.2 }}>
                  {funnel.label}
                </h2>
                <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--muted, #5d6270)', margin: 0 }}>
                  {funnel.desc}
                </p>
              </header>

              {/* High-fidelity layout mockup */}
              <div style={{ border: '1px solid var(--line, #e4e1d6)', borderRadius: '14px', background: 'var(--white, #ffffff)', padding: 'clamp(18px, 2.5vh, 28px)', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
                {/* Mock navigation bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--line, #e4e1d6)', paddingBottom: '16px', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: 'var(--navy, #14161c)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px', fontWeight: 700 }}>
                      UI
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy, #14161c)' }}>{funnel.label}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ width: '56px', height: '8px', borderRadius: '4px', background: 'var(--tint, #e4e1d6)' }} />
                    <span style={{ width: '40px', height: '8px', borderRadius: '4px', background: 'var(--tint, #e4e1d6)' }} />
                  </div>
                </div>

                {/* Mock metrics row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                  {[
                    { label: 'View Type', value: 'Responsive Layout' },
                    { label: 'Data Density', value: 'High / Tabular' },
                    { label: 'Validation', value: 'Active Real-Time' },
                  ].map((m, i) => (
                    <div key={i} style={{ padding: '12px 14px', borderRadius: '10px', background: 'var(--paper, #fbfaf6)', border: '1px solid var(--line, #e4e1d6)' }}>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--muted, #5d6270)', display: 'block', marginBottom: '4px' }}>
                        {m.label}
                      </span>
                      <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--navy, #14161c)' }}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mock data canvas */}
                <div style={{ border: '1px dashed var(--line, #e4e1d6)', borderRadius: '10px', background: 'var(--tint, #f2efe6)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ width: '35%', height: '14px', borderRadius: '6px', background: 'rgba(20,22,28,0.12)' }} />
                  <div style={{ width: '85%', height: '10px', borderRadius: '5px', background: 'rgba(20,22,28,0.07)' }} />
                  <div style={{ width: '70%', height: '10px', borderRadius: '5px', background: 'rgba(20,22,28,0.07)' }} />
                  <div style={{ width: '92%', height: '10px', borderRadius: '5px', background: 'rgba(20,22,28,0.07)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body,
    )

  return { openFull, modal }
}
