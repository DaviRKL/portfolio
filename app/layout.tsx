import '../styles/globals.css'
import type { ReactNode } from 'react'
import ThemeProvider from '../components/ThemeProvider'

export const metadata = {
  title: 'Davi Konuma — Full-Stack Developer',
  description: 'Portfólio de Davi Konuma — Full-Stack Developer (Next.js, TypeScript, Tailwind)',
  openGraph: {
    title: 'Davi Konuma — Full-Stack Developer',
    description: 'Portfólio de Davi Konuma — Full-Stack Developer',
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
      <body className="font-sans min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
