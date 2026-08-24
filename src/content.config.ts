import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects — one Markdown file per project in src/content/projects/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      url: z.string().url().optional(),
      repo: z.string().url().optional(),
      tags: z.array(z.string()).default([]),
      category: z.enum(['web', 'cms', 'iot', 'ml']).default('web'),
      featured: z.boolean().default(false),
      year: z.number().optional(),
      order: z.number().default(0),
    }),
});

// Blog — added in Phase 5. Declared now so the schema is stable.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: image().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, blog };
