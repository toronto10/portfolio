import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { ParticlesBackground } from "@/components/portfolio/particles-background"
import { AOSProvider } from "@/components/portfolio/aos-provider"
import { ProjectsSection } from "@/components/portfolio/projects-section"

export default function ProjectsPage() {
  return (
    <AOSProvider>
      <ParticlesBackground />
      <Navbar />
      <main className="min-h-screen pt-24">
        <ProjectsSection />
      </main>
      <Footer />
    </AOSProvider>
  )
}
