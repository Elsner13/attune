import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export default function AboutPage() {
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
        {/* Tagline */}
        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
            color: '#F0F0F0',
            maxWidth: '700px',
            marginBottom: '64px',
          }}
        >
          Just a discus thrower who found ecological dynamics and hasn&apos;t shut up about it since.
        </h1>

        {/* Bio */}
        <div
          style={{
            maxWidth: '560px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '15px',
              lineHeight: 1.85,
              color: '#888888',
            }}
          >
            Two-time NCAA National Champion discus thrower. I spent years performing at
            the highest level without understanding why anything worked. My best throws
            came from my most chaotic practice sessions. My worst came from my most
            controlled ones. I had no framework to explain the difference.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '15px',
              lineHeight: 1.85,
              color: '#888888',
            }}
          >
            Then I found ecological dynamics. Gibson&apos;s direct perception.
            Bernstein&apos;s repetition without repetition. Davids&apos; constraints-led
            approach. The science that said: skill does not live inside you. It emerges
            from the relationship between organism and environment. That sentence
            explained everything I had lived but could not name.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '15px',
              lineHeight: 1.85,
              color: '#888888',
            }}
          >
            Attune exists because the framework does not stop at sport. It applies to
            how you learn, how you work, how you build things, how you raise a child.
            Anywhere skill is the question, the environment is the answer. Signal/Noise
            is where I work that out in public, twice a week.
          </p>
        </div>

        {/* Signal/Noise capture */}
        <div
          style={{
            borderTop: '1px solid #1a1a1a',
            paddingTop: '48px',
            marginBottom: '48px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '15px',
              lineHeight: 1.85,
              color: '#F0F0F0',
              maxWidth: '560px',
              marginBottom: '24px',
            }}
          >
            Join 565+ getting mindf*cked twice a week reading about skill, the
            environment, and why everything you were taught was wrong.
          </p>

          <a
            href="https://signalnoise.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#CC1133',
              textDecoration: 'none',
            }}
          >
            Read Signal/Noise →
          </a>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <CTA href="/foundations">Start with Foundations →</CTA>
        </div>
      </main>

      <Footer />
    </>
  )
}
