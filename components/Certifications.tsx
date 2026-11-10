"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Award } from "lucide-react";

type BadgeMetadata = {
  title: string;
  date?: string;
  image?: string;
  link: string;
};

const BADGE_META = {
  "cddb1fe4-b19c-431f-bfeb-6f174d477d37": {
    title: "JavaScript Essentials 2 - Cisco",
    date: "2026-02",
    image: "badges/javascript-essentials-2.png",
    link: "https://www.credly.com/badges/cddb1fe4-b19c-431f-bfeb-6f174d477d37/public_url",
  },
  "c7051ddb-432b-4600-953b-eccd74fdcde3": {
    title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    date: "2025-06",
    image: "badges/aws-academy-graduate-cloud-foundations-training-bad.png",
    link: "https://www.credly.com/badges/c7051ddb-432b-4600-953b-eccd74fdcde3/public_url",
  },
  "f0a14d48-243e-49ae-b607-d1835af289e0": {
    title:
      "AWS Academy Graduate - Machine Learning Foundations - Training Badge",
    date: "2025-11",
    image: "badges/aws-academy-graduate-machine-learning-foundations-t.png",
    link: "https://www.credly.com/badges/f0a14d48-243e-49ae-b607-d1835af289e0/public_url",
  },
  "156ff5a0-74ef-4b67-890f-e05d980f34dd": {
    title: "AWS Cloud Quest: Cloud Practitioner - Training Badge",
    date: "2024-09",
    image: "badges/aws-cloud-quest-cloud-practitioner-training-badge (1).png",
    link: "https://www.credly.com/badges/156ff5a0-74ef-4b67-890f-e05d980f34dd/public_url",
  },
  "2530c36d-8ebb-4016-9159-9d8120d900a0": {
    title: "Computer Hardware Basics - Cisco",
    date: "2024-06",
    image: "badges/computer-hardware-basics.png",
    link: "https://www.credly.com/badges/2530c36d-8ebb-4016-9159-9d8120d900a0/public_url",
  },
  "78b22a43-12d0-4abf-b0cd-2492677e2762": {
    title: "HTML Essentials",
    date: "2026-02",
    image: "badges/html-essentials.png",
    link: "https://www.credly.com/badges/78b22a43-12d0-4abf-b0cd-2492677e2762/public_url",
  },
  "6578a5bb-b5fb-4b64-b898-55811cbfc45d": {
    title: "JavaScript Essentials 1",
    date: "2026-02",
    image: "badges/javascript-essentials-1.png",
    link: "https://www.credly.com/badges/6578a5bb-b5fb-4b64-b898-55811cbfc45d/public_url",
  },
  "c0849106-bdac-49c2-984d-dbe0eb0fa184": {
    title: "MongoDB Advanced Schema Design Patterns and Anti-patterns",
    date: "2026-05",
    image: "badges/mongodb-advanced-schema-design-patterns-and-anti-pa.png",
    link: "https://www.credly.com/badges/c0849106-bdac-49c2-984d-dbe0eb0fa184/public_url",
  },
  "7e0f925c-1cf3-42f1-898c-e91ffab31c4b": {
    title: "Optimizing MongoDB Performance with Tuning Tools",
    date: "2026-06",
    image: "badges/optimizing-mongodb-performance-with-tuning-tools.1.png",
    link: "https://www.credly.com/badges/7e0f925c-1cf3-42f1-898c-e91ffab31c4b/public_url",
  },
  "85544a77-9af0-417c-9233-fe018479398d": {
    title: "MongoDB Aggregation Fundamentals",
    date: "2026-06",
    image: "badges/mongodb-aggregation-fundamentals.png",
    link: "https://www.credly.com/badges/85544a77-9af0-417c-9233-fe018479398d/public_url",
  },
  "crewai-multi-ai-agent-systems": {
    title: "Multi AI Agent Systems with crewAI",
    date: "2024-11",
    image: "badges/crewai-color.svg",
    link: "https://drive.google.com/file/d/1cTY3Xl9lll9IsiDeJvKWc1ETlOuGEGg4/view?usp=sharing",
  },
  "crewai-practical-multi-ai-agents": {
    title: "Practical Multi AI Agents and Advanced Use Cases with crewAI",
    date: "2024-12",
    image: "badges/crewai-color.svg",
    link: "https://www.deeplearning.ai/accomplishments/06594d83-8d11-403e-b7d8-587c247a8694?usp=sharing",
  },
  "google-antigravity-software-engineering-immersion": {
    title: "Imersão Engenharia de Software: Dev na era da IA",
    date: "2026-11",
    image: "badges/Google-Antigravity-Icon-Full-Color.svg",
    link: "https://cursos.alura.com.br/immersion/imersao-engenharia-software-ia-google/user/davirkl07/certificate",
  },
} satisfies Record<string, BadgeMetadata>;

