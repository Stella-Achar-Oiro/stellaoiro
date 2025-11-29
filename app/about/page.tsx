import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600">Technical writer with a developer background who creates documentation that actually gets used</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Hi, I'm Stella Oiro</h2>
          
          <p className="text-xl text-gray-700 mb-8">I'm a technical writer who understands code because I've written it. I create API documentation, developer guides, and technical content that turns confused users into confident builders.</p>

          <h3 className="text-2xl font-bold mb-4 mt-12">Technical Skills</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {['API Documentation', 'OpenAPI/Swagger', 'Markdown', 'Git/GitHub', 'Python', 'JavaScript', 'REST APIs', 'AWS', 'Docker', 'Kubernetes', 'HIPAA Compliance', 'Technical SEO'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">{skill}</span>
            ))}
          </div>

          <div className="card bg-gradient-to-r from-primary/5 to-purple-50 mt-12">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-gray-700 mb-6">Ready to create documentation that developers actually use? Let's talk about your project.</p>
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
