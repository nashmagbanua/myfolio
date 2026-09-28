import { Link, useLocation } from 'react-router-dom'
import { ChatCircleDots, ArrowUpRight } from '@/components/slab'

/**
 * FloatingContact
 *
 * A persistent floating action button fixed at the bottom-right corner of all devices,
 * mirroring the bottom-left Accessibility menu button. Hidden automatically when
 * the visitor is already on the /contact route.
 */
export default function FloatingContact() {
  const { pathname } = useLocation()

  // Do not render when already viewing the FAQs / Contact page
  if (pathname === '/contact') return null

  return (
    <aside className="floating-contact-wrap" aria-label="Quick contact">
      <Link
        to="/contact"
        className="floating-contact"
        aria-label="Get in touch with Nash Magbanua"
      >
        <span className="floating-contact__icon" aria-hidden="true">
          <ChatCircleDots size={20} weight="fill" />
        </span>
        <span className="floating-contact__label">Get in touch</span>
        <ArrowUpRight size={15} weight="bold" className="floating-contact__arrow" aria-hidden="true" />
      </Link>
    </aside>
  )
}
