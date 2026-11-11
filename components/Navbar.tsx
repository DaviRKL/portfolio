"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#experience", label: "Experiência" },
    { href: "#projects", label: "Projetos" },
    { href: "#education", label: "Formações" },
    { href: "#certifications", label: "Certificações" },
    { href: "#languages", label: "Idiomas" },
    { href: "#contacts", label: "Contato" },
  ];

  // Variantes para animação do menu mobile
  const menuVariants: any = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeIn" },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full text-text-main backdrop-blur-md transition-colors duration-500"
      style={{
        borderBottom: "1px solid var(--border-color)",
        background: "rgba(var(--bg-rgb), 0.88)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary transition-colors hover:text-accent"
          aria-label="Davi Konuma home"
        >
          Davi Konuma
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2">
            {navLinks.map((l) => (
              <motion.a
                key={l.href}
                whileHover={{
                  y: -4,
                  color: "var(--accent)",
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-text-main transition-colors hover:bg-primary/10 hover:text-primary"
                style={{ color: "var(--color-text-main)" }}
              >
                {l.label}
              </motion.a>
            ))}
          </div>

          <div
            className="flex items-center gap-5 border-l pl-5"
            style={{ borderColor: "var(--border-color)" }}
          >
            <motion.a
              whileHover={{
                y: -4,
                color: "var(--accent)",
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="text-text-main transition-colors hover:text-primary"
              href="https://github.com/DaviRKL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </motion.a>

            <motion.a
              whileHover={{
                y: -4,
                color: "var(--accent)",
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="text-text-main transition-colors hover:text-primary"
              href="https://www.linkedin.com/in/davirkl/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation-menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-xl transition-colors border"
            style={{
              background: "rgba(var(--surface-rgb), 0.12)",
              borderColor: "var(--border-color)",
            }}
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-main"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-main"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile sliding menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            id="mobile-navigation-menu"
            className="absolute left-0 top-full z-[60] w-full border-b border-primary/20 bg-bg-card shadow-2xl transition-colors duration-500 md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => {
                    window.setTimeout(() => setOpen(false), 160);
                    window.setTimeout(() => {
                      document.documentElement.scrollLeft = 0;
                      document.body.scrollLeft = 0;
                    }, 250);
                  }}
                  whileHover={{
                    y: -5, // Efeito de levantar
                    color: "var(--color-secondary)",
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  whileFocus={{
                    y: -5,
                    color: "var(--color-secondary)",
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95, y: -3, color: "var(--color-secondary)" }}
                  className="block cursor-pointer border-b border-primary/20 py-2 text-2xl font-semibold text-[var(--color-text-on-card)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-secondary)]"
                >
                  {l.label}
                </motion.a>
              ))}

              <div className="flex flex-col gap-5 pt-4">
                {/* Links Sociais com deslocamento lateral (X) em vez de vertical (Y) */}
                <motion.a
                  whileHover={{ x: 8, color: "var(--accent)" }}
                  whileFocus={{ x: 8, color: "var(--accent)" }}
                  whileTap={{ x: 8, color: "var(--accent)" }}
                  className="flex cursor-pointer items-center gap-3 text-lg font-medium text-[var(--color-text-on-card)] transition-colors hover:text-[var(--color-secondary)]"
                  href="https://github.com/DaviRKL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </motion.a>

                <motion.a
                  whileHover={{ x: 8, color: "var(--color-secondary)" }}
                  whileFocus={{ x: 8, color: "var(--color-secondary)" }}
                  whileTap={{ x: 8, color: "var(--color-secondary)" }}
                  className="flex cursor-pointer items-center gap-3 text-lg font-medium text-[var(--color-text-on-card)] transition-colors"
                  href="https://www.linkedin.com/in/davirkl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </motion.a>
              </div>

              <div className="flex items-center justify-between border-t border-primary/20 pt-4 text-[var(--color-text-on-card)]">
                <span className="text-sm font-medium">Alternar tema</span>
                <ThemeToggle className="text-[var(--color-text-on-card)] hover:bg-secondary/10 focus-visible:outline-secondary" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
