import Link from 'next/link'
import { getBlogPosts, getCategories } from '@/lib/blog'

export default function BlogPage() {
  const posts = getBlogPosts()
  const categories = getCategories()

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-600">
              Technical writing tips, documentation best practices, and career insights
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium">All Posts</button>
            {categories.map((category) => (
              <button key={category} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors">
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-white/30 overflow-hidden h-full flex flex-col">
                    {post.image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3 text-sm">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{post.category}</span>
                        <span className="text-gray-500">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                      <p className="text-gray-600 mb-4 flex-1">{post.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span className="text-primary font-medium group-hover:underline">Read more →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-soft border border-white/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Get New Posts in Your Inbox</h2>
              <p className="text-gray-600 mb-6">Subscribe to get technical writing tips and documentation best practices delivered weekly.</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
