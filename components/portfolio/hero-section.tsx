"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Download,
  MapPin,
  GraduationCap,
  Briefcase,
  Linkedin,
  Github,
  ChevronDown,
  Mail,
} from "lucide-react"

const typewriterWords = [
  "Data Scientist",
  "BI Analyst",
  "Machine Learning",
  "Deep Learning",
  "Full Stack Developer",
]

const profileTags = ["Python", "Power BI", "TensorFlow", "React", "SQL"]

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = typewriterWords[wordIndex]
    if (!word) return

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < word.length) {
          setCurrentWord(word.substring(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (charIndex > 0) {
          setCurrentWord(word.substring(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % typewriterWords.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-8 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex-1 text-center lg:text-left" data-aos="fade-right">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Data Scientist / BI Analyst - Disponible Stage & Freelance
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-2 font-heading">
              Halil
            </h1>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 font-heading text-gradient">
              Khaled
            </h1>

            {/* Typewriter */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="text-primary text-xl">{">"}</span>
              <span className="text-xl sm:text-2xl text-muted-foreground font-medium h-8">
                {currentWord}
                <span className="cursor-blink text-primary">|</span>
              </span>
            </div>

            {/* Info */}
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Bachelor en Intelligence Artificielle & Big Data
              <br />
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" /> Yaoundé, Cameroun
              </span>
            </p>

            {/* CTA */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <Button
                size="lg"
                className="bg-gradient-primary text-white shadow-lg hover:-translate-y-1 transition-all font-semibold"
                onClick={() => scrollToSection("#projects")}
              >
                Mes Projets
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-2 font-semibold"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="h-4 w-4" /> Me Contacter
              </Button>

              <Button size="lg" variant="ghost" className="gap-2 font-semibold">
                <Download className="h-4 w-4" /> CV
              </Button>
            </div>
          </div>

          {/* ================= RIGHT PROFILE CARD ================= */}
          <div className="flex-shrink-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="glass p-8 text-center max-w-sm animate-float">

              {/* Image */}
              <div className="relative w-36 h-36 mx-auto mb-5">
                <img
                  src="/placeholder-user.jpg"
                  alt="Halil Khaled"
                  className="relative w-36 h-36 rounded-full object-cover border-4 border-primary/20"
                />
              </div>

              {/* Name */}
              <h2 className="text-2xl font-extrabold mb-1 font-heading">
                Halil Khaled
              </h2>

              <p className="text-muted-foreground text-sm mb-5">
                Data Scientist - ML Engineer - BI Analyst
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {profileTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Info */}
              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Yaoundé, Cameroun
                </p>

                <p className="flex items-center justify-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  Keyce IA & Big Data - 3e année
                </p>

                <p className="flex items-center justify-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="text-green-500 font-medium">Disponible</span>
                </p>
              </div>

              {/* Social */}
              <div className="flex justify-center gap-3">
                <a href="https://linkedin.com" className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </a>

                <a href="https://github.com" className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Github className="h-5 w-5" />
                </a>

                <a href="mailto:contact@hk-portfolio.com" className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Defiler
        </span>
        <ChevronDown className="h-5 w-5 text-primary animate-scroll" />
      </div>
    </section>
  )
}