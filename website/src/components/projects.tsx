import { ExternalLinkIcon } from "lucide-react"
import { Badge } from "./ui/badge"

interface Project {
  name: string
  description: string
  tech: Array<string>
  link: string
}

const projects: Array<Project> = [
  {
    name: "NewQuiz",
    description: "Jetpack Compose quiz game with modern Material 3 design and MVVM architecture.",
    tech: ["Kotlin", "Jetpack Compose", "Material 3", "MVVM"],
    link: "https://github.com/joaomanaia/newquiz",
  },
  {
    name: "Fega",
    description: "Next.js social network app with real-time chat, posts, and user profiles.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    link: "https://github.com/joaomanaia/fega_web",
  },
  {
    name: "Game 2048 Compose",
    description: "A 2048 game written with compose multiplatform, for Android, Desktop and Web.",
    tech: ["Kotlin", "Compose Multiplatform", "Material 3"],
    link: "https://github.com/joaomanaia/game-2048-compose",
  },
  {
    name: "Calculator Compose",
    description: "Modern calculator app built entirely with Jetpack Compose and Material Design.",
    tech: ["Kotlin", "Jetpack Compose", "Android", "Material 3"],
    link: "https://github.com/joaomanaia/calculator-compose",
  },
]

export function ProjectsSection() {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-16 md:py-24 lg:py-32 xl:py-40">
      <h2 className="text-foreground mb-10 font-mono text-3xl font-bold">Projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border bg-card hover:border-muted-foreground hover:bg-accent block rounded-lg border p-6 transition-all"
          >
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-card-foreground group-hover:text-accent-foreground font-mono text-xl font-semibold">
                {project.name}
              </h3>
              <ExternalLinkIcon className="text-muted-foreground group-hover:text-accent-foreground h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge
                  variant="secondary"
                  className="border-border bg-muted text-muted-foreground group-hover:bg-accent-foreground/10 group-hover:text-accent-foreground rounded border px-2 py-1 font-mono text-xs transition-colors"
                  key={tech}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
