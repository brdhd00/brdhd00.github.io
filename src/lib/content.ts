import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentRoot = path.join(process.cwd(), "content");

export type Artwork = {
  slug: string;
  title: string;
  date: string;
  medium?: string;
  description?: string;
  image: string;
  featured?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  coverImage?: string;
  content: string;
};

function readMarkdownDir<T>(
  dir: string,
  map: (slug: string, data: Record<string, unknown>, body: string) => T
): T[] {
  const fullPath = path.join(contentRoot, dir);
  if (!fs.existsSync(fullPath)) return [];

  return fs
    .readdirSync(fullPath)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(fullPath, filename), "utf8");
      const { data, content } = matter(raw);
      return map(slug, data as Record<string, unknown>, content);
    })
    .sort((a, b) => {
      const dateA = (a as { date: string }).date;
      const dateB = (b as { date: string }).date;
      return dateB.localeCompare(dateA);
    });
}

export function getAllArtwork(): Artwork[] {
  return readMarkdownDir("gallery", (slug, data) => ({
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    medium: data.medium ? String(data.medium) : undefined,
    description: data.description ? String(data.description) : undefined,
    image: String(data.image ?? `/images/artwork/${slug}.jpg`),
    featured: Boolean(data.featured),
  }));
}

export function getArtwork(slug: string): Artwork | undefined {
  return getAllArtwork().find((a) => a.slug === slug);
}

export function getFeaturedArtwork(limit = 6): Artwork[] {
  const featured = getAllArtwork().filter((a) => a.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return getAllArtwork().slice(0, limit);
}

export function getAllPosts(): BlogPost[] {
  return readMarkdownDir("blog", (slug, data, body) => ({
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: data.excerpt ? String(data.excerpt) : undefined,
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    content: body,
  }));
}

export async function getPost(slug: string): Promise<(BlogPost & { html: string }) | undefined> {
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return undefined;

  const processed = await remark().use(html).process(post.content);
  return { ...post, html: processed.toString() };
}
