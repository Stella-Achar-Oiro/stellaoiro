import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import Services from '@/components/Services'
import BeforeAfter from '@/components/BeforeAfter'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import ProcessSteps from '@/components/ProcessSteps'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CTA from '@/components/CTA'
import FloatingCTA from '@/components/FloatingCTA'
import SocialProof from '@/components/SocialProof'

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
      <TestimonialCarousel />
      <CTA />
      <FloatingCTA />
      <SocialProof />
    </>
  )
}
