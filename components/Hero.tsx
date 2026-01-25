'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import AnimatedCounter from './AnimatedCounter'

const codeExamples = [
  { lang: 'Python', code: `import requests\n\nresponse = requests.get(\n  'https://api.example.com/v1/users',\n  headers={'Authorization': 'Bearer TOKEN'}\n)\nprint(response.json())` },
  { lang: 'JavaScript', code: `fetch('https://api.example.com/v1/users', {\n  headers: {\n    'Authorization': 'Bearer TOKEN'\n  }\n})\n.then(res => res.json())\n.then(data => console.log(data))` },
  { lang: 'cURL', code: `curl -X GET \\\n  'https://api.example.com/v1/users' \\\n  -H 'Authorization: Bearer TOKEN'` },
]

export default function Hero() {
  const [activeCode, setActiveCode] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCode((prev) => (prev + 1) % codeExamples.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              AWS Community Builder | Healthcare Cloud Developer
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-primary-light bg-clip-text text-transparent">
              I Help Healthcare Companies Ship Better Documentation—Faster
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Software developer specializing in healthcare technology documentation. I write from a developer's perspective—because I am one. Python, Go, TypeScript. 25,000+ words published.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="btn-secondary text-lg">
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl shadow-md p-6 border border-white/20">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg"></div>
              </div>
              <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
                {codeExamples.map((example, idx) => (
                  <button
                    key={example.lang}
                    onClick={() => setActiveCode(idx)}
                    className={`px-3 py-1 text-sm rounded-lg transition-all ${
                      activeCode === idx 
                        ? 'bg-primary text-white shadow-lg' 
                        : 'bg-white/5 text-gray-700 hover:bg-white/5 backdrop-blur-sm'
                    }`}
                  >
                    {example.lang}
                  </button>
                ))}
              </div>
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-4">
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{codeExamples[activeCode].code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              25K+
            </div>
            <div className="text-gray-600">Words Published</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              13+
            </div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              100%
            </div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              24h
            </div>
            <div className="text-gray-600">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}
