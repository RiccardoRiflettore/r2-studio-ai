"use client";

import { motion } from "motion/react";

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "GitHub", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(61,125,255,0.35),transparent_70%)] blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-neon-soft"
        >
          04 / Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-3xl text-balance font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-ink"
        >
          Got a project in mind?
          <br />
          <span className="text-glow bg-gradient-to-r from-neon-soft via-neon to-accent-violet bg-clip-text text-transparent">
            Let&apos;s build it.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6"
        >
          <a
            href="mailto:rikirifle@gmail.com"
            className="border-glow rounded-full bg-neon px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-bg transition-transform hover:scale-[1.03]"
          >
            rikirifle@gmail.com
          </a>

          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="font-mono text-xs uppercase tracking-[0.14em] text-ink-dim underline decoration-border-strong underline-offset-4 transition-colors hover:text-neon hover:decoration-neon"
              >
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
