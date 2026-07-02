"use client";

import { motion } from "motion/react";

export function Manifesto() {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-neon-deep/60 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-neon-soft"
        >
          01 / Manifesto
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-4xl text-balance font-display text-3xl leading-[1.25] text-ink sm:text-4xl md:text-5xl"
        >
          I design digital experiences where{" "}
          <span className="font-serif italic text-neon-soft">
            artificial intelligence
          </span>{" "}
          meets craft. Every product is a balance of{" "}
          <span className="font-serif italic text-ink">strategy</span>, code,
          and{" "}
          <span className="font-serif italic text-ink">visual care</span>.
        </motion.p>
      </div>
    </section>
  );
}
