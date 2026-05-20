import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllArtwork, getArtwork } from "@/lib/content";

export function generateStaticParams() {
  return getAllArtwork().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  return { title: artwork?.title ?? "Work" };
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  if (!artwork) notFound();

  return (
    <div className="project project-vertical">
      {artwork.description && (
        <p style={{ marginBottom: 60 }}>{artwork.description}</p>
      )}
      <Image
        src={artwork.image}
        alt={artwork.title}
        width={1200}
        height={1500}
        style={{ marginBottom: 60, width: "100%", height: "auto" }}
        priority
      />
      {artwork.medium && <p style={{ marginBottom: 60 }}>{artwork.medium}</p>}
    </div>
  );
}
