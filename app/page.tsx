import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import Services from '@/components/Services'
import BeforeAfter from '@/components/BeforeAfter'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import ProcessSteps from '@/components/ProcessSteps'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <BeforeAfter />
      <Stats />
      <Portfolio />
      <ProcessSteps />
      <Testimonials />
      <CTA />
      <FloatingCTA />
    </>
  )
}
