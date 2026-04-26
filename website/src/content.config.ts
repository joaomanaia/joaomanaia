import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { defineCollection, reference } from "astro:content"

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().int().positive().optional(),
    tech: z.array(z.string()),
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
