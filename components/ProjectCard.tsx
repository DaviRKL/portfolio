"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Project = {
  title: string
  tagline: string
  challenge: string
  image?: string | null
  technologies: string[]
  links: { repo?: string; live?: string }
  status?: "completed" | "in_progress"
}

export default function ProjectCard({ project, variants }: { project: Project, variants?: any }) {
  const [loaded, setLoaded] = useState(false)
  const transformative = new Set(['Supabase', 'N8N', 'n8n', 'Llama-3', 'Groq API'])

  // A lógica simplificou para: use o que está no JSON ou o placeholder
  const imageSrc = project.image || '/images/projects/placeholder.png'

  return (
    <motion.article
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="flex flex-col h-full overflow-hidden rounded-xl border backdrop-blur-md transition-all duration-500 shadow-lg bg-black/5 border-black/5 dark:bg-white/5 dark:border-white/10 group"
    >
      <div className="relative aspect-video w-full bg-gradient-to-r from-prussian to-deep-night overflow-hidden border-b border-black/5 dark:border-white/5 flex items-center justify-center">
        {project.image ? (
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-700 group-hover:scale-110 ${loaded ? 'blur-0 opacity-100' : 'blur-sm opacity-0'}`}
            onLoad={() => setLoaded(true)}
            unoptimized
          />
        ) : (
          /* Mantendo a lógica de ícones para projetos sem imagem no JSON */
          <div className="flex items-center justify-center w-full h-full">
            {project.title.toLowerCase().includes('reciclagem') ? (
              <i className="fa fa-recycle fa-3x text-white-smoke/90" />
            ) : project.title.toLowerCase().includes('financial') ? (
              <i className="fa fa-usd fa-3x text-white-smoke/90" />
            ) : (
              <div className="text-white-smoke/60 italic">No preview</div>
            )}
          </div>
        )}

        {/* Badge de Status */}
        {project.status && (
          <div className="absolute top-3 right-3 z-10">
            <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border shadow-sm flex items-center gap-2 ${
              project.status === 'completed' 
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' 
              : 'bg-amber-500/10 border-amber-500/20 text-amber-500'
            }`}>
              {project.status === 'in_progress' && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
              )}
              {project.status === 'completed' ? 'Finalizado' : 'Em progresso'}
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-text-main group-hover:text-[#00A9E0] transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-text-main/70 italic">{project.tagline}</p>
        
        <div className="mt-4 text-left w-full">
          <p className="text-sm text-text-main/90">
            <strong className="text-[#00A9E0]">Desafio:</strong> {project.challenge}
          </p>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2 justify-center">
          {project.technologies.map((t) => (
            <li key={t} className={`px-3 py-1 rounded-full text-[11px] font-medium border ${
              transformative.has(t)
              ? 'bg-[#2f6364]/20 text-[#2f6364] border-[#2f6364]/40 dark:text-emerald-300'
              : 'bg-black/5 dark:bg-white/5 text-text-main/80 border-black/10'
            }`}>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <footer className="p-6 pt-0 flex items-center gap-4 justify-center">
        {project.links.repo && (
          <a href={project.links.repo} target="_blank" className="text-xs font-semibold text-[#00A9E0] hover:underline">
            Repositório
          </a>
        )}
        {project.links.live && (
          <a href={project.links.live} target="_blank" className="text-xs font-semibold bg-[#00A9E0] text-white px-4 py-2 rounded-lg hover:bg-[#00A9E0]/80 shadow-md">
            Ver Demo
          </a>
        )}
      </footer>
    </motion.article>
  )
}