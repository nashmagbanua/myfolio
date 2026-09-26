import Flagship from '@/components/Flagship'

/**
 * ShowcaseGrid - the /showcase view on one glass sheet.
 *
 * A page head with a badge card on the right, then the Flagship build: the
 * five-tab product mock, the copy, the CTA, and the testimonial marquee that
 * runs under it. Same head and glass as Projects and Services, so the shell
 * reads as one system. Styles live in src/styles/showcase.css (.ktools).
 */
export default function ShowcaseGrid() {
  return (
    <section className="pgrid ktools" aria-labelledby="showcase-title">
      <header className="pgrid__head ktools__head">
        <div className="ktools__head-copy">
          <span className="pgrid__eyebrow">Showcase</span>
          <h1 className="pgrid__title" id="showcase-title">
            Interactive Showcase & Architecture
          </h1>
          <p className="pgrid__lede">
            An interactive exploration of interface design, state navigation, and responsive workflows that power practical web applications.
          </p>
        </div>

        {/* Badge slot. Fixed 320x72 box so it sits on the baseline of the
            lede. */}
        <div className="ktools__vote">
          <p className="ktools__vote-label">
            Architecture
            <span aria-hidden="true" className="ktools__vote-dot" />
            <span className="ktools__vote-ask">UI Prototype</span>
          </p>
          <div className="ktools__vote-frame ktools__vote-card">
            <img src="/icons/ai/react.svg" alt="" width="32" height="32" />
            <span className="ktools__vote-text">
              Interactive Component Showcase
            </span>
          </div>
        </div>
      </header>

      <div className="home__glass ktools__glass">
        <Flagship eyebrow="Interactive Prototype" />
      </div>
    </section>
  )
}
