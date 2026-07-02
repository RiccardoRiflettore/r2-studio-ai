"use client";

import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen scroll-mt-24 overflow-hidden pt-40 pb-24"
    >
      {/* Ambient background: neon mesh orb, no divider — bleeds behind the copy */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-56 top-16 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(61,125,255,0.55),rgba(15,29,74,0.25)_45%,transparent_70%)] blur-2xl animate-breathe"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-[28rem] h-72 w-72 rounded-full bg-accent-violet/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(61,125,255,0.08),transparent_55%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-7xl px-6 sm:px-10"
      >
        {/* Floating badge — overlaps the orb AND the headline column, no separating bar */}
        <motion.div
          variants={rise}
          className="absolute right-4 top-6 hidden items-center gap-2 rounded-full border border-border-strong bg-surface/70 px-4 py-2 backdrop-blur-md sm:flex md:right-10 md:top-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
          </span>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-dim">
            Available for select projects
          </span>
        </motion.div>

        <motion.p
          variants={rise}
          className="font-mono text-xs uppercase tracking-[0.35em] text-neon-soft"
        >
          AI Creative Director
        </motion.p>

        <div className="relative mt-6">
          <motion.h1
            variants={rise}
            className="max-w-4xl font-display text-[clamp(3rem,9vw,7.5rem)] font-medium leading-[0.92] tracking-tight text-ink"
          >
            Direction where
            <br />
            intelligence meets{" "}
            <span className="text-glow bg-gradient-to-r from-neon-soft via-neon to-accent-violet bg-clip-text text-transparent">
              craft.
            </span>
          </motion.h1>

          {/* Rotated tag overlapping the headline's own baseline — the overlap the brief asked for */}
          <motion.div
            variants={rise}
            className="pointer-events-none absolute -right-2 bottom-2 hidden -rotate-6 rounded-lg border border-border-strong bg-surface/80 px-3 py-1.5 backdrop-blur-md md:right-16 lg:flex"
          >
            <span className="font-mono text-[0.65rem] tracking-[0.1em] text-ink-dim">
              R2 STUDIO AI° — EST. 2026
            </span>
          </motion.div>
        </div>

        <motion.p
          variants={rise}
          className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-ink-dim"
        >
          I&apos;m Riccardo — I run{" "}
          <span className="font-serif italic text-ink">R2 Studio AI</span>, a
          one-person studio designing bespoke websites, digital products, and
          AI-driven solutions for founders and teams who care about the
          details.
        </motion.p>

        <motion.div
          variants={rise}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="border-glow rounded-full bg-neon px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-bg transition-transform hover:scale-[1.03]"
          >
            View the work
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-border-strong px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-neon hover:text-neon"
          >
            Let&apos;s talk
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-6 flex items-center gap-3 sm:left-10"
      >
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-neon to-transparent" />
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink-faint">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
