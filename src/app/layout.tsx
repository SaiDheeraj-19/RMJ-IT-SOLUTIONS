import type { Metadata } from "next";
import { Inter, Instrument_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import Script from "next/script";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";

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
  title: "RMJ IT Solutions — Engineering Digital Infrastructure That Scales",
  description: "We architect and build digital systems for educational institutions, mid-size enterprises, and startups. Specialized in ERP, Cloud Infrastructure, and Custom Web Applications. Based in Kurnool, Andhra Pradesh.",
  keywords: ["Digital Infrastructure Engineering", "Campus ERP development", "Custom Web Applications", "Cloud Infrastructure Setup India", "IT Consulting Kurnool", "Scalable Software Systems"],
  authors: [{ name: "RMJ IT SOLUTIONS" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://rmjit.com",
  },
  openGraph: {
    title: "RMJ IT Solutions — Engineering Digital Infrastructure That Scales",
    description: "Architecting scalable digital systems for institutions and growth-focused businesses. No fluff, just engineering.",
    type: "website",
    url: "https://rmjit.com",
    siteName: "RMJ IT Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "RMJ IT Solutions — Digital Systems Engineering",
    description: "We replace fragmented tools with engineered infrastructure designed for performance and scalability.",
  },
  icons: {
    icon: "/icon.png",
  }
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "RMJ IT SOLUTIONS",
  "url": "https://rmjit.com",
  "logo": "https://rmjit.com/rmjit-logo.png",
  "description": "Engineering digital infrastructure and scalable systems for institutions.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kurnool",
    "addressRegion": "Andhra Pradesh",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "15.8281",
    "longitude": "78.0373"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "serviceType": ["Web Development", "Mobile App Development", "Campus ERP Systems", "Cloud Migration", "AI & Automation", "IT Consulting"],
  "priceRange": "₹₹₹",
  "sameAs": [],
  "openingHours": "Mo-Sa 09:00-18:00"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} ${dmMono.variable} scroll-smooth`}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased selection:bg-brand selection:text-white overflow-x-hidden font-sans bg-[#f5f5f5] text-[#1a1a1a]">
        <Preloader />
        <SmoothScroll>
          <div id="root-content" className="flex flex-col min-h-screen">
            {children}
          </div>
        </SmoothScroll>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
