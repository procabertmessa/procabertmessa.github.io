import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project is a folder: src/content/projects/<project-name>/index.md plus its images.
// The folder name becomes the page address (/projects/<project-name>/).
const projects = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(['urban-analytics', 'urban-design', 'architecture']),
      context: z.string(), // who it was for or with, e.g. "Aretian" or "UPC"
      location: z.string().optional(),
      year: z.string().optional(),
      role: z.string().optional(),
      url: z.string().url().optional(), // live project website, if any
      stack: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false), // true = hidden on the live site, visible in `npm run dev`
      cover: image().optional(), // e.g. ./01-cover.jpg (file in the same folder)
      images: z.array(z.object({ src: image(), caption: z.string().optional() })).default([]),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
