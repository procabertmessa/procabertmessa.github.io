# Pablo Rocabert · personal website

Built with [Astro](https://astro.build) and published on GitHub Pages at https://procabertmessa.github.io.

## Where things live

| What | Where |
| --- | --- |
| CV facts (profile, skills, experience, education, languages) | `src/data/cv.ts` |
| Projects (one Markdown file each) | `src/content/projects/` |
| Blog posts (one Markdown file each) | `src/content/blog/` |
| CV PDFs, images, favicon | `public/` |
| Colours and fonts | `src/styles/global.css` |

## Add a blog post

Create `src/content/blog/my-post.md`:

```md
---
title: My post title
description: One sentence shown in the list.
date: 2026-11-01
tags: [Digital twins]
---

Write the post here in Markdown.
```

Push to `main` and the site rebuilds automatically. Set `draft: true` to hide a post.

## Add a project

Each project is a folder in `src/content/projects/<project-name>/` with an `index.md` and its images. The folder name becomes the address: `/projects/<project-name>/`.

**From a folder of images (easiest):**

```sh
npm run import-project -- "/path/to/09 CV Website/Projects/05 Winery" winery
```

This copies the images in file-name order (the first one becomes the cover), resizes them for the web, and fills in the text from `info.md` if the folder has one (see the project template). New projects start as drafts.

**By hand:** copy any project folder, rename it, and edit `index.md`. Useful fields:

- `category`: `urban-analytics`, `urban-design` or `architecture`. A category only shows once it has a published project.
- `context`, `role`, `location`, `year`: shown in the facts box.
- `cover` and `images`: files in the same folder, e.g. `./01-cover.jpg`, each with an optional `caption`.
- `draft: true`: hidden on the live site but visible in `npm run dev`. Change to `false` to publish.

## Reorder projects

Edit `src/data/projects.ts`:

- `projectOrder`: the order on the Projects page. Move a line up or down.
- `featuredProjects`: the projects on the home page, in order.

## Run locally

```sh
npm install
npm run dev
```
