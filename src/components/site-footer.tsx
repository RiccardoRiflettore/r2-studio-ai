export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-xs uppercase tracking-[0.12em] text-ink-faint sm:flex-row sm:px-10">
        <span>© R2 Studio AI — {new Date().getFullYear()}</span>
        <span>Design &amp; Code by Riccardo</span>
        <a href="#top" className="transition-colors hover:text-neon">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
