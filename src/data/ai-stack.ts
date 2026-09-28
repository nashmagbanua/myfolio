/**
 * The systems and technology tree shown in the Projects "systems" pop-up (and as chips on
 * Home and in the Projects bento card).
 *
 * This file is the source of truth for node copy. AIStack.tsx and AIStackGrid.tsx
 * render the shape defined here. Keep exported names and types stable.
 */

import {
  Sparkle,
  Coffee,
  Database,
  FlowArrow,
  PhoneCall,
  Browser,
  Broadcast,
  Timer,
  UsersThree,
} from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'

export type StackLogo = { src: string; name: string }

export type StackNode = {
  id: string
  name: string
  /** One plain sentence describing this technology or system. */
  what: string
  /** Real stack / framework / runtime details. */
  stack?: string
  status?: StackStatus
  Icon: Icon
  logos?: StackLogo[]
  children?: StackNode[]
}

const REACT: StackLogo = { src: '/icons/ai/react.svg', name: 'React' }
const VITE: StackLogo = { src: '/icons/ai/vite.svg', name: 'Vite' }
const TAILWIND: StackLogo = { src: '/icons/ai/tailwindcss.svg', name: 'Tailwind CSS' }
const POSTGRES: StackLogo = { src: '/icons/ai/postgresql.svg', name: 'PostgreSQL' }
const GITHUB: StackLogo = { src: '/icons/ai/github.svg', name: 'GitHub' }
const NODE: StackLogo = { src: '/icons/ai/nodedotjs.svg', name: 'Node.js' }

/** Root: developer identity. Branches are the core architectural layers. */
export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: profile.name,
  what: 'Core technologies and frameworks powering modern web applications, internal utilities, and workflow automation.',
  stack: 'Production Tech Stack',
  children: [
    {
      id: 'frontend-layer',
      Icon: Browser,
      name: 'Frontend & UI',
      what: 'Type-safe single-page applications and responsive operator interfaces.',
      children: [
        {
          id: 'stack-react',
          Icon: Browser,
          logos: [REACT],
          name: 'React & TypeScript',
          what: 'Component-driven frontend architecture with strict type safety.',
          stack: 'React 18 · TypeScript',
          status: 'Live',
        },
        {
          id: 'stack-vite',
          Icon: Sparkle,
          logos: [VITE],
          name: 'Vite Build Engine',
          what: 'Modern build pipeline for rapid compilation and optimized production bundles.',
          stack: 'Vite 6 · ESM',
          status: 'Live',
        },
        {
          id: 'stack-tailwind',
          Icon: Coffee,
          logos: [TAILWIND],
          name: 'Tailwind CSS',
          what: 'Modular styling system with custom tokens and dark mode support.',
          stack: 'Tailwind CSS · PostCSS',
          status: 'Live',
        },
      ],
    },
    {
      id: 'data-layer',
      Icon: Database,
      name: 'Backend & Data',
      what: 'Relational data modeling, secure authentication, and real-time database synchronization.',
      children: [
        {
          id: 'stack-supabase',
          Icon: Database,
          logos: [POSTGRES],
          name: 'Supabase & PostgreSQL',
          what: 'Structured tables, row-level security policies, and reliable CRUD operations.',
          stack: 'PostgreSQL · Supabase BaaS',
          status: 'Live',
        },
        {
          id: 'stack-firebase',
          Icon: Broadcast,
          logos: [REACT],
          name: 'Firebase Realtime DB',
          what: 'Instant state synchronization for equipment readings and operational telemetry.',
          stack: 'Firebase Realtime Database',
          status: 'Live',
        },
      ],
    },
    {
      id: 'platform-layer',
      Icon: PhoneCall,
      name: 'Mobile & Platforms',
      what: 'Cross-platform mobile packaging and reliable edge deployment.',
      children: [
        {
          id: 'stack-capacitor',
          Icon: PhoneCall,
          logos: [REACT],
          name: 'Capacitor & Mobile PWA',
          what: 'Native mobile runtime packaging and installable progressive web apps.',
          stack: 'Capacitor · Mobile Web',
          status: 'Live',
        },
        {
          id: 'stack-vercel',
          Icon: FlowArrow,
          logos: [VITE],
          name: 'Vercel Deployment',
          what: 'Global edge distribution, automatic deployments, and production hosting.',
          stack: 'Vercel Global Edge',
          status: 'Live',
        },
      ],
    },
    {
      id: 'tooling-layer',
      Icon: Timer,
      name: 'Tooling & DevOps',
      what: 'Version control, developer environment, and runtime automation scripts.',
      children: [
        {
          id: 'stack-github',
          Icon: UsersThree,
          logos: [GITHUB],
          name: 'GitHub Version Control',
          what: 'Source code management, feature branching, and release tracking.',
          stack: 'Git · GitHub Repositories',
          status: 'Live',
        },
        {
          id: 'stack-node',
          Icon: Timer,
          logos: [NODE],
          name: 'Node.js & Tooling',
          what: 'Development server runtime, dependency management, and build utilities.',
          stack: 'Node.js · npm',
          status: 'Live',
        },
      ],
    },
  ],
}
