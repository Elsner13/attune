import BottomNav from '@/components/BottomNav'
import EmailCapture from '@/components/EmailCapture'

export default function Home() {
  return (
    <>
      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px 100px',
          maxWidth: '480px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-inter)',
            fontSize: '10px',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#555555',
            marginBottom: '32px',
          }}
        >
          Sam Elsner
        </span>

        {/* Hero headline */}
        <h1
          className="animate-fade-headline"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(40px, 7vw, 88px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: '#F0F0F0',
            marginBottom: '32px',
          }}
        >
          <span className="typo-quote">
            You were never behind. You were in the wrong environment.
          </span>
        </h1>

        {/* Subline */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.85,
            color: '#888888',
            marginBottom: '40px',
            maxWidth: '420px',
          }}
        >
          Attune is a practice. Not a program.
        </p>

        {/* Email capture */}
        <EmailCapture />
      </main>

      <BottomNav />
    </>
  )
}
