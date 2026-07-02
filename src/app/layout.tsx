import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, Fragment_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display-src",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif-src",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const mono = Fragment_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "R2 Studio AI — AI Creative Director",
  description:
    "R2 Studio AI is the practice of Riccardo, an AI creative director designing custom websites, digital products, and AI-driven solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
