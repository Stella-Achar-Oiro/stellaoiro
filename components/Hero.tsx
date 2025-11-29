'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

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
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Technical Writer & Documentation Specialist
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-purple-600 bg-clip-text text-transparent">
              Documentation That Developers Actually Use
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              I create clear, accurate API docs, developer guides, and technical content that turns confused users into confident builders.
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-strong p-6 border border-white/20">
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
                        : 'bg-white/5 text-gray-700 hover:bg-white/10 backdrop-blur-sm'
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
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-gray-600">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}
