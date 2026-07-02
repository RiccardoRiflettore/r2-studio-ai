# R2 Studio AI

Personal site for R2 Studio AI — Riccardo's practice as an AI creative director, showcasing custom websites, digital products, and AI-driven solutions.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v3
- [Motion](https://motion.dev) for animation
- Fonts: Bricolage Grotesque (display), Instrument Serif (accents), Fragment Mono (labels)

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

Each homepage section lives in its own component under `src/components/`: `hero`, `marquee`, `manifesto`, `services`, `projects`, `contact`, `site-header`, `site-footer` — assembled in `src/app/page.tsx`.

## Known placeholders to update

- `src/components/projects.tsx` — gradient cards stand in for real project screenshots/case studies.
- `src/components/contact.tsx` — social links (`LinkedIn`, `Instagram`, `GitHub`) point to `#` pending real profile URLs.
