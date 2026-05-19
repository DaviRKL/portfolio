"use client"

import ProjectCard from './ProjectCard'
import projects from '../data/projects.json'
import { motion } from 'framer-motion'

type Project = {
  title: string
  tagline: string
  challenge: string
  technologies: string[]
  links: { repo?: string; live?: string }
}

export default function Showcase() {
  const items: Project[] = projects as Project[]

  return (
    <section id="projects" aria-label="Projetos" className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-10 sm:py-20">
      <header className="mb-6 sm:mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-text-main">Showcase de Projetos</h2>
        <p className="mt-2 text-text-main/80">Projetos selecionados com foco em performance e usabilidade.</p>
      </header>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
        }}
      >
        {items.map((p) => (
          <ProjectCard
            key={p.title}
            project={p}
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          />
        ))}
      </motion.div>
    </section>
  )
}
