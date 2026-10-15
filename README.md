# Pablo Rocabert · personal website

Built with [Astro](https://astro.build) and published on GitHub Pages at https://catalan-maap.github.io.

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

Copy any file in `src/content/projects/` and change the text. The fields that matter:

- `category`: `urban-analytics`, `urban-design` or `architecture`. A category only shows on the Projects page once it has a project.
- `context`: who it was for or with (e.g. `Turull Sorensen Arquitectura`, `UPC final project`).
- `order`: lower shows first. `featured: true` also lists it on the home page.
- Images: put them in `public/images/projects/<project-name>/` and list them:

```yaml
cover: /images/projects/my-project/cover.jpg
images:
  - src: /images/projects/my-project/plan.jpg
    caption: Ground floor plan
```

## Run locally

```sh
npm install
npm run dev
```
