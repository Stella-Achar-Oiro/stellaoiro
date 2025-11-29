'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Stella Oiro
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent border-b md:border-0 border-gray-100`}>
            <div className="flex flex-col md:flex-row md:items-center gap-8 p-6 md:p-0">
              <Link href="/services" className="text-gray-700 hover:text-primary transition-colors">Services</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-primary transition-colors">Portfolio</Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
