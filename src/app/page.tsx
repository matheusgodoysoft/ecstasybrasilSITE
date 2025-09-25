import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CountdownSection } from "@/components/sections/countdown-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <div className="min-h-screen relative bg-black">
      <div className="relative z-10">
        <Navigation />
        <main className="relative">
          <HeroSection />
          <FeaturesSection />
          <CountdownSection />
          <PricingSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}