import { ReactNode } from 'react'

export default function SectionReveal({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`relative w-full overflow-x-clip bg-[#f2f2f2] dark:bg-[#00171f] ${className}`}>
      <div aria-hidden className="absolute inset-0 hero-mesh-light hero-mesh-animate dark:hidden" />
      <div aria-hidden className="absolute inset-0 hero-mesh hero-mesh-animate hidden dark:block" />
      <div aria-hidden className="absolute inset-0" style={{ background: 'rgba(var(--bg-rgb), 0.18)' }} />

      <div className="relative">
        {children}
      </div>
    </div>
  )
}
