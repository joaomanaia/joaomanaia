import type { CollectionEntry } from "astro:content"
import type { Locale } from "@/i18n"

/**
 * Extracts the clean slug without locale prefix (e.g. "pt/fega" -> "fega")
 */
export function extractSlug(id: string): string {
  const parts = id.split("/")
  return parts.length > 1 ? parts.slice(1).join("/") : id
}

/**
 * Extracts the locale from an entry id (e.g. "pt/fega" -> "pt")
 */
export function extractLocale(id: string): Locale | null {
  const parts = id.split("/")
  if (parts.length > 1 && (parts[0] === "pt" || parts[0] === "en")) {
    return parts[0] as Locale
  }
  return null
}

/**
 * Filters projects collection by locale.
 */
export function filterProjectsByLocale(
  projects: CollectionEntry<"projects">[],
  locale: Locale
): CollectionEntry<"projects">[] {
  return projects.filter((p) => p.id.startsWith(`${locale}/`))
}

/**
 * Filters timeline collection by locale.
 */
export function filterTimelineByLocale(
  timeline: CollectionEntry<"timeline">[],
  locale: Locale
): CollectionEntry<"timeline">[] {
  return timeline.filter((t) => t.id.startsWith(`${locale}/`))
}

/**
 * Sorts project collection entries based on priority, timestamp, and ID.
 */
export function sortProjects(projects: CollectionEntry<"projects">[]): CollectionEntry<"projects">[] {
  return [...projects].sort((a, b) => {
    const pa = a.data.priority ?? 0
    const pb = b.data.priority ?? 0
    if (pb !== pa) return pb - pa

    const at = (a.data.updatedAt ?? a.data.createdAt)?.getTime() ?? -Infinity
    const bt = (b.data.updatedAt ?? b.data.createdAt)?.getTime() ?? -Infinity
    if (bt !== at) return bt - at

    return a.id.localeCompare(b.id)
  })
}

/**
 * Checks if a timeline entry is ongoing (its period ends with "Present"/"Presente").
 */
function isOngoing(timeline: CollectionEntry<"timeline">): boolean {
  const period = timeline.data.period?.toLowerCase() ?? ""
  return /\b(?:present|presente)\s*$/i.test(period.trim())
}

/**
 * Sorts timeline entries by order, with ongoing ("Present") entries first.
 */
export function sortTimeline(timeline: CollectionEntry<"timeline">[]): CollectionEntry<"timeline">[] {
  return [...timeline].sort((a, b) => {
    const ongoingDiff = Number(isOngoing(b)) - Number(isOngoing(a))
    if (ongoingDiff !== 0) return ongoingDiff
    return (a.data.order ?? 0) - (b.data.order ?? 0)
  })
}