type BadgeId = keyof typeof BADGE_META;

type CertificationSection = {
  title: string;
  description: string;
  badgeIds: BadgeId[];
  enabled?: boolean;
};

const CERTIFICATION_SECTIONS: CertificationSection[] = [
  {
    title: "Inteligência Artificial",
    description:
      "Formação em inteligência artificial e sistemas multiagentes com crewAI.",
    badgeIds: [
      "google-antigravity-software-engineering-immersion",
      "f0a14d48-243e-49ae-b607-d1835af289e0",
      "crewai-multi-ai-agent-systems",
      "crewai-practical-multi-ai-agents",
    ],
  },
  {
    title: "Cloud",
    description:
      "Certificados que validam meus conhecimentos em computação em nuvem e serviços AWS.",
    badgeIds: [
      "c7051ddb-432b-4600-953b-eccd74fdcde3",
      "156ff5a0-74ef-4b67-890f-e05d980f34dd",
    ],
  },

  {
    title: "Banco de Dados",
    description:
      "Certificados em modelagem de dados, otimização de desempenho e agregações com MongoDB.",
    badgeIds: [
      "c0849106-bdac-49c2-984d-dbe0eb0fa184",
      "7e0f925c-1cf3-42f1-898c-e91ffab31c4b",
      "85544a77-9af0-417c-9233-fe018479398d",
    ],
  },
  {
    title: "Desenvolvimento & Fundamentos",
    description:
      "Estes badges demonstram meu rigor acadêmico e técnico nas bases de programação e web development.",
    badgeIds: [
      "cddb1fe4-b19c-431f-bfeb-6f174d477d37",
      "6578a5bb-b5fb-4b64-b898-55811cbfc45d",
      "78b22a43-12d0-4abf-b0cd-2492677e2762",
      "2530c36d-8ebb-4016-9159-9d8120d900a0",
    ],
    enabled: false,
  },
];

const HOVER_LIFT: Variants = {
  initial: { y: 0 },
  hover: { y: -8, transition: { duration: 0.3, ease: "easeOut" } },
};

function BadgeCard({
  id,
  compact = false,
}: {
  id: BadgeId;
  compact?: boolean;
}) {
  const badge: BadgeMetadata = BADGE_META[id];
  const size = compact ? 120 : 150;
  const imageSizeClass = compact
    ? "w-[120px] h-[120px]"
    : "w-[150px] h-[150px]";

  return (
    <motion.article
      initial="initial"
      whileHover="hover"
      variants={HOVER_LIFT}
      className={
        compact
          ? "col-span-full mt-4 rounded-xl border border-secondary/20 bg-white p-4 shadow-[0_4px_20px_rgba(82,89,173,0.05)] transition-colors hover:border-primary/40 dark:bg-bg-card dark:shadow-lg md:col-auto"
          : "rounded-xl border border-primary/20 bg-white p-4 shadow-[0_4px_20px_rgba(82,89,173,0.05)] transition-colors hover:border-secondary/40 dark:bg-bg-card dark:shadow-lg"
      }
    >
      <a
        href={badge.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center ${compact ? "gap-2" : "gap-3"} group`}
        aria-label={badge.title}
      >
        <div
          className={`${imageSizeClass} rounded-md overflow-hidden transition-transform duration-300`}
        >
          {badge.image ? (
            <Image
              src={encodeURI(`/images/${badge.image}`)}
              alt={badge.title}
              width={size}
              height={size}
              className="object-contain bg-transparent transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-105"
            >
              <Award size={48} strokeWidth={1.5} />
            </div>
          )}
        </div>

        <div className="mt-1 text-center max-w-[190px]">
          <div
            className={`transition-colors duration-300 group-hover:text-primary ${
              compact
                ? "text-sm font-medium text-text-main dark:text-text-on-card"
                : "text-sm font-semibold text-text-main dark:text-text-on-card"
            }`}
          >
            {badge.title}
          </div>
          {badge.date && (
            <div className="text-xs text-text-main dark:text-text-on-card">
              {badge.date}
            </div>
          )}
        </div>
      </a>
    </motion.article>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 py-24 text-center"
    >
      <h2 className="mb-10 font-heading text-3xl font-extrabold text-text-main">
        Certificados e Conquistas
      </h2>

      {CERTIFICATION_SECTIONS.filter(
        (section) => section.enabled !== false,
      ).map((section) => (
        <section key={section.title} className="mb-12">
          <h3 className="mb-1 font-heading text-2xl font-bold text-primary dark:text-secondary">
            {section.title}
          </h3>
          <p className="mb-6 max-w-3xl mx-auto text-text-main">
            {section.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {section.badgeIds.map((id) => (
              <BadgeCard
                key={id}
                id={id}
                compact={id === "2530c36d-8ebb-4016-9159-9d8120d900a0"}
              />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
