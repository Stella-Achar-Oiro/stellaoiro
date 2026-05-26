import type { Metadata } from 'next'
import { Sora, Instrument_Serif, DM_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ReadingProgress from '@/components/ReadingProgress'

const sora = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-sans' })
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: ['400'], style: ['normal', 'italic'], variable: '--font-serif' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Stella Achar Oiro | AI Engineer · AWS Community Builder · Clinical Officer',
  description: 'AI Engineer building healthcare AI systems in Kenya and East Africa. Co-Founder & CEO of Evarest Technologies. AWS Community Builder. Clinical Officer with 13 years in Kenya\'s public health system.',
  metadataBase: new URL('https://stellaoiro.co.ke'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${instrumentSerif.variable} ${dmMono.variable}`}>
        <ReadingProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
