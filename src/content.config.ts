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
      disciplines: z.array(z.enum(['data', 'urbanism', 'architecture', 'landscape'])).min(1), // shown as tags, e.g. [data, urbanism]
      context: z.string(), // who it was for or with, e.g. "Aretian" or "UPC"
      location: z.string().optional(),
      year: z.string().optional(),
      role: z.string().optional(),
      facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]), // extra facts, e.g. Programme, Structure
      url: z.string().url().optional(), // live project website, if any
      stack: z.array(z.string()).default([]),
      skills: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false), // true = hidden on the live site, visible in `npm run dev`
      cover: image().optional(), // e.g. ./01-cover.jpg (file in the same folder)
      // Data projects only (projects without the data tag use the architecture layout). How the images sit on the page: hero (cover across the page + plates grid), side (viewer beside the text), sheet (plates grid under the text).
      gallery: z.enum(['hero', 'side', 'sheet']).default('side'),
      images: z.array(z.object({ src: image(), caption: z.string().optional(), drawing: z.boolean().default(false) })).default([]), // drawing: true sits on a white sheet
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
