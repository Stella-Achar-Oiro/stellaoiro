---
layout: layouts/page.njk
title: Resources - Free Guides & Tools for Cloud Engineers
description: Free AWS guides, HIPAA compliance checklists, KCNA study plans, and recommended tools for cloud engineers and healthcare tech teams
permalink: /resources/
---

<div class="text-center mb-16">
  <h1 class="text-5xl font-bold mb-6">Resources</h1>
  <p class="text-2xl text-text-secondary">Free guides, tools, and recommendations for cloud engineers</p>
</div>

## Free Downloads

<div class="grid md:grid-cols-2 gap-8 mb-16">

<div class="card card-hover">
  <div class="w-12 h-12 bg-brand-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
    <svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>
  </div>
  <h3 class="text-xl font-bold mb-3">HIPAA Compliance Checklist</h3>
  <p class="text-text-secondary mb-4">Complete checklist for building HIPAA-compliant applications on AWS. Covers encryption, access controls, audit logging, and more.</p>
  <a href="#newsletter" class="text-brand-blue hover:text-blue-700 font-semibold">Download PDF →</a>
</div>

<div class="card card-hover">
  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  </div>
  <h3 class="text-xl font-bold mb-3">AWS Cost Optimization Guide</h3>
  <p class="text-text-secondary mb-4">Learn how to reduce your AWS bill by 40%+ with proven optimization strategies and tools.</p>
  <a href="#newsletter" class="text-brand-blue hover:text-blue-700 font-semibold">Download PDF →</a>
</div>

<div class="card card-hover">
  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
    </svg>
  </div>
  <h3 class="text-xl font-bold mb-3">Kubernetes Networking Cheat Sheet</h3>
  <p class="text-text-secondary mb-4">Essential Kubernetes networking concepts, commands, and troubleshooting tips in one handy reference.</p>
  <a href="#newsletter" class="text-brand-blue hover:text-blue-700 font-semibold">Download PDF →</a>
</div>

<div class="card card-hover">
  <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
    </svg>
  </div>
  <h3 class="text-xl font-bold mb-3">KCNA Study Plan</h3>
  <p class="text-text-secondary mb-4">30-day study plan to pass the Kubernetes and Cloud Native Associate (KCNA) certification exam.</p>
  <a href="#newsletter" class="text-brand-blue hover:text-blue-700 font-semibold">Download PDF →</a>
</div>

</div>

<div class="bg-blue-50 rounded-lg p-8 mb-16 text-center" id="newsletter">
  <h3 class="text-2xl font-bold mb-4">📥 Get All Free Resources</h3>
  <p class="text-lg text-text-secondary mb-6">Subscribe to get instant access to all free guides, checklists, and study plans</p>
  <div class="max-w-md mx-auto">
    {% include "components/newsletter-form.njk" %}
  </div>
</div>

## Recommended Tools

### Development Tools

<div class="prose max-w-none">

#### Code Editors
- **[Visual Studio Code](https://code.visualstudio.com/)** - My primary code editor with AWS, Terraform, and Kubernetes extensions
- **[JetBrains IDEs](https://www.jetbrains.com/)** - Excellent for Python (PyCharm) and JavaScript (WebStorm)

#### Infrastructure as Code
- **[Terraform](https://www.terraform.io/)** - Infrastructure as code for AWS and multi-cloud environments
- **[AWS CloudFormation](https://aws.amazon.com/cloudformation/)** - Native AWS infrastructure as code
- **[Pulumi](https://www.pulumi.com/)** - Modern infrastructure as code with real programming languages

#### Containers & Orchestration
- **[Docker Desktop](https://www.docker.com/products/docker-desktop)** - Local container development
- **[K3s](https://k3s.io/)** - Lightweight Kubernetes for learning and development
- **[Lens](https://k8slens.dev/)** - Kubernetes IDE for cluster management

</div>

### Learning Platforms

<div class="grid md:grid-cols-2 gap-6 mb-12">

<div class="card">
  <h4 class="text-lg font-bold mb-2">A Cloud Guru</h4>
  <p class="text-text-secondary text-sm mb-3">Comprehensive AWS certification courses and hands-on labs</p>
  <a href="https://acloudguru.com" target="_blank" rel="noopener noreferrer" class="text-brand-blue text-sm font-semibold">Visit Site →</a>
</div>

<div class="card">
  <h4 class="text-lg font-bold mb-2">Linux Academy</h4>
  <p class="text-text-secondary text-sm mb-3">In-depth cloud training for AWS, Azure, and Google Cloud</p>
  <a href="https://linuxacademy.com" target="_blank" rel="noopener noreferrer" class="text-brand-blue text-sm font-semibold">Visit Site →</a>
</div>

<div class="card">
  <h4 class="text-lg font-bold mb-2">FreeCodeCamp</h4>
  <p class="text-text-secondary text-sm mb-3">Free coding tutorials including AWS and cloud concepts</p>
  <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer" class="text-brand-blue text-sm font-semibold">Visit Site →</a>
</div>

<div class="card">
  <h4 class="text-lg font-bold mb-2">Kubernetes Documentation</h4>
  <p class="text-text-secondary text-sm mb-3">Official Kubernetes docs - best resource for learning K8s</p>
  <a href="https://kubernetes.io/docs/" target="_blank" rel="noopener noreferrer" class="text-brand-blue text-sm font-semibold">Visit Site →</a>
</div>

</div>

## My Tech Stack

<div class="prose max-w-none">

### What I Use Daily

**Cloud Platforms:**
- AWS (Primary) - Lambda, S3, RDS, ECS, CloudFront, Route 53
- Google Cloud Platform (Secondary)

**Languages:**
- Python (FastAPI, Django)
- JavaScript/TypeScript (Node.js, React)
- Bash scripting

**Databases:**
- PostgreSQL (Primary relational database)
- DynamoDB (NoSQL for high-scale applications)
- MongoDB (Document store)

**DevOps & CI/CD:**
- GitHub Actions
- AWS CodePipeline
- Docker & Kubernetes
- Terraform

**Monitoring & Logging:**
- AWS CloudWatch
- DataDog
- Sentry (Error tracking)

</div>

## External Articles

Here are some of my guest posts and contributions to other publications:

- **[CSS-Tricks](https://css-tricks.com)** - Web development articles
- **[DEV Community](https://dev.to)** - Cloud engineering tutorials
- **[FreeCodeCamp](https://www.freecodecamp.org)** - Technical guides

## Recommended Books

<div class="prose max-w-none mb-12">

### Cloud Architecture
- **AWS Certified Solutions Architect Study Guide** - Comprehensive AWS certification prep
- **Designing Data-Intensive Applications** by Martin Kleppmann - Essential for understanding distributed systems
- **The Phoenix Project** by Gene Kim - DevOps principles in novel form

### Healthcare Technology
- **Healthcare Information Systems** by Philip Rea et al. - Healthcare IT fundamentals
- **HIPAA Compliance Manual** - Essential for healthcare cloud projects

### Career Development
- **The Pragmatic Programmer** by David Thomas & Andrew Hunt - Software engineering best practices
- **Soft Skills: The Software Developer's Life Manual** by John Sonmez - Career advice for developers

</div>

---

<div class="text-center p-8 bg-gray-50 rounded-lg">
  <h3 class="text-2xl font-bold mb-3">💡 Affiliate Disclaimer</h3>
  <p class="text-text-secondary">Some links are affiliate links, meaning I earn a commission at no extra cost to you if you purchase through them. I only recommend tools I personally use and trust.</p>
</div>
