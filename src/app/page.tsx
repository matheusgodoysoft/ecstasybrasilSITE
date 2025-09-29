import { HeroSection } from "@/components/sections/hero-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CountdownSection } from "@/components/sections/countdown-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FaqSection } from "@/components/sections/faq-section"
import { FinalCtaSection } from "@/components/sections/final-cta-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="relative z-10">
        <Navigation />
        <main className="relative">
          <HeroSection />
          <BenefitsSection />
          <HowItWorksSection />
          <FeaturesSection />
          <CountdownSection />
          <PricingSection />
          <TestimonialsSection />
          <FaqSection />
          <FinalCtaSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}