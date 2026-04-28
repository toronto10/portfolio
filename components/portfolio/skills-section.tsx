"use client"

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Machine Learning",
    skills: ["Scikit-learn", "Random Forest", "XGBoost", "LightGBM", "Decision Tree", "K-Means"],
  },
  {
    title: "Deep Learning",
    skills: ["Réseaux neurones", "CNN", "RNN", "ANN", "Keras", "TensorFlow"],
  },
  {
    title: "Data Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend & Langages",
    skills: ["Python", "FastAPI", "Django", "PHP", "Spring Boot", "C#", "Java"],
  },
  {
    title: "Bases de Donnees",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
  title: "Data & BI",
  skills: ["Power BI", "Excel", "DAX"]
  },
  {
    title: "DevOps & Outils",
    skills: ["Docker", "Jenkins","Git", "GitHub", "Vercel", "n8n", "Trello", "Jira"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4" data-aos="fade-up">
          <span className="section-number">02 - Mes Competences</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12 font-heading" data-aos="fade-up">
          Competences
        </h2>

        {/* Timeline Skills */}
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="relative pl-10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline Line */}
              {index < skillCategories.length - 1 && (
                <div className="absolute left-[1.1rem] top-12 bottom-[-2rem] w-0.5 bg-gradient-to-b from-primary to-transparent" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <div className="w-3 h-3 rounded-full bg-background" />
              </div>

              {/* Card */}
              <div className="glass p-6 card-hover-lift">
                {/* Category Title */}
                <h3 className="text-xl font-bold mb-5 font-heading text-foreground">
                  {category.title}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
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
