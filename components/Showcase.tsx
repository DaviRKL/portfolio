"use client"

import { useCallback, useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectArchitectureModal from './ProjectArchitectureModal'
import projects from '../data/projects'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../data/projects'

export default function Showcase() {
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null)
  const items = projects
  const closeArchitectureModal = useCallback(() => setSelectedProjectForModal(null), [])

  return (
    <>
      <section id="projects" aria-label="Projetos" className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-10 sm:py-20">
        <header className="mb-6 sm:mb-8 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-text-main">Showcase de Projetos</h2>
          <p className="mt-2 text-text-main">Projetos selecionados com foco em performance e usabilidade.</p>
        </header>

        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
          }}
        >
          {items.map((p, index) => {
            const row = Math.floor(index / 2)
            const startsWide = row % 2 === 0
            const isWide = index % 2 === 0 ? startsWide : !startsWide

            return (
              <ProjectCard
                key={p.title}
                project={p}
                featured={index === 0}
                className={isWide ? "lg:col-span-7" : "lg:col-span-5"}
                onViewArchitecture={setSelectedProjectForModal}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              />
            )
          })}
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedProjectForModal && (
          <ProjectArchitectureModal
            key={selectedProjectForModal.title}
            project={selectedProjectForModal}
            onClose={closeArchitectureModal}
          />
        )}
      </AnimatePresence>
    </>
  )
}
