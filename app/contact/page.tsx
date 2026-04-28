import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { ParticlesBackground } from "@/components/portfolio/particles-background"
import { AOSProvider } from "@/components/portfolio/aos-provider"
import { ContactSection } from "@/components/portfolio/contact-section"

export default function ContactPage() {
  return (
    <AOSProvider>
      <ParticlesBackground />
      <Navbar />
      <main className="min-h-screen pt-24">
        <ContactSection />
      </main>
      <Footer />
    </AOSProvider>
  )
}
