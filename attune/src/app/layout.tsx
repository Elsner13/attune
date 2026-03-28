import type { Metadata } from 'next'
import { playfair, inter } from '@/lib/fonts'
import CosmicBackground from '@/components/CosmicBackground'
import './globals.css'

export const metadata: Metadata = {
  title: 'Attune',
  description: 'Attune is a practice. Not a program.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <CosmicBackground />
        {children}
      </body>
    </html>
  )
}
