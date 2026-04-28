"use client"

import { MapPin, GraduationCap, Languages, Briefcase, Award } from "lucide-react"

const qualities = ["Rigoureux", "Curieux", "Esprit d'equipe", "Organise"]

const certifications = [
  "Introduction to Generative AI Studio - Simplilearn",
  "SecNumacademie - MOOC Cybersecurite (ANSSI)",
  "Computer Hardware Basics - Cisco Networking Academy",
  "Introduction to Modern AI - Cisco Networking Academy",
  "DELF B2 - Diplome d'Etudes en Langue Francaise",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4" data-aos="fade-up">
          <span className="section-number">01 - Qui Suis-Je</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12 font-heading" data-aos="fade-up">
          A Propos
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Description */}
          <div data-aos="fade-right">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Etudiant en 3e annee de Bachelor en Intelligence Artificielle et Big Data, passionne par les technologies emergentes et le developpement de solutions innovantes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Je suis opérationnel en analyse de données et en Business Intelligence, Je développe des solutions basées sur le machine learning afin d’anticiper les tendances, optimiser les performances et faciliter la prise de décision et avec Power BI, pour transformer des données brutes en tableaux de bord clairs, interactifs et exploitables.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Yaounde, Cameroun</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Keyce IA & Big Data</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Languages className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Francais </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Data / BI Analyst</span>
              </div>
            </div>

            {/* Qualities */}
            <div className="mb-8">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">// Qualites</p>
              <div className="flex flex-wrap gap-2">
                {qualities.map((quality) => (
                  <span
                    key={quality}
                    className="skill-tag px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {quality}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Certifications */}
          <div data-aos="fade-left">
            <div className="glass p-6">
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert}
                    className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
