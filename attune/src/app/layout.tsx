import type { Metadata } from 'next'
import { playfair, inter, montserratAlternates } from '@/lib/fonts'
import { ThemeProvider } from '@/components/ThemeProvider'
import { DottedSurface } from '@/components/ui/dotted-surface'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata: Metadata = {
  title: 'Attune',
  description: 'Attune is a practice. Not a program.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${montserratAlternates.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      </head>
      <body>
        <ClerkProvider>
          <ThemeProvider>
            <DottedSurface />
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
