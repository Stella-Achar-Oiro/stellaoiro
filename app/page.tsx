import Hero from '@/components/Hero'

/* ── Stats band ─────────────────────────────────────────────────────────── */
function StatsBand() {
  const stats = [
    { n: '13+',   l: "Years in Kenya's public health system" },
    { n: '3',     l: 'AI systems in production or active pilot' },
    { n: '25K+',  l: 'Words of technical content published' },
    { n: 'Top 4', l: 'AfriLabs AI BRIDGE · JuaKazi' },
  ]
  return (
    <div className="bg-surface border-t border-border-lt border-b border-b-border-lt py-12">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.n}
            className={`px-8 py-4 text-center ${i < stats.length - 1 ? 'border-r border-r-border-lt' : ''}`}
          >
            <span className="block font-serif italic text-[42px] leading-none text-primary">{s.n}</span>
            <span className="block text-[12.5px] text-ink-hint mt-1.5 leading-snug">{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Identity grid ───────────────────────────────────────────────────────── */
function IdentitySection() {
  const cards = [
    {
      num: '01',
      title: 'AI Engineer',
      desc: 'LangGraph multi-agent pipelines, RAG systems, FastAPI backends, Google Cloud Run, AWS App Runner. Andela AI Engineering Bootcamp fellow, SRAIS 2026.',
    },
    {
      num: '02',
      title: 'AWS Community Builder',
      desc: 'DevTools category. CI/CD, Go tooling, Docker, Kubernetes. Publisher on AWS Builders and DEV Community · dev.to/stellaacharoiro',
    },
    {
      num: '03',
      title: 'Clinical Officer',
      desc: '13 years, Migori County. Maternal health, reproductive care, HMIS. MSc candidate, Great Lakes University of Kisumu. Lecturer, KMTC.',
    },
    {
      num: '04',
      title: 'Entrepreneur · CEO',
      desc: 'Co-Founder & CEO, Evarest Technologies Ltd. Products: Kintaraa, ZEYA, CLAR, Klabu. Partners: Dimagi (OCS Program).',
    },
  ]
  return (
    <section className="py-16 border-b border-border-lt">
      <div className="max-w-6xl mx-auto px-8">
        <div className="section-label">Four roles, one practice</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-lt border border-border-lt rounded-lg overflow-hidden">
          {cards.map((c) => (
            <div key={c.num} className="bg-surface p-6">
              <div className="font-mono text-[10px] text-ink-hint tracking-[1px] mb-3">{c.num}</div>
              <div className="text-[14px] font-medium text-ink mb-2 leading-snug">{c.title}</div>
              <div className="text-[12.5px] text-ink-muted leading-relaxed">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Projects ────────────────────────────────────────────────────────────── */
type StatusVariant = 'pilot' | 'live' | 'deploy'
interface Project {
  mark: string
  markColor: string
  status: string
  statusVariant: StatusVariant
  name: string
  tagline: string
  chips: { label: string; color?: string }[]
  docRows: { key: string; value: string }[]
  link: { href: string; label: string }
}

const statusStyles: Record<StatusVariant, string> = {
  pilot:  'bg-primary-light text-primary-dark border border-primary',
  live:   'bg-[#EAF3DE] text-[#3B6D11] border border-[#639922]',
  deploy: 'bg-amber-light text-amber border border-amber',
}

const markStyles: Record<string, string> = {
  coral: 'bg-primary-light text-primary-deep',
  amber: 'bg-amber-light text-amber-dark',
  ink:   'bg-[#ECEAE4] text-ink',
}

const chipStyles: Record<string, string> = {
  coral: 'bg-primary-light text-primary-dark',
  amber: 'bg-amber-light text-amber-dark',
  ink:   'bg-[#ECEAE4] text-ink-muted',
  '':    'bg-bg border border-border text-ink-muted',
}

const projects: Project[] = [
  {
    mark: 'K', markColor: 'coral',
    status: 'Piloting', statusVariant: 'pilot',
    name: 'Kintaraa',
    tagline: 'Anonymous AI support platform for GBV survivors. Offline-first PWA. No registration required. Swahili & English.',
    chips: [
      { label: 'React PWA', color: 'coral' }, { label: 'FastAPI', color: 'coral' },
      { label: 'LlamaGuard 3', color: 'coral' }, { label: 'NeMo Guardrails', color: 'coral' },
      { label: 'LLaMA + RAG' }, { label: 'Service Workers' },
    ],
    docRows: [
      { key: 'Problem', value: 'Every GBV help route in Kenya requires identification. Most cases never enter the formal system. Kintaraa removes that barrier entirely.' },
      { key: 'Safety',  value: 'Regex/classifier crisis detection <10ms → LlamaGuard 3 → NeMo topical rails → HAK 1195 escalation. AI supports, never decides.' },
      { key: 'Pilot',   value: '3-county pilot: Kisumu, Nairobi, Migori. SRAIS 2026 mentorship cohort.' },
    ],
    link: { href: 'https://github.com/Axyreon/kintaraa', label: 'github.com/Axyreon/kintaraa' },
  },
  {
    mark: 'Z', markColor: 'amber',
    status: 'Deployed', statusVariant: 'deploy',
    name: 'ZEYA Antenatal',
    tagline: 'WhatsApp AI companion delivering maternal health education in Swahili, Luo & English to pregnant women in Migori County.',
    chips: [
      { label: 'FastAPI · Python 3.11', color: 'amber' }, { label: 'AWS App Runner', color: 'amber' },
      { label: 'Next.js · Vercel', color: 'amber' }, { label: 'WhatsApp Business API' },
      { label: 'PostgreSQL · Redis' }, { label: 'HL7 FHIR' },
    ],
    docRows: [
      { key: 'Problem',      value: "Migori has a maternal mortality ratio of 673 per 100,000 live births — nearly double Kenya's national average. Knowledge gaps cause delayed care-seeking." },
      { key: 'Architecture', value: 'WhatsApp webhook → FastAPI router → AI triage → KHIS 2.0 / DHIS2 county reporting. Offline-tolerant queue for low-connectivity.' },
      { key: 'Research',     value: '140-participant RCT, MSc research project, Great Lakes University of Kisumu.' },
    ],
    link: { href: 'https://dev.to/stellaacharoiro', label: 'Read the technical writeup →' },
  },
  {
    mark: 'H', markColor: 'ink',
    status: 'Live', statusVariant: 'live',
    name: 'HALI',
    tagline: "HPV Awareness & Learning Initiative — MCP server for Kenya's Community Health Volunteers fighting vaccine misinformation.",
    chips: [
      { label: 'MCP Server', color: 'coral' }, { label: 'Python · FastAPI', color: 'coral' },
      { label: 'Gradio · HuggingFace', color: 'coral' }, { label: 'Pushover API' },
      { label: 'Bilingual EN/SW' },
    ],
    docRows: [
      { key: 'Problem',   value: 'Cervical cancer kills ~3,400 Kenyan women yearly. One free vaccine prevents it. CHVs lack tools to counter misinformation at scale.' },
      { key: 'MCP tools', value: 'check_eligibility · record_interest (Pushover) · record_unknown — the agent never guesses on medical facts.' },
      { key: 'Evidence',  value: 'KEMRI KEN SHE trial: single-dose vaccine 98% effective. 2.9M+ girls vaccinated safely in Kenya.' },
    ],
    link: { href: 'https://dev.to/stellaacharoiro', label: 'View on HuggingFace Spaces →' },
  },
]

function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="section-label">Featured projects</div>
        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-surface border border-border rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 transition-colors duration-200 hover:border-primary-mid"
            >
              {/* Left */}
              <div className="p-8 lg:pr-8 border-b lg:border-b-0 lg:border-r border-border-lt flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center font-serif italic text-[20px] flex-shrink-0 ${markStyles[p.markColor]}`}>
                    {p.mark}
                  </div>
                  <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full ${statusStyles[p.statusVariant]}`}>
                    {p.status}
                  </span>
                </div>
                <div className="font-serif text-[26px] leading-snug text-ink mb-1">{p.name}</div>
                <p className="text-[14px] text-ink-muted leading-relaxed mb-5 flex-1">{p.tagline}</p>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-lt mt-auto">
                  {p.chips.map((c) => (
                    <span
                      key={c.label}
                      className={`font-mono text-[10.5px] px-2.5 py-[3px] rounded ${chipStyles[c.color ?? '']}`}
                    >
                      {c.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="p-8 bg-bg flex flex-col gap-4">
                <div className="font-mono text-[10px] tracking-[1px] uppercase text-ink-hint pb-2 border-b border-border-lt">
                  Tech document
                </div>
                {p.docRows.map((r) => (
                  <div key={r.key} className="grid grid-cols-[80px_1fr] gap-2 text-[13px] leading-snug">
                    <span className="font-mono text-[10px] uppercase tracking-[0.5px] text-ink-hint pt-0.5">{r.key}</span>
                    <span className="text-ink-muted">{r.value}</span>
                  </div>
                ))}
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-primary no-underline inline-flex items-center gap-1 mt-auto pt-4 hover:text-primary-dark transition-colors"
                >
                  {p.link.label}
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Writing ─────────────────────────────────────────────────────────────── */
const articles = [
  {
    pub: 'AWS Builders', dotColor: 'bg-primary',
    title: 'Deploying FastAPI to AWS App Runner with GitHub Actions CI/CD',
    desc: "How I deployed ZEYA's backend — App Runner service config, ECR image push, IAM roles, and full GitHub Actions workflow.",
    meta: 'AWS · DevTools · 8 min read',
  },
  {
    pub: 'DEV Community', dotColor: 'bg-primary',
    title: 'Building Safe AI for GBV Survivors: LlamaGuard 3 + NeMo Guardrails',
    desc: "Architecture notes from Kintaraa's safety layer. Why two separate guardrail systems, the <10ms crisis detector, and the design rule: AI supports, never decides.",
    meta: 'AI Safety · Architecture · 10 min read',
  },
  {
    pub: 'DEV Community', dotColor: 'bg-amber',
    title: 'Building an MCP Server for Community Health: HALI',
    desc: 'How I built a 3-tool MCP server for Kenyan Community Health Volunteers — tool design, the "never guess on medical facts" principle, and real-time notifications as side effects.',
    meta: 'MCP · Developer Tools · 12 min read',
  },
]

function WritingSection() {
  return (
    <section id="writing" className="py-20 bg-surface border-t border-border-lt border-b border-b-border-lt">
      <div className="max-w-6xl mx-auto px-8">
        <div className="section-label">Technical writing · DEV.to &amp; AWS Builders</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-lt border border-border-lt rounded-[10px] overflow-hidden">
          {articles.map((a) => (
            <div key={a.title} className="bg-surface p-7">
              <div className="font-mono text-[10px] tracking-[1px] uppercase text-ink-hint mb-3 flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${a.dotColor}`}></span>
                {a.pub}
              </div>
              <div className="text-[15px] font-medium leading-snug text-ink mb-2.5">{a.title}</div>
              <p className="text-[13px] text-ink-muted leading-relaxed mb-4">{a.desc}</p>
              <div className="font-mono text-[11px] text-ink-hint">{a.meta}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="https://dev.to/stellaacharoiro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-block"
          >
            All articles on DEV.to →
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Credentials ─────────────────────────────────────────────────────────── */
const creds = [
  { icon: '☁️', iconBg: 'bg-primary-light', title: 'AWS Community Builder',        sub: 'DevTools category — CI/CD, Go tooling, cloud architecture. 2025 renewal.' },
  { icon: '🎓', iconBg: 'bg-primary-light', title: 'Andela AI Engineering Fellow', sub: 'Capstone: CLAR — 5-node LangGraph clinical lab report interpreter. InfraSquad 1st place, Agentic AI Capstone.' },
  { icon: '🌐', iconBg: 'bg-amber-light',   title: 'SRAIS 2026 Cohort',            sub: 'Scaling Responsible AI Solutions — AI ventureLAB / CEIMIA global mentorship. Project: Kintaraa.' },
  { icon: '🏆', iconBg: 'bg-primary-light', title: 'AfriLabs AI BRIDGE — Top 4',   sub: 'JuaKazi: gender bias detection & correction pipeline for African languages.' },
  { icon: '🐹', iconBg: 'bg-amber-light',   title: 'Kenya Gophers Organiser',      sub: "Co-organises Kenya's Go programming language developer community." },
  { icon: '🏫', iconBg: 'bg-primary-light', title: 'KMTC Lecturer',                sub: 'Teaches reproductive health and clinical medicine. Bridges clinical and AI domains for the next generation of health workers.' },
]

function CredentialsSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="section-label">Recognition &amp; community</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {creds.map((c) => (
            <div key={c.title} className="bg-surface border border-border rounded-[10px] p-6">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 text-base ${c.iconBg}`}>
                {c.icon}
              </div>
              <div className="text-[14px] font-medium text-ink mb-1">{c.title}</div>
              <div className="text-[12.5px] text-ink-muted leading-snug">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Contact ─────────────────────────────────────────────────────────────── */
function ContactSection() {
  return (
    <section id="contact" className="py-20 border-t border-border-lt">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-serif italic text-[42px] leading-snug text-ink mb-4">
            Let&apos;s build something that matters.
          </h2>
          <p className="text-[15px] font-light text-ink-muted leading-[1.75] mb-8">
            Open to consulting, speaking, and collaboration on healthcare AI in Africa. If you&apos;re building
            systems for real patients in low-resource settings — I want to hear about it.
          </p>
          <div className="flex flex-col gap-3">
            <a href="mailto:stellaacharoiro@gmail.com" className="flex items-center gap-2.5 no-underline text-ink-muted text-[14px] hover:text-primary transition-colors">
              <span className="w-8 h-8 rounded-md bg-primary-light flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#993C1D" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              stellaacharoiro@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/stella-achar-oiro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 no-underline text-ink-muted text-[14px] hover:text-primary transition-colors">
              <span className="w-8 h-8 rounded-md bg-primary-light flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#993C1D" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </span>
              linkedin.com/in/stella-achar-oiro
            </a>
            <a href="https://github.com/Stella-Achar-Oiro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 no-underline text-ink-muted text-[14px] hover:text-primary transition-colors">
              <span className="w-8 h-8 rounded-md bg-primary-light flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#993C1D" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
              </span>
              github.com/Stella-Achar-Oiro
            </a>
            <a href="https://dev.to/stellaacharoiro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 no-underline text-ink-muted text-[14px] hover:text-primary transition-colors">
              <span className="w-8 h-8 rounded-md bg-primary-light flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#993C1D" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M9 9l-2 3 2 3M15 9l2 3-2 3"/>
                </svg>
              </span>
              dev.to/stellaacharoiro
            </a>
          </div>
        </div>

        <div className="bg-primary-light border border-primary-mid rounded-[10px] p-6">
          <div className="font-mono text-[10px] tracking-[1.5px] uppercase text-primary-dark mb-3">
            Currently available for
          </div>
          <div className="text-[18px] font-medium text-primary-deep mb-2">
            Healthcare AI consulting &amp; partnerships
          </div>
          <p className="text-[13.5px] text-primary-dark leading-relaxed">
            Advising on responsible AI design for health systems in Africa. Technical collaboration on
            LLM-powered clinical tools. Speaking on AI safety in low-resource healthcare settings.
            <br /><br />
            Based in Nairobi &middot; Working globally &middot; EAT timezone
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <IdentitySection />
      <ProjectsSection />
      <WritingSection />
      <CredentialsSection />
      <ContactSection />
    </>
  )
}
