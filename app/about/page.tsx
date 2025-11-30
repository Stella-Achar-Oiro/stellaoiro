import Link from 'next/link'

const timeline = [
  { year: '2018', title: 'Clinical Officer', description: 'Started career in healthcare in Kenya, treating patients and managing medical records.' },
  { year: '2020', title: 'Discovered Tech', description: 'Taught myself Python and cloud computing during COVID-19 lockdown.' },
  { year: '2021', title: 'Cloud Engineer', description: 'Transitioned to cloud engineering, working on healthcare infrastructure projects.' },
  { year: '2022', title: 'AWS Community Builder', description: 'Recognized by AWS for contributions to cloud community and technical content.' },
  { year: '2023', title: 'Technical Writer', description: 'Combined healthcare, cloud, and writing skills into full-time technical writing.' },
  { year: '2024', title: 'Documentation Specialist', description: 'Helping 50+ startups create developer-friendly documentation.' },
]

const certifications = [
  {
    name: 'AWS Community Builder',
    issuer: 'Amazon Web Services',
    year: '2022',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    name: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    year: '2021',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: 'Kubernetes Certified (KCNA)',
    issuer: 'Cloud Native Computing Foundation',
    year: '2023',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600">From healthcare to tech, creating documentation that developers actually use</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-soft border border-white/30">
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  I started my career as a clinical officer in Kenya, treating patients and managing medical records. During the COVID-19 lockdown in 2020, I taught myself Python and cloud computing, fascinated by how technology could improve healthcare.
                </p>
                
                <p>
                  By 2021, I had transitioned into cloud engineering, working on healthcare infrastructure projects. I quickly realized that the biggest barrier to adoption wasn't the technology—it was the documentation. Complex systems with poor docs meant frustrated developers and slow implementations.
                </p>
                
                <p>
                  That's when I discovered my passion for technical writing. I combined my healthcare background, cloud engineering skills, and love for clear communication to help startups create documentation that developers actually use.
                </p>
                
                <p>
                  Today, I specialize in API documentation, developer guides, and SaaS documentation. I've helped 50+ companies reduce support tickets by 40-60% and speed up developer onboarding by creating clear, accurate, and comprehensive documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h2>
            <p className="text-xl text-gray-600">From clinical officer to technical writer</p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
            
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={item.year} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-white/30">
                      <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-#E8956F rounded-full items-center justify-center text-white font-bold shadow-lg z-10">
                    {idx + 1}
                  </div>
                  
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-gray-600">Recognized expertise in cloud and technical writing</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.name} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-white/30 text-center">
                  <div className="text-primary mb-4 flex justify-center">{cert.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-primary font-semibold">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-white/30">
              <h3 className="font-bold mb-4 text-primary">Documentation Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Markdown', 'Git/GitHub', 'OpenAPI', 'Swagger', 'Docusaurus', 'GitBook'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-white/30">
              <h3 className="font-bold mb-4 text-primary">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'TypeScript', 'REST APIs', 'GraphQL', 'SQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-white/30">
              <h3 className="font-bold mb-4 text-primary">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-#E8956F">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl mb-8 opacity-90">Ready to create documentation that developers actually use? Let's talk about your project.</p>
            <Link href="/contact" className="inline-block bg-white text-primary font-medium px-8 py-4 rounded-lg hover:shadow-strong transition-all duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
