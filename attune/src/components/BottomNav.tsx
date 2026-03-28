'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Foundations', href: '/foundations' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'About', href: '/about' },
  { label: 'Signal/Noise', href: 'https://signalnoise.substack.com', external: true },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#000000',
        borderTop: '1px solid #1a1a1a',
        padding: '16px 0',
        zIndex: 100,
      }}
    >
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {links.map(({ label, href, external }) => {
          const isActive = !external && pathname === href

          return (
            <li key={href}>
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '10px',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#555555',
                    textDecoration: 'none',
                    transition: 'color 150ms',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#F0F0F0'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#555555'
                  }}
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '10px',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: isActive ? '#CC1133' : '#555555',
                    textDecoration: 'none',
                    transition: 'color 150ms',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#F0F0F0'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#555555'
                  }}
                >
                  {label}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
