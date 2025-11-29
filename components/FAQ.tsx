'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Most projects take 2-4 weeks from kickoff to delivery. Timeline depends on scope, complexity, and how quickly you can provide feedback on drafts.',
  },
  {
    question: 'Do you offer ongoing documentation maintenance?',
    answer: 'Yes! After the initial project, I offer monthly retainer packages for ongoing updates, new feature documentation, and content maintenance.',
  },
  {
    question: 'What if I need revisions after delivery?',
    answer: 'All packages include revision rounds (1-3 depending on package). Additional revisions after project completion are billed at $150/hour.',
  },
  {
    question: 'Can you work with our existing documentation tools?',
    answer: 'Absolutely. I work with all major documentation platforms: GitBook, ReadMe, Docusaurus, MkDocs, Confluence, Notion, and custom solutions.',
  },
  {
    question: 'Do you sign NDAs?',
    answer: 'Yes, I regularly sign NDAs and confidentiality agreements. Your code, product details, and business information are always kept confidential.',
  },
  {
    question: 'What information do you need to get started?',
    answer: 'I need access to your product (staging environment), existing documentation (if any), API specs, and a technical contact who can answer questions.',
  },
  {
    question: 'Do you write code or just documentation?',
    answer: 'I write and test code examples to ensure accuracy. I can also review your SDK code and suggest improvements for better developer experience.',
  },
  {
    question: 'What payment terms do you offer?',
    answer: '50% upfront to start the project, 50% upon delivery. For enterprise projects over $10k, we can arrange milestone-based payments.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working together
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-soft border border-white/30 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-primary transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
