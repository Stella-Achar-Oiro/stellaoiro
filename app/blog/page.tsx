export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-600">
              Technical writing tips, documentation best practices, and career insights
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center text-gray-600">
            <p>Blog posts coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  )
}
