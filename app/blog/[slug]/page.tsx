import { getBlogPost, getBlogPosts } from '@/lib/blog'
import Link from 'next/link'
import ReadingProgress from '@/components/ReadingProgress'
import Breadcrumbs from '@/components/Breadcrumbs'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{post.category}</span>
            <span className="text-gray-600">{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          {post.image && (
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover rounded-xl mb-12 shadow-medium"
            />
          )}
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">{post.description}</p>
            
            <h2>Coming Soon</h2>
            <p>This blog post is currently being written. Check back soon for the full article!</p>
            
            <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl p-8 my-12 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
              <p className="mb-6">Get technical writing tips and documentation best practices delivered to your inbox.</p>
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
