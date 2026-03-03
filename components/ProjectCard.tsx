"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type Project = {
  title: string
  tagline: string
  challenge: string
  image?: string
  technologies: string[]
  links: { repo?: string; live?: string }
}

export default function ProjectCard({
  project,
  variants,
}: {
  project: Project
  variants?: any
}) {
  const ref = useRef<HTMLElement | null>(null)
  const transformative = new Set(['Supabase', 'N8N', 'n8n'])
  const [loaded, setLoaded] = useState(false)
  // try to enrich project.image using generated manifest if available
  const [manifestEntry, setManifestEntry] = useState<any | null>(null)

  useEffect(() => {
    async function loadManifest() {
      try {
        const res = await fetch('/data/image-manifest.json')
        if (!res.ok) return
        const json = await res.json()
        if (project.image) {
          const key = project.image.split('/').pop()
          if (key && json[key]) setManifestEntry(json[key])
        }
      } catch (e) {
        // ignore
      }
    }
    loadManifest()
  }, [project.image])

  // derive final image source: prefer manifestEntry, then project.image, then named project images or icons
  const resolvedImage = (() => {
    if (manifestEntry?.src) return manifestEntry.src
    if (!project.image) return null
    // map known project image keys to files in public/images/projects
    const key = project.image.replace(/\.[^/.]+$/, '') // strip extension if any
    const keyLower = key.toLowerCase()
    if (key === 'exo-classifier' || key === 'exo_classifier' || key === 'exoplanet-classifier') {
      return '/images/projects/exo-classifier.jpg'
    }
    if (key === 'diario_de_classe' || key === 'diario-de-classe' || key === 'diario') {
      return '/images/projects/diario_de_classe.png'
    }
    if (['recycling', 'recycle', 'reciclagem', 'sistema_reciclagem'].includes(keyLower)) {
      return null // handled by inline icon fallback
    }
    if (key === 'financial_copilot' || key === 'financial-copilot' || key === 'financial') {
      return null // handled by inline icon fallback
    }
    return project.image
  })()

  return (
    <motion.article
      ref={ref}
      variants={variants}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { duration: 0.14, ease: 'easeOut' } }}
      whileTap={{ y: -3, transition: { duration: 0.08, ease: 'easeOut' } }}
      className="group backdrop-blur-xl rounded-xl p-0 overflow-hidden transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] bg-black/5 border border-black/5 hover:bg-black/10 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
      aria-labelledby={`project-${project.title}`}
    >
      {/* Image or icon area */}
      <div className="w-full h-44 bg-gradient-to-r from-prussian to-deep-night relative overflow-hidden flex items-center justify-center">
        {resolvedImage ? (
          <img
            src={manifestEntry?.src ?? resolvedImage}
            srcSet={manifestEntry?.srcset ?? `${resolvedImage} 400w, ${resolvedImage} 800w, ${resolvedImage} 1200w`}
            sizes={manifestEntry?.sizes ?? '(max-width: 640px) 100vw, 50vw'}
            alt={`${project.title} preview`}
            className={`w-full h-full object-cover transition-filter duration-700 ease-out ${loaded ? 'filter-none blur-0' : 'blur-sm scale-105'}`}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        ) : (
          // fallback icon for projects without an image file
          <div className="flex items-center justify-center w-full h-full">
            {project.title.toLowerCase().includes('reciclagem') ? (
              <i className="fa fa-recycle fa-3x text-white-smoke/90" aria-hidden="true" />
            ) : project.title.toLowerCase().includes('financial') || project.title.toLowerCase().includes('copilot') ? (
              <i className="fa fa-usd fa-2x text-white-smoke/90" aria-hidden="true" />
            ) : (
              <div className="text-white-smoke/60">No preview</div>
            )}
          </div>
        )}
        {!loaded && resolvedImage && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-prussian to-deep-night opacity-70 animate-pulse"
            style={{ backgroundImage: `url(${manifestEntry?.blurDataURL ?? ''})`, backgroundSize: 'cover' }}
          />
        )}
      </div>

      <div className="p-6 text-center">
      <header>
        <h3 id={`project-${project.title}`} className="text-xl font-semibold text-text-main">
          {project.title}
        </h3>
        <p className="mt-1 text-text-main/70">{project.tagline}</p>
      </header>

      <div className="mt-4">
        <p className="text-sm text-text-main/90"><strong>Desafio:</strong> {project.challenge}</p>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2 justify-center" aria-hidden={false}>
        {project.technologies.map((t) => {
          const isNew = transformative.has(t)
          return (
            <motion.li
              key={t}
              whileHover={{ scale: 1.06 }}
              className={`px-3 py-1 rounded-full text-sm border ${
                isNew
                  ? 'bg-transformative-teal text-deep-night border-transformative-teal/80'
                  : 'bg-deep-night text-white-smoke/90 border-prussian/20'
              }`}
            >
              {t}
            </motion.li>
          )
        })}
      </ul>

      </div>
      <footer className="p-6 pt-0 mt-0 flex flex-col sm:flex-row items-center gap-3 justify-center">
        {project.links.repo && (
          <a
            className="text-sm text-[var(--accent)] underline"
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório
          </a>
        )}

        {project.links.live && (
          <a
            className="text-sm text-text-main/90 bg-[var(--accent)]/10 px-3 py-1 rounded-md"
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Demo
          </a>
        )}
      </footer>
    </motion.article>
  )
}
