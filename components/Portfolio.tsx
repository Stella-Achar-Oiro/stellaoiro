import Link from 'next/link'

const projects = [
  {
    title: 'PayGate API Documentation',
    description: 'Complete REST API documentation with interactive examples and SDKs in 5 languages.',
    tags: ['API Docs', 'OpenAPI', 'Code Samples'],
    result: '40% reduction in support tickets',
  },
  {
    title: 'MedFlow EHR Onboarding',
    description: 'User onboarding guides and admin documentation for healthcare SaaS platform.',
    tags: ['User Guides', 'Healthcare', 'HIPAA'],
    result: '60% faster user onboarding',
  },
  {
    title: 'CloudMed Documentation Overhaul',
    description: 'Restructured and rewrote entire documentation site for cloud healthcare platform.',
    tags: ['Information Architecture', 'Migration', 'SEO'],
    result: '3x increase in doc engagement',
  },
]

export default function Portfolio() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects with measurable results
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="card">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-green-600">{project.result}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-primary">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
