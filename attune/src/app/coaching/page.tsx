import Image from 'next/image'
import Link from 'next/link'
import { TubelightNav } from '@/components/TubelightNav'

export default function CoachingPage() {
  return (
    <div style={{ position: 'fixed', inset: 0, background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Link href="/" style={{ position: 'relative', width: 'min(380px, 32vw)', aspectRatio: '1 / 1', marginBottom: '24px', display: 'block' }}>
        <Image src="/attune-logo.png" alt="Attune" fill style={{ objectFit: 'contain' }} priority />
      </Link>
      <p style={{ fontFamily: 'var(--font-montserrat-alternates)', fontSize: 'clamp(12px, 1.4vw, 24px)', fontWeight: 400, letterSpacing: '0.02em', color: '#000000', textAlign: 'center', textTransform: 'uppercase', margin: '0 0 12px' }}>
        There are things a course cannot do.
      </p>
      <p style={{ fontFamily: 'var(--font-montserrat-alternates)', fontSize: 'clamp(10px, 1vw, 16px)', fontWeight: 400, color: '#555555', textAlign: 'center', letterSpacing: '0.01em', margin: '0 0 32px', maxWidth: '420px' }}>
        Ten spots. Monthly engagement. The kind of attention that actually changes something.
      </p>
      <a href="/apply" style={{ fontFamily: 'var(--font-montserrat-alternates)', fontSize: 'clamp(10px, 1vw, 14px)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#000000', textDecoration: 'none', border: '1px solid #000000', padding: '10px 28px' }}>
        Apply for a spot
      </a>
      <TubelightNav />
    </div>
  )
}
