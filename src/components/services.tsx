"use client";

import { motion } from "motion/react";

const services = [
  {
    n: "01",
    title: "Websites",
    description:
      "Custom-built, fast-loading websites designed to feel like nothing else in your category — from first pixel to production.",
  },
  {
    n: "02",
    title: "Digital Products",
    description:
      "Web apps, dashboards, and tools designed end-to-end — from the first sketch to a shipped, real-world product.",
  },
  {
    n: "03",
    title: "AI Solutions",
    description:
      "AI-driven workflows, agents, and automations that give founders and teams genuine operational leverage.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-neon-soft"
        >
          02 / Services
        </motion.p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-bg p-8 transition-colors hover:bg-surface"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(320px_circle_at_var(--x,50%)_var(--y,0%),rgba(61,125,255,0.12),transparent_70%)]" />
              <span className="font-mono text-sm text-ink-faint">
                {service.n}
              </span>
              <h3 className="mt-6 font-display text-2xl text-ink">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-dim">
                {service.description}
              </p>
              <span className="mt-8 block h-px w-10 bg-border-strong transition-all duration-300 group-hover:w-16 group-hover:bg-neon" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
