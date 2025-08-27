import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My AI Lab - Lightweight AI for the Future",
  description: "Portfolio website for My AI Lab, showcasing innovative AI projects and research.",
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "Research", "Portfolio"],
  authors: [{ name: "My AI Lab" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {/* Organic, Human Background for Entire Page */}
        <div className="organic-bg">
          <div className="organic-layer-1" />
          <div className="organic-layer-2" />
          <div className="organic-layer-3" />
        </div>
        
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
