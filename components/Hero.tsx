import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Technical Writer & Documentation Specialist
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-purple-600 bg-clip-text text-transparent">
            Documentation That Developers Actually Use
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            I create clear, accurate API docs, developer guides, and technical content that turns confused users into confident builders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="btn-secondary text-lg">
              View Portfolio
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
