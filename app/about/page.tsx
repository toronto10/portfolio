import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { ParticlesBackground } from "@/components/portfolio/particles-background"
import { AOSProvider } from "@/components/portfolio/aos-provider"
import { MapPin, GraduationCap, Briefcase, Calendar, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <AOSProvider>
      <ParticlesBackground />
      <Navbar />
      <main className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-heading">
              À Propos de <span className="text-gradient">Moi</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionné par la Data Science et le développement web, je transforme les données en insights actionnables.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Profile Card */}
            <div className="glass p-8" data-aos="fade-right">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative w-40 h-40 mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <img
                    src="/placeholder-user.jpg"
                    alt="Halil Khaled"
                    className="relative w-40 h-40 rounded-full object-cover border-4 border-border"
                  />
                </div>
                <h2 className="text-2xl font-extrabold mb-2 font-heading text-gradient">
                  Halil Khaled
                </h2>
                <p className="text-muted-foreground">
                  Data Scientist · ML Engineer · BI Analyst
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Yaoundé, Cameroun</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>Keyce informatique et IA - 3e année</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span>Disponible pour des opportunités</span>
                </div>
              </div>
            </div>

            {/* Bio & Experience */}
            <div className="space-y-8" data-aos="fade-left">
              <div className="glass p-8">
                <h3 className="text-xl font-bold mb-4 font-heading">Mon Parcours</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Étudiant passionné en Business Intelligence et Big Data, je me spécialise dans l&apos;analyse de données,
                  le machine learning et le développement d&apos;interfaces BI modernes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mon objectif est de transformer les données brutes en insights stratégiques qui aident les entreprises
                  à prendre des décisions éclairées.
                </p>
              </div>

              <div className="glass p-8">
                <h3 className="text-xl font-bold mb-6 font-heading">Formation</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Licence en Informatique & IA</h4>
                      <p className="text-muted-foreground text-sm">Keyce Informatique</p>
                      <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                        <Calendar className="h-3 w-3" /> 2023 - Présent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </AOSProvider>
  )
}
