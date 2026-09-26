import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Privacy Policy for Nash Magbanua's personal portfolio.
 */
export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: September 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>This policy applies to the personal developer portfolio of Nash Magbanua (MYFOLIO) accessible via this web application.</p>

          <h2>What is collected</h2>
          <p>This website does not use tracking cookies, analytics pixels, or profiling scripts. When you submit the contact form, the information you provide (your name, email address, and message) is captured solely to communicate with you.</p>

          <h2>How it is used</h2>
          <p>Information received through the contact form is used exclusively to evaluate potential projects, discuss workflows, and respond to your messages. Your contact details are never shared with or sold to third parties.</p>

          <h2>How long it is kept</h2>
          <p>Direct inquiries and emails are retained only as long as needed for ongoing correspondence and project coordination. You may request the deletion of your correspondence at any time by sending an email.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
