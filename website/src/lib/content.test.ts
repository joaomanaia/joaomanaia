import { describe, it, expect } from "bun:test"
import {
  extractSlug,
  extractLocale,
  filterProjectsByLocale,
  filterTimelineByLocale,
  sortProjects,
  sortTimeline,
} from "./content"

describe("content helpers", () => {
  it("extracts slug and locale from entry id", () => {
    expect(extractSlug("pt/fega")).toBe("fega")
    expect(extractSlug("en/fega")).toBe("fega")
    expect(extractSlug("fega")).toBe("fega")

    expect(extractLocale("pt/fega")).toBe("pt")
    expect(extractLocale("en/fega")).toBe("en")
  })

  it("filters project entries strictly by locale", () => {
    const dummyProjects: any[] = [
      { id: "pt/fega", data: { title: "Fega PT" } },
      { id: "en/fega", data: { title: "Fega EN" } },
      { id: "pt/newquiz", data: { title: "NewQuiz PT" } },
    ]

    const ptProjects = filterProjectsByLocale(dummyProjects, "pt")
    expect(ptProjects.length).toBe(2)
    expect(ptProjects.map((p) => p.id)).toEqual(["pt/fega", "pt/newquiz"])

    const enProjects = filterProjectsByLocale(dummyProjects, "en")
    expect(enProjects.length).toBe(1)
    expect(enProjects[0].id).toBe("en/fega")
  })

  it("filters timeline entries strictly by locale and sorts by order", () => {
    const dummyTimeline: any[] = [
      { id: "pt/bachelors", data: { order: 2, title: "Licenciatura" } },
      { id: "pt/masters", data: { order: 1, title: "Mestrado" } },
      { id: "en/masters", data: { order: 1, title: "Masters" } },
    ]

    const ptTimeline = filterTimelineByLocale(dummyTimeline, "pt")
    const sorted = sortTimeline(ptTimeline)

    expect(sorted.length).toBe(2)
    expect(sorted[0].id).toBe("pt/masters")
    expect(sorted[1].id).toBe("pt/bachelors")
  })

  it("sorts projects by priority, updatedAt/createdAt, and id", () => {
    const dummyProjects: any[] = [
      {
        id: "pt/low-prio",
        data: { priority: 0, createdAt: new Date("2023-01-01") },
      },
      {
        id: "pt/high-prio",
        data: { priority: 100, createdAt: new Date("2021-01-01") },
      },
      {
        id: "pt/mid-prio",
        data: { priority: 10, createdAt: new Date("2023-01-01") },
      },
    ]

    const sorted = sortProjects(dummyProjects)
    expect(sorted[0].id).toBe("pt/high-prio")
    expect(sorted[1].id).toBe("pt/mid-prio")
    expect(sorted[2].id).toBe("pt/low-prio")
  })
})
