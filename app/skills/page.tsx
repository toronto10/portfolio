import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { ParticlesBackground } from "@/components/portfolio/particles-background"
import { AOSProvider } from "@/components/portfolio/aos-provider"
import { SkillsSection } from "@/components/portfolio/skills-section"

export default function SkillsPage() {
  return (
    <AOSProvider>
      <ParticlesBackground />
      <Navbar />
      <main className="min-h-screen pt-24">
        <SkillsSection />
      </main>
      <Footer />
    </AOSProvider>
  )
}
