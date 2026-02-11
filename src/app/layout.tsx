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
  title: "RMJ IT Solutions | Institutional Scaling & Implementation",
  description: "Bespoke IT infrastructure and program operations for large-scale institutional initiatives. Precision implementation for sustainable impact.",
  openGraph: {
    title: "RMJ IT Solutions | Institutional Scaling",
    description: "Architecting the future of institutional infrastructure.",
    url: "https://rmjit.com",
    siteName: "RMJ IT Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RMJ IT Solutions",
    description: "Architecting the future of institutional infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${instrument.variable} ${dmMono.variable} font-sans antialiased bg-[#f5f5f5] text-[#202020]`}
      >
        <Preloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
