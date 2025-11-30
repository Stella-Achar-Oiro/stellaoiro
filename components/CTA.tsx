import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-#E8956F">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Improve Your Documentation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free documentation audit and personalized recommendations for your project.
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary font-medium px-8 py-4 rounded-lg hover:shadow-strong transition-all duration-200">
            Get Free Audit
          </Link>
        </div>
      </div>
    </section>
  )
}
