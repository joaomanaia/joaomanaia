import type { CollectionEntry } from "astro:content"

/**
 * Sorts project collection entries based on priority, timestamp, and ID.
 */
export function sortProjects(projects: CollectionEntry<"projects">[]) {
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
