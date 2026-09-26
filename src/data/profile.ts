/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Nash Magbanua',
  firstName: 'Nash',
  handle: '@nashmagbanua',
  role: 'Developer / Automation Builder',
  avatarSrc: '/profile.jpg',
  verifiedLabel: 'Independent Developer',
  email: 'nashmagbanua@gmail.com',
  location: 'Batangas, Philippines',
  stats: [
    { value: 'GMT+8', label: 'Timezone' },
    { value: 'Web', label: 'Development' },
    { value: 'Auto', label: 'Workflows' },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Built for Reliability.', line2: 'Scaled for Impact.' },
  hero: {
    body: 'I design and build web apps, internal tools, and automation systems that solve real-world operational bottlenecks.',
    portraitSrc: '/profile.jpg',
    portraitAlt: 'Portrait of Nash Magbanua',
  },
  socials: [
    { label: 'GitHub profile', href: 'https://github.com/nashmagbanua', iconPath: '/icons/ai/github.svg' },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/nash-magbanua-560077437/', iconPath: '/icons/linkedin.svg' },
    { label: 'Facebook profile', href: 'https://www.facebook.com/profile.php?id=61585308898126', iconPath: '/icons/facebook.svg' },
  ],
}
