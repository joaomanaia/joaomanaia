export const locales = ["pt", "en"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "pt"

export const ui = {
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.timeline": "Percurso",
    "nav.projects": "Projetos",

    // Hero
    "hero.title": "João Manaia",
    "hero.description":
      "A criar aplicações Android e experiências web, focado em desempenho, arquitetura limpa e coisas que realmente funcionam.",

    // About
    "about.label": "sobre",
    "about.heading": "Sediado em Portugal,<br />a construir para a web.",
    "about.bio1":
      "Apaixonado por criar aplicações rápidas e intencionais. Passo a maior parte do meu tempo em Kotlin com Jetpack Compose em Android, e utilizo React ou Astro para desenvolvimento web.",
    "about.bio2":
      "Aprecio a visão completa, desde decisões de arquitetura até aos pequenos detalhes de interface que tornam algo agradável de usar.",
    "about.stack.android": "Android",
    "about.stack.frontend": "Frontend",
    "about.stack.backend": "Backend",
    "about.stack.tooling": "Ferramentas",

    // Projects
    "projects.label": "projetos",
    "projects.heading": "Trabalho em Destaque",
    "projects.description": "Projetos que construí e lancei.",
    "projects.allProjects": "Todos os Projetos",
    "projects.related": "projetos relacionados",

    // Timeline
    "timeline.label": "percurso",
    "timeline.heading": "Percurso Académico e Educacional",
    "timeline.description": "Marcos que moldaram a forma como penso sobre software.",

    // 404
    "notFound.title": "404 - Não Encontrado",
    "notFound.description": "A página que procura não existe.",
    "notFound.backHome": "Voltar ao Início",

    // Footer
    "footer.copyright": "© 2026 João Manaia. Todos os direitos reservados.",

    // Language Switcher & Theme
    "languageSwitcher.label": "Idioma",
    "languageSwitcher.pt": "Português",
    "languageSwitcher.en": "English",
    "theme.toggle": "Alternar tema",
    "theme.light": "Claro",
    "theme.dark": "Escuro",
    "theme.system": "Sistema",

    // Metadata & SEO
    "meta.homeTitle": "João Manaia - Programador Full Stack",
    "meta.homeDescription":
      "Programador full stack apaixonado por criar aplicações modernas. Explore os meus projetos e saiba mais sobre o meu percurso.",
    "meta.ogLocale": "pt_PT",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.timeline": "Timeline",
    "nav.projects": "Projects",

    // Hero
    "hero.title": "João Manaia",
    "hero.description":
      "Building Android apps and web experiences, focused on performance, clean architecture, and things that actually work.",

    // About
    "about.label": "about",
    "about.heading": "Based in Portugal,<br />building for the web.",
    "about.bio1":
      "Passionate about creating apps that feel fast and intentional. I spend most of my time in Kotlin with Jetpack Compose on Android, and reach for React or Astro when building for the web.",
    "about.bio2":
      "I enjoy the full picture, from architecture decisions down to the small UI details that make something feel right to use.",
    "about.stack.android": "Android",
    "about.stack.frontend": "Frontend",
    "about.stack.backend": "Backend",
    "about.stack.tooling": "Tooling",

    // Projects
    "projects.label": "projects",
    "projects.heading": "Featured Work",
    "projects.description": "Things I've built and shipped.",
    "projects.allProjects": "All Projects",
    "projects.related": "related projects",

    // Timeline
    "timeline.label": "timeline",
    "timeline.heading": "Academic & Educational Background",
    "timeline.description": "Milestones that shaped how I think about software.",

    // 404
    "notFound.title": "404 - Not Found",
    "notFound.description": "The page you're looking for doesn't exist.",
    "notFound.backHome": "Back to Home",

    // Footer
    "footer.copyright": "© 2026 João Manaia. All rights reserved.",

    // Language Switcher & Theme
    "languageSwitcher.label": "Language",
    "languageSwitcher.pt": "Português",
    "languageSwitcher.en": "English",
    "theme.toggle": "Toggle theme",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",

    // Metadata & SEO
    "meta.homeTitle": "João Manaia - Full Stack Developer",
    "meta.homeDescription":
      "Full stack developer passionate about building modern web applications. Explore my projects and learn more about my work.",
    "meta.ogLocale": "en_US",
  },
} as const

export type UIKey = keyof (typeof ui)[typeof defaultLocale]
