import { Link } from 'react-router-dom'
import { SealCheck, ArrowUpRight, Play, Stack, Coffee } from '@/components/slab'
import { profile } from '@/data/profile'
import ThemeButton from './ThemeButton'

/**
 * Home on a phone, the parts the rail and the bento used to carry:
 *
 *   HomeProfile  avatar, name, verified mark, handle and the theme switch -
 *                the rail's identity block, laid flat
 *   HomeStats    three proof facts (profile.stats)
 *   HomeExplore  one tile per rail view in a snap row, then the first
 *                testimonial as a proof card
 */

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt={profile.name} width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck size={16} weight="fill" className="hprofile__verified" aria-label={profile.verifiedLabel} />
        </span>
        <span className="hprofile__handle">
          {profile.handle} · {profile.role}
        </span>
      </div>
      <ThemeButton className="hprofile__theme" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map((s, i) => (
        <li key={i}>
          <b>{s.value}</b>
          <span>{s.label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Projects', to: '/projects', title: 'Web Apps & Utilities', desc: 'Internal portals, calculators, and monitoring tools.', img: '/placeholders/project-preview-myabn.jpg' },
  { n: '02', label: 'Services', to: '/services', title: 'Areas of Focus', desc: 'Web applications, database storage, and automated workflows.', Icon: Stack, dark: true },
  { n: '03', label: 'Showcase', to: '/showcase', title: 'Interactive Showcase', desc: 'Hands-on workflow logic and responsive UI architecture.', Icon: Coffee, dark: true, accent: true },
  { n: '04', label: 'Testimonials', to: '/testimonials', title: 'Operational Notes', desc: 'Production applications built around real workflows.', img: '/placeholders/project-preview-powercon.jpg' },
  { n: '05', label: 'About', to: '/about', title: `Hi, I'm ${profile.firstName}.`, desc: 'Independent developer & automation builder based in Batangas.', img: profile.avatarSrc },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
        <span className="hsec__aside">Swipe</span>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'dark' in t && t.dark ? ' htile--dark' : ''}${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              <span className="htile__n">{t.n} {t.label}</span>
              {'img' in t ? (
                <img className="htile__img" src={t.img} alt="" loading="lazy" />
              ) : (
                <span className="htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              )}
              <span className="htile__body">
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
              <span className="htile__go" aria-hidden="true"><ArrowUpRight size={16} weight="bold" /></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="hsec">
        <h2 className="hsec__title">Engineering Focus</h2>
        <Link to="/about" className="hsec__aside">About</Link>
      </div>
      <Link to="/about" className="hproof">
        <span className="hproof__thumb">
          <img src={profile.avatarSrc} alt="" width={96} height={96} loading="lazy" />
          <span className="hproof__play" aria-hidden="true"><Play size={14} weight="fill" /></span>
        </span>
        <span className="hproof__copy">
          <span className="hproof__kicker">Core Philosophy</span>
          <span className="hproof__title">Building software around real problems — turning manual bottlenecks into clear, dependable tools.</span>
          <span className="hproof__meta">Independent Developer · Batangas, PH</span>
        </span>
      </Link>
    </>
  )
}
