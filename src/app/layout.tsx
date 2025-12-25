import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "FRANKY | ARCHITECTING SECURE DIGITAL ECOSYSTEMS",
  description:
    "8-BIT DEVELOPER PORTFOLIO. EXPERTISE IN NEXT.JS, REACT, TYPESCRIPT, AND ENTERPRISE ARCHITECTURE.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Retro",
    "8-bit",
  ],
  authors: [{ name: "Franky" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixelFont.variable} font-sans scanlines`}
        style={{ fontFamily: "var(--font-pixel)" }}
      >
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
