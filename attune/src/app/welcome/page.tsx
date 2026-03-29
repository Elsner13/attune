import Image from 'next/image'
import { SignUp } from '@clerk/nextjs'

const steps = [
  {
    number: '01',
    title: 'Create your account',
    body: 'Takes 30 seconds. Email and password — nothing else.',
  },
  {
    number: '02',
    title: 'Access all 8 modules',
    body: 'Available immediately after sign-up. No waiting, no drip.',
  },
  {
    number: '03',
    title: 'Work at your own pace',
    body: 'No deadlines. Come back whenever you need to.',
  },
]

export default function WelcomePage() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '48px',
          width: '100%',
          maxWidth: '900px',
        }}
      >
        {/* Logo */}
        <div style={{ position: 'relative', width: '52px', height: '52px', flexShrink: 0 }}>
          <Image src="/attune-logo.png" alt="Attune" fill style={{ objectFit: 'contain' }} priority />
        </div>

        {/* Two-column body */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            width: '100%',
            alignItems: 'start',
          }}
        >
          {/* Left: step cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p
              style={{
                fontFamily: 'var(--font-montserrat-alternates)',
                fontSize: 'clamp(10px, 1vw, 13px)',
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#999999',
                marginBottom: '8px',
              }}
            >
              You&apos;re in.
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-montserrat-alternates)',
                fontSize: 'clamp(20px, 2.4vw, 30px)',
                fontWeight: 600,
                color: '#000000',
                lineHeight: 1.2,
                marginBottom: '32px',
              }}
            >
              One last step to access Foundations.
            </h1>

            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '20px 24px',
                  border: '1px solid rgba(0,0,0,0.10)',
                  borderRadius: '4px',
                  marginBottom: '8px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-montserrat-alternates)',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#bbbbbb',
                    letterSpacing: '0.08em',
                    lineHeight: '1.6',
                    flexShrink: 0,
                    paddingTop: '2px',
                  }}
                >
                  {step.number}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-montserrat-alternates)',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#000000',
                      marginBottom: '4px',
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-montserrat-alternates)',
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#666666',
                      lineHeight: 1.6,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Clerk SignUp */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SignUp
              appearance={{
                elements: {
                  rootBox: { fontFamily: 'var(--font-montserrat-alternates)', width: '100%' },
                  card: {
                    boxShadow: 'none',
                    border: '1px solid rgba(0,0,0,0.12)',
                    borderRadius: '4px',
                    background: '#ffffff',
                    width: '100%',
                  },
                  headerTitle: { display: 'none' },
                  headerSubtitle: { display: 'none' },
                  socialButtonsBlockButton: {
                    border: '1px solid rgba(0,0,0,0.15)',
                    borderRadius: '2px',
                    color: '#000000',
                  },
                  formButtonPrimary: {
                    background: '#000000',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-montserrat-alternates)',
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  },
                  footerActionLink: { color: '#000000' },
                  formFieldInput: {
                    borderRadius: '2px',
                    border: '1px solid rgba(0,0,0,0.2)',
                  },
                },
              }}
              forceRedirectUrl="/dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
