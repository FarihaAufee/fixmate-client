import { FeaturedServices } from "@/components/home/featured-services"
import { FinalCta } from "@/components/home/final-cta"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { PopularCategories } from "@/components/home/popular-categories"
import { Testimonials } from "@/components/home/testimonials"
import { TrustStats } from "@/components/home/trust-stats"
import { WhyChooseFixMate } from "@/components/home/why-choose-fixmate"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <PopularCategories />
      <FeaturedServices />
      <HowItWorks />
      <WhyChooseFixMate />
      <Testimonials />
      <FinalCta />
    </>
  )
}
