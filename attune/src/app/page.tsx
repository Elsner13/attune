import Image from 'next/image'
import Link from 'next/link'
import { TubelightNav } from '@/components/TubelightNav'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "You're Not Behind. You're in the Wrong Environment.",
  description:
    'Attune helps high-effort learners break through skill plateaus. If you are putting in the work but not seeing results, the problem is not effort — it is the conditions. Learn how to change them.',
  openGraph: {
    title: "You're Not Behind. You're in the Wrong Environment.",
    description:
      'Attune helps high-effort learners break through skill plateaus. If you are putting in the work but not seeing results, the problem is not effort — it is the conditions.',
  },
}

const STRIPE_URL = 'https://buy.stripe.com/6oUaEX75TftH4GP77RefC06'

export default function Home() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '80px',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 'min(380px, 32vw)',
          aspectRatio: '1 / 1',
          marginBottom: '24px',
        }}
      >
        <Image src="/attune-logo.png" alt="Attune" fill style={{ objectFit: 'contain' }} priority />
      </div>

      <p
        style={{
          fontFamily: 'var(--font-montserrat-alternates)',
          fontSize: 'clamp(16px, 1.4vw, 24px)',
          fontWeight: 400,
          letterSpacing: '0.02em',
          color: '#000000',
          textAlign: 'center',
          textTransform: 'uppercase',
          margin: '0 0 12px',
        }}
      >
        You&apos;re not broken. The conditions are.
      </p>

      <p
        style={{
          fontFamily: 'var(--font-montserrat-alternates)',
          fontSize: 'clamp(15px, 1vw, 16px)',
          fontWeight: 400,
          color: '#555555',
          textAlign: 'center',
          letterSpacing: '0.01em',
          margin: '0 0 32px',
          maxWidth: '500px',
        }}
      >
        Most people fix the wrong thing. More discipline. Better habits. More reps.
        The environment stays the same. The results stay the same.
        Skill doesn&apos;t live inside you — it lives in the relationship between
        you and how you practice. Fix that, and everything changes.
      </p>

      <a
        href={STRIPE_URL}
        style={{
          fontFamily: 'var(--font-montserrat-alternates)',
          fontSize: 'clamp(12px, 1vw, 14px)',
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: '#000000',
          textDecoration: 'none',
          border: '1px solid #000000',
          padding: '10px 28px',
        }}
      >
        Start with Foundations — $197
      </a>

      <Link
        href="/coaching"
        style={{
          fontFamily: 'var(--font-montserrat-alternates)',
          fontSize: 'clamp(11px, 0.85vw, 12px)',
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: '#aaaaaa',
          textDecoration: 'none',
          marginTop: '16px',
        }}
      >
        Or work with me directly →
      </Link>

      <TubelightNav />
    </div>
  )
}
