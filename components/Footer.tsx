export default function Footer() {
  return (
    <footer className="bg-ink text-white/50 py-10 text-[13px]">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between flex-wrap gap-4">
        <span className="font-serif italic text-[18px] text-white/80">Stella Achar Oiro</span>

        <ul className="flex gap-6 list-none">
          <li><a href="#projects" className="font-mono text-[11px] tracking-[0.5px] text-white/40 no-underline hover:text-primary-mid transition-colors">Projects</a></li>
          <li><a href="/portfolio" className="font-mono text-[11px] tracking-[0.5px] text-white/40 no-underline hover:text-primary-mid transition-colors">Portfolio</a></li>
          <li><a href="/about" className="font-mono text-[11px] tracking-[0.5px] text-white/40 no-underline hover:text-primary-mid transition-colors">About</a></li>
          <li><a href="https://dev.to/stellaacharoiro" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] tracking-[0.5px] text-white/40 no-underline hover:text-primary-mid transition-colors">DEV.to</a></li>
          <li><a href="/contact" className="font-mono text-[11px] tracking-[0.5px] text-white/40 no-underline hover:text-primary-mid transition-colors">Contact</a></li>
        </ul>

        <span className="font-mono text-[11px]">&copy; 2026 Stella Achar Oiro</span>
      </div>
    </footer>
  )
}
