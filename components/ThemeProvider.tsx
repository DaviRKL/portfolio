"use client"

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    // Use `light` as defaultTheme so the server-rendered HTML includes a stable class.
    // The client will still apply the user's saved preference on mount.
    <NextThemeProvider attribute="class" defaultTheme="light" enableSystem={true} enableColorScheme={false}>
      {children}
    </NextThemeProvider>
  )
}
