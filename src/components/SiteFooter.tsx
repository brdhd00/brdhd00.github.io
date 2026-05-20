import { site } from "@/lib/site";

const socialLinks = [
  { label: "instagram", href: site.instagram },
  { label: "soundcloud", href: site.soundcloud },
  { label: "bandcamp", href: site.bandcamp },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <ul>
        {socialLinks.map(({ label, href }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
