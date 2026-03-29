import Image from 'next/image'
import { SignUp } from '@clerk/nextjs'

export default function WelcomePage() {
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
        gap: '32px',
      }}
    >
      <div style={{ position: 'relative', width: 'min(140px, 14vw)', aspectRatio: '1 / 1' }}>
        <Image src="/attune-logo.png" alt="Attune" fill style={{ objectFit: 'contain' }} priority />
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-montserrat-alternates)', fontSize: 'clamp(12px, 1.4vw, 22px)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.02em', color: '#000000', margin: '0 0 8px' }}>
          You&apos;re in.
        </p>
        <p style={{ fontFamily: 'var(--font-montserrat-alternates)', fontSize: 'clamp(10px, 1vw, 15px)', fontWeight: 400, color: '#555555', letterSpacing: '0.01em', margin: 0 }}>
          Create your account to access Foundations.
        </p>
      </div>

      <SignUp
        appearance={{
          elements: {
            rootBox: { fontFamily: 'var(--font-montserrat-alternates)' },
            card: { boxShadow: 'none', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '4px', background: '#ffffff' },
            headerTitle: { display: 'none' },
            headerSubtitle: { display: 'none' },
            socialButtonsBlockButton: { border: '1px solid rgba(0,0,0,0.15)', borderRadius: '2px', color: '#000000' },
            formButtonPrimary: { background: '#000000', borderRadius: '2px', fontFamily: 'var(--font-montserrat-alternates)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' },
            footerActionLink: { color: '#000000' },
            formFieldInput: { borderRadius: '2px', border: '1px solid rgba(0,0,0,0.2)' },
          },
        }}
        forceRedirectUrl="/dashboard"
      />
    </div>
  )
}
