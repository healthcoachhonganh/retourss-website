import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
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

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Retour - Hồi phục tự nhiên",
    template: "%s | Retour"
  },
  description: site.description,
  openGraph: {
    title: "Retour - Hồi phục tự nhiên",
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
      {process.env.NODE_ENV === "production" && gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
    </html>
  );
}
