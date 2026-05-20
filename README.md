# Website

A simple portfolio website for an artist: gallery, journal (blog), and about page. Content lives in markdown files so you can add work and posts without touching the layout code.

## Quick start

1. Install [Node.js](https://nodejs.org/) (LTS) if you don’t have it.
2. In this folder:

```bash
cd ~/website
npm install
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Customize your site

Edit **`src/lib/site.ts`** — studio name, artist name, tagline, email, Instagram, and bio.

## Add artwork

1. Put your image in `public/images/artwork/` (JPG, PNG, or WebP).
2. Create a file in `content/gallery/` named `my-piece.md`:

```markdown
---
title: My Piece Title
date: 2025-05-01
medium: Oil on canvas, 30 × 40 in
featured: true
image: /images/artwork/my-piece.jpg
description: Optional short caption for the detail page.
---
```

Set `featured: true` to show the piece on the home page.

## Add a blog post

1. Optional cover image in `public/images/blog/`.
2. Create `content/blog/my-post.md`:

```markdown
---
title: Post title
date: 2025-05-01
excerpt: Short summary for the listing page.
coverImage: /images/blog/my-post.jpg
---

Your post body in **markdown**. Use headings, lists, and links.

![In-post image](/images/blog/process-shot.jpg)
```

## Deploy online (free)

**Vercel** (recommended for Next.js):

1. Push this folder to GitHub.
2. Sign up at [vercel.com](https://vercel.com), import the repo, deploy.

Every `git push` can auto-update the live site. You update content by editing markdown files and images, then pushing to GitHub.

## Project structure

| Path | Purpose |
|------|---------|
| `content/gallery/` | One `.md` file per artwork |
| `content/blog/` | One `.md` file per journal post |
| `public/images/` | Image files referenced in content |
| `src/lib/site.ts` | Site-wide text and links |
| `src/app/` | Pages (home, gallery, blog, about) |

## Optional next steps

- Replace placeholder SVGs with real photos of the work.
- Connect a custom domain in Vercel.
- Add a contact form (e.g. Formspree or Resend).
- Add a visual CMS (Keystatic or Sanity) if you prefer editing in a browser instead of markdown files.
