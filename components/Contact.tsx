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
    <section id="contacts" className="relative overflow-hidden py-24 transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="mb-6 font-heading text-4xl font-extrabold text-text-main md:text-5xl">
          Vamos construir algo incrível juntos?
        </h2>
        
        <p className="mb-12 max-w-2xl mx-auto text-lg text-text-main md:text-xl">
          Estou sempre aberto a novos projetos, colaborações Front-End e desafios tecnológicos que demandem alta performance.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          {/* E-mail - Botão Magnético Principal */}
          <MagneticButton>
            <motion.a
              href="mailto:davirkl07@gmail.com" 
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(82, 89, 173, 0.2)" }}
              className="flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-md transition-all duration-300 hover:shadow-[0_10px_20px_rgba(82,89,173,0.2)]"
            >
              <Mail className="h-6 w-6" />
              Enviar E-mail
            </motion.a>
          </MagneticButton>

          {/* LinkedIn - Botão Secundário */}
          <motion.a
            href="https://www.linkedin.com/in/davirkl/"
            whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(216, 72, 117, 0.2)" }}
            className="flex items-center gap-3 rounded-2xl bg-secondary px-8 py-4 text-lg font-bold text-white shadow-md transition-all duration-300 hover:shadow-[0_10px_20px_rgba(216,72,117,0.2)]"
          >
            <Linkedin className="h-6 w-6" />
            LinkedIn
          </motion.a>
        </div>

        {/* Footer Minimalista */}
        <footer className="border-t border-primary/20 pt-12 text-sm text-text-main dark:text-text-on-bg">
          <p>© 2026 Davi Konuma — Desenvolvedor Front-End </p>
          <p className="mt-2">Feito com Next.js 14, Framer Motion e GSAP.</p>
        </footer>
      </motion.div>
    </section>
  )
}