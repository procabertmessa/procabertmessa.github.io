import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['urban-analytics', 'urban-design', 'architecture']),
    context: z.string(), // who it was for or with, e.g. "Aretian" or "Turull Sorensen Arquitectura"
    location: z.string().optional(),
    year: z.string().optional(),
    stack: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    order: z.number().default(100), // lower shows first
    featured: z.boolean().default(false),
    cover: z.string().optional(), // path under /public, e.g. /images/projects/flood/cover.jpg
    images: z.array(z.object({ src: z.string(), caption: z.string().optional() })).default([]),
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
