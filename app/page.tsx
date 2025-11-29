import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import Services from '@/components/Services'
import BeforeAfter from '@/components/BeforeAfter'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <BeforeAfter />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  )
}
