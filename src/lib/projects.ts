import { getCollection, type CollectionEntry } from 'astro:content';
import { projectOrder, featuredProjects } from '../data/projects';

export type Project = CollectionEntry<'projects'>;

// Drafts are visible while running `npm run dev`, hidden on the live site.
const showDrafts = import.meta.env.DEV;

const rank = (id: string) => {
  const i = projectOrder.indexOf(id);
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
};

export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => showDrafts || !data.draft);
  return all.sort((a, b) => rank(a.id) - rank(b.id) || a.data.title.localeCompare(b.data.title));
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getProjects();
  return featuredProjects
    .map((id) => all.find((p) => p.id === id))
    .filter((p): p is Project => Boolean(p));
}

/** Sheet number for a project, from its position in the published order: P-01, P-02 ... */
export function sheetNumber(all: Project[], id: string): string {
  const i = all.findIndex((p) => p.id === id);
  return `P-${String(i + 1).padStart(2, '0')}`;
}
