import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer, Header } from "@/components/ui";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap"
});

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600"],
  variable: "--font-lora",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Retour - Hồi phục hệ thần kinh",
    template: "%s | Retour"
  },
  description: site.description,
  openGraph: {
    title: "Retour - Hồi phục hệ thần kinh",
    description: site.description,
    url: site.domain,
    siteName: "Retour",
    locale: "vi_VN",
    type: "website"
  },
  alternates: {
    canonical: site.domain
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${lora.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
