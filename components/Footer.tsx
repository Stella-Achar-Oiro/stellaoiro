import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Stella Oiro</h3>
            <p className="text-gray-600 mb-6">Technical writer specializing in API documentation, developer guides, and SaaS documentation.</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/stella-achar-oiro/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://github.com/Stella-Achar-Oiro" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">GitHub</a>
              <a href="https://x.com/Stella_Oiro" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">Twitter</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#api" className="text-gray-600 hover:text-primary transition-colors">API Documentation</Link></li>
              <li><Link href="/services#developer" className="text-gray-600 hover:text-primary transition-colors">Developer Guides</Link></li>
              <li><Link href="/services#saas" className="text-gray-600 hover:text-primary transition-colors">SaaS Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2025 Stella Oiro. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
