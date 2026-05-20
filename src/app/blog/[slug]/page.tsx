import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/content";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post?.title ?? "Post" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <div className="project project-vertical">
      <p style={{ marginBottom: 15 }}>
        <Link href="/blog">← journal</Link>
      </p>
      <h1>{post.title}</h1>
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt=""
          width={1200}
          height={675}
          style={{ marginBottom: 30, width: "100%", height: "auto" }}
        />
      )}
      <div
        className="prose-site"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
}
