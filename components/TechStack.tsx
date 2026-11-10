"use client";

import { motion } from "framer-motion";
import {
  SiTypescript,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techs = [
  {
    id: "ts",
    label: "TS",
    icon: <SiTypescript />,
    color: "border-primary/20 bg-primary/10 text-primary hover:border-primary/60",
  },
  {
    id: "react",
    label: "React",
    icon: <SiReact />,
    color: "border-secondary/20 bg-secondary/10 text-secondary hover:border-secondary/60",
  },
  {
    id: "tailwind",
    label: "Tailwind",
    icon: <SiTailwindcss />,
    color: "border-primary/20 bg-primary/10 text-primary hover:border-primary/60",
  },
  {
    id: "express",
    label: "Express",
    icon: <SiExpress />,
    color: "border-secondary/20 bg-secondary/10 text-secondary hover:border-secondary/60",
  },
  {
    id: "node",
    label: "Node.js",
    icon: <SiNodedotjs />,
    color: "border-primary/20 bg-primary/10 text-primary hover:border-primary/60",
  },
];

export default function TechStack() {
  return (
    <section aria-label="Tech Stack" className="mt-8 text-left">
      <ul className="mt-4 flex flex-wrap items-center justify-start gap-4">
        {techs.map((t) => (
          <motion.li
            key={t.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-3 rounded-xl border px-4 py-2 backdrop-blur-sm transition-all duration-300 ${t.color}`}
          >
            <span className="text-2xl">{t.icon}</span>
            <span className="text-sm font-medium">
              {t.label}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
