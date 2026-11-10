import '../styles/globals.css'
import type { ReactNode } from 'react'
import { Outfit, Space_Grotesk } from 'next/font/google'
import ThemeProvider from '../components/ThemeProvider'
import GlobalFloatingStars from '../components/GlobalFloatingStars'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'Davi Konuma — Front-End Developer',
  description: 'Portfólio de Davi Konuma — Front-End Developer (Next.js, TypeScript, Tailwind)',
  icons: {
    icon: '/images/davi/DaviPicture.ico',
  },
  openGraph: {
    title: 'Davi Konuma — Front-End Developer',
    description: 'Portfólio de Davi Konuma — Front-End Developer',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          precedence="default"
        />
      </head>
      <body className={`${outfit.variable} ${spaceGrotesk.variable} min-h-screen font-sans`}>
        <ThemeProvider>
          <GlobalFloatingStars />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
