import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Prism — Intelligent AI Photo Sharing",
  description:
    "Step into the tech-noir future of photo sharing with Prism’s AI-enhanced, privacy-first platform."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-void text-white`}>
        {children}
      </body>
    </html>
  );
}
