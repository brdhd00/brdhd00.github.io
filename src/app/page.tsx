import Image from "next/image";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="homepage" id="homepage">
      <Image
        src={site.homepageImage}
        alt=""
        width={1200}
        height={900}
        priority
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
