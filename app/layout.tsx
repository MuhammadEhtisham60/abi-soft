import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const viewport: Viewport = {
  themeColor: "#f5f9fc",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Nexora – Build the Future with Artificial Intelligence",
  description: "Integrate powerful AI models and automation into your products and workflows.",
  other: {
    "color-scheme": "light",
    "supported-color-schemes": "light",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: "light" }} className="light">
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </head>
      <body className={inter.className} style={{ colorScheme: "light" }}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
