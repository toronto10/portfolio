"use client"

import { MapPin, Calendar } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  location: string
  current: boolean
  description: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  // {
  //   title: "Developpeur Full Stack",
  //   company: "IAG Academy",
  //   period: "Fevrier 2026 - En cours",
  //   location: "Yaounde, Cameroun",
  //   current: true,
  //   description: [
  //     "Developpement et deploiement d'une plateforme web de preparation au TCF Canada",
  //     "Integration de fonctionnalites IA : correction automatique et simulateur oral (Whisper/Groq)",
  //     "Deploiement Vercel et optimisation des performances en production",
  //   ],
  //   technologies: ["Next.js", "TypeScript", "Supabase", "API Anthropic", "Whisper", "Vercel"],
  // },
  // {
  //   title: "Developpement Web & Tests",
  //   company: "Kaeyros-Analytics",
  //   period: "Juillet 2025 - Octobre 2025",
  //   location: "Yaounde, Cameroun",
  //   current: false,
  //   description: [
  //     "Developpe le site officiel de l'entreprise en Next.js, accessible a kaeyros-analytics.com",
  //     "Assure les tests fonctionnels et la validation de plusieurs projets internes de l'entreprise",
  //   ],
  //   technologies: ["Next.js", "React", "TypeScript", "Testing", "QA"],
  // },
]

export function ExperienceSection() {
  if (experiences.length === 0) return null

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">

        {/* ================= HEADER PRO ================= */}
        {/* <div className="mb-12" data-aos="fade-up">
          <p className="text-sm text-primary font-semibold mb-2">
            03 — Experiences Pro
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading">
            Mon parcours professionnel
          </h2>
        </div> */}

        {/* ================= TIMELINE ================= */}
        <div className="space-y-8">

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="relative pl-10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              {index < experiences.length - 1 && (
                <div className="absolute left-[1.1rem] top-12 bottom-[-2rem] w-0.5 bg-gradient-to-b from-primary to-transparent" />
              )}

              <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <div className="w-3 h-3 rounded-full bg-background" />
              </div>

              <div className="glass p-6 card-hover-lift">

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold">
                      {exp.company}
                    </p>
                  </div>

                  {exp.current && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                      En cours
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">-</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}