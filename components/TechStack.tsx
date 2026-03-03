"use client"

import { motion } from 'framer-motion'
import { 
  SiTypescript, 
  SiReact, 
  SiExpress, 
  SiTailwindcss, 
  SiPython 
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const techs = [
  { id: 'ts', label: 'TS', icon: <SiTypescript className="text-[#3178C6]" />, color: "hover:border-[#3178C6]/50" },
  { id: 'react', label: 'React', icon: <SiReact className="text-[#61DAFB]" />, color: "hover:border-[#61DAFB]/50" },
  { id: 'express', label: 'Express', icon: <SiExpress className="dark:text-white text-black" />, color: "hover:border-gray-400/50" },
  { id: 'tailwind', label: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" />, color: "hover:border-[#06B6D4]/50" },
  { id: 'python', label: 'Python', icon: <SiPython className="text-[#3776AB]" />, color: "hover:border-[#3776AB]/50" },
  { id: 'java', label: 'Java', icon: <FaJava className="text-[#007396]" />, color: "hover:border-[#007396]/50" },
]

export default function TechStack() {
  return (
    <section aria-label="Tech Stack" className="mt-8 text-center">
      <ul className="mt-4 flex flex-wrap gap-4 items-center justify-center">
        {techs.map((t) => (
          <motion.li
            key={t.id}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(0, 169, 224, 0.1)" // Leve brilho do seu azul elétrico
            }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-3 bg-prussian/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/5 transition-all duration-300 ${t.color}`}
          >
            <span className="text-2xl">
              {t.icon}
            </span>
            <span className="text-sm font-medium text-white-smoke/90">
              {t.label}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}