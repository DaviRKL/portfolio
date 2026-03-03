"use client"

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { education } from '../data/education'

export default function Education() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const theme = mounted ? (resolvedTheme || 'light') : 'light'

  function logoFor(institution: string) {
    // map institution to base filename and folder
    const lower = institution.toLowerCase()
    if (lower.includes('fatec') || lower.includes('faculdade de tecnologia')) {
      const base = 'fatec_ra_sorocaba_sorocaba'
      const variant = theme === 'dark' ? 'br' : 'cor'
      return `/images/logos_fatec/${base}_${variant}.png`
    }

    if (institution.toLowerCase().includes('etec')) {
      const base = 'etec_ra_sorocaba_sorocaba_fernando_prestes'
      const variant = theme === 'dark' ? 'br' : 'cor'
      return `/images/logos_etec/${base}_${variant}.png`
    }

    return null
  }

  return (
    <section id="education" aria-labelledby="education-heading" className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h2 id="education-heading" className="text-3xl font-extrabold mb-4 text-text-main">Formações</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((e) => (
          <article
            key={e.institution}
            className="backdrop-blur-xl rounded-xl p-6 text-center transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] bg-black/5 border border-black/5 hover:bg-black/10 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
          >
            <header className="flex flex-col items-center gap-4">
              {logoFor(e.institution) && (
                <div className="w-28 h-12 relative flex-shrink-0 mx-auto">
                  <Image src={logoFor(e.institution)!} alt={`${e.institution} logo`} fill sizes="112px" style={{ objectFit: 'contain' }} />
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold text-text-main">{e.institution}</h3>
                <p className="mt-1 text-sm text-text-main/80">{e.degree}</p>
                <p className="mt-2 text-sm text-text-main/70 italic">{e.period}</p>
              </div>
            </header>

            <div className="mt-4 text-text-main/90">
              <p>{e.description}</p>
              {e.highlights && e.highlights.length > 0 && (
                <ul className="mt-3 list-disc list-inside flex flex-col items-center">
                  {e.highlights.map((h, idx) => (
                    <li key={idx} className="text-text-main/90">
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {e.skills && (
                <div className="mt-4">
                  <strong className="text-text-main">Competências:</strong>
                  <ul className="mt-2 flex flex-wrap gap-2 justify-center">
                    {e.skills.map((s) => (
                      <li key={s} className="px-3 py-1 rounded-full bg-bg-primary text-text-main/90 text-sm border border-border-color">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
