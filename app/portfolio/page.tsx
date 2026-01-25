import MetricsCard from '@/components/MetricsCard'
import Link from 'next/link'

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

interface Sample {
  title: string
  description: string
  tags: string[]
  features: string[]
  link: string
  type: string
}

const projects: Project[] = [
  {
    title: 'Healthcare AI Platform API Documentation',
    client: 'Medical Technology Company',
    description: 'Comprehensive API documentation for medical transcription system serving healthcare providers across East Africa.',
    tags: ['API Documentation', 'Healthcare', 'HIPAA', 'Python'],
    challenge: 'Medical transcription platform had complex authentication flows and HIPAA compliance requirements. Developers struggled with integration, leading to 3-week average onboarding time and frequent security questions.',
    solution: 'Built complete API documentation with code samples in Python, JavaScript, and cURL. Created authentication flow diagrams, error handling guides, HIPAA compliance checklists, and real-world integration examples.',
    metrics: [
      { label: 'Onboarding Time', value: '5 days', change: 'from 3 weeks' },
      { label: 'Security Incidents', value: '0', change: 'in first year' },
      { label: 'Integration Success', value: '95%', change: 'first-time success' },
      { label: 'Developer Satisfaction', value: '4.9/5', change: 'from 2.8/5' },
    ],
    testimonial: {
      quote: 'Finally, documentation written by someone who actually understands both the code and healthcare compliance. Our developer onboarding went from weeks to days.',
      author: 'Engineering Lead',
      role: 'Healthcare AI Platform',
    },
  },
  {
    title: 'Cloud Infrastructure Documentation',
    client: 'HealthTech SaaS Platform',
    description: 'Architecture documentation and deployment guides for AWS-based healthcare technology infrastructure with containerized microservices.',
    tags: ['Cloud Architecture', 'AWS', 'Kubernetes', 'DevOps'],
    challenge: 'Healthcare platform running on AWS lacked infrastructure documentation. Deployment required manual intervention taking 4+ hours, causing frequent configuration drift and compliance audit challenges.',
    solution: 'Created comprehensive infrastructure documentation including architecture diagrams, Terraform configurations, deployment runbooks, disaster recovery procedures, and CI/CD pipeline documentation with GitHub Actions.',
    metrics: [
      { label: 'Deployment Time', value: '45 min', change: 'from 4 hours' },
      { label: 'Configuration Drift', value: '0%', change: '100% reproducible' },
      { label: 'Audit Preparation', value: '70%', change: '70% faster' },
      { label: 'Team Onboarding', value: '2 days', change: 'from 2 weeks' },
    ],
    testimonial: {
      quote: 'She documented our AWS infrastructure so well that our compliance audit became straightforward. The deployment runbooks saved us countless hours.',
      author: 'DevOps Manager',
      role: 'Cloud Healthcare Platform',
    },
  },
  {
    title: 'Social Impact Platform Technical Guides',
    client: 'Blockchain for Social Good',
    description: 'Developer documentation for blockchain-based gender-based violence prevention platform connecting survivors with support services.',
    tags: ['Blockchain', 'Social Impact', 'Developer Guides', 'API'],
    challenge: 'Platform connecting GBV survivors with support services needed technical documentation for NGO partners integrating the system. Non-technical stakeholders struggled to understand capabilities and integration requirements.',
    solution: 'Developed dual-audience documentation: technical API guides for developers and simplified system overviews for program managers. Created integration tutorials with step-by-step walkthroughs and smart contract documentation.',
    metrics: [
      { label: 'Survivors Served', value: '847', change: 'real impact' },
      { label: 'NGO Integrations', value: '5', change: 'in 6 months' },
      { label: 'Integration Time', value: '3 weeks', change: 'from 3 months' },
      { label: 'Non-Tech Understanding', value: '90%', change: 'comprehension rate' },
    ],
    testimonial: {
      quote: 'The documentation made it possible for our program managers to understand the system while giving our developers everything they needed to integrate quickly.',
      author: 'Technical Director',
      role: 'Social Impact Platform',
    },
  },
]

const samples: Sample[] = [
  {
    title: 'EventHub API Documentation',
    description: 'Complete RESTful API documentation sample for an event management platform, showcasing developer-focused technical writing.',
    tags: ['API Reference', 'REST', 'Authentication', 'Error Handling'],
    features: [
      '8 comprehensive pages covering all API aspects',
      '12+ working code examples with syntax highlighting',
      'Visual architecture diagrams and flow charts',
      'Detailed authentication and security best practices',
      'Complete error handling reference',
      'Rate limiting and pagination documentation',
    ],
    link: '/portfolio/samples/api-documentation',
    type: 'API Documentation',
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl blur-lg"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-sm hover:shadow-sm transition-all duration-300 border border-white/30">
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

      {/* Documentation Samples Section */}
      <section className="section-padding bg-white border-t-4 border-primary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Portfolio Samples
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Documentation Samples</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional writing samples demonstrating expertise in API documentation, developer guides, and technical content
            </p>
          </div>

          <div className="space-y-8">
            {samples.map((sample) => (
              <div key={sample.title} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-primary/5 rounded-xl blur-lg"></div>
                <div className="relative bg-white border-2 border-primary/20 rounded-xl p-8 md:p-10 shadow-sm hover:shadow-sm transition-all duration-300">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                      {sample.type}
                    </span>
                    {sample.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold mb-3">{sample.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">{sample.description}</p>

                  <div className="mb-8">
                    <h4 className="font-bold text-lg mb-4 text-primary">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {sample.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={sample.link}
                      className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Full Sample
                    </Link>
                    <a
                      href="#download"
                      className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary font-medium px-6 py-3 rounded-lg hover:bg-primary/5 transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF
                    </a>
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
            <div className="text-gray-400 text-center">
              <p className="text-sm mb-2">Client logos displayed with permission</p>
              <p className="text-xs">Healthcare AI • Cloud Platforms • Social Impact • FinTech</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-primary-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Want Results Like These?</h2>
            <p className="text-xl mb-8 opacity-90">Let's discuss how I can help improve your documentation and reduce support tickets.</p>
            <a href="/contact" className="inline-block bg-white text-primary font-medium px-8 py-4 rounded-lg hover:shadow-md transition-all duration-200">
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
