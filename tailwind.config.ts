import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-alt": "var(--bg-alt)",
        surface: "var(--surface)",
        "surface-hover": "var(--surface-hover)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        ink: "var(--ink)",
        "ink-dim": "var(--ink-dim)",
        "ink-faint": "var(--ink-faint)",
        neon: "var(--neon)",
        "neon-soft": "var(--neon-soft)",
        "neon-deep": "var(--neon-deep)",
        "accent-violet": "var(--accent-violet)",
      },
      fontFamily: {
        display: ["var(--font-display-src)", "sans-serif"],
        serif: ["var(--font-serif-src)", "serif"],
        mono: ["var(--font-mono-src)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
