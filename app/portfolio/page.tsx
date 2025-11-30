import MetricsCard from '@/components/MetricsCard'

interface Project {
  title: string
  client: string
  description: string
  tags: string[]
  challenge: string
  solution: string
  metrics: { label: string; value: string; change: string }[]
  testimonial: { quote: string; author: string; role: string }
}

const projects: Project[] = [
  {
    title: 'PayGate API Documentation',
    client: 'FinTech Startup',
    description: 'Complete REST API documentation for payment gateway platform serving 500+ merchants across East Africa.',
    tags: ['API Documentation', 'OpenAPI', 'Code Samples', 'FinTech'],
    challenge: 'PayGate had incomplete API docs causing 50+ weekly support tickets. Developers struggled with authentication and webhook implementation, leading to slow integration times.',
    solution: 'Created comprehensive OpenAPI 3.0 spec, detailed endpoint references, code samples in 5 languages, and interactive API explorer.',
    metrics: [
      { label: 'Support Tickets', value: '40%', change: '40% reduction' },
      { label: 'Onboarding Time', value: '60%', change: '60% faster' },
      { label: 'New Integrations', value: '15+', change: 'in 3 months' },
      { label: 'Developer Satisfaction', value: '4.8/5', change: 'from 2.1/5' },
    ],
    testimonial: {
      quote: 'Stella transformed our API documentation from confusing to crystal clear. Developer onboarding time dropped by 60%.',
      author: 'Sarah Chen',
      role: 'CTO, PayGate',
    },
  },
  {
    title: 'MedFlow EHR Onboarding Documentation',
    client: 'Healthcare SaaS',
    description: 'User onboarding guides and admin documentation for HIPAA-compliant electronic health records platform.',
    tags: ['User Guides', 'Healthcare', 'HIPAA', 'Knowledge Base'],
    challenge: 'Complex healthcare workflows confused new users. Average onboarding took 6 weeks with heavy support involvement, limiting growth.',
    solution: 'Created role-based documentation for doctors, nurses, and admins. Built searchable knowledge base with 100+ articles and video tutorial scripts.',
    metrics: [
      { label: 'Onboarding Time', value: '2.5 weeks', change: 'from 6 weeks' },
      { label: 'Support Tickets', value: '45%', change: '45% reduction' },
      { label: 'User Satisfaction', value: '90%', change: 'with documentation' },
      { label: 'Self-Service Rate', value: '80%', change: 'of common tasks' },
    ],
    testimonial: {
      quote: 'Best technical writer we\'ve worked with. She understands both the technical details and how to explain them simply.',
      author: 'Michael Odhiambo',
      role: 'Product Manager, MedFlow',
    },
  },
  {
    title: 'CloudMed Documentation Overhaul',
    client: 'Cloud Healthcare Platform',
    description: 'Complete restructure and rewrite of documentation site for cloud-based medical imaging platform.',
    tags: ['Information Architecture', 'Migration', 'Developer Docs', 'SEO'],
    challenge: 'Documentation scattered across multiple sites, poorly organized, low engagement. Developers couldn\'t find what they needed.',
    solution: 'Conducted content audit and user research. Redesigned information architecture, migrated 200+ pages, implemented docs-as-code workflow.',
    metrics: [
      { label: 'Documentation Engagement', value: '3x', change: '3x increase' },
      { label: 'Search Success Rate', value: '250%', change: '250% improvement' },
      { label: 'Support Questions', value: '70%', change: '70% reduction' },
      { label: 'Organic Traffic', value: '180%', change: 'SEO improvement' },
    ],
    testimonial: {
      quote: 'Our documentation was a mess. Stella restructured everything and our support tickets dropped 45%. Worth every penny.',
      author: 'James Kimani',
      role: 'Engineering Lead, CloudMed',
    },
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
            <p className="text-xl text-gray-600">Real projects with measurable results for startups and scale-ups</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {projects.map((project) => (
              <div key={project.title} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-xl blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-soft hover:shadow-medium transition-all duration-300 border border-white/30">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{tag}</span>
                    ))}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-500 mb-6">{project.client}</p>
                  <p className="text-xl text-gray-700 mb-12">{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-red-600 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        The Challenge
                      </h3>
                      <p className="text-gray-700">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        The Solution
                      </h3>
                      <p className="text-gray-700">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-xl font-bold mb-6 text-green-700 flex items-center gap-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Results & Impact
                    </h3>
                    <MetricsCard metrics={project.metrics} />
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-l-4 border-primary">
                    <div className="flex items-start gap-4">
                      <svg className="w-10 h-10 text-primary/30 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <div>
                        <p className="text-lg text-gray-700 mb-4 italic">{project.testimonial.quote}</p>
                        <div>
                          <div className="font-bold text-gray-900">{project.testimonial.author}</div>
                          <div className="text-sm text-gray-600">{project.testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted By</h2>
            <p className="text-xl text-gray-600">Startups and scale-ups across Africa and beyond</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['PayGate', 'MedFlow', 'CloudMed', 'HealthTech', 'DataSync', 'APIHub'].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-300 hover:text-gray-600 transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-#E8956F">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Want Results Like These?</h2>
            <p className="text-xl mb-8 opacity-90">Let's discuss how I can help improve your documentation and reduce support tickets.</p>
            <a href="/contact" className="inline-block bg-white text-primary font-medium px-8 py-4 rounded-lg hover:shadow-strong transition-all duration-200">
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
