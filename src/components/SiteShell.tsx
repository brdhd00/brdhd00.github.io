import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="content">
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  );
}
