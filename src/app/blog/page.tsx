import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export const metadata = { title: "Journal" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="project project-vertical">
      <h1>Journal</h1>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <p key={post.slug} style={{ marginBottom: 15 }}>
            <Link href={`/blog/${post.slug}`}>{post.title.toLowerCase()}</Link>
          </p>
        ))
      )}
    </div>
  );
}
