import Image from 'next/image'
import Link from 'next/link'
import { TubelightNav } from '@/components/TubelightNav'

const font = 'var(--font-montserrat-alternates)'

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: font,
  fontSize: '11px',
  fontWeight: 400,
  letterSpacing: '0.14em',
  color: '#000000',
  textTransform: 'uppercase',
  margin: '0 0 20px',
}

const bodyStyle: React.CSSProperties = {
  fontFamily: font,
  fontSize: 'clamp(13px, 1.1vw, 16px)',
  fontWeight: 400,
  color: '#555555',
  lineHeight: 1.95,
  letterSpacing: '0.01em',
  margin: '0 0 14px',
}

const dividerStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '560px',
  height: '1px',
  background: '#e8e8e8',
  margin: '48px 0',
}

export default function CoachingPage() {
  return (
    <div
      style={{
        background: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'clamp(48px, 8vw, 100px) clamp(24px, 6vw, 80px) clamp(100px, 14vw, 160px)',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          position: 'relative',
          width: 'min(140px, 14vw)',
          aspectRatio: '1 / 1',
          marginBottom: '56px',
          display: 'block',
        }}
      >
        <Image src="/attune-logo.png" alt="Attune" fill style={{ objectFit: 'contain' }} priority />
      </Link>

      <div style={{ maxWidth: '560px', width: '100%' }}>

        {/* Page headline */}
        <p
          style={{
            fontFamily: font,
            fontSize: 'clamp(14px, 1.6vw, 26px)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            color: '#000000',
            textTransform: 'uppercase',
            margin: '0 0 48px',
          }}
        >
          1:1 Coaching
        </p>

        {/* What this is */}
        <p style={sectionHeadingStyle}>What this is</p>
        <p style={bodyStyle}>
          This is one-on-one work. Not a group program, not a course, not a framework
          handed to you to execute alone.
        </p>
        <p style={bodyStyle}>
          You&apos;re working directly with me — on your specific situation, your specific
          environment, the specific thing that isn&apos;t moving.
        </p>
        <p style={bodyStyle}>
          The approach is rooted in how performance actually develops: not through more
          discipline or better mindset, but through the relationship between you and your
          conditions. Most people try to change themselves. We change the conditions.
          The results follow.
        </p>

        <div style={dividerStyle} />

        {/* How it works */}
        <p style={sectionHeadingStyle}>How it works</p>
        <p style={bodyStyle}>
          We start with a single call to understand where you are, what you&apos;re working
          on, and what&apos;s actually in the way. Not the story about it — the actual thing.
        </p>
        <p style={bodyStyle}>
          From there: regular calls, direct access between sessions, and real-time
          attention when the moment is happening — not just when we have a scheduled hour.
        </p>
        <p style={bodyStyle}>
          I read the situation, not the generic version of it. What you get back is honest,
          specific, and built for your actual circumstances.
        </p>

        <div style={dividerStyle} />

        {/* Who it's for */}
        <p style={sectionHeadingStyle}>Who it&apos;s for</p>
        <p style={bodyStyle}>
          You&apos;re already doing the work. Showing up. Putting in the hours. Something
          still isn&apos;t moving the way it should.
        </p>
        <p style={bodyStyle}>
          Maybe it&apos;s performance — athletic, creative, professional. Maybe it&apos;s a
          decision you keep circling. Maybe it&apos;s a pattern you&apos;ve named but can&apos;t
          seem to actually change.
        </p>
        <p style={bodyStyle}>
          If you want someone to hand you a system, this isn&apos;t it. If you want someone
          to actually look at your situation and help you see what you can&apos;t see alone —
          this is it.
        </p>

        <div style={dividerStyle} />

        {/* Packages */}
        <p style={sectionHeadingStyle}>Options</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {/* Clarity Call */}
          <div
            style={{
              border: '1px solid #d8d8d8',
              padding: '28px 24px',
            }}
          >
            <p
              style={{
                fontFamily: font,
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#000000',
                margin: '0 0 8px',
              }}
            >
              Clarity Call
            </p>
            <p
              style={{
                fontFamily: font,
                fontSize: 'clamp(18px, 2vw, 26px)',
                color: '#000000',
                margin: '0 0 16px',
                letterSpacing: '-0.01em',
              }}
            >
              $200
            </p>
            <p
              style={{
                fontFamily: font,
                fontSize: '13px',
                color: '#777777',
                lineHeight: 1.85,
                margin: '0',
                letterSpacing: '0.01em',
              }}
            >
              One 60-minute call. We look at what&apos;s actually happening, find the
              leverage point, and you leave with a clear direction.
            </p>
          </div>

          {/* Full Engagement */}
          <div
            style={{
              border: '1px solid #000000',
              padding: '28px 24px',
            }}
          >
            <p
              style={{
                fontFamily: font,
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#000000',
                margin: '0 0 8px',
              }}
            >
              Full Engagement
            </p>
            <p
              style={{
                fontFamily: font,
                fontSize: 'clamp(18px, 2vw, 26px)',
                color: '#000000',
                margin: '0 0 16px',
                letterSpacing: '-0.01em',
              }}
            >
              $500
              <span
                style={{
                  fontSize: '13px',
                  color: '#888888',
                  letterSpacing: '0.04em',
                }}
              >
                {' '}/month
              </span>
            </p>
            <p
              style={{
                fontFamily: font,
                fontSize: '13px',
                color: '#777777',
                lineHeight: 1.85,
                margin: '0',
                letterSpacing: '0.01em',
              }}
            >
              Two calls per month. Direct access between sessions. Ongoing attention
              to your situation as it evolves. Ten spots.
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/apply"
          style={{
            display: 'inline-block',
            fontFamily: font,
            fontSize: 'clamp(10px, 1vw, 14px)',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#000000',
            textDecoration: 'none',
            border: '1px solid #000000',
            padding: '10px 28px',
          }}
        >
          Apply for a spot
        </Link>

        <p
          style={{
            fontFamily: font,
            fontSize: '11px',
            letterSpacing: '0.06em',
            color: '#aaaaaa',
            textTransform: 'uppercase',
            marginTop: '20px',
          }}
        >
          I read every application personally.
        </p>

      </div>

      <TubelightNav />
    </div>
  )
}
