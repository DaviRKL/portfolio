import { ReactNode } from 'react'

export default function SectionReveal({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`relative z-10 w-full overflow-x-clip ${className}`}>
      <div className="relative">
        {children}
      </div>
    </div>
  )
}
