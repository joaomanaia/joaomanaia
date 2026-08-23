import { defaultLocale, locales, ui, type Locale, type UIKey } from "./ui"

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale]?.[key] ?? ui[defaultLocale][key] ?? key
  }
}

export function getLocaleFromUrl(url: URL | string): Locale {
  const pathname = typeof url === "string" ? url : url.pathname
  const [, localeSegment] = pathname.split("/")
  if (localeSegment && locales.includes(localeSegment as Locale)) {
    return localeSegment as Locale
  }
  return defaultLocale
}

function parsePathAndSuffix(path: string): { cleanPath: string; suffix: string } {
  let cleanPath = path
  let suffix = ""

  const hashIndex = cleanPath.indexOf("#")
  if (hashIndex !== -1) {
    suffix = cleanPath.slice(hashIndex)
    cleanPath = cleanPath.slice(0, hashIndex)
  }

  const queryIndex = cleanPath.indexOf("?")
  if (queryIndex !== -1) {
    suffix = cleanPath.slice(queryIndex) + suffix
    cleanPath = cleanPath.slice(0, queryIndex)
  }

  return { cleanPath, suffix }
}

function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean)
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments.shift()
  }
  return segments.length > 0 ? `/${segments.join("/")}` : "/"
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const { cleanPath, suffix } = parsePathAndSuffix(path)
  const relativePath = stripLocalePrefix(cleanPath)

  if (locale === defaultLocale) {
    return (relativePath === "/" ? "/" : relativePath) + suffix
  }

  return (relativePath === "/" ? `/${locale}` : `/${locale}${relativePath}`) + suffix
}

export function switchLocalePath(currentPath: string, targetLocale: Locale): string {
  return getLocalizedPath(currentPath, targetLocale)
}

export function stripLocaleFromUrl(url: string): string {
  if (url === "/en" || url === "/en/") {
    return "/"
  }
  if (url.startsWith("/en/")) {
    return url.slice(3)
  }
  if (url.startsWith("/en?") || url.startsWith("/en#")) {
    return "/" + url.slice(3)
  }
  return url
}

export interface AlternateLink {
  rel: "alternate"
  hreflang: string
  href: string
}

export function getAlternateLinks(pathname: string, siteUrl: string): AlternateLink[] {
  const baseUrl = siteUrl.replace(/\/$/, "")
  const { cleanPath } = parsePathAndSuffix(pathname)
  const relativePath = stripLocalePrefix(cleanPath)

  const ptHref = `${baseUrl}${relativePath === "/" ? "/" : relativePath}`
  const enHref = `${baseUrl}/en${relativePath === "/" ? "" : relativePath}`

  return [
    { rel: "alternate", hreflang: "pt", href: ptHref },
    { rel: "alternate", hreflang: "en", href: enHref },
    { rel: "alternate", hreflang: "x-default", href: ptHref },
  ]
}
