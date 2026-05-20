import Link from "next/link";
import { getAllArtwork } from "@/lib/content";
import { site } from "@/lib/site";
import { NavLinks } from "./NavLinks";

export function SiteNav() {
  const artwork = getAllArtwork();

  return (
    <nav>
      <h1>
        <Link href="/">{site.name}</Link>
      </h1>
      <NavLinks artwork={artwork} />
    </nav>
  );
}
