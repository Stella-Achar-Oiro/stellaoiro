const projects = [
  {
    title: 'PayGate API Documentation',
    client: 'FinTech Startup',
    description: 'Complete REST API documentation for payment gateway platform serving 500+ merchants across East Africa.',
    tags: ['API Documentation', 'OpenAPI', 'Code Samples', 'FinTech'],
    results: ['40% reduction in API-related support tickets', '60% faster developer onboarding', '15+ new integrations in first 3 months'],
  },
  {
    title: 'MedFlow EHR Onboarding Documentation',
    client: 'Healthcare SaaS',
    description: 'User onboarding guides and admin documentation for HIPAA-compliant electronic health records platform.',
    tags: ['User Guides', 'Healthcare', 'HIPAA', 'Knowledge Base'],
    results: ['60% reduction in onboarding time', '45% decrease in support tickets', '90% user satisfaction with documentation'],
  },
  {
    title: 'CloudMed Documentation Overhaul',
    client: 'Cloud Healthcare Platform',
    description: 'Complete restructure and rewrite of documentation site for cloud-based medical imaging platform.',
    tags: ['Information Architecture', 'Migration', 'Developer Docs', 'SEO'],
    results: ['3x increase in documentation engagement', '250% improvement in search success rate', '70% reduction in documentation questions'],
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
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.title} className="card">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{tag}</span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-500 mb-4">{project.client}</p>
                <p className="text-xl text-gray-700 mb-6">{project.description}</p>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-bold mb-4 text-green-700">Results</h3>
                  <div className="space-y-2">
                    {project.results.map((result) => (
                      <div key={result} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="font-semibold text-green-900">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
