'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-28 pb-20 border-b border-border-lt">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">
        {/* Left column */}
        <div>
          <p className="font-mono text-[11px] tracking-[2px] uppercase text-primary mb-4">
            Nairobi, Kenya &middot; Available for collaboration
          </p>

          <h1
            className="font-serif italic text-[clamp(52px,6vw,72px)] leading-[1.02] tracking-[-1.5px] text-ink mb-2"
            style={{ animationDelay: '0ms' }}
          >
            Stella Achar Oiro
          </h1>

          <div className="font-mono text-[13px] text-ink-muted tracking-[0.5px] mb-7 flex flex-wrap gap-1.5 items-center">
            <span>AI Engineer</span>
            <span className="text-border-DEFAULT text-base">&middot;</span>
            <span>AWS Community Builder</span>
            <span className="text-border-DEFAULT text-base">&middot;</span>
            <span>Clinical Officer</span>
            <span className="text-border-DEFAULT text-base">&middot;</span>
            <span>CEO, Evarest Technologies</span>
          </div>

          <p className="text-[17px] font-light leading-[1.75] text-ink-muted max-w-[560px] mb-10">
            I spent <strong className="text-ink font-medium">13 years in Kenya&apos;s public health system</strong> before
            becoming an AI engineer. Now I build the tools those systems never had — healthcare AI that works for
            real patients in low-resource settings, in Swahili, on WhatsApp, offline-first.
            <br /><br />
            Co-Founder &amp; CEO of <strong className="text-ink font-medium">Evarest Technologies Ltd</strong>.
            Andela AI Engineering Fellow. SRAIS 2026 cohort. AWS Community Builder (DevTools).
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="btn-primary">See my work</a>
            <Link href="/contact" className="btn-ghost">Collaborate</Link>
          </div>
        </div>

        {/* Terminal widget */}
        <div className="hidden lg:block bg-[#120E0C] rounded-[10px] overflow-hidden font-mono text-[13px]">
          <div className="bg-[#1E1410] px-4 py-[10px] flex items-center gap-1.5">
            <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]"></span>
            <span className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]"></span>
            <span className="w-[10px] h-[10px] rounded-full bg-[#28C840]"></span>
            <span className="ml-2 text-[11px] text-[#6B4A3A] tracking-[0.5px]">stella@evarest ~</span>
          </div>
          <div className="p-6 leading-[2]">
            <div><span className="text-primary">$ </span><span className="text-[#F0E8E0]">whoami</span></div>
            <div><span className="text-primary-mid">stella.achar.oiro</span></div>
            <div className="mt-2"><span className="text-primary">$ </span><span className="text-[#F0E8E0]">cat roles.txt</span></div>
            <div><span className="text-[#EF9F27]">AI Engineer</span> <span className="text-[#4A2E22]">|</span> <span className="text-primary-mid">LangGraph &middot; FastAPI &middot; AWS</span></div>
            <div><span className="text-[#EF9F27]">Clinical Officer</span> <span className="text-[#4A2E22]">|</span> <span className="text-primary-mid">13 yrs &middot; Migori County</span></div>
            <div><span className="text-[#EF9F27]">CEO</span> <span className="text-[#4A2E22]">|</span> <span className="text-primary-mid">Evarest Technologies Ltd</span></div>
            <div className="mt-2"><span className="text-primary">$ </span><span className="text-[#F0E8E0]">ls projects/</span></div>
            <div>
              <span className="text-primary-mid">kintaraa/</span>&nbsp;&nbsp;
              <span className="text-primary-mid">zeya/</span>&nbsp;&nbsp;
              <span className="text-primary-mid">hali/</span>&nbsp;&nbsp;
              <span className="text-primary-mid">clar/</span>
            </div>
            <div className="mt-2">
              <span className="text-primary">$ </span>
              <span className="inline-block w-2 h-[15px] bg-primary align-middle animate-blink"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
