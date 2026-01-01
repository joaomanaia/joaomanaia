import { createFileRoute } from "@tanstack/react-router"
import { GithubIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ProjectsSection } from "@/components/projects"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <Separator />
      <AboutSection />
      <Separator />
      <ProjectsSection />
      <Separator />
      <Footer />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-16 md:py-24 lg:py-32 xl:py-40">
      <h1 className="text-foreground mb-4 font-mono text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
        João Manaia
      </h1>

      <p className="text-muted-foreground mb-2 font-mono text-xl md:text-2xl">
        Mobile and Web Developer
      </p>

      <p className="text-muted-foreground mb-10 max-w-2xl text-lg leading-relaxed">
        Building native Android applications with Kotlin and Jetpack Compose, and crafting web
        experiences using React, TypeScript, and Tailwind CSS.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <Button variant="secondary" size="lg" asChild>
          <a href="https://github.com/joaomanaia" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            GitHub
          </a>
        </Button>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-16 md:py-24 lg:py-32 xl:py-40">
      <h2 className="text-foreground mb-8 font-mono text-3xl font-bold">About</h2>
      <div className="text-muted-foreground space-y-6 text-base leading-relaxed md:text-lg">
        <p>
          Based in Portugal, I am passionate about creating seamless and efficient applications that
          enhance user experiences. My expertise lies in developing robust Android applications
          using Kotlin and Jetpack Compose, ensuring high performance and modern design principles.
        </p>
        <p>
          In addition to mobile development, I have a strong background in web development,
          utilizing React, TypeScript, and Tailwind CSS to build responsive and dynamic web
          applications. I enjoy tackling complex problems and continuously learning new technologies
          to stay at the forefront of the industry.
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="container mx-auto max-w-4xl px-6 py-8 text-center">
      <p className="text-muted-foreground font-mono text-sm">
        © 2025 João Manaia. All rights reserved.
      </p>
    </footer>
  )
}
