---
layout: layouts/page.njk
title: Writing Samples & Portfolio
description: See how I transform complex technical concepts into clear, actionable documentation
permalink: /portfolio/
---

<div class="text-center mb-16">
  <h1 class="text-5xl font-bold mb-6">Writing Samples That Showcase Real Results</h1>
  <p class="text-2xl text-text-secondary">See how I transform complex technical concepts into clear, actionable documentation</p>
</div>

## Featured Writing Samples

<div class="grid gap-12 mb-16">

### API Documentation Sample
<div class="portfolio-sample bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
  <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-2xl font-bold mb-2">HealthSync API Documentation</h3>
        <span class="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">API Documentation</span>
      </div>
      <div class="text-right">
        <div class="text-2xl font-bold">50%</div>
        <div class="text-sm opacity-90">fewer support tickets</div>
      </div>
    </div>
  </div>
  
  <div class="p-6">
    <p class="text-gray-600 mb-6 text-lg">Transformed confusing healthcare API documentation into developer-friendly resources with interactive examples, comprehensive error handling, and integrated HIPAA compliance guidance.</p>
    
    <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
      <div class="bg-gray-800 px-4 py-2 flex items-center gap-3 border-b border-gray-700">
        <div class="flex gap-2">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span class="text-gray-300 text-sm font-medium">HealthSync API Documentation</span>
      </div>
      <div class="p-4 text-sm font-mono">
        <div class="text-green-400 mb-2"># GET /patients/{id}</div>
        <div class="text-gray-400 mb-4">Retrieve detailed information for a specific patient.</div>
        
        <div class="text-yellow-400 mb-2">## Authentication Required</div>
        <div class="text-gray-300 mb-4">This endpoint requires a valid access token with <span class="text-blue-400">`patients:read`</span> scope.</div>
        
        <div class="text-yellow-400 mb-2">## Example Request</div>
        <div class="bg-gray-800 p-3 rounded border border-gray-700">
          <div class="text-gray-300">curl -X GET "https://api.healthsync.com/v1/patients/pat_123" \</div>
          <div class="text-gray-300 ml-4">-H "Authorization: Bearer YOUR_TOKEN" \</div>
          <div class="text-gray-300 ml-4">-H "Content-Type: application/json"</div>
        </div>
        
        <div class="text-yellow-400 mb-2 mt-4">## Response (200 OK)</div>
        <div class="bg-gray-800 p-3 rounded border border-gray-700">
          <div class="text-gray-300">{</div>
          <div class="text-gray-300 ml-4">"id": "pat_123",</div>
          <div class="text-gray-300 ml-4">"name": "John Doe",</div>
          <div class="text-gray-300 ml-4">"status": "active"</div>
          <div class="text-gray-300">}</div>
        </div>
      </div>
    </div>
    
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded">
        <div class="font-semibold text-red-800 mb-2">Challenge</div>
        <div class="text-red-700 text-sm">Developers spending 3+ days on basic integration due to unclear authentication flow and missing error examples</div>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <div class="font-semibold text-blue-800 mb-2">Solution</div>
        <div class="text-blue-700 text-sm">Complete rewrite with working code examples, interactive API explorer, and step-by-step HIPAA compliance guide</div>
      </div>
      <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded">
        <div class="font-semibold text-green-800 mb-2">Results</div>
        <div class="text-green-700 text-sm">50% reduction in support tickets, 30% faster integration time, 95% developer satisfaction score</div>
      </div>
    </div>
    
    <div class="mt-6 pt-6 border-t border-gray-200">
      <div class="flex items-center justify-between text-sm text-gray-500">
        <span>Project Duration: 6 weeks</span>
        <span>Client: Healthcare Data Platform</span>
        <span>Team Size: Solo project</span>
      </div>
    </div>
  </div>
</div>

