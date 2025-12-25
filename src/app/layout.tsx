import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "FRANKY | Full Stack Developer - Secure Digital Ecosystems",
  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, and enterprise architecture. Building secure, high-performance digital solutions.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Enterprise Architecture",
    "Secure Systems",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Franky" }],
  creator: "Franky",
  publisher: "Franky",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frankyemm.dev",
    siteName: "Franky | Developer Portfolio",
    title: "FRANKY | Full Stack Developer",
    description:
      "Architecting secure digital ecosystems. Expertise in Next.js, React, and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FRANKY | Full Stack Developer",
    description:
      "Architecting secure digital ecosystems. Expertise in Next.js, React, and TypeScript.",
    creator: "@frankyemm",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0B0E11" />
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href="https://frankyemm.dev" />
      </head>
      <body
        className={`${pixelFont.variable} font-sans scanlines`}
        style={{ fontFamily: "var(--font-pixel)" }}
      >
        {/* Skip Link for Accessibility */}
        <a href="#hero" className="skip-link">
          SKIP TO MAIN CONTENT
        </a>

        <Navigation />
        <main id="main-content" className="relative z-10" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
