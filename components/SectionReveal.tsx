"use client"

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function SectionReveal({
  children,
  dir = 'left',
  className = '',
}: {
  children: ReactNode
  dir?: 'left' | 'right'
  className?: string
}) {
  const x = dir === 'left' ? -80 : 80

  return (
    <div className={`relative w-full overflow-x-clip bg-[#f2f2f2] dark:bg-[#00171f] ${className}`}>
      <motion.div
        aria-hidden
        className="absolute inset-0 hero-mesh-light hero-mesh-animate dark:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.12 }}
        viewport={{ once: true, amount: 0.2 }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 hero-mesh hero-mesh-animate hidden dark:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.12 }}
        viewport={{ once: true, amount: 0.2 }}
      />
      <div aria-hidden className="absolute inset-0" style={{ background: 'rgba(var(--bg-rgb), 0.18)' }} />

      <motion.div
        initial={{ opacity: 0, x }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  )
}
