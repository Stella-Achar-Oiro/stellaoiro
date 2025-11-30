const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'Free 30-minute consultation to understand your documentation needs and goals.',
    duration: '30 min',
  },
  {
    number: '02',
    title: 'Audit & Proposal',
    description: 'I review your existing docs and provide a detailed proposal with timeline and pricing.',
    duration: '2-3 days',
  },
  {
    number: '03',
    title: 'Documentation',
    description: 'I create your documentation with regular check-ins and draft reviews.',
    duration: '2-4 weeks',
  },
  {
    number: '04',
    title: 'Review & Launch',
    description: 'Final revisions, your approval, and deployment to your platform.',
    duration: '3-5 days',
  },
]

export default function ProcessSteps() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, transparent process from first call to launch
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
          
          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-white/30">
                <div className="absolute -top-4 left-6 w-12 h-12 bg-gradient-to-br from-primary to-#E8956F rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {idx + 1}
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {step.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
