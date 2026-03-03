"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button aria-label="Alternar tema" className="p-2 rounded-md focus:outline-none" />
    )
  }

  const isLight = resolvedTheme === 'light'

  return (
    <motion.button
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label={isLight ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
      className="p-2 rounded-md transition-colors duration-500 focus:outline-none relative"
      whileTap={{ scale: 0.92 }}
      initial={false}
      animate={{ rotate: isLight ? 40 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ background: 'transparent' }}
    >
      <motion.span animate={{ opacity: isLight ? 0 : 1 }} className="absolute inset-0 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
        </svg>
      </motion.span>
      <motion.span animate={{ opacity: isLight ? 1 : 0 }} className="absolute inset-0 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      </motion.span>
    </motion.button>
  )
}
