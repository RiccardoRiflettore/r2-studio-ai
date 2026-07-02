const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="font-mono text-sm tracking-[0.18em] text-ink"
        >
          R2 STUDIO<span className="text-neon">·</span>AI
        </a>
        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-[0.12em] text-ink-dim uppercase transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden font-mono text-xs tracking-[0.12em] text-ink uppercase border border-border-strong rounded-full px-4 py-2 transition-colors hover:border-neon hover:text-neon sm:inline-block"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