### Developer Tutorial
<div class="portfolio-sample bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
  <div class="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-2xl font-bold mb-2">HIPAA-Compliant File Upload Tutorial</h3>
        <span class="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">Developer Tutorial</span>
      </div>
      <div class="text-right">
        <div class="text-2xl font-bold">1,200+</div>
        <div class="text-sm opacity-90">developers completed</div>
      </div>
    </div>
  </div>
  
  <div class="p-6">
    <p class="text-gray-600 mb-6 text-lg">Created comprehensive 45-minute tutorial teaching healthcare developers how to build secure, HIPAA-compliant file upload systems using AWS S3 with end-to-end encryption and audit logging.</p>
    
    <div class="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
      <div class="font-semibold text-gray-800 mb-4">Tutorial Structure</div>
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <div class="font-medium text-gray-700 mb-2">Part 1: Architecture Overview</div>
          <ul class="text-sm text-gray-600 space-y-1 ml-4">
            <li>• Security requirements analysis</li>
            <li>• AWS services selection</li>
            <li>• Compliance considerations</li>
          </ul>
        </div>
        <div>
          <div class="font-medium text-gray-700 mb-2">Part 2: Implementation</div>
          <ul class="text-sm text-gray-600 space-y-1 ml-4">
            <li>• S3 bucket configuration</li>
            <li>• Lambda function creation</li>
            <li>• Frontend integration</li>
          </ul>
        </div>
        <div>
          <div class="font-medium text-gray-700 mb-2">Part 3: Security & Compliance</div>
          <ul class="text-sm text-gray-600 space-y-1 ml-4">
            <li>• Encryption implementation</li>
            <li>• Audit trail setup</li>
            <li>• Virus scanning integration</li>
          </ul>
        </div>
        <div>
          <div class="font-medium text-gray-700 mb-2">Part 4: Testing & Deployment</div>
          <ul class="text-sm text-gray-600 space-y-1 ml-4">
            <li>• Security validation</li>
            <li>• Performance testing</li>
            <li>• Production deployment</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
      <div class="bg-gray-800 px-4 py-2 border-b border-gray-700">
        <span class="text-gray-300 text-sm font-medium">Code Example: Secure Upload Handler</span>
      </div>
      <div class="p-4 text-sm font-mono">
        <div class="text-purple-400">const</div> <div class="text-blue-400 inline">AWS</div> <div class="text-white inline">= require('aws-sdk');</div><br/>
        <div class="text-purple-400">const</div> <div class="text-blue-400 inline">s3</div> <div class="text-white inline">= new AWS.S3();</div><br/><br/>
        
        <div class="text-gray-400">// Generate presigned URL with encryption</div><br/>
        <div class="text-purple-400">const</div> <div class="text-blue-400 inline">presignedUrl</div> <div class="text-white inline">= s3.getSignedUrl('putObject', {</div><br/>
        <div class="text-white ml-4">Bucket: HIPAA_BUCKET,</div><br/>
        <div class="text-white ml-4">Key: `patients/${patientId}/${fileKey}`,</div><br/>
        <div class="text-white ml-4">ServerSideEncryption: 'aws:kms',</div><br/>
        <div class="text-white ml-4">Expires: 300</div><br/>
        <div class="text-white">});</div>
      </div>
    </div>
    
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded">
        <div class="font-semibold text-red-800 mb-2">Challenge</div>
        <div class="text-red-700 text-sm">Healthcare developers struggling with secure file uploads, spending weeks on compliance research and implementation</div>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <div class="font-semibold text-blue-800 mb-2">Solution</div>
        <div class="text-blue-700 text-sm">Step-by-step tutorial with working code, security checklist, and compliance validation guide</div>
      </div>
      <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded">
        <div class="font-semibold text-green-800 mb-2">Results</div>
        <div class="text-green-700 text-sm">Featured in AWS Healthcare newsletter, 1,200+ completions, 40% increase in secure implementations</div>
      </div>
    </div>
    
    <div class="mt-6 pt-6 border-t border-gray-200">
      <div class="flex items-center justify-between text-sm text-gray-500">
        <span>Time to Complete: 45 minutes</span>
        <span>Skill Level: Intermediate</span>
        <span>Completion Rate: 87%</span>
      </div>
    </div>
  </div>
</div>

