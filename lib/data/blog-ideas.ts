export interface BlogIdea {
  title: string;
  slug: string;
  targetAudience: string;
  keyPoints: string[];
  estimatedWordCount: number;
  callToAction: string;
  seoKeywords: string[];
}

export const blogIdeas: BlogIdea[] = [
  {
    title: "5 Critical Mistakes in Healthcare API Documentation (And How to Fix Them)",
    slug: "healthcare-api-documentation-mistakes",
    targetAudience: "HealthTech CTOs, Engineering Leads, Product Managers",
    keyPoints: [
      "Ignoring HIPAA compliance requirements in authentication docs",
      "Missing error handling for PHI-related failures",
      "Inadequate rate limiting documentation for healthcare data",
      "Lack of audit trail documentation requirements",
      "Poor examples that don't reflect real healthcare workflows",
      "How to structure FHIR-compliant API documentation",
      "Testing documentation with actual healthcare developers"
    ],
    estimatedWordCount: 2500,
    callToAction: "Need help documenting your healthcare API? Let's talk about creating compliant, developer-friendly documentation.",
    seoKeywords: ["healthcare API documentation", "HIPAA compliant API docs", "FHIR documentation", "medical API documentation"]
  },
  {
    title: "Documenting AWS Infrastructure for Healthcare: A Practical Guide",
    slug: "aws-infrastructure-documentation-healthcare",
    targetAudience: "Cloud Engineers, DevOps Teams, Healthcare SaaS Founders",
    keyPoints: [
      "Essential AWS services for HIPAA-compliant infrastructure",
      "Documenting encryption at rest and in transit",
      "Creating architecture diagrams for compliance audits",
      "Disaster recovery documentation requirements",
      "Infrastructure as Code documentation best practices",
      "Documenting AWS CloudTrail and audit logging",
      "Cost optimization documentation for healthcare workloads"
    ],
    estimatedWordCount: 3000,
    callToAction: "Building healthcare infrastructure on AWS? I can help document your architecture for compliance and team onboarding.",
    seoKeywords: ["AWS healthcare documentation", "HIPAA AWS architecture", "cloud infrastructure documentation", "healthcare DevOps"]
  },
  {
    title: "Writing Technical Documentation for Two Audiences: Developers and Clinicians",
    slug: "technical-documentation-developers-clinicians",
    targetAudience: "Technical Writers, HealthTech Product Managers, Developer Relations",
    keyPoints: [
      "Understanding the clinical workflow context",
      "Translating technical concepts for non-technical healthcare users",
      "Creating separate documentation tracks without duplication",
      "Using healthcare terminology correctly in technical docs",
      "Visual aids that work for both audiences",
      "Testing documentation with actual clinicians and developers",
      "Maintaining consistency across dual-audience documentation"
    ],
    estimatedWordCount: 2200,
    callToAction: "Struggling to document for multiple audiences? Let's create documentation that serves both your technical and clinical users.",
    seoKeywords: ["healthcare technical writing", "dual audience documentation", "clinical documentation", "developer documentation healthcare"]
  },
  {
    title: "Kubernetes Documentation Strategies for Healthcare Platforms",
    slug: "kubernetes-documentation-healthcare",
    targetAudience: "Platform Engineers, SREs, HealthTech Engineering Teams",
    keyPoints: [
      "Documenting HIPAA-compliant Kubernetes deployments",
      "Security policies and network isolation documentation",
      "Secrets management documentation for PHI",
      "Disaster recovery and backup procedures",
      "Monitoring and logging documentation for compliance",
      "Documenting multi-tenant healthcare applications",
      "Runbooks for common healthcare platform incidents"
    ],
    estimatedWordCount: 2800,
    callToAction: "Running healthcare workloads on Kubernetes? I can help document your platform for security, compliance, and team efficiency.",
    seoKeywords: ["Kubernetes healthcare", "container documentation", "healthcare platform documentation", "K8s HIPAA compliance"]
  },
  {
    title: "Building a Documentation-First Culture in African HealthTech Startups",
    slug: "documentation-first-culture-african-healthtech",
    targetAudience: "HealthTech Founders, CTOs, Engineering Managers in Africa",
    keyPoints: [
      "Why documentation matters more in resource-constrained environments",
      "Starting documentation practices with small teams",
      "Documentation tools that work with limited internet connectivity",
      "Training developers to write as they code",
      "Balancing speed and documentation in startup environments",
      "Using documentation to attract international clients",
      "Case study: How documentation helped scale an African HealthTech platform"
    ],
    estimatedWordCount: 2400,
    callToAction: "Building HealthTech in Africa? Let's discuss how documentation can accelerate your growth and attract global clients.",
    seoKeywords: ["African HealthTech", "startup documentation", "technical writing Africa", "healthcare technology Kenya"]
  }
];
