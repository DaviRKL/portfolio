"use client"

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'

// Componente para o Botão Magnético
function MagneticButton({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section className="relative overflow-hidden hero-mesh hero-mesh-animate py-24 transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animated-gradient-text">
          Vamos construir algo incrível juntos?
        </h2>
        
        <p className="text-lg md:text-xl text-[#00171f]/80 dark:text-[#f2f2f2]/80 mb-12 max-w-2xl mx-auto">
          Estou sempre aberto a novos projetos, colaborações Full-Stack e desafios tecnológicos que demandem alta performance.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          {/* E-mail - Botão Magnético Principal */}
          <MagneticButton>
            <motion.a
              href="mailto:davirkl07@gmail.com" 
              whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0, 169, 224, 0.3)" }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 text-[#00171f] dark:text-[#f2f2f2] font-bold text-lg transition-all"
            >
              <Mail className="w-6 h-6 text-[#00A9E0]" />
              Enviar E-mail
            </motion.a>
          </MagneticButton>

          {/* LinkedIn - Botão Secundário */}
          <motion.a
            href="https://www.linkedin.com/in/davirkl/"
            whileHover={{ y: -5 }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 text-[#00171f] dark:text-[#f2f2f2] font-bold text-lg transition-all"
          >
            <Linkedin className="w-6 h-6 text-[#00A9E0]" />
            LinkedIn
          </motion.a>
        </div>

        {/* Footer Minimalista */}
        <footer className="pt-12 border-t border-black/5 dark:border-white/5 text-sm text-[#00171f]/60 dark:text-[#f2f2f2]/60">
          <p>© 2026 Davi Konuma — Desenvolvedor Full-Stack </p>
          <p className="mt-2">Feito com Next.js 14, Framer Motion e GSAP.</p>
        </footer>
      </motion.div>
    </section>
  )
}