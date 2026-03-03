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
    <section className="relative min-h-[75vh] flex items-center overflow-hidden">
      <motion.div
        className="relative max-w-3xl mx-auto px-6 py-20 text-center"
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
          className="mx-auto w-36 h-36 md:w-48 md:h-48 rounded-full hero-avatar"
        >
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-border-color shadow-md">
            <Image
              src="/images/davi/mypic.jpg"
              alt="Davi Konuma"
              width={384}
              height={384}
              style={{ objectFit: 'cover', transform: 'scale(1.2) translateY(-8%)', objectPosition: 'center' }}
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          ref={nameRef}
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] animated-gradient bg-clip-text"
          aria-label="Davi Konuma — Full-Stack Developer"
          style={{ willChange: 'transform' }}
        >
          Davi Konuma
        </motion.h1>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-4 pd-10 inline-flex items-center px-3 py-1 rounded-full bg-[rgba(0,169,224,0.08)] text-white text-sm font-semibold badge-beam pd-10"
          style={{ willChange: 'transform' }}
        >
          Full-Stack Developer
        </motion.div>

        <motion.p
          ref={titleRef}
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-6 text-base md:text-lg text-text-main/85 max-w-2xl mx-auto"
          style={{ willChange: 'transform, opacity' }}
        >
          Com sólida base em Engenharia de Software e especialização no ecossistema TypeScript, minha atuação foca na entrega de soluções de ponta a ponta, unindo interfaces de alta performance a arquiteturas de backend robustas e escaláveis.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-10"
        >
          <TechStack />
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            onClick={handleProjectsClick}
            onMouseMove={handleMagnetMove}
            onMouseLeave={handleMagnetLeave}
            onFocus={handleMagnetLeave}
            whileTap={{ scale: 0.98 }}
            style={{ x: springX, y: springY, willChange: 'transform' }}
            className="cta-primary cta-primary-pulse inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-[#00171f] dark:text-white bg-[rgba(0,169,224,0.18)] border border-[rgba(0,169,224,0.35)] backdrop-blur-md shadow-lg"
            aria-label="Ver projetos"
          >
            Ver Projetos
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:davirkl07@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-text-main border border-border-color bg-white/5 backdrop-blur-xl"
            aria-label="Contato por e-mail"
          >
            Entrar em Contato
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
