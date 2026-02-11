import type { Metadata } from "next";
import { Inter, Instrument_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/ui/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RMJ IT SOLUTIONS | Institutional Technology & Program Operations",
  description: "We build, enable, and operate technology-driven programs at institutional scale. Specializing in digital campus infrastructure, enterprise transformation, and high-stakes IT operations.",
  keywords: ["IT Solutions", "Digital Transformation", "ERP Integration", "Cloud Support", "Cybersecurity", "Institutional IT", "Digital Campus"],
  authors: [{ name: "RMJ IT SOLUTIONS" }],
  openGraph: {
    title: "RMJ IT SOLUTIONS | Professional IT Operations",
    description: "Global-grade digital infrastructure for organizations that cannot afford to fail.",
    type: "website",
    url: "https://rmjit.com",
    siteName: "RMJ IT Solutions PVT LTD",
  },
  twitter: {
    card: "summary_large_image",
    title: "RMJ IT SOLUTIONS | Institutional IT",
    description: "We build, enable, and operate technology-driven programs at institutional scale.",
  },
  icons: {
    icon: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} ${dmMono.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-brand selection:text-white overflow-x-hidden font-sans bg-[#f5f5f5] text-[#1a1a1a]">
        <Preloader />
        <SmoothScroll>
          <div id="root-content" className="flex flex-col min-h-screen">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
