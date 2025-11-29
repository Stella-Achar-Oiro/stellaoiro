export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  readTime: string
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'api-documentation-best-practices',
    title: '10 API Documentation Best Practices That Reduce Support Tickets',
    description: 'Learn how to write API documentation that developers actually use, with real examples and proven strategies.',
    date: '2024-01-15',
    author: 'Stella Oiro',
    category: 'API Documentation',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
  },
  {
    slug: 'developer-onboarding-documentation',
    title: 'How to Create Developer Onboarding Docs That Actually Work',
    description: 'A step-by-step guide to creating onboarding documentation that gets developers productive in hours, not days.',
    date: '2024-01-10',
    author: 'Stella Oiro',
    category: 'Developer Guides',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
  },
  {
    slug: 'technical-writing-career-transition',
    title: 'From Healthcare to Tech: My Journey to Technical Writing',
    description: 'How I transitioned from clinical officer to technical writer, and what I learned along the way.',
    date: '2024-01-05',
    author: 'Stella Oiro',
    category: 'Career',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
  },
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)))
}
