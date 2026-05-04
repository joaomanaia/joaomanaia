import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { defineCollection, reference } from "astro:content"

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Higher priority floats to the top (e.g. your "best" projects)
    priority: z.number().int().nonnegative().default(0),
    // Timestamps used for sorting / display
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    // Tags can be omitted or empty
    tags: z.array(z.string()).default([]),
    // Keep for backwards-compatibility with existing content (can be removed later)
    order: z.number().int().positive().optional(),
    featured: z.boolean().default(true),
    related: z.array(reference("projects")).default([]),
    links: z
      .array(
        z.object({
          name: z.string(),
          url: z.url(),
          variant: z
            .enum(["default", "outline", "secondary", "ghost", "destructive", "link"])
            .default("default"),
        })
      )
      .default([]),
  }),
})

export const collections = { projects }
