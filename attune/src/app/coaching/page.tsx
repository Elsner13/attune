import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/SectionLabel'
import PillarCard from '@/components/PillarCard'
import CTA from '@/components/CTA'

const APPLICATION_URL = '/apply'

const qualifiers = [
  {
    title: 'You Are Already Practicing',
    body: 'This is not an introduction to ecological dynamics. You have done enough work to know that something is not transferring. We start from there.',
  },
  {
    title: 'You Can Handle Real Feedback',
    body: 'Not the kind that makes you feel good. The kind that is actually useful. If you are looking for validation, this is the wrong container.',
  },
  {
    title: 'You Are Building Something That Matters to You',
    body: 'A sport, a craft, a business, a way of working with other people. The domain is secondary. The seriousness of the commitment is not.',
  },
]

const process = [
  {
    title: 'Application',
    body: 'You submit an application describing your current work, where you are stuck, and what you are trying to build. I read every application.',
  },
  {
    title: 'First Call',
    body: 'If your application fits, we have a single conversation to see whether the working relationship makes sense. No sales pressure. Honest assessment.',
  },
  {
    title: 'The Work',
    body: 'Monthly engagement. Direct access between sessions. Constraint design, attractor mapping, and the kind of attention that actually changes something.',
  },
]

export default function CoachingPage() {
  return (
    <>
      <TopNav />

      {/* Hero */}
      <section
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <SectionLabel color="#888888">1-on-1 Coaching</SectionLabel>

        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: '#F0F0F0',
            maxWidth: '800px',
            marginBottom: '24px',
          }}
        >
          There are things a course cannot do.
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            lineHeight: 1.85,
            color: '#888888',
            maxWidth: '560px',
            marginBottom: '24px',
          }}
        >
          Not because the knowledge is missing. Because the work that actually changes
          someone requires contact. A real exchange at the right moment. A constraint
          introduced when the system is ready to move. Someone who has already been
          through the reorganization and can see what you cannot see yet.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '17px',
            lineHeight: 1.7,
            color: '#F0F0F0',
            maxWidth: '560px',
            marginBottom: '40px',
          }}
        >
          Ten spots. Not for exclusivity. For attention. The genuine kind.
        </p>

        <CTA href={APPLICATION_URL}>Apply for a spot →</CTA>

        <p
          style={{
            marginTop: '16px',
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            color: '#555555',
            letterSpacing: '0.02em',
          }}
        >
          Application only. Next cohort reviewed monthly.
        </p>
      </section>

      {/* What This Is */}
      <section
        style={{
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
          maxWidth: '1100px',
          margin: '0 auto',
          borderTop: '1px solid #1a1a1a',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            fontWeight: 400,
            color: '#F0F0F0',
            maxWidth: '560px',
            marginBottom: '20px',
            lineHeight: 1.85,
          }}
        >
          This is not a mentorship. It is not accountability coaching. It is not a
          community with monthly calls.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            lineHeight: 1.85,
            color: '#888888',
            maxWidth: '560px',
          }}
        >
          It is a working relationship built on ecological dynamics. We map your
          current attractor landscape. We identify what constraints are running you
          and which ones you can change. We design the environment rather than arguing
          with your behavior. Month by month, the work becomes visible. You will not
          be told what to do. You will be shown how to see what was already there.
        </p>
      </section>

      {/* Who Belongs */}
      <section
        style={{
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
          background: '#080001',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionLabel>Who Belongs</SectionLabel>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1px',
              background: '#1a1a1a',
            }}
          >
            {qualifiers.map((item, i) => (
              <PillarCard
                key={i}
                index={i + 1}
                total={qualifiers.length}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section
        style={{
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <SectionLabel>The Process</SectionLabel>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1px',
            background: '#1a1a1a',
          }}
        >
          {process.map((step, i) => (
            <PillarCard
              key={i}
              index={i + 1}
              total={process.length}
              title={step.title}
              body={step.body}
            />
          ))}
        </div>
      </section>

      {/* CTA Close */}
      <section
        style={{
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
          textAlign: 'center',
          borderTop: '1px solid #1a1a1a',
        }}
      >
        <CTA href={APPLICATION_URL}>Apply for a spot →</CTA>

        <p
          style={{
            marginTop: '20px',
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            color: '#555555',
            letterSpacing: '0.02em',
          }}
        >
          Application only. Next cohort reviewed monthly.
        </p>
      </section>

      <Footer />
    </>
  )
}
