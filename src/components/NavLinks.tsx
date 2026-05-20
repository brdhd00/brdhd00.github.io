"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { Artwork } from "@/lib/content";

export function NavLinks({ artwork }: { artwork: Artwork[] }) {
  const pathname = usePathname();
  const isGalleryIndex = pathname === "/gallery";
  const isArtworkPage = pathname.startsWith("/gallery/");
  const isInfoPage = pathname === "/about";
  const activeSlug = isArtworkPage ? pathname.split("/").pop() : null;

  useEffect(() => {
    document.body.className = "";
    if (isGalleryIndex) document.body.classList.add("works-index");
    if (isArtworkPage) document.body.classList.add("artwork-page");
    if (isInfoPage) document.body.classList.add("info-page");
    return () => {
      document.body.className = "";
    };
  }, [isGalleryIndex, isArtworkPage, isInfoPage]);

  return (
    <ul className="main-nav">
      <li>
        <Link
          href="/gallery"
          className={pathname.startsWith("/gallery") ? "active" : undefined}
        >
          works
        </Link>
      </li>
      <li>
        <Link href="/about" className={isInfoPage ? "active" : undefined}>
          info
        </Link>
      </li>

      {(isGalleryIndex || isArtworkPage) && (
        <>
          <li className="nav-spacer" aria-hidden="true" />
          {artwork.map((piece) => (
            <li key={piece.slug} className="works-page-only">
              <Link
                href={`/gallery/${piece.slug}`}
                className={activeSlug === piece.slug ? "active" : undefined}
              >
                {piece.title.toLowerCase()}
              </Link>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
