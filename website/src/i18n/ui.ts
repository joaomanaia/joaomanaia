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
      "Estudante de Engenharia do Ambiente na Universidade de Coimbra e programador de software. A criar aplicações Android e experiências web com foco em arquitetura limpa e desempenho.",

    // About
    "about.label": "sobre",
    "about.heading": "Sediado em Coimbra, Portugal,<br />a construir para Android e Web.",
    "about.bio1":
      "A frequentar o Mestrado em Engenharia do Ambiente na Universidade de Coimbra, dedicando o meu tempo livre ao desenvolvimento de software. Crio aplicações rápidas e intencionais com Kotlin e Jetpack Compose em Android, e Astro ou React na web.",
    "about.bio2":
      "Gosto de aliar o rigor analítico da engenharia à construção de software de ponta a ponta, desde a arquitetura de sistemas e dados até aos detalhes de interface que tornam uma aplicação agradável de usar.",
    "about.stack.android": "Android",
    "about.stack.frontend": "Frontend",
    "about.stack.backend": "Backend",
    "about.stack.tooling": "Ferramentas",

    // Projects
    "projects.label": "projetos",
    "projects.heading": "Trabalho em Destaque",
    "projects.description": "Aplicações e ferramentas que desenvolvi e lancei.",
    "projects.allProjects": "Todos os Projetos",
    "projects.related": "projetos relacionados",

    // Timeline
    "timeline.label": "percurso",
    "timeline.heading": "Percurso Académico e Educacional",
    "timeline.description":
      "Marcos académicos na Universidade de Coimbra e evolução na programação.",

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
    "meta.homeTitle": "João Manaia - Engenharia do Ambiente & Programação",
    "meta.homeDescription":
      "Estudante de Engenharia do Ambiente na Universidade de Coimbra e criador de software para Android e Web. Explore os meus projetos e percurso académico.",
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
      "Environmental Engineering student at the University of Coimbra and software builder. Crafting Android apps and web experiences with clean architecture and real-world performance.",

    // About
    "about.label": "about",
    "about.heading": "Based in Coimbra, Portugal,<br />building for Android & Web.",
    "about.bio1":
      "Pursuing a Master's degree in Environmental Engineering at the University of Coimbra while building software as a side hustle. I develop fast, intentional apps using Kotlin with Jetpack Compose on Android, and Astro or React for the web.",
    "about.bio2":
      "I enjoy combining an engineering analytical mindset with end-to-end software craft, from system architecture and data modeling down to the interface details that make apps feel right.",
    "about.stack.android": "Android",
    "about.stack.frontend": "Frontend",
    "about.stack.backend": "Backend",
    "about.stack.tooling": "Tooling",

    // Projects
    "projects.label": "projects",
    "projects.heading": "Featured Work",
    "projects.description": "Applications and tools I've built and shipped.",
    "projects.allProjects": "All Projects",
    "projects.related": "related projects",

    // Timeline
    "timeline.label": "timeline",
    "timeline.heading": "Academic & Educational Background",
    "timeline.description":
      "Academic milestones at the University of Coimbra and software journey.",

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
    "meta.homeTitle": "João Manaia - Environmental Engineering & Software Builder",
    "meta.homeDescription":
      "Environmental Engineering student at the University of Coimbra and software builder crafting modern Android and web applications. Explore my projects and academic background.",
    "meta.ogLocale": "en_US",
  },
} as const

export type UIKey = keyof (typeof ui)[typeof defaultLocale]