### SaaS Onboarding Guide
<div class="portfolio-sample bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
  <div class="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-2xl font-bold mb-2">MedFlow EHR - Getting Started Guide</h3>
        <span class="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">User Onboarding</span>
      </div>
      <div class="text-right">
        <div class="text-2xl font-bold">65%</div>
        <div class="text-sm opacity-90">faster setup time</div>
      </div>
    </div>
  </div>
  
  <div class="p-6">
    <p class="text-gray-600 mb-6 text-lg">Redesigned complex EHR onboarding process into a streamlined 30-minute experience with progress tracking, contextual help, and role-based guidance for healthcare practices.</p>
    
    <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6 border border-blue-200">
      <div class="font-semibold text-gray-800 mb-4">Onboarding Flow Redesign</div>
      <div class="space-y-4">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
          <div>
            <div class="font-medium text-gray-700">Practice Profile Setup (5 min)</div>
            <div class="text-sm text-gray-600">Basic information, credentials, and logo upload</div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
          <div>
            <div class="font-medium text-gray-700">Team Member Addition (10 min)</div>
            <div class="text-sm text-gray-600">Role-based permissions and provider credentials</div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
          <div>
            <div class="font-medium text-gray-700">Patient Forms Configuration (8 min)</div>
            <div class="text-sm text-gray-600">Customizable intake forms and online portal setup</div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
          <div>
            <div class="font-medium text-gray-700">First Appointment Scheduling (5 min)</div>
            <div class="text-sm text-gray-600">Calendar setup and patient communication testing</div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</div>
          <div>
            <div class="font-medium text-gray-700">Billing Integration (2 min)</div>
            <div class="text-sm text-gray-600">Connect existing systems or set up new billing</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-gray-50 rounded-lg p-4 mb-6">
      <div class="font-medium text-gray-800 mb-3">Key Improvements Made</div>
      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <div class="font-medium text-gray-700 mb-1">User Experience</div>
          <ul class="text-gray-600 space-y-1">
            <li>• Progress bar with time estimates</li>
            <li>• Contextual help tooltips</li>
            <li>• Skip/come back later options</li>
            <li>• Mobile-responsive design</li>
          </ul>
        </div>
        <div>
          <div class="font-medium text-gray-700 mb-1">Content Strategy</div>
          <ul class="text-gray-600 space-y-1">
            <li>• Role-specific instructions</li>
            <li>• Screenshot-heavy guidance</li>
            <li>• Common pitfall warnings</li>
            <li>• Success confirmation messages</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded">
        <div class="font-semibold text-red-800 mb-2">Challenge</div>
        <div class="text-red-700 text-sm">Complex 2-hour setup process causing 40% user abandonment and overwhelming support team</div>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <div class="font-semibold text-blue-800 mb-2">Solution</div>
        <div class="text-blue-700 text-sm">Streamlined 30-minute flow with progress tracking, contextual help, and role-based guidance</div>
      </div>
      <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded">
        <div class="font-semibold text-green-800 mb-2">Results</div>
        <div class="text-green-700 text-sm">90% completion rate, 65% faster setup, 45% reduction in support tickets</div>
      </div>
    </div>
    
    <div class="mt-6 pt-6 border-t border-gray-200">
      <div class="flex items-center justify-between text-sm text-gray-500">
        <span>User Testing: 25 healthcare practices</span>
        <span>A/B Test Results: 90% vs 50% completion</span>
        <span>Implementation: 4 weeks</span>
      </div>
    </div>
  </div>
</div>

