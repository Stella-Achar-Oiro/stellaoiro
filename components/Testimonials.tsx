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

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from real projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-xl blur-2xl"></div>
              <div className="relative bg-white/70 backdrop-blur-md rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-white/30">
              <div className="mb-6">
                <svg className="w-10 h-10 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">{testimonial.quote}</p>
              <div>
                <div className="font-bold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-primary">{testimonial.company}</div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
