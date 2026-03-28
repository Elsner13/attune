import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'

export default function ApplyPage() {
  return (
    <>
      <TopNav />

      <main
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            lineHeight: 1.85,
            color: '#888888',
            maxWidth: '560px',
            marginBottom: '48px',
          }}
        >
          The decision is made. This form is just the beginning of a conversation.
          Answer honestly. There are no right answers, only useful ones.
        </p>

        {/* Application form — stubbed */}
        <div
          style={{
            maxWidth: '560px',
            marginBottom: '48px',
            padding: '40px',
            border: '1px solid #1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '12px',
              color: '#333333',
              textAlign: 'center',
              letterSpacing: '0.05em',
            }}
          >
            Application form loading...
          </p>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            lineHeight: 1.85,
            color: '#888888',
            maxWidth: '420px',
          }}
        >
          I read every application. If yours is a fit, I will be in touch within a
          week.
        </p>
      </main>

      <Footer />
    </>
  )
}
