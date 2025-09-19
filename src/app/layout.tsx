// src/app/layout.tsx
import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'Portfolio - Damjan Stojchev',
  description: 'Personal portfolio showcasing skills and projects',
  icons: {
    icon: "black-logo.png"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
