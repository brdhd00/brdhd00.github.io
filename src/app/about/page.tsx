import { site } from "@/lib/site";

export const metadata = { title: "Info" };

export default function AboutPage() {
  return (
    <div className="project project-vertical">
      <h1>Info</h1>
      <p style={{ marginBottom: 30 }}>{site.about}</p>
      <p style={{ marginBottom: 15 }}>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p style={{ marginBottom: 30 }}>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer">
          {site.instagram.replace(/^https?:\/\/(www\.)?/, "")}
        </a>
      </p>
    </div>
  );
}
