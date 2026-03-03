"use client"

import Image from 'next/image'
import Script from 'next/script'
import { motion } from 'framer-motion'

const BADGE_IDS = [
  'cddb1fe4-b19c-431f-bfeb-6f174d477d37',
  'c7051ddb-432b-4600-953b-eccd74fdcde3',
  'f0a14d48-243e-49ae-b607-d1835af289e0',
  '156ff5a0-74ef-4b67-890f-e05d980f34dd',
  '2530c36d-8ebb-4016-9159-9d8120d900a0',
  '78b22a43-12d0-4abf-b0cd-2492677e2762',
  '6578a5bb-b5fb-4b64-b898-55811cbfc45d',
]

const BADGE_META: Record<
  string,
  { title: string; date?: string; image?: string }
> = {
  'cddb1fe4-b19c-431f-bfeb-6f174d477d37': { title: 'JavaScript Essentials 2 - Cisco', date: '2026-02', image: 'badges/javascript-essentials-2.png' },
  'c7051ddb-432b-4600-953b-eccd74fdcde3': { title: 'AWS Academy Graduate - Cloud Foundations - Training Badge', date: '2025-06', image: 'badges/aws-academy-graduate-cloud-foundations-training-bad.png' },
  'f0a14d48-243e-49ae-b607-d1835af289e0': { title: 'AWS Academy Graduate - Machine Learning Foundations - Training Badge', date: '2025-11', image: 'badges/aws-academy-graduate-machine-learning-foundations-t.png' },
  '156ff5a0-74ef-4b67-890f-e05d980f34dd': { title: 'AWS Cloud Quest: Cloud Practitioner - Training Badge', date: '2024-09', image: 'badges/aws-cloud-quest-cloud-practitioner-training-badge (1).png' },
  '2530c36d-8ebb-4016-9159-9d8120d900a0': { title: 'Computer Hardware Basics - Cisco', date: '2024-06', image: 'badges/computer-hardware-basics.png' },
  '78b22a43-12d0-4abf-b0cd-2492677e2762': { title: 'HTML Essentials', date: '2026-02', image: 'badges/html-essentials.png' },
  '6578a5bb-b5fb-4b64-b898-55811cbfc45d': { title: 'JavaScript Essentials 1', date: '2026-02', image: 'badges/javascript-essentials-1.png' },
}

