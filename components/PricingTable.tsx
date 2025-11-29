import Link from 'next/link'

const packages = [
  {
    name: 'Starter',
    price: '$2,000',
    description: 'Perfect for small projects and quick documentation needs',
    features: [
      'Up to 10 pages of documentation',
      'Basic API reference',
      'Code samples in 2 languages',
      '1 round of revisions',
      '2-week delivery',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$4,500',
    description: 'Most popular for growing startups and SaaS products',
    features: [
      'Up to 30 pages of documentation',
      'Complete API documentation',
      'Code samples in 5+ languages',
      'OpenAPI/Swagger spec',
      '3 rounds of revisions',
      '3-week delivery',
      'Priority email & Slack support',
      'Documentation templates',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For comprehensive documentation overhauls',
    features: [
      'Unlimited pages',
      'Full documentation site',
      'Information architecture',
      'Migration from existing docs',
      'Unlimited revisions',
      'Flexible timeline',
      'Dedicated Slack channel',
      'Ongoing maintenance available',
    ],
    cta: 'Contact Us',
    popular: false,
  },
]

export default function PricingTable() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the package that fits your needs. All packages include source files and commercial rights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div key={pkg.name} className="relative">
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <div className={`relative h-full bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border ${pkg.popular ? 'border-primary' : 'border-white/30'}`}>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  {pkg.price !== 'Custom' && <span className="text-gray-600"> / project</span>}
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className={`block text-center font-medium px-6 py-3 rounded-lg transition-all duration-200 ${pkg.popular ? 'bg-primary hover:bg-primary-dark text-white shadow-soft hover:shadow-medium' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
