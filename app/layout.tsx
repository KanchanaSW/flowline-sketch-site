import type { Metadata } from "next";
import { Architects_Daughter, Caveat, Inter, Kalam } from "next/font/google";
import { PaperGrain } from "@/components/sketch/PaperGrain";
import { PencilCursor } from "@/components/sketch/PencilCursor";
import { SketchFilter } from "@/components/sketch/SketchFilter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
  display: "swap",
});

const architects = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-architects",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowline - Project management that doesn't feel like homework",
  description:
    "Flowline turns messy to-do lists into a clear plan your whole team actually follows. No onboarding calls, no 40-tab dashboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${kalam.variable} ${architects.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">
        <SketchFilter />
        <PaperGrain />
        <PencilCursor />
        {children}
      </body>
    </html>
  );
}
