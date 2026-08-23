import { describe, it, expect } from "bun:test"
import {
  locales,
  defaultLocale,
  useTranslations,
  getLocalizedPath,
  switchLocalePath,
  getAlternateLinks,
  stripLocaleFromUrl,
} from "./index"

describe("i18n config & types", () => {
  it("defines pt as default locale and includes en", () => {
    expect(defaultLocale).toBe("pt")
    expect(locales).toEqual(["pt", "en"])
  })
})

describe("useTranslations", () => {
  it("translates keys in Portuguese", () => {
    const t = useTranslations("pt")
    expect(t("nav.home")).toBe("Início")
    expect(t("nav.about")).toBe("Sobre")
    expect(t("nav.timeline")).toBe("Percurso")
    expect(t("nav.projects")).toBe("Projetos")
    expect(t("notFound.title")).toBe("404 - Não Encontrado")
    expect(t("meta.ogLocale")).toBe("pt_PT")
  })

  it("translates keys in English", () => {
    const t = useTranslations("en")
    expect(t("nav.home")).toBe("Home")
    expect(t("nav.about")).toBe("About")
    expect(t("nav.timeline")).toBe("Timeline")
    expect(t("nav.projects")).toBe("Projects")
    expect(t("notFound.title")).toBe("404 - Not Found")
    expect(t("meta.ogLocale")).toBe("en_US")
  })
})

describe("getLocalizedPath", () => {
  it("returns un-prefixed paths for default locale (pt)", () => {
    expect(getLocalizedPath("/", "pt")).toBe("/")
    expect(getLocalizedPath("/projects", "pt")).toBe("/projects")
    expect(getLocalizedPath("/projects/fega", "pt")).toBe("/projects/fega")
    expect(getLocalizedPath("/#about", "pt")).toBe("/#about")
    expect(getLocalizedPath("/404", "pt")).toBe("/404")
  })

  it("returns /en prefixed paths for secondary locale (en)", () => {
    expect(getLocalizedPath("/", "en")).toBe("/en")
    expect(getLocalizedPath("/projects", "en")).toBe("/en/projects")
    expect(getLocalizedPath("/projects/fega", "en")).toBe("/en/projects/fega")
    expect(getLocalizedPath("/#about", "en")).toBe("/en#about")
    expect(getLocalizedPath("/404", "en")).toBe("/en/404")
  })
})

describe("switchLocalePath", () => {
  it("switches from pt to en preserving subpaths and hashes", () => {
    expect(switchLocalePath("/", "en")).toBe("/en")
    expect(switchLocalePath("/projects/fega", "en")).toBe("/en/projects/fega")
    expect(switchLocalePath("/#about", "en")).toBe("/en#about")
    expect(switchLocalePath("/404", "en")).toBe("/en/404")
  })

  it("switches from en to pt preserving subpaths and hashes", () => {
    expect(switchLocalePath("/en", "pt")).toBe("/")
    expect(switchLocalePath("/en/", "pt")).toBe("/")
    expect(switchLocalePath("/en/projects/fega", "pt")).toBe("/projects/fega")
    expect(switchLocalePath("/en#about", "pt")).toBe("/#about")
    expect(switchLocalePath("/en/404", "pt")).toBe("/404")
  })

  it("stays on the same path if target locale matches current path locale", () => {
    expect(switchLocalePath("/projects/fega", "pt")).toBe("/projects/fega")
    expect(switchLocalePath("/en/projects/fega", "en")).toBe("/en/projects/fega")
  })
})

describe("stripLocaleFromUrl", () => {
  it("strips en prefix from root and subpages for Umami analytics", () => {
    expect(stripLocaleFromUrl("/en")).toBe("/")
    expect(stripLocaleFromUrl("/en/")).toBe("/")
    expect(stripLocaleFromUrl("/en/projects/fega")).toBe("/projects/fega")
    expect(stripLocaleFromUrl("/en/timeline/masters")).toBe("/timeline/masters")
    expect(stripLocaleFromUrl("/en/404")).toBe("/404")
    expect(stripLocaleFromUrl("/en?search=test")).toBe("/?search=test")
    expect(stripLocaleFromUrl("/en#about")).toBe("/#about")
    expect(stripLocaleFromUrl("/projects/fega")).toBe("/projects/fega")
    expect(stripLocaleFromUrl("/")).toBe("/")
  })
})

describe("getAlternateLinks", () => {
  it("generates correct hreflang alternate links for pt root page", () => {
    const links = getAlternateLinks("/", "https://joaomanaia.dev")
    expect(links).toEqual([
      { rel: "alternate", hreflang: "pt", href: "https://joaomanaia.dev/" },
      { rel: "alternate", hreflang: "en", href: "https://joaomanaia.dev/en" },
      { rel: "alternate", hreflang: "x-default", href: "https://joaomanaia.dev/" },
    ])
  })

  it("generates correct hreflang alternate links for en subpage", () => {
    const links = getAlternateLinks("/en/projects/fega", "https://joaomanaia.dev")
    expect(links).toEqual([
      { rel: "alternate", hreflang: "pt", href: "https://joaomanaia.dev/projects/fega" },
      { rel: "alternate", hreflang: "en", href: "https://joaomanaia.dev/en/projects/fega" },
      { rel: "alternate", hreflang: "x-default", href: "https://joaomanaia.dev/projects/fega" },
    ])
  })
})
