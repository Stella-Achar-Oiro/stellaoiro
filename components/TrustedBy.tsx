export default function TrustedBy() {
  const companies = ['PayGate', 'MedFlow', 'CloudMed', 'HealthTech', 'DataSync', 'APIHub']
  
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="container-custom">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider">Trusted by startups and scale-ups</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company) => (
            <div key={company} className="text-2xl font-bold text-gray-300 hover:text-gray-600 transition-colors">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
