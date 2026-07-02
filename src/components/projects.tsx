"use client";

import { motion } from "motion/react";

const projects = [
  {
    n: "01",
    name: "Aurora Analytics",
    category: "AI Product · Dashboard",
    year: "2026",
    gradient: "from-[#1c2b6b] via-[#2a4bd6] to-[#0a0f1f]",
  },
  {
    n: "02",
    name: "Nord & Co.",
    category: "Web Design · Commerce",
    year: "2025",
    gradient: "from-[#0f1f45] via-[#3d7dff] to-[#0a0f1f]",
  },
  {
    n: "03",
    name: "Vantage Concierge",
    category: "AI Product · Full-stack",
    year: "2025",
    gradient: "from-[#241a52] via-[#6f5cff] to-[#0a0f1f]",
  },
  {
    n: "04",
    name: "Lumen Studio",
    category: "Web Design · Branding",
    year: "2025",
    gradient: "from-[#102048] via-[#3d7dff] to-[#241a52]",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.35em] text-neon-soft"
          >
            03 / Selected Work
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint"
          >
            01 — 04
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.n}
              href="#contact"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative block overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div
                className={`relative aspect-[4/3] w-full bg-gradient-to-br ${project.gradient} transition-transform duration-700 ease-out group-hover:scale-105`}
              >
                <span className="absolute left-6 top-6 font-mono text-6xl font-medium text-white/10">
                  {project.n}
                </span>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-bg/90 via-bg/10 to-transparent p-6">
                  <div className="flex w-full items-end justify-between">
                    <div>
                      <h3 className="font-display text-2xl text-ink sm:text-3xl">
                        {project.name}
                      </h3>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-ink-dim">
                        {project.category} — {project.year}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint"
        >
          Selected work shown for direction — case studies available on request.
        </motion.p>
      </div>
    </section>
  );
}
