import type { Metadata, Viewport } from "next";
import { anton, archivo } from "@/lib/fonts";
import { SmoothScroll } from "@/components/smooth-scroll";
import { getGym } from "@/lib/data";
import "./globals.css";

const gym = getGym();

const TITLE = `Gimnasio en ${gym.city} | ${gym.legalName}`;
const DESCRIPTION = `Musculación, calistenia, box, kick boxing y barre integral en ${gym.city}. Equipamiento nuevo, profesores en sala y ${gym.rating} estrellas en Google. ${gym.address}.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    `gimnasio ${gym.city}`,
    `gym ${gym.city}`,
    "musculación",
    "calistenia",
    "box",
    "kick boxing",
    "barre integral",
    gym.region,
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: gym.legalName,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-AR"
      className={`${archivo.variable} ${anton.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
