const items = [
  "WEB DESIGN",
  "AI PRODUCTS",
  "BRAND SYSTEMS",
  "AUTOMATION",
  "UX ENGINEERING",
  "CREATIVE DIRECTION",
];

export function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/40 py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.2em] text-ink-dim"
          >
            {item}
            <span className="text-neon">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
