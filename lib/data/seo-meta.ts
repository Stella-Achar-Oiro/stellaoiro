export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: 'summary' | 'summary_large_image';
  twitterTitle: string;
  twitterDescription: string;
}

export const seoMeta: Record<string, PageMeta> = {
  home: {
    title: "Stella Achar Oiro | Healthcare Technical Writer & AWS Community Builder",
    description: "Software developer specializing in healthcare technology documentation. I build cloud-native systems, then document them. AWS Community Builder | Python, Go, TypeScript | 25K+ words published.",
    keywords: ["healthcare technical writer", "API documentation", "AWS Community Builder", "healthcare cloud developer", "medical API documentation", "HIPAA documentation", "technical writing Kenya"],
    ogTitle: "Healthcare Technical Writer & Cloud Developer | Stella Achar Oiro",
    ogDescription: "I build healthcare technology systems with Python, Go, and TypeScript—then create the documentation developers actually use. AWS Community Builder based in Kenya.",
    ogImage: "/og-image-home.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "Stella Achar Oiro | Healthcare Technical Writer & AWS Community Builder",
    twitterDescription: "Software developer specializing in healthcare technology documentation. I build the systems I document."
  },
  about: {
    title: "About Stella Achar Oiro | Healthcare Developer & Technical Writer",
    description: "13+ years in healthcare and technology. Co-founder of Evarest Technologies. AWS Community Builder. I'm not just a writer who interviews developers—I'm a developer who writes.",
    keywords: ["technical writer healthcare", "AWS Community Builder Kenya", "healthcare cloud engineer", "medical technology writer", "API documentation specialist", "Evarest Technologies"],
    ogTitle: "About Stella Achar Oiro | Developer Who Writes",
    ogDescription: "Healthcare technology developer turned technical writer. I build cloud-native healthcare systems with Python, Go, and TypeScript, then document them for other developers.",
    ogImage: "/og-image-about.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "About Stella Achar Oiro | Healthcare Developer & Technical Writer",
    twitterDescription: "13+ years in healthcare and technology. I build the systems I document."
  },
  services: {
    title: "Technical Writing Services | API Docs, Cloud Architecture, Developer Guides",
    description: "Healthcare API documentation, AWS infrastructure docs, and developer guides. HIPAA-compliant documentation from a developer who understands your code. Starting at $2,000.",
    keywords: ["API documentation services", "healthcare technical writing", "cloud documentation", "HIPAA documentation", "developer documentation services", "technical writing freelance", "AWS documentation"],
    ogTitle: "Technical Writing Services for Healthcare & Cloud Platforms",
    ogDescription: "API documentation, cloud architecture docs, and developer guides for healthcare technology companies. Written by a developer who builds the systems I document.",
    ogImage: "/og-image-services.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "Technical Writing Services | Healthcare & Cloud Documentation",
    twitterDescription: "API docs, cloud architecture documentation, and developer guides. HIPAA-compliant. Starting at $2,000."
  },
  portfolio: {
    title: "Portfolio | Healthcare API Docs, Cloud Infrastructure, Technical Guides",
    description: "Real technical writing projects with measurable results. Healthcare AI platform documentation, AWS infrastructure guides, and blockchain platform docs. 25,000+ words published.",
    keywords: ["technical writing portfolio", "healthcare documentation examples", "API documentation samples", "cloud documentation portfolio", "technical writer work samples"],
    ogTitle: "Technical Writing Portfolio | Stella Achar Oiro",
    ogDescription: "Healthcare API documentation, cloud infrastructure guides, and developer documentation. Real projects with measurable results from an AWS Community Builder.",
    ogImage: "/og-image-portfolio.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "Technical Writing Portfolio | Healthcare & Cloud Documentation",
    twitterDescription: "Real projects: Healthcare AI docs, AWS infrastructure guides, blockchain platform documentation."
  },
  contact: {
    title: "Contact Stella Achar Oiro | Healthcare Technical Writing Services",
    description: "Get in touch for healthcare API documentation, cloud architecture docs, or developer guides. 24-hour response time. Based in Nairobi, Kenya. Serving global clients.",
    keywords: ["hire technical writer", "healthcare documentation services", "API documentation freelance", "technical writing contact", "AWS documentation services"],
    ogTitle: "Contact | Healthcare Technical Writing Services",
    ogDescription: "Need healthcare API documentation or cloud architecture docs? Let's discuss your project. 24-hour response time.",
    ogImage: "/og-image-contact.jpg",
    twitterCard: "summary",
    twitterTitle: "Contact Stella Achar Oiro | Technical Writing Services",
    twitterDescription: "Healthcare API docs, cloud architecture documentation, developer guides. 24h response time."
  },
  blog: {
    title: "Blog | Healthcare Technical Writing, AWS, Cloud Architecture",
    description: "Technical articles on healthcare API documentation, AWS infrastructure, Kubernetes, and developer documentation best practices. Written by an AWS Community Builder.",
    keywords: ["healthcare technical writing blog", "AWS blog", "API documentation tutorials", "cloud architecture articles", "developer documentation", "HIPAA compliance"],
    ogTitle: "Technical Writing Blog | Healthcare, AWS, Cloud Architecture",
    ogDescription: "Articles on healthcare API documentation, AWS infrastructure, Kubernetes, and technical writing best practices from an AWS Community Builder.",
    ogImage: "/og-image-blog.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "Blog | Healthcare Technical Writing & Cloud Architecture",
    twitterDescription: "Technical articles on healthcare APIs, AWS, Kubernetes, and documentation best practices."
  }
};

// Helper function to generate meta tags for Next.js metadata API
export function generateMetadata(page: keyof typeof seoMeta) {
  const meta = seoMeta[page];
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [meta.ogImage],
      type: 'website',
    },
    twitter: {
      card: meta.twitterCard,
      title: meta.twitterTitle,
      description: meta.twitterDescription,
    },
  };
}
