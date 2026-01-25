import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'API Documentation Sample | Stella Oiro Portfolio',
  description: 'Sample API documentation demonstrating technical writing expertise in developer documentation',
}

export default function APIDocumentationSample() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom max-w-5xl">
          <Breadcrumbs items={[
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'API Documentation Sample' }
          ]} />

          <div className="mt-8">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Portfolio Sample
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              EventHub API Documentation
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Sample RESTful API documentation for event management platform
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white rounded-full text-sm border border-gray-200">
                API Documentation
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm border border-gray-200">
                RESTful API
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm border border-gray-200">
                Developer Guides
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm border border-gray-200">
                Code Examples
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">8</div>
              <div className="text-sm text-gray-600">Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-gray-600">Code Examples</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-gray-600">API Endpoints</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-gray-600">Developer-Focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Architecture Diagram */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center">API Architecture Overview</h2>

          {/* Visual Flow Diagram */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Client Application */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white mb-4">
                  <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <h3 className="font-bold text-lg">Client Application</h3>
                  <p className="text-sm opacity-90 mt-2">Web or Mobile App</p>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• HTTP/HTTPS Requests</div>
                  <div>• JSON Payloads</div>
                  <div>• API Key Auth</div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <svg className="w-24 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 100 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h80m0 0l-8-8m8 8l-8 8" />
                </svg>
              </div>

              {/* EventHub API */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary to-purple-600 rounded-lg p-6 text-white mb-4">
                  <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  <h3 className="font-bold text-lg">EventHub API</h3>
                  <p className="text-sm opacity-90 mt-2">RESTful Backend</p>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Event Management</div>
                  <div>• Registration Processing</div>
                  <div>• Data Analytics</div>
                </div>
              </div>
            </div>

            {/* Response Flow */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="font-mono text-xs text-green-700 font-bold mb-1">200 OK</div>
                    <div className="text-xs text-gray-600">Success Response</div>
                  </div>
                </div>
                <div>
                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <div className="font-mono text-xs text-yellow-700 font-bold mb-1">401 Unauthorized</div>
                    <div className="text-xs text-gray-600">Auth Error</div>
                  </div>
                </div>
                <div>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="font-mono text-xs text-red-700 font-bold mb-1">429 Rate Limited</div>
                    <div className="text-xs text-gray-600">Too Many Requests</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Flow */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Authentication Flow</h2>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Obtain API Key</h3>
                  <p className="text-gray-600 mb-3">Generate your API key from the EventHub dashboard under Settings → API Keys</p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 font-mono text-sm">
                    <span className="text-gray-400">API Key:</span> <span className="text-primary">eh_live_sk_abc123xyz789</span>
                  </div>
                </div>
              </div>

              <div className="ml-5 border-l-2 border-gray-300 h-8"></div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Include in Request Headers</h3>
                  <p className="text-gray-600 mb-3">Add the Authorization header with Bearer token to every API request</p>
                  <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <div><span className="text-blue-400">Authorization:</span> Bearer YOUR_API_KEY</div>
                    <div><span className="text-blue-400">Content-Type:</span> application/json</div>
                  </div>
                </div>
              </div>

              <div className="ml-5 border-l-2 border-gray-300 h-8"></div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">API Validates & Responds</h3>
                  <p className="text-gray-600">The API validates your key and processes your request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Showcase */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Example: Create Event</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Request */}
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Request
              </h3>
              <div className="bg-gray-900 text-gray-300 rounded-lg p-4 font-mono text-xs overflow-x-auto h-96">
                <div className="mb-3">
                  <span className="text-green-400">POST</span> <span className="text-yellow-400">/v2/events</span>
                </div>
                <div className="text-gray-500 mb-2">{'{'}</div>
                <div className="ml-4">
                  <div><span className="text-blue-400">"name"</span>: <span className="text-purple-400">"Cloud Workshop"</span>,</div>
                  <div><span className="text-blue-400">"description"</span>: <span className="text-purple-400">"Learn cloud architecture"</span>,</div>
                  <div><span className="text-blue-400">"start_time"</span>: <span className="text-purple-400">"2025-02-15T10:00:00Z"</span>,</div>
                  <div><span className="text-blue-400">"end_time"</span>: <span className="text-purple-400">"2025-02-15T17:00:00Z"</span>,</div>
                  <div><span className="text-blue-400">"location"</span>: {'{'}</div>
                  <div className="ml-4">
                    <div><span className="text-blue-400">"venue"</span>: <span className="text-purple-400">"TechHub"</span>,</div>
                    <div><span className="text-blue-400">"city"</span>: <span className="text-purple-400">"Nairobi"</span>,</div>
                    <div><span className="text-blue-400">"country"</span>: <span className="text-purple-400">"KE"</span></div>
                  </div>
                  <div>{'}'}, </div>
                  <div><span className="text-blue-400">"capacity"</span>: <span className="text-purple-400">150</span>,</div>
                  <div><span className="text-blue-400">"is_public"</span>: <span className="text-purple-400">true</span></div>
                </div>
                <div className="text-gray-500">{'}'}</div>
              </div>
            </div>

            {/* Response */}
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Response <span className="text-sm font-normal text-green-600">(200 OK)</span>
              </h3>
              <div className="bg-gray-900 text-gray-300 rounded-lg p-4 font-mono text-xs overflow-x-auto h-96">
                <div className="text-gray-500 mb-2">{'{'}</div>
                <div className="ml-4">
                  <div><span className="text-blue-400">"success"</span>: <span className="text-purple-400">true</span>,</div>
                  <div><span className="text-blue-400">"data"</span>: {'{'}</div>
                  <div className="ml-4">
                    <div><span className="text-blue-400">"event_id"</span>: <span className="text-purple-400">"evt_2nQX8yHj9mKL3pR5"</span>,</div>
                    <div><span className="text-blue-400">"name"</span>: <span className="text-purple-400">"Cloud Workshop"</span>,</div>
                    <div><span className="text-blue-400">"status"</span>: <span className="text-purple-400">"draft"</span>,</div>
                    <div><span className="text-blue-400">"capacity"</span>: <span className="text-purple-400">150</span>,</div>
                    <div><span className="text-blue-400">"registered_count"</span>: <span className="text-purple-400">0</span>,</div>
                    <div><span className="text-blue-400">"url"</span>: <span className="text-purple-400">"https://eventhub.example.com/events/evt_2nQX8yHj9mKL3pR5"</span>,</div>
                    <div><span className="text-blue-400">"created_at"</span>: <span className="text-purple-400">"2025-01-15T08:30:00Z"</span></div>
                  </div>
                  <div>{'}'}</div>
                </div>
                <div className="text-gray-500">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Handling Visual */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Error Response Structure</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {/* 400 Error */}
            <div className="border-2 border-orange-200 rounded-lg p-6 bg-orange-50">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-lg font-bold text-orange-700">400</span>
                <span className="text-sm text-purple-600">Bad Request</span>
              </div>
              <div className="bg-white rounded p-3 font-mono text-xs">
                <div className="text-gray-500">{'{'}</div>
                <div className="ml-2">
                  <div><span className="text-blue-500">"error"</span>: <span className="text-purple-600">"invalid_parameter"</span></div>
                </div>
                <div className="text-gray-500">{'}'}</div>
              </div>
              <p className="text-xs text-gray-600 mt-3">Invalid request parameters</p>
            </div>

            {/* 401 Error */}
            <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-lg font-bold text-red-700">401</span>
                <span className="text-sm text-red-600">Unauthorized</span>
              </div>
              <div className="bg-white rounded p-3 font-mono text-xs">
                <div className="text-gray-500">{'{'}</div>
                <div className="ml-2">
                  <div><span className="text-blue-500">"error"</span>: <span className="text-red-600">"invalid_api_key"</span></div>
                </div>
                <div className="text-gray-500">{'}'}</div>
              </div>
              <p className="text-xs text-gray-600 mt-3">Missing or invalid API key</p>
            </div>

            {/* 429 Error */}
            <div className="border-2 border-yellow-200 rounded-lg p-6 bg-yellow-50">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-lg font-bold text-yellow-700">429</span>
                <span className="text-sm text-yellow-600">Rate Limited</span>
              </div>
              <div className="bg-white rounded p-3 font-mono text-xs">
                <div className="text-gray-500">{'{'}</div>
                <div className="ml-2">
                  <div><span className="text-blue-500">"error"</span>: <span className="text-yellow-600">"rate_limit_exceeded"</span></div>
                </div>
                <div className="text-gray-500">{'}'}</div>
              </div>
              <p className="text-xs text-gray-600 mt-3">Too many requests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download & Features */}
      <section className="section-padding bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Full Documentation Sample</h2>
          <p className="text-xl mb-8 opacity-90">
            Complete API reference with authentication, endpoints, error handling, and best practices
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <svg className="w-8 h-8 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div className="font-bold mb-1">8 Pages</div>
              <div className="text-sm opacity-80">Comprehensive coverage</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <svg className="w-8 h-8 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <div className="font-bold mb-1">12 Examples</div>
              <div className="text-sm opacity-80">Working code samples</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <svg className="w-8 h-8 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <div className="font-bold mb-1">Best Practices</div>
              <div className="text-sm opacity-80">Security & optimization</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-medium px-8 py-4 rounded-lg hover:shadow-md transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Sample
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-200"
            >
              Request Custom Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Portfolio */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  )
}
