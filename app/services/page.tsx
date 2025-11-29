import Link from 'next/link'
import PricingTable from '@/components/PricingTable'
import ComparisonChart from '@/components/ComparisonChart'
import FAQ from '@/components/FAQ'

const services = [
  {
    id: 'api',
    title: 'API Documentation',
    description: 'Complete REST API documentation that developers can trust',
    deliverables: ['OpenAPI/Swagger specifications', 'Endpoint reference documentation', 'Authentication & authorization guides', 'Code samples in 5+ languages', 'Error handling documentation', 'Rate limiting & best practices'],
    timeline: '2-4 weeks',
    price: 'From $3,000',
  },
  {
    id: 'developer',
    title: 'Developer Guides',
    description: 'Step-by-step tutorials that get developers building fast',
    deliverables: ['Quickstart guides', 'Integration tutorials', 'SDK documentation', 'Code examples & snippets', 'Troubleshooting guides', 'Migration guides'],
    timeline: '1-3 weeks',
    price: 'From $2,000',
  },
  {
    id: 'saas',
    title: 'SaaS Documentation',
    description: 'User-friendly documentation that reduces support tickets',
    deliverables: ['User guides & tutorials', 'Admin documentation', 'Feature documentation', 'FAQ & troubleshooting', 'Video script writing', 'Knowledge base structure'],
    timeline: '2-4 weeks',
    price: 'From $2,500',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Technical Writing Services</h1>
            <p className="text-xl text-gray-600">Specialized documentation services for developer-focused products and SaaS platforms</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="card">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-4">
                      <div><span className="font-semibold">Timeline:</span> {service.timeline}</div>
                      <div><span className="font-semibold">Investment:</span> {service.price}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">What You Get:</h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <PricingTable />
      <ComparisonChart />
      <FAQ />

      <section className="section-padding bg-gradient-to-r from-primary to-purple-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">Get a free documentation audit and personalized quote for your project.</p>
            <Link href="/contact" className="inline-block bg-white text-primary font-medium px-8 py-4 rounded-lg hover:shadow-strong transition-all duration-200">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
