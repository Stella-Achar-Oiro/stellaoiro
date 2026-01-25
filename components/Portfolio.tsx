import Link from 'next/link'

const projects = [
  {
    title: 'Healthcare AI Platform API Documentation',
    description: 'Comprehensive API documentation for medical transcription system. Created authentication flows, endpoint references, and HIPAA compliance guides with code samples in Python, JavaScript, and cURL.',
    tags: ['API Documentation', 'Healthcare', 'HIPAA', 'Python'],
    result: 'Reduced developer onboarding from 3 weeks to 5 days',
    technologies: 'Python, REST APIs, AWS Lambda, OpenAPI/Swagger',
  },
  {
    title: 'Cloud Infrastructure Documentation',
    description: 'Architecture documentation and deployment guides for AWS-based healthcare platform. Documented containerized microservices, CI/CD pipelines, and disaster recovery procedures.',
    tags: ['Cloud Architecture', 'AWS', 'DevOps', 'Kubernetes'],
    result: 'Deployment time reduced from 4 hours to 45 minutes',
    technologies: 'AWS (EC2, ECS, Lambda), Docker, Kubernetes, Terraform',
  },
  {
    title: 'Social Impact Platform Technical Guides',
    description: 'Developer documentation for blockchain-based GBV prevention platform. Created smart contract docs, API integration guides, and system overviews for NGO partners.',
    tags: ['Blockchain', 'Social Impact', 'Developer Guides'],
    result: 'Platform served 847 survivors across 5 NGO partners',
    technologies: 'Blockchain, Smart Contracts, REST APIs, Python',
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
            <div key={project.title} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl blur-lg"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-sm transition-all duration-300 border border-white/30">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Technologies</p>
                <p className="text-sm text-gray-700">{project.technologies}</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-green-600">{project.result}</p>
              </div>
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
