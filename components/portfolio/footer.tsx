"use client"

import Link from "next/link"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"

/**
 * Réseaux sociaux du portfolio
 */
const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@hk-portfolio.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-16 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">

        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col items-center text-center gap-8 mb-12">

          {/* BRAND */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/40">
              HK
            </div>
            <span className="font-bold text-lg tracking-tight font-heading">
              Halil Khaled
            </span>
          </Link>

          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Data Scientist & BI Analyst passionné par les technologies émergentes
            et le développement de solutions innovantes.
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="pt-8 border-t border-border/50 flex flex-col items-center justify-center gap-4">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Halil Khaled.
          </p>
        </div>

      </div> {/*  fermeture container */}
    </footer>
  )
}