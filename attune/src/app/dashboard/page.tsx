import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
  return (
    <div style={{ position: 'fixed', inset: 0, background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: '24px', right: '28px' }}>
        <UserButton  />
      </div>

      <div style={{ position: 'relative', width: 'min(140px, 14vw)', aspectRatio: '1 / 1', marginBottom: '24px' }}>
        <Image src="/attune-logo.png" alt="Attune" fill style={{ objectFit: 'contain' }} priority />
      </div>

      <p style={{ fontFamily: 'var(--font-montserrat-alternates)', fontSize: 'clamp(12px, 1.4vw, 22px)', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.02em', color: '#000000', margin: '0 0 8px', textAlign: 'center' }}>
        Foundations
      </p>
      <p style={{ fontFamily: 'var(--font-montserrat-alternates)', fontSize: 'clamp(10px, 1vw, 15px)', color: '#555555', margin: '0 0 40px', textAlign: 'center' }}>
        Eight modules. One shift in how you see.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: 'min(480px, 90vw)', border: '1px solid rgba(0,0,0,0.1)' }}>
        {[
          'The Wrong Problem',
          'How Skill Actually Happens',
          'What Your Environment Is Doing to You',
          'The Constraints That Are Running You',
          'Repetition Without Repetition',
          'Designing the Bowl',
          'Representative Practice',
          'The Perceptual Shift',
        ].map((title, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '16px 20px', borderBottom: i < 7 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
            <span style={{ fontFamily: 'var(--font-montserrat-alternates)', fontSize: '11px', color: 'rgba(0,0,0,0.3)', minWidth: '20px' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{ fontFamily: 'var(--font-montserrat-alternates)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#000000' }}>
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