### Documentation Transformation Case Study
<div class="portfolio-sample bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
  <div class="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-2xl font-bold mb-2">CloudMed API Documentation Transformation</h3>
        <span class="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">Case Study</span>
      </div>
      <div class="text-right">
        <div class="text-2xl font-bold">60%</div>
        <div class="text-sm opacity-90">fewer support tickets</div>
      </div>
    </div>
  </div>
  
  <div class="p-6">
    <p class="text-gray-600 mb-6 text-lg">Complete documentation transformation for healthcare data integration platform, turning developer frustration into competitive advantage through user research, strategic redesign, and measurable results.</p>
    
    <div class="grid md:grid-cols-2 gap-6 mb-6">
      <div class="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
        <div class="font-semibold text-red-800 mb-3">Before: Developer Nightmare</div>
        <div class="space-y-2 text-sm text-red-700">
          <div class="flex items-start">
            <span class="text-red-500 mr-2">×</span>
            <span>No authentication examples or flow diagrams</span>
          </div>
          <div class="flex items-start">
            <span class="text-red-500 mr-2">×</span>
            <span>Unclear parameter requirements and data types</span>
          </div>
          <div class="flex items-start">
            <span class="text-red-500 mr-2">×</span>
            <span>Missing error handling and troubleshooting</span>
          </div>
          <div class="flex items-start">
            <span class="text-red-500 mr-2">×</span>
            <span>No HIPAA compliance guidance</span>
          </div>
          <div class="flex items-start">
            <span class="text-red-500 mr-2">×</span>
            <span>Generic examples that didn't work</span>
          </div>
        </div>
      </div>
      <div class="bg-green-50 border-l-4 border-green-400 rounded-lg p-4">
        <div class="font-semibold text-green-800 mb-3">After: Developer Delight</div>
        <div class="space-y-2 text-sm text-green-700">
          <div class="flex items-start">
            <span class="text-green-500 mr-2">✓</span>
            <span>Complete authentication flow with working examples</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-500 mr-2">✓</span>
            <span>Interactive API explorer with live testing</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-500 mr-2">✓</span>
            <span>Comprehensive error handling with solutions</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-500 mr-2">✓</span>
            <span>Integrated HIPAA compliance guidance</span>
          </div>
          <div class="flex items-start">
            <span class="text-green-500 mr-2">✓</span>
            <span>Healthcare-specific use cases and examples</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-gray-50 rounded-lg p-6 mb-6">
      <div class="font-semibold text-gray-800 mb-4">Transformation Process</div>
      <div class="grid md:grid-cols-4 gap-4">
        <div class="text-center">
          <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">1</div>
          <div class="font-medium text-gray-700 text-sm mb-1">Research</div>
          <div class="text-xs text-gray-600">12 developer interviews, support ticket analysis</div>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">2</div>
          <div class="font-medium text-gray-700 text-sm mb-1">Architecture</div>
          <div class="text-xs text-gray-600">Information design, user journey mapping</div>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">3</div>
          <div class="font-medium text-gray-700 text-sm mb-1">Content</div>
          <div class="text-xs text-gray-600">Complete rewrite with tested examples</div>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">4</div>
          <div class="font-medium text-gray-700 text-sm mb-1">Launch</div>
          <div class="text-xs text-gray-600">Beta testing, feedback integration</div>
        </div>
      </div>
    </div>
    
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded">
        <div class="font-semibold text-red-800 mb-2">The Problem</div>
        <div class="text-red-700 text-sm">150+ support tickets monthly, 2-3 week integration times, frustrated developers abandoning the platform</div>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <div class="font-semibold text-blue-800 mb-2">The Solution</div>
        <div class="text-blue-700 text-sm">User-centered redesign with working examples, interactive tools, and integrated compliance guidance</div>
      </div>
      <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded">
        <div class="font-semibold text-green-800 mb-2">The Results</div>
        <div class="text-green-700 text-sm">60% fewer tickets, 75% faster onboarding, 200% increase in API adoption, 4.7/5 satisfaction</div>
      </div>
    </div>
    
    <div class="mt-6 pt-6 border-t border-gray-200">
      <div class="flex items-center justify-between text-sm text-gray-500">
        <span>Project Timeline: 10 weeks</span>
        <span>ROI: 650% in first year</span>
        <span>Client: Healthcare Data Platform</span>
      </div>
    </div>
  </div>
</div>

</div>

## What Clients Say

<div class="grid md:grid-cols-2 gap-8 mb-16">

<div class="card">
  <div class="flex items-center mb-4">
    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
      S
    </div>
    <div>
      <div class="font-bold">Sarah Chen</div>
      <div class="text-sm text-text-secondary">CTO, HealthTech Startup</div>
    </div>
  </div>
  <p class="text-text-secondary italic">"Achar transformed our API documentation from a developer nightmare into a competitive advantage. Our integration time dropped from weeks to days."</p>
</div>

<div class="card">
  <div class="flex items-center mb-4">
    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
      M
    </div>
    <div>
      <div class="font-bold">Marcus Rodriguez</div>
      <div class="text-sm text-text-secondary">Head of Developer Relations</div>
    </div>
  </div>
  <p class="text-text-secondary italic">"Finally, documentation that developers actually want to read. Achar understands both the technical complexity and the human need for clarity."</p>
</div>

</div>

<div class="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12">
  <h3 class="text-3xl font-bold mb-4">Ready for Similar Results?</h3>
  <p class="text-xl mb-6 opacity-90">Let's transform your technical documentation</p>
  <a href="/hire/" class="btn bg-white text-brand-blue hover:bg-gray-100 hover:no-underline">Get Free Documentation Audit</a>
</div>