import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/SectionLabel'
import PillarCard from '@/components/PillarCard'
import CTA from '@/components/CTA'

const STRIPE_URL = 'https://buy.stripe.com/PLACEHOLDER'

const modules = [
  {
    title: 'The Wrong Problem',
    body: 'Most performance problems are not performance problems. They are environment problems. This module shows you the difference.',
  },
  {
    title: 'How Skill Actually Happens',
    body: 'Skill does not accumulate inside you. It emerges from the relationship between organism and environment. This is not a metaphor.',
  },
  {
    title: 'What Your Environment Is Doing to You',
    body: 'Your attractor landscape was shaped before you noticed it was being shaped. Here is how to read it.',
  },
  {
    title: 'The Constraints That Are Running You',
    body: 'Three categories of constraints govern every behavior. Individual, task, environmental. Understanding them ends the willpower conversation.',
  },
  {
    title: 'Repetition Without Repetition',
    body: 'The expert never repeats the same movement twice. What stays the same is the outcome. Bernstein called it the degrees of freedom problem. You will feel why it matters.',
  },
  {
    title: 'Designing the Bowl',
    body: 'You cannot push the marble to the other side. You reshape the bowl. This module is the practical application of everything before it.',
  },
  {
    title: 'Representative Practice',
    body: 'Practice must contain the information the performance environment will actually present. Anything less is just data entry into a system that will not work when it matters.',
  },
  {
    title: 'The Perceptual Shift',
    body: 'This is not a module you complete. It is a way of seeing that arrives when the previous seven have done their work. You will know it when it happens.',
  },
]

export default function FoundationsPage() {
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
        <SectionLabel>Foundations</SectionLabel>

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
          Most people who end up here have been working hard at the wrong layer.
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            lineHeight: 1.85,
            color: '#888888',
            maxWidth: '560px',
            marginBottom: '16px',
          }}
        >
          Not the wrong goals. Not the wrong effort. The wrong level of the problem.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            lineHeight: 1.85,
            color: '#888888',
            maxWidth: '560px',
            marginBottom: '40px',
          }}
        >
          You have been working on yourself. What the actual problem requires is
          understanding the environment. Skill does not accumulate inside you. It
          emerges from the relationship between you and your environment. That is not
          a metaphor. That is what the science says.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            lineHeight: 1.85,
            color: '#F0F0F0',
            maxWidth: '560px',
            marginBottom: '40px',
          }}
        >
          $197
        </p>

        <CTA href={STRIPE_URL}>Enroll in Foundations →</CTA>
      </section>

      {/* Who This Is For */}
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
          This course is for people who are already working. Already committed.
          Already frustrated that the work is not translating.
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
          You do not need to be an athlete. You need to be someone who takes seriously
          the question of how skill actually happens. In sport, in business, in
          parenting, in anything that requires you to get better at something that
          matters. If you read the opening paragraph and felt recognized rather than
          convinced, this course is for you.
        </p>
      </section>

      {/* Eight Modules */}
      <section
        style={{
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
          background: '#080001',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionLabel>Eight Modules</SectionLabel>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1px',
              background: '#1a1a1a',
            }}
          >
            {modules.map((mod, i) => (
              <PillarCard
                key={i}
                index={i + 1}
                total={modules.length}
                title={mod.title}
                body={mod.body}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What Changes */}
      <section
        style={{
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
          textAlign: 'center',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            color: '#F0F0F0',
            lineHeight: 1.3,
            marginBottom: '32px',
          }}
        >
          You will not learn to move better.
          <br />
          You will learn to see differently.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            lineHeight: 1.85,
            color: '#888888',
            maxWidth: '560px',
            margin: '0 auto',
          }}
        >
          Once you see it that way, you cannot solve the old problem anymore. The old
          question stops making sense. A different set of questions arrives. That is
          what Foundations is for.
        </p>
      </section>

      {/* CTA Close */}
      <section
        style={{
          padding: 'clamp(80px, 12vw, 160px) clamp(24px, 6vw, 120px)',
          textAlign: 'center',
          borderTop: '1px solid #1a1a1a',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            color: '#F0F0F0',
            marginBottom: '24px',
          }}
        >
          $197
        </p>

        <CTA href={STRIPE_URL}>Enroll in Foundations →</CTA>

        <p
          style={{
            marginTop: '20px',
            fontFamily: 'var(--font-inter)',
            fontSize: '12px',
            color: '#555555',
            letterSpacing: '0.02em',
          }}
        >
          One-time payment. Lifetime access.
        </p>
      </section>

      <Footer />
    </>
  )
}
