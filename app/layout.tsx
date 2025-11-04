import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Made4Me – AI Molecular Beauty Lab | Bespoke Cosmetics for Chinese Skin",
  description: "Redefining sustainable cosmetics with AI-driven molecular skin science. Made4Me combines AI, TCM, and clean beauty to create bespoke formulations for East Asian skin.",
  keywords: ["AI cosmetics", "TCM", "clean beauty", "active ingredients", "Macao startup", "Chinese skin", "molecular beauty", "sustainable cosmetics", "ESG beauty"],
  openGraph: {
    title: "Made4Me – AI Molecular Beauty Lab",
    description: "Redefining sustainable cosmetics with AI-driven molecular skin science",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
