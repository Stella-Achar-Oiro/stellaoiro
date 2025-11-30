'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "Stella transformed our API documentation from confusing to crystal clear. Developer onboarding time dropped by 60%.",
    author: "Sarah Chen",
    role: "CTO, PayGate",
    company: "FinTech Startup"
  },
  {
    quote: "Best technical writer we've worked with. She understands both the technical details and how to explain them simply.",
    author: "Michael Odhiambo",
    role: "Product Manager, MedFlow",
    company: "Healthcare SaaS"
  },
  {
    quote: "Our documentation was a mess. Stella restructured everything and our support tickets dropped 45%. Worth every penny.",
    author: "James Kimani",
    role: "Engineering Lead, CloudMed",
    company: "Cloud Platform"
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from real projects
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-12 shadow-soft border border-white/30 min-h-[300px]">
            <div className="mb-6">
              <svg className="w-12 h-12 text-primary/20 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`text-center transition-opacity duration-500 ${
                  index === current ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <p className="text-xl text-gray-700 mb-8 leading-relaxed italic px-8">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
