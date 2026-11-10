import { ReactNode } from 'react'

export default function SectionReveal({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`hero-noise relative isolate z-10 w-full overflow-x-clip ${className}`}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
