"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Project {
  id: number
  category: string
  title: string
  subtitle: string
  tags: string[]
  description: string
  image: string
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    category: "data",
    title: "Iris Prediction App",
    subtitle: "Application de Machine Learning",
    tags: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Machine Learning"],
    description: "Application web interactive de prédiction des fleurs Iris basée sur un modèle de machine learning. L’utilisateur saisit les caractéristiques (longueur et largeur des sépales et pétales) via une interface intuitive, et obtient en temps réel la classe prédite (Setosa, Versicolor ou Virginica). Projet démontrant la mise en production d’un modèle ML avec Streamlit.",
    image: "/iris.jpg",
    liveUrl: "https://iris-prediction-i.streamlit.app/",
  },
  {
    id: 2,
    category: "web",
    title: "Kaeyros-Analytics",
    subtitle: "Site web entreprise",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Site web officiel de l'entreprise Kaeyros-Analytics. Interface moderne et performante avec Next.js.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    liveUrl: "https://kaeyros-analytics.com",
  },
  {
    id: 3,
    category: "mobile",
    title: "Plannif'Tchop",
    subtitle: "Application alimentaire",
    tags: ["React Native", "React.js", "AI Integration"],
    description: "Application de planification alimentaire quotidienne avec gestion dynamique des repas et assistance IA integree.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    liveUrl: "",
  },
  {
    id: 4,
    category: "data",
    title: "API Gestion Academique",
    subtitle: "Backend API",
    tags: ["FastAPI", "Python", "Pydantic", "PostgreSQL"],
    description: "API backend asynchrone pour la gestion academique. Endpoints CRUD complets avec validation stricte.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    liveUrl: "",
  },
  {
    id: 5,
    category: "web",
    title: "Portail Universitaire",
    subtitle: "Systeme de gestion",
    tags: ["PHP", "MySQL", "Bootstrap 5", "PDF"],
    description: "Systeme complet de gestion administrative et pedagogique multi-utilisateurs avec generation automatique de documents.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    liveUrl: "",
  },
  {
    id: 6,
    category: "data",
    title: "GestionCampus",
    subtitle: "Application de gestion",
    tags: ["C#", "PHP", "VBA Excel", "SQL"],
    description: "Application de gestion etudiante : enregistrement, suivi des paiements, gestion des notes et emplois du temps.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    liveUrl: "",
  },
]

const categories = [
  { key: "all", label: "Tous" },
  { key: "web", label: "Web" },
  { key: "data", label: "Data Science" },
  { key: "dashboard", label: "Dashboards" },
  { key: "mobile", label: "Mobile" },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4" data-aos="fade-up">
          <span className="section-number">03 - Mes Projets</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12 font-heading" data-aos="fade-up">
          Projets
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-start gap-3 mb-10" data-aos="fade-up">
          {categories.map((cat) => (
            <Button
              key={cat.key}
              variant="outline"
              size="sm"
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "rounded-full px-5 font-semibold transition-all",
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                  : "bg-primary/5 hover:bg-primary/15 border-transparent"
              )}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass overflow-hidden card-hover-lift group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-foreground text-background hover:scale-110 transition-transform"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-semibold rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 text-[10px] font-semibold rounded-md bg-muted text-muted-foreground">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucun projet dans cette categorie pour le moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}
