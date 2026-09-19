import type { Graph, Thing, WithContext } from "schema-dts"

export interface PersonSchemaOptions {
  siteUrl: string
}

export interface HomeGraphOptions {
  currentUrl: string
  siteUrl: string
  title: string
  description?: string
  locale: string
}

export interface ProjectSchemaOptions {
  currentUrl: string
  siteUrl: string
  title: string
  description: string
  tags?: string[]
  links?: Array<{ name: string; url: string }>
  dateCreated?: string
  locale: string
}

export function getPersonSchema(siteUrl: string) {
  return {
    "@type": "Person" as const,
    "@id": `${siteUrl}/#person`,
    name: "João Manaia",
    givenName: "João",
    familyName: "Manaia",
    url: siteUrl,
    image: `${siteUrl}/og.png`,
    jobTitle: "Software Developer",
    affiliation: {
      "@type": "EducationalOrganization" as const,
      name: "Universidade de Coimbra",
      url: "https://www.uc.pt",
    },
    alumniOf: {
      "@type": "EducationalOrganization" as const,
      name: "Universidade de Coimbra",
      url: "https://www.uc.pt",
    },
    sameAs: [
      "https://github.com/joaomanaia",
      "https://www.linkedin.com/in/joao-manaia/",
      "https://www.instagram.com/_.manaia_/",
    ],
    knowsAbout: [
      "Software Engineering",
      "Android Development",
      "Kotlin",
      "Jetpack Compose",
      "Astro",
      "React",
      "TypeScript",
      "Environmental Engineering",
    ],
  }
}

export function getWebsiteSchema(siteUrl: string) {
  return {
    "@type": "WebSite" as const,
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "João Manaia",
    description: "Official personal website and portfolio of João Manaia.",
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    inLanguage: ["pt-PT", "en-US"],
  }
}

export function getHomeGraph(options: HomeGraphOptions): Graph {
  const { currentUrl, siteUrl, title, description, locale } = options

  return {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(siteUrl),
      getWebsiteSchema(siteUrl),
      {
        "@type": "ProfilePage" as const,
        "@id": `${currentUrl}#webpage`,
        url: currentUrl,
        name: title,
        description: description,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#person`,
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: locale === "pt" ? "pt-PT" : "en-US",
      },
    ],
  }
}

export function getProjectSchema(options: ProjectSchemaOptions): WithContext<Thing> {
  const { currentUrl, siteUrl, title, description, tags = [], links = [], dateCreated, locale } = options

  const repoLink = links.find((l) =>
    l.url.includes("github.com") ||
    l.url.includes("gitlab.com") ||
    l.name.toLowerCase().includes("repository") ||
    l.name.toLowerCase().includes("repositório")
  )

  const isSoftware = Boolean(
    repoLink ||
    tags.some((t) =>
      ["kotlin", "android", "next.js", "react", "astro", "typescript", "jetpack compose", "supabase", "tailwind"]
        .includes(t.toLowerCase())
    )
  )

  if (isSoftware) {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication" as const,
      name: title,
      description,
      url: currentUrl,
      applicationCategory: tags.some((t) => t.toLowerCase().includes("android"))
        ? "MobileApplication"
        : "WebApplication",
      operatingSystem: tags.some((t) => t.toLowerCase().includes("android"))
        ? "Android"
        : "Any",
      keywords: tags.join(", "),
      author: {
        "@id": `${siteUrl}/#person`,
      },
      creator: {
        "@id": `${siteUrl}/#person`,
      },
      ...(repoLink ? { downloadUrl: repoLink.url } : {}),
      ...(dateCreated ? { dateCreated } : {}),
      inLanguage: locale === "pt" ? "pt-PT" : "en-US",
    }
  }

  // Non-software / Environmental Engineering / general research projects
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork" as const,
    name: title,
    description,
    url: currentUrl,
    keywords: tags.join(", "),
    author: {
      "@id": `${siteUrl}/#person`,
    },
    creator: {
      "@id": `${siteUrl}/#person`,
    },
    ...(dateCreated ? { dateCreated } : {}),
    inLanguage: locale === "pt" ? "pt-PT" : "en-US",
  }
}
