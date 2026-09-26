import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Terms of Service for Nash Magbanua's personal portfolio.
 */
export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: September 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>This website is provided as an informational portfolio showcasing the development and automation work of Nash Magbanua. You are welcome to browse the projects, review the code architecture, and get in touch.</p>

          <h2>Work and inquiries</h2>
          <p>Submitting an inquiry through this site begins a conversation regarding your project or workflow. Formal development engagements, project scopes, timelines, and milestones are agreed upon separately in writing before any development work begins.</p>

          <h2>Ownership</h2>
          <p>Original portfolio copy, screenshots, and custom code examples are the property of Nash Magbanua. Open-source dependencies, icons, and template design foundations remain licensed under their respective MIT or open-source licenses.</p>

          <h2>Liability</h2>
          <p>This portfolio and its informational content are provided on an &ldquo;as-is&rdquo; basis without warranties of any kind. Reasonable efforts are made to ensure accuracy and dependable performance.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
