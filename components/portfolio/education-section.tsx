"use client"

import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Briefcase,
} from "lucide-react"

interface Education {
  degree: string
  school: string
  period: string
  location: string
  current: boolean
}

const educations: Education[] = [
  {
    degree: "Bachelor - Intelligence Artificielle & Big Data",
    school: "Keyce Informatique & Intelligence Artificielle",
    period: "Octobre 2023 - En cours",
    location: "Yaoundé, Cameroun",
    current: true,
  },
]

const tools = ["Microsoft Office", "Google Suite", "Trello", "Jira"]

const interests = [
  "Veille technologique sur l'IA et les LLM",
  "Auto-formation via cours en ligne et tutoriels",
  "Voyage",
  "Sport",
]

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-4" data-aos="fade-up">
          <span className="section-number">04 — Ma Formation</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12 font-heading"
          data-aos="fade-up"
        >
          Formation
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-6">

            {/* ================= EDUCATION CARD ================= */}
            {educations.map((edu) => (
              <div
                key={edu.school}
                className="glass p-6 card-hover-lift"
                data-aos="fade-up"
              >
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex-1">

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold font-heading">
                        {edu.degree}
                      </h3>

                      {edu.current && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                          En cours
                        </span>
                      )}
                    </div>

                    <p className="text-primary font-medium mb-3">
                      {edu.school}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </span>

                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            ))}

            {/* ================= TOOLS CARD (SEPARATE) ================= */}
            <div
              className="glass p-6 card-hover-lift"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>

                <h3 className="text-lg font-bold font-heading">
                  Outils bureautiques
                </h3>

              </div>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="skill-tag px-3 py-1 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="space-y-6">

            {/* INTERESTS CARD */}
            <div className="glass p-6 card-hover-lift" data-aos="fade-up">

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>

                <h3 className="text-lg font-bold font-heading">
                  Centres d’intérêt
                </h3>
              </div>

              <ul className="space-y-3">
                {interests.map((interest, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary font-bold">-</span>
                    {interest}
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}