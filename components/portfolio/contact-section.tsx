"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert(
      "Merci ! Votre message a ete envoye avec succes."
    )

    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4" data-aos="fade-up">
          <span className="section-number">05 - Me Contacter</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 font-heading" data-aos="fade-up">
          Contact
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl" data-aos="fade-up">
          Disponible pour des opportunites de stage, freelance ou collaboration sur des projets innovants.
        </p>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-6" data-aos="fade-right">
            {/* Email */}
            <div className="glass p-5 card-hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:contact@hk-portfolio.com" className="text-foreground font-medium hover:text-primary transition-colors">
                    contact@hk-portfolio.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass p-5 card-hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Telephone</p>
                  <a href="tel:+237693273103" className="text-foreground font-medium hover:text-primary transition-colors">
                    +237 693 27 31 03
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="glass p-5 card-hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Localisation</p>
                  <p className="text-foreground font-medium">Yaounde, Cameroun</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 flex-1 flex items-center justify-center gap-3 card-hover-lift group"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium text-sm group-hover:text-primary transition-colors">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 flex-1 flex items-center justify-center gap-3 card-hover-lift group"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium text-sm group-hover:text-primary transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3" data-aos="fade-left">
            <div className="glass p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-12 bg-primary/5 border-border focus:border-primary focus:bg-primary/10 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12 bg-primary/5 border-border focus:border-primary focus:bg-primary/10 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Parlez-moi de votre projet..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-primary/5 border-border focus:border-primary focus:bg-primary/10 rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Envoi en cours...
                      <Spinner className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
