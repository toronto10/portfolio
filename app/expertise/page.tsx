import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { ParticlesBackground } from "@/components/portfolio/particles-background"
import { AOSProvider } from "@/components/portfolio/aos-provider"
import { ExpertiseSection } from "@/components/portfolio/expertise-section"

export default function ExpertisePage() {
  return (
    <AOSProvider>
      <ParticlesBackground />
      <Navbar />
      <main className="min-h-screen pt-24">
        <ExpertiseSection />
      </main>
      <Footer />
    </AOSProvider>
  )
}
