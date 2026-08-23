import { describe, it, expect, beforeAll } from "bun:test"
import * as fs from "node:fs"
import * as path from "node:path"

const distDir = path.resolve(__dirname, "../dist")

describe("static build artifacts verification", () => {
  beforeAll(() => {
    expect(fs.existsSync(distDir)).toBe(true)
  })

  it("generates valid Portuguese homepage at /index.html", () => {
    const html = fs.readFileSync(path.join(distDir, "index.html"), "utf-8")
    expect(html).toContain('<html lang="pt"')
    expect(html).toContain('property="og:locale" content="pt_PT"')
    expect(html).toContain('rel="alternate" hreflang="pt" href="https://joaomanaia.dev/"')
    expect(html).toContain('rel="alternate" hreflang="en" href="https://joaomanaia.dev/en"')
    expect(html).toContain('rel="alternate" hreflang="x-default" href="https://joaomanaia.dev/"')
    expect(html).toContain("Início")
    expect(html).toContain("Sobre")
    expect(html).toContain("Percurso")
    expect(html).toContain("Projetos")
    expect(html).toContain("Trabalho em Destaque")
    expect(html).toContain("Percurso Académico e Educacional")
  })

  it("generates valid English homepage at /en/index.html", () => {
    const html = fs.readFileSync(path.join(distDir, "en/index.html"), "utf-8")
    expect(html).toContain('<html lang="en"')
    expect(html).toContain('property="og:locale" content="en_US"')
    expect(html).toContain('rel="alternate" hreflang="pt" href="https://joaomanaia.dev/"')
    expect(html).toContain('rel="alternate" hreflang="en" href="https://joaomanaia.dev/en"')
    expect(html).toContain('rel="alternate" hreflang="x-default" href="https://joaomanaia.dev/"')
    expect(html).toContain("Home")
    expect(html).toContain("About")
    expect(html).toContain("Timeline")
    expect(html).toContain("Projects")
    expect(html).toContain("Featured Work")
    expect(html).toContain("Academic &amp; Educational Background")
  })

  it("generates localized Portuguese project pages", () => {
    const html = fs.readFileSync(path.join(distDir, "projects/fega/index.html"), "utf-8")
    expect(html).toContain('<html lang="pt"')
    expect(html).toContain('property="og:locale" content="pt_PT"')
    expect(html).toContain(
      'rel="alternate" hreflang="pt" href="https://joaomanaia.dev/projects/fega"'
    )
    expect(html).toContain(
      'rel="alternate" hreflang="en" href="https://joaomanaia.dev/en/projects/fega"'
    )
    expect(html).toContain(
      'rel="alternate" hreflang="x-default" href="https://joaomanaia.dev/projects/fega"'
    )
    expect(html).toContain("Rede social desenvolvida em Next.js")
  })

  it("generates localized English project pages", () => {
    const html = fs.readFileSync(path.join(distDir, "en/projects/fega/index.html"), "utf-8")
    expect(html).toContain('<html lang="en"')
    expect(html).toContain('property="og:locale" content="en_US"')
    expect(html).toContain(
      'rel="alternate" hreflang="pt" href="https://joaomanaia.dev/projects/fega"'
    )
    expect(html).toContain(
      'rel="alternate" hreflang="en" href="https://joaomanaia.dev/en/projects/fega"'
    )
    expect(html).toContain(
      'rel="alternate" hreflang="x-default" href="https://joaomanaia.dev/projects/fega"'
    )
    expect(html).toContain("Next.js social network app")
  })

  it("generates localized 404 pages with home recovery links", () => {
    const pt404 = fs.readFileSync(path.join(distDir, "404.html"), "utf-8")
    expect(pt404).toContain('<html lang="pt"')
    expect(pt404).toContain("404 - Não Encontrado")
    expect(pt404).toContain("Voltar ao Início")
    expect(pt404).toContain('href="/"')

    const en404 = fs.readFileSync(path.join(distDir, "en/404/index.html"), "utf-8")
    expect(en404).toContain('<html lang="en"')
    expect(en404).toContain("404 - Not Found")
    expect(en404).toContain("Back to Home")
    expect(en404).toContain('href="/en"')
  })
})
