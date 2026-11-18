import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.koderfors.com"),
  title: "KoderFors – Enterprise Software, AI & Digital Solutions",
  description:
    "KoderFors engineers scalable cloud platforms, custom web and mobile applications, and intelligent AI automation for businesses worldwide.",
  openGraph: {
    title: "KoderFors – Enterprise Software, AI & Digital Solutions",
    description:
      "KoderFors engineers scalable cloud platforms, custom web and mobile applications, and intelligent AI automation for businesses worldwide.",
    url: "https://www.koderfors.com",
    siteName: "KoderFors",
    images: [
      {
        url: "/images/og-koderfors.png",
        width: 1200,
        height: 630,
        alt: "KoderFors – Enterprise Software, AI & Digital Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KoderFors – Enterprise Software, AI & Digital Solutions",
    description:
      "KoderFors engineers scalable cloud platforms, custom web and mobile applications, and intelligent AI automation for businesses worldwide.",
    images: ["/images/og-koderfors.png"],
  },
  other: {
    "color-scheme": "light",
    "supported-color-schemes": "light",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: "light" }} className="light" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <link rel="preload" as="image" href="/images/slides/slide-1.webp" type="image/webp" />
      </head>
      <body className={inter.className} style={{ colorScheme: "light" }} suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
