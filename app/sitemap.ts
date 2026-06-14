import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = [
  "",
  "/bat-dau-tai-day",
  "/bat-dau-tai-day/danh-gia-muc-do-hoi-phuc",
  "/bat-dau-tai-day/audio-thu-gian-mien-phi",
  "/ve-retour",
  "/nhip-hoi-phuc",
  "/chung-toi-dong-hanh-cung-ai",
  "/cau-chuyen-hoi-phuc",
  "/ve-hong-anh",
  "/goc-chia-se",
  "/tham-gia-retour",
  "/lien-he"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