export default function Certifications() {
  const hoverLift = {
    initial: { y: 0 },
    hover: { y: -8, transition: { duration: 0.3, ease: "easeOut" } }
  }

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl font-extrabold mb-2 text-text-main">Certificações e Conquistas</h2>
      <p className="text-text-main/85 mb-10">Foco em Cloud e Desenvolvimento Web — badges e conquistas recentes.</p>

      {/* Cloud & Inteligência Artificial */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold mb-1 text-text-main">Cloud & Inteligência Artificial</h3>
        <p className="text-text-main/75 mb-6 max-w-3xl mx-auto">Estes certificados validam minha capacidade de trabalhar em ambientes modernos e escaláveis, com foco em nuvem e soluções de IA.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {[
            'c7051ddb-432b-4600-953b-eccd74fdcde3',
            'f0a14d48-243e-49ae-b607-d1835af289e0',
            '156ff5a0-74ef-4b67-890f-e05d980f34dd',
          ].map((id) => {
            const meta = BADGE_META[id]
            const localImg = meta?.image ? `/images/${meta.image}` : `/images/badges/${id}.png`
            return (
              <motion.article 
                key={id} 
                initial="initial"
                whileHover="hover"
                variants={hoverLift}
                className="flex flex-col items-center gap-3 group"
              >
                <a
                  href={`https://www.credly.com/embedded_badge/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-[150px] h-[150px] rounded-md overflow-hidden border backdrop-blur-xl transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] bg-black/5 border-black/5 group-hover:bg-[#00A9E0]/10 group-hover:border-[#00A9E0]/40 dark:bg-white/5 dark:border-white/10 dark:group-hover:bg-[#00A9E0]/10"
                  aria-label={meta?.title ?? 'Ver certificado no Credly'}
                >
                  <Image
                    src={encodeURI(localImg)}
                    alt={meta?.title ?? 'Badge'}
                    width={150}
                    height={150}
                    className="object-contain bg-transparent transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </a>

                <div className="mt-1 text-center max-w-[190px]">
                  <div className="text-sm font-semibold text-[var(--badge-legend-color)] transition-colors duration-300 group-hover:text-[#00A9E0]">
                    {meta?.title ?? 'Certificação'}
                  </div>
                  {meta?.date && (
                    <div className="text-xs text-[var(--badge-legend-muted)]">{meta.date}</div>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* Desenvolvimento & Fundamentos */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold mb-1 text-text-main">Desenvolvimento & Fundamentos</h3>
        <p className="text-text-main/75 mb-6 max-w-3xl mx-auto">Estes badges demonstram meu rigor acadêmico e técnico nas bases de programação e web development.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {[
            'cddb1fe4-b19c-431f-bfeb-6f174d477d37',
            '6578a5bb-b5fb-4b64-b898-55811cbfc45d',
            '78b22a43-12d0-4abf-b0cd-2492677e2762',
          ].map((id) => {
            const meta = BADGE_META[id]
            const localImg = meta?.image ? `/images/${meta.image}` : `/images/badges/${id}.png`
            return (
              <motion.article 
                key={id} 
                initial="initial"
                whileHover="hover"
                variants={hoverLift}
                className="flex flex-col items-center gap-3 group"
              >
                <a
                  href={`https://www.credly.com/embedded_badge/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-[150px] h-[150px] rounded-md overflow-hidden border backdrop-blur-xl transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] bg-black/5 border-black/5 group-hover:bg-[#00A9E0]/10 group-hover:border-[#00A9E0]/40 dark:bg-white/5 dark:border-white/10 dark:group-hover:bg-[#00A9E0]/10"
                  aria-label={meta?.title ?? 'Ver certificado no Credly'}
                >
                  <Image
                    src={encodeURI(localImg)}
                    alt={meta?.title ?? 'Badge'}
                    width={150}
                    height={150}
                    className="object-contain bg-transparent transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </a>

                <div className="mt-1 text-center max-w-[190px]">
                  <div className="text-sm font-semibold text-[var(--badge-legend-color)] transition-colors duration-300 group-hover:text-[#00A9E0]">
                    {meta?.title ?? 'Certificação'}
                  </div>
                  {meta?.date && (
                    <div className="text-xs text-[var(--badge-legend-muted)]">{meta.date}</div>
                  )}
                </div>
              </motion.article>
            )
          })}

          <motion.article 
            initial="initial"
            whileHover="hover"
            variants={hoverLift}
            className="flex flex-col items-center gap-2 opacity-80 col-span-full md:col-auto mt-4 group"
          >
            {(() => {
              const id = '2530c36d-8ebb-4016-9159-9d8120d900a0'
              const meta = BADGE_META[id]
              const localImg = meta?.image ? `/images/${meta.image}` : `/images/badges/${id}.png`
              return (
                <>
                  <a
                    href={`https://www.credly.com/embedded_badge/${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-[120px] h-[120px] rounded-md overflow-hidden border backdrop-blur-xl transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] bg-black/5 border-black/5 group-hover:bg-[#00A9E0]/10 group-hover:border-[#00A9E0]/40 dark:bg-white/5 dark:border-white/10 dark:group-hover:bg-[#00A9E0]/10"
                    aria-label={meta?.title ?? 'Ver certificado no Credly'}
                  >
                    <Image
                      src={encodeURI(localImg)}
                      alt={meta?.title ?? 'Badge'}
                      width={120}
                      height={120}
                      className="object-contain bg-transparent transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </a>
                  <div className="mt-1 text-center max-w-[190px]">
                    <div className="text-sm font-medium text-[var(--badge-legend-muted)] transition-colors duration-300 group-hover:text-[#00A9E0]">
                      {meta?.title ?? 'Certificação'}
                    </div>
                    {meta?.date && <div className="text-xs text-[var(--badge-legend-muted)]">{meta.date}</div>}
                  </div>
                </>
              )
            })()}
          </motion.article>
        </div>
      </section>

      <Script src="//cdn.credly.com/assets/utilities/embed.js" strategy="lazyOnload" />
    </section>
  )
}