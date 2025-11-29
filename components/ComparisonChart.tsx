const features = [
  { name: 'Pages of Documentation', starter: '10', professional: '30', enterprise: 'Unlimited' },
  { name: 'Code Sample Languages', starter: '2', professional: '5+', enterprise: 'All' },
  { name: 'Revision Rounds', starter: '1', professional: '3', enterprise: 'Unlimited' },
  { name: 'Delivery Timeline', starter: '2 weeks', professional: '3 weeks', enterprise: 'Custom' },
  { name: 'OpenAPI/Swagger Spec', starter: false, professional: true, enterprise: true },
  { name: 'Information Architecture', starter: false, professional: false, enterprise: true },
  { name: 'Migration Support', starter: false, professional: false, enterprise: true },
  { name: 'Ongoing Maintenance', starter: false, professional: false, enterprise: true },
]

export default function ComparisonChart() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Compare Packages</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what's included in each package
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-soft border border-white/30">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-6 font-bold text-gray-900">Feature</th>
                <th className="text-center p-6 font-bold text-gray-900">Starter</th>
                <th className="text-center p-6 font-bold text-primary bg-primary/5">Professional</th>
                <th className="text-center p-6 font-bold text-gray-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={feature.name} className={idx % 2 === 0 ? 'bg-gray-50/50' : ''}>
                  <td className="p-6 font-medium text-gray-900">{feature.name}</td>
                  <td className="p-6 text-center">
                    {typeof feature.starter === 'boolean' ? (
                      feature.starter ? (
                        <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )
                    ) : (
                      <span className="text-gray-700">{feature.starter}</span>
                    )}
                  </td>
                  <td className="p-6 text-center bg-primary/5">
                    {typeof feature.professional === 'boolean' ? (
                      feature.professional ? (
                        <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )
                    ) : (
                      <span className="text-gray-700 font-medium">{feature.professional}</span>
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )
                    ) : (
                      <span className="text-gray-700">{feature.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
