export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    role: string;
    bio: string;
    location: string;
    email: string;
    social: {
      linkedin: string;
      github: string;
      twitter: string;
      dev: string;
    };
  };
  stats: {
    wordsPublished: string;
    yearsExperience: string;
    clientSatisfaction: string;
    responseTime: string;
  };
  credentials: {
    awsCommunityBuilder: boolean;
    coFounder: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Stella Achar Oiro",
  title: "Technical Writer & Healthcare Cloud Developer | AWS Community Builder",
  description: "Software developer specializing in healthcare technology documentation. I build cloud-native systems, then document them. AWS Community Builder | Python, Go, TypeScript | 25K+ words published.",
  url: "https://stellaoiro.co.ke",
  author: {
    name: "Stella Achar Oiro",
    role: "Technical Writer & Healthcare Cloud Developer",
    bio: "I'm not just a writer who interviews developers—I'm a developer who writes. I build healthcare technology systems with Python, Go, and TypeScript, then create the documentation developers actually use.",
    location: "Nairobi, Kenya",
    email: "stellaacharoiro@gmail.com",
    social: {
      linkedin: "https://www.linkedin.com/in/stella-achar-oiro/",
      github: "https://github.com/Stella-Achar-Oiro",
      twitter: "https://x.com/Stella_Oiro",
      dev: "https://dev.to/stella_oiro"
    }
  },
  stats: {
    wordsPublished: "25,000+",
    yearsExperience: "13+",
    clientSatisfaction: "100%",
    responseTime: "24h"
  },
  credentials: {
    awsCommunityBuilder: true,
    coFounder: "Evarest Technologies Ltd"
  }
};

export interface PortfolioItem {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  tags: string[];
  results: string;
  challenge: string;
  solution: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Healthcare AI Platform API Documentation",
    description: "Comprehensive API documentation for a medical transcription system serving healthcare providers across East Africa. Created developer-friendly guides for authentication, endpoint references, and integration workflows.",
    role: "Technical Documentation Lead & Backend Developer",
    technologies: ["Python", "REST APIs", "AWS Lambda", "S3", "OpenAPI/Swagger", "HIPAA Compliance"],
    tags: ["API Documentation", "Healthcare", "Cloud Architecture"],
    challenge: "Medical transcription platform had complex authentication flows and HIPAA compliance requirements. Developers struggled with integration, leading to 3-week average onboarding time.",
    solution: "Built complete API documentation with code samples in Python, JavaScript, and cURL. Created authentication flow diagrams, error handling guides, and compliance checklists. Included real-world integration examples.",
    results: "Reduced developer onboarding from 3 weeks to 5 days. Zero security incidents in first year of production use."
  },
  {
    title: "Cloud Infrastructure Documentation for HealthTech Platform",
    description: "Architecture documentation and deployment guides for AWS-based healthcare technology infrastructure. Documented containerized microservices, CI/CD pipelines, and disaster recovery procedures.",
    role: "Cloud Engineer & Technical Writer",
    technologies: ["AWS (EC2, ECS, Lambda, S3, RDS)", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    tags: ["Cloud Architecture", "DevOps", "Infrastructure as Code"],
    challenge: "Healthcare platform running on AWS lacked infrastructure documentation. Deployment required manual intervention, taking 4+ hours and causing frequent configuration drift.",
    solution: "Created comprehensive infrastructure documentation including architecture diagrams, Terraform configurations, deployment runbooks, and disaster recovery procedures. Documented CI/CD pipeline setup with GitHub Actions.",
    results: "Deployment time reduced from 4 hours to 45 minutes. Infrastructure reproducibility increased to 100% across staging and production environments."
  },
  {
    title: "Social Impact Platform Technical Documentation",
    description: "Developer documentation for blockchain-based gender-based violence prevention platform. Created smart contract documentation, API integration guides, and system architecture overviews for NGO partners.",
    role: "Full-Stack Developer & Documentation Specialist",
    technologies: ["Blockchain", "Smart Contracts", "REST APIs", "Python", "JavaScript"],
    tags: ["Blockchain", "Social Impact", "Developer Guides"],
    challenge: "Platform connecting GBV survivors with support services needed technical documentation for NGO partners integrating the system. Non-technical stakeholders struggled to understand capabilities.",
    solution: "Developed dual-audience documentation: technical API guides for developers and simplified system overviews for program managers. Created integration tutorials with step-by-step walkthroughs.",
    results: "Platform successfully served 847 survivors. 5 NGO partners integrated within 6 months. Documentation enabled non-technical staff to understand system capabilities."
  }
];

export interface Service {
  title: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  useCases: string[];
  pricing: string;
}

export const services: Service[] = [
  {
    title: "API Documentation",
    description: "Developer-friendly API documentation that accelerates integration and reduces support tickets. I understand REST, GraphQL, and healthcare compliance requirements because I build these systems.",
    deliverables: [
      "OpenAPI/Swagger specifications",
      "Authentication & authorization guides",
      "Endpoint reference documentation",
      "Code samples (Python, Go, JavaScript, TypeScript)",
      "Error handling documentation",
      "HIPAA compliance documentation"
    ],
    technologies: ["REST APIs", "GraphQL", "OpenAPI", "Postman", "Healthcare APIs", "FHIR"],
    useCases: [
      "HealthTech startups launching developer platforms",
      "Telemedicine platforms with third-party integrations",
      "EHR systems exposing APIs to partners",
      "Medical device companies with cloud APIs"
    ],
    pricing: "Starting at $2,000 per API documentation project"
  },
  {
    title: "Cloud Architecture Documentation",
    description: "Infrastructure documentation for AWS-based healthcare systems. From architecture diagrams to deployment runbooks, I document cloud infrastructure that meets compliance requirements.",
    deliverables: [
      "System architecture diagrams",
      "Infrastructure as Code documentation (Terraform, CloudFormation)",
      "Deployment and rollback procedures",
      "Disaster recovery documentation",
      "Security and compliance guides",
      "Cost optimization recommendations"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions"],
    useCases: [
      "Healthcare SaaS platforms documenting infrastructure",
      "Telemedicine companies preparing for compliance audits",
      "HealthTech startups scaling cloud infrastructure",
      "Medical AI platforms documenting ML pipelines"
    ],
    pricing: "Starting at $3,500 per infrastructure documentation project"
  },
  {
    title: "Developer Guides & Technical Content",
    description: "Quickstart tutorials, integration guides, and technical blog posts that help developers succeed with your platform. I write from a developer's perspective because I am one.",
    deliverables: [
      "Quickstart tutorials and getting started guides",
      "Integration walkthroughs with code samples",
      "Technical blog posts and articles",
      "SDK and library documentation",
      "Video script outlines for technical content",
      "Healthcare system documentation for non-technical stakeholders"
    ],
    technologies: ["Python", "Go", "JavaScript", "TypeScript", "Rust", "Healthcare Systems"],
    useCases: [
      "Developer relations teams creating content",
      "HealthTech companies educating customers",
      "Open source healthcare projects",
      "Technical marketing for developer-focused products"
    ],
    pricing: "Starting at $500 per article | $150/hour for ongoing content"
  }
];
