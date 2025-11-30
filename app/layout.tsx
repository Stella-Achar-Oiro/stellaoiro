import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ReadingProgress from '@/components/ReadingProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stella Oiro | Technical Writer for API & Developer Documentation',
  description: 'Technical writer specializing in API documentation, developer guides, and SaaS documentation. Clear, accurate docs that developers actually use.',
  metadataBase: new URL('https://stellaoiro.co.ke'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReadingProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
