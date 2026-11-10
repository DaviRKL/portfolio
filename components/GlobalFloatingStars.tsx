"use client";

import { motion, useReducedMotion } from "framer-motion";

const stars = [
  { top: "7%", left: "8%", size: 14, delay: 0 },
  { top: "15%", left: "29%", size: 19, delay: 0.8 },
  { top: "9%", left: "52%", size: 12, delay: 1.6 },
  { top: "19%", left: "76%", size: 16, delay: 0.4 },
  { top: "12%", left: "93%", size: 21, delay: 1.2 },
  { top: "31%", left: "16%", size: 18, delay: 2 },
  { top: "28%", left: "43%", size: 13, delay: 1 },
  { top: "36%", left: "67%", size: 20, delay: 2.4 },
  { top: "32%", left: "88%", size: 12, delay: 0.6 },
  { top: "49%", left: "5%", size: 20, delay: 1.8 },
  { top: "53%", left: "28%", size: 14, delay: 0.2 },
  { top: "47%", left: "55%", size: 17, delay: 2.2 },
  { top: "58%", left: "81%", size: 13, delay: 1.4 },
  { top: "68%", left: "11%", size: 12, delay: 0.6 },
  { top: "72%", left: "38%", size: 21, delay: 1.6 },
  { top: "67%", left: "62%", size: 14, delay: 0.2 },
  { top: "77%", left: "92%", size: 18, delay: 2.6 },
  { top: "88%", left: "22%", size: 16, delay: 1.2 },
  { top: "91%", left: "51%", size: 12, delay: 2 },
  { top: "86%", left: "73%", size: 19, delay: 0.8 },
] as const;

export default function GlobalFloatingStars() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {stars.map((star, index) => (
        <motion.svg
          key={`${star.top}-${star.left}`}
          viewBox="0 0 100 100"
          fill="currentColor"
          className="absolute text-accent-gold"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          initial={{ opacity: 0.3 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.3 }
              : { opacity: [0.2, 0.4, 0.2] }
          }
          transition={{
            duration: 3.5 + (index % 5) * 0.6,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path d="M50 4 61 36 95 36 67 56 78 89 50 69 22 89 33 56 5 36 39 36Z" />
        </motion.svg>
      ))}
    </div>
  );
}
