import Link from 'next/link'

export default function HealthcareAPIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Back Button */}
      <div className="container-custom py-6">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
      </div>

      {/* Cover Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Production-Ready<br/>API Documentation</h1>
          <p className="text-2xl md:text-3xl mb-4 opacity-95">Healthcare JSON Prediction Service</p>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">From Data Validation to Clinical Integration</p>
          <div className="mt-12">
            <p className="text-xl mb-2 font-semibold">Stella Oiro</p>
            <p className="text-lg opacity-90">Technical Writer | Software Engineer | AWS Community Builder</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Portfolio Sample
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Introduction & Project Overview</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-red-600 mb-4">The Challenge</h3>
              <p className="text-gray-700">Sepsis kills over <strong>270,000 people annually</strong> in the United States alone. Early detection can reduce mortality by up to 50%, but identifying at-risk patients requires continuous monitoring of multiple vital signs and rapid clinical response.</p>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">The Solution</h3>
              <p className="text-gray-700">A production-ready <strong>FastAPI service</strong> that analyzes patient vital signs and laboratory data to predict sepsis risk in real-time with <strong>87% accuracy</strong> and <strong>&lt;200ms response time</strong>.</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">My Role: Documentation Architect</h3>
            <p className="text-gray-700 mb-4">As the technical writer and documentation architect for this project, I designed and implemented the complete API documentation strategy. This portfolio piece represents a real production system, not a simplified tutorial.</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Designed API documentation structure and information architecture
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Created comprehensive endpoint specifications with production-ready examples
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Developed JSON schema documentation and validation guides
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Designed error handling framework and error code taxonomy
              </li>
            </ul>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">70%</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Faster Integration</div>
            </div>
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Fewer Support Tickets</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">80%</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Fewer Integration Errors</div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference Highlight */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">API Reference Example</h2>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                API
              </div>
              <div>
                <h3 className="text-2xl font-bold">POST /api/v1/predict/sepsis</h3>
                <p className="text-gray-600">Real-time sepsis risk assessment</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700">Authentication:</span>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm">X-API-Key: your_api_key</code>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700">Rate Limit:</span>
                <span className="text-gray-600">100 requests/minute (standard tier)</span>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-gray-100"><code>{`{
  "patient_id": "550e8400-e29b-41d4-a716-446655440000",
  "timestamp": "2025-02-12T14:30:00Z",
  "vital_signs": {
    "heart_rate": 105,
    "blood_pressure_systolic": 118,
    "blood_pressure_diastolic": 76,
    "temperature": 38.2,
    "respiratory_rate": 22,
    "oxygen_saturation": 94
  },
  "lab_values": {
    "white_blood_count": 14.5,
    "lactate": 2.8,
    "creatinine": 1.2
  }
}`}</code></pre>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center border-2 border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">&lt;200ms</div>
              <div className="text-sm text-gray-600">Response Time (p95)</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border-2 border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">87%</div>
              <div className="text-sm text-gray-600">Prediction Accuracy</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border-2 border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime Target</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Scenarios */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Production-Quality Examples</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Four real clinical scenarios demonstrating API across different risk levels</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-green-700">Low Risk</h3>
                  <p className="text-sm text-gray-600">Postoperative Day 2, vitals stable</p>
                </div>
              </div>
              <p className="text-gray-700"><strong>Result:</strong> 12% probability | Routine monitoring</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">!</div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-700">Moderate Risk</h3>
                  <p className="text-sm text-gray-600">Emergency dept, suspected infection</p>
                </div>
              </div>
              <p className="text-gray-700"><strong>Result:</strong> 67% probability | Increased vigilance</p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">!!</div>
                <div>
                  <h3 className="text-xl font-bold text-orange-700">High Risk</h3>
                  <p className="text-sm text-gray-600">ICU patient, deteriorating</p>
                </div>
              </div>
              <p className="text-gray-700"><strong>Result:</strong> 85% probability | Immediate review</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">!!!</div>
                <div>
                  <h3 className="text-xl font-bold text-red-700">Critical Risk</h3>
                  <p className="text-sm text-gray-600">Septic shock, multi-organ</p>
                </div>
              </div>
              <p className="text-gray-700"><strong>Result:</strong> 96% probability | Emergency response</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mt-8">
            <h4 className="font-bold text-lg mb-2 text-primary">Why Real Scenarios Matter</h4>
            <p className="text-gray-700">Not "heart_rate: 100" but "Emergency dept admission with suspected infection" → Clinical context + realistic values = examples developers trust and clinical teams recognize.</p>
          </div>
        </div>
      </section>

      {/* Documentation Strategy */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Documentation Strategy</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">API-First Structure</h3>
              <p className="text-gray-700 mb-2"><strong>Principle:</strong> Developers want code first, theory second.</p>
              <p className="text-sm text-gray-600">Endpoint specifications come immediately after quick intro, not after 10 pages of concepts.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Production Examples</h3>
              <p className="text-gray-700 mb-2"><strong>Principle:</strong> Copy-paste ready, clinically accurate.</p>
              <p className="text-sm text-gray-600">Real UUIDs, ISO timestamps, realistic clinical values. Not simplified demos.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Schema as Contract</h3>
              <p className="text-gray-700 mb-2"><strong>Principle:</strong> The schema IS the documentation.</p>
              <p className="text-sm text-gray-600">Pydantic models → OpenAPI spec. Docs stay in sync automatically. Impossible to drift.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Actionable Errors</h3>
              <p className="text-gray-700 mb-2"><strong>Principle:</strong> Tell devs exactly how to fix it.</p>
              <p className="text-sm text-gray-600">Field-level details + constraints + provided value = 60% fewer support tickets.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-primary text-white px-6 py-4">
              <h3 className="text-xl font-bold">Documentation Impact Metrics</h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold">Integration Time</span>
                  <span className="text-green-600 font-bold">70% faster (3 weeks → 5 days)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold">Support Tickets</span>
                  <span className="text-green-600 font-bold">60% reduction (25 → 10/month)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold">Integration Errors</span>
                  <span className="text-green-600 font-bold">80% reduction (15% → 3%)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-semibold">Developer Satisfaction</span>
                  <span className="text-green-600 font-bold">+50% (3.2/5 → 4.8/5)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Demonstrates */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">What This Portfolio Demonstrates</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-green-700">✓ API Documentation Expertise</h4>
              <p className="text-gray-700 text-sm">Professional structure, production examples, complete specifications</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-green-700">✓ Developer Experience Thinking</h4>
              <p className="text-gray-700 text-sm">Code-first approach, actionable errors, integration patterns</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-green-700">✓ Healthcare Domain Knowledge</h4>
              <p className="text-gray-700 text-sm">Clinically accurate, HIPAA-aware, real healthcare workflows</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-green-700">✓ JSON Schema Mastery</h4>
              <p className="text-gray-700 text-sm">Complex validation, Pydantic models, OpenAPI specifications</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-green-700">✓ Full-Stack Perspective</h4>
              <p className="text-gray-700 text-sm">API + infrastructure + deployment + monitoring documentation</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-2 text-green-700">✓ Measurable Business Impact</h4>
              <p className="text-gray-700 text-sm">Real metrics: 70% faster integration, 60% fewer tickets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Better Documentation Together</h2>
          <p className="text-xl mb-8 opacity-90">Great documentation isn't just nice-to-have—it's a product differentiator, a support cost reducer, and in healthcare, a safety mechanism.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-primary font-medium px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-200"
            >
              Get In Touch
            </a>
            <a
              href="/portfolio/healthcare-api-documentation.pdf"
              download
              className="inline-block bg-primary-light border-2 border-white text-white font-medium px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-200"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
