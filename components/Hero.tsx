"use client"

import { useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import TechStack from './TechStack'

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement | null>(null)
  const titleRef = useRef<HTMLParagraphElement | null>(null)

  const magnetX = useMotionValue(0)
  const magnetY = useMotionValue(0)
  const springX = useSpring(magnetX, { stiffness: 260, damping: 22, mass: 0.7 })
  const springY = useSpring(magnetY, { stiffness: 260, damping: 22, mass: 0.7 })

  const handleProjectsClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const el = document.getElementById('projects')
    if (!el) {
      window.location.hash = '#projects'
      return
    }

    // First align to the section, then apply a small offset so cards appear immediately.
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // Update URL without triggering another native jump.
    try {
      window.history.pushState(null, '', '#projects')
    } catch {
      // ignore
    }

    window.setTimeout(() => {
      // Offset tuned to keep the section heading visible while bringing cards into view.
      window.scrollBy({ top: 900, left: 0, behavior: 'smooth' })
    }, 350)

    window.setTimeout(async () => {
      try {
        const mod = await import('gsap/ScrollTrigger')
        const ScrollTrigger = (mod as any).ScrollTrigger ?? mod
        if (ScrollTrigger?.refresh) {
          ScrollTrigger.refresh()
        }
        if (ScrollTrigger?.update) {
          ScrollTrigger.update()
        }
      } catch {
        // ignore
      }

      window.dispatchEvent(new Event('scroll'))
      window.dispatchEvent(new Event('resize'))
    }, 900)
  }

  const handleMagnetMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    const strength = 14
    magnetX.set(px * strength)
    magnetY.set(py * strength)
  }

  const handleMagnetLeave = () => {
    magnetX.set(0)
    magnetY.set(0)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let ctx: any = null

    async function setupGsap() {
      // SOLUÇÃO: Importamos os tipos apenas para as referências
      const GSAP = await import('gsap')
      const ST = await import('gsap/ScrollTrigger')
      
      // Atribuímos a uma constante tipada como 'any' ou ao módulo diretamente
      const gsap = GSAP.gsap
      const ScrollTrigger = ST.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        if (nameRef.current) {
          gsap.to(nameRef.current, {
            yPercent: -10,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: nameRef.current,
              start: 'top center',
              end: 'bottom top',
              scrub: 0.6,
            },
          })
        }

        if (titleRef.current) {
          gsap.to(titleRef.current, {
            y: -20,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.6,
            },
          })
        }
      })
    }

    setupGsap()

    return () => {
      if (ctx) ctx.revert()
    }
  }, [])

  return (
    <section className="relative isolate flex min-h-[75vh] items-center overflow-hidden">
      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 text-left lg:grid-cols-12"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
        }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <motion.h1
            ref={nameRef}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-primary md:text-6xl"
            aria-label="Davi Konuma — Front-End Developer"
            style={{ willChange: 'transform' }}
          >
            Davi Konuma
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mt-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
            style={{ willChange: 'transform' }}
          >
            Front-End Developer
          </motion.div>

          <motion.p
            ref={titleRef}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-base text-text-on-bg md:text-lg"
            style={{ willChange: 'transform, opacity' }}
          >
            Desenvolvedor Front-End especializado no ecossistema React e TypeScript, com sólida experiência em plataformas SaaS de alta complexidade para o setor financeiro. Uno a engenharia de interfaces escaláveis à orquestração de fluxos com Inteligência Artificial e automação (LLMs, CrewAI, n8n), entregando aplicações focadas em performance, acessibilidade e valor real para o usuário.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mt-6"
          >
            <TechStack />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mt-8 flex flex-col items-start justify-start gap-4 sm:flex-row"
          >
            <motion.a
              href="#projects"
              onClick={handleProjectsClick}
              onMouseMove={handleMagnetMove}
              onMouseLeave={handleMagnetLeave}
              onFocus={handleMagnetLeave}
              whileTap={{ scale: 0.98 }}
              style={{ x: springX, y: springY, willChange: 'transform' }}
              className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(216,72,117,0.2)]"
              aria-label="Ver projetos"
            >
              Ver Projetos
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contacts"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(216,72,117,0.2)]"
              aria-label="Contato por e-mail"
            >
              Entrar em Contato
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-primary/20 shadow-2xl">
            <Image
              src="/images/davi/DaviPicture.jpeg"
              alt="Davi Konuma"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[center_30%]"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
