'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[rgba(255,255,248,0.94)] backdrop-blur-[12px] border-b border-border-lt">
      <nav className="max-w-6xl mx-auto px-8 h-[60px] flex items-center justify-between">
        <Link href="/" className="font-serif italic text-[20px] text-ink no-underline">
          Stella Oiro
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center gap-8 list-none absolute md:relative top-full left-0 w-full md:w-auto bg-[#FFFFF8] md:bg-transparent border-b md:border-0 border-border-lt p-6 md:p-0`}>
          <li><a href="#projects" className="font-sans text-[13px] text-ink-muted no-underline hover:text-primary transition-colors">Projects</a></li>
          <li><a href="#writing" className="font-sans text-[13px] text-ink-muted no-underline hover:text-primary transition-colors">Writing</a></li>
          <li><Link href="/about" className="font-sans text-[13px] text-ink-muted no-underline hover:text-primary transition-colors">About</Link></li>
          <li><Link href="/portfolio" className="font-sans text-[13px] text-ink-muted no-underline hover:text-primary transition-colors">Portfolio</Link></li>
          <li>
            <Link
              href="/contact"
              className="font-mono text-[12px] px-4 py-[7px] border border-primary rounded text-primary-dark no-underline hover:bg-primary hover:text-white transition-all duration-200"
            >
              Get in touch
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
