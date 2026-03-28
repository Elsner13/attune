import Image from 'next/image'
import { TubelightNav } from '@/components/TubelightNav'

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
          fontSize: 'clamp(12px, 1.4vw, 24px)',
          fontWeight: 400,
          letterSpacing: '0.02em',
          color: '#000000',
          textAlign: 'center',
          textTransform: 'uppercase',
          margin: '0 0 12px',
        }}
      >
        Skill is forged, not taught.
      </p>

      <p
        style={{
          fontFamily: 'var(--font-montserrat-alternates)',
          fontSize: 'clamp(10px, 1vw, 16px)',
          fontWeight: 400,
          color: '#555555',
          textAlign: 'center',
          letterSpacing: '0.01em',
          margin: '0 0 32px',
          maxWidth: '460px',
        }}
      >
        Attune is a practice. Not a program.
      </p>

      <div style={{ height: 'clamp(36px, 3vw, 42px)' }} />

      <TubelightNav />
    </div>
  )
}
