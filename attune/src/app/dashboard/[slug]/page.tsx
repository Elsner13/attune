import Link from 'next/link'
import { notFound } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { getModule, getNextModule } from '@/lib/modules'
import CompleteButton from './CompleteButton'
import ModuleHero from '@/components/modules/ModuleHero'
import ModuleInline from '@/components/modules/ModuleInline'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params
  const mod = getModule(slug)
  if (!mod) notFound()

  const user = await currentUser()
  const completed = (user?.publicMetadata?.completedModules as string[]) ?? []
  const isCompleted = completed.includes(slug)
  const nextMod = getNextModule(slug)

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#ffffff',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '620px',
          margin: '0 auto',
          padding: '48px 24px 96px',
        }}
      >
        {/* Back link */}
        <Link
          href="/dashboard"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-montserrat-alternates)',
            fontSize: '10px',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#bbbbbb',
            textDecoration: 'none',
            marginBottom: '40px',
          }}
        >
          ← All Modules
        </Link>

        {/* Module number + title */}
        <p
          style={{
            fontFamily: 'var(--font-montserrat-alternates)',
            fontSize: '10px',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#cccccc',
            marginBottom: '8px',
          }}
        >
          Module {mod.num}
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-montserrat-alternates)',
            fontSize: 'clamp(20px, 3vw, 28px)',
            fontWeight: 600,
            color: '#000000',
            lineHeight: 1.2,
            marginBottom: '8px',
          }}
        >
          {mod.title}
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-montserrat-alternates)',
            fontSize: '13px',
            color: '#888888',
            marginBottom: '48px',
            lineHeight: 1.5,
          }}
        >
          {mod.subtitle}
        </p>

        {/* Module hero animation */}
        <ModuleHero slug={slug} />

        {/* Divider */}
        <div
          style={{
            width: '32px',
            height: '1px',
            background: 'rgba(0,0,0,0.12)',
            marginBottom: '48px',
          }}
        />

        {/* Content sections */}
        {mod.sections.map((section, sIdx) => (
          <div key={section.heading} style={{ marginBottom: '40px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-montserrat-alternates)',
                fontSize: '11px',
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.10em',
                color: '#000000',
                marginBottom: '16px',
              }}
            >
              {section.heading}
            </h2>
            {section.body.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-montserrat-alternates)',
                  fontSize: '14px',
                  color: '#333333',
                  lineHeight: 1.85,
                  marginBottom: i < section.body.length - 1 ? '16px' : 0,
                }}
              >
                {paragraph}
              </p>
            ))}
            {/* Inline animation — appears after section 2 of each module */}
            {sIdx === 2 && (
              <div style={{ marginTop: '32px' }}>
                <ModuleInline slug={slug} id={
                  slug === 'module-1' ? 'symptom-root' :
                  slug === 'module-2' ? 'differentiation' :
                  slug === 'module-3' ? 'affordance' :
                  slug === 'module-4' ? 'constraint-flow' :
                  slug === 'module-5' ? 'practice-variability' :
                  slug === 'module-6' ? 'four-variables' :
                  slug === 'module-7' ? 'perception-action' :
                  slug === 'module-8' ? 'before-after' : ''
                } />
              </div>
            )}
          </div>
        ))}

        {/* The Move */}
        <div
          style={{
            borderLeft: '2px solid #000000',
            paddingLeft: '20px',
            marginTop: '48px',
            marginBottom: '56px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-montserrat-alternates)',
              fontSize: '9px',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: '#aaaaaa',
              marginBottom: '10px',
            }}
          >
            The Move
          </p>
          <p
            style={{
              fontFamily: 'var(--font-montserrat-alternates)',
              fontSize: '13px',
              color: '#333333',
              lineHeight: 1.85,
            }}
          >
            {mod.theMove}
          </p>
        </div>

        {/* Complete / Next button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CompleteButton
            slug={slug}
            isCompleted={isCompleted}
            nextSlug={nextMod?.slug ?? null}
          />
        </div>
      </div>
    </div>
  )
}
