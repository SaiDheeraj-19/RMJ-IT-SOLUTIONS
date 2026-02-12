import type { Metadata } from "next";
import { Inter, Instrument_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import Script from "next/script";

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
  title: "RMJ IT Solutions — Web Apps, Mobile Apps & Campus ERP for Institutions",
  description: "We build web platforms, mobile apps, and campus ERP systems for universities, government agencies, and enterprises. 15+ institutions served. Free 14-day technical audit. Based in Kurnool, Andhra Pradesh.",
  keywords: ["IT company Kurnool", "campus ERP development", "university web portal", "mobile app development India", "cloud migration services", "AI automation India", "digital campus solutions", "student portal development", "enterprise web application", "government IT services"],
  authors: [{ name: "RMJ IT Solutions Pvt Ltd" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://rmjit.com",
  },
  openGraph: {
    title: "RMJ IT Solutions — Web Apps, Mobile Apps & Campus ERP",
    description: "15+ institutions trust us to build and operate their critical technology. Free 14-day audit. No lock-in contracts.",
    type: "website",
    url: "https://rmjit.com",
    siteName: "RMJ IT Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "RMJ IT Solutions — Campus Technology That Works",
    description: "We build web platforms, mobile apps, and campus ERP systems. 15+ institutions. Free 14-day audit.",
  },
  icons: {
    icon: "/icon.png",
  },
  other: {
    "geo.region": "IN-AP",
    "geo.placename": "Kurnool",
  }
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "RMJ IT Solutions Pvt Ltd",
  "url": "https://rmjit.com",
  "logo": "https://rmjit.com/rmjit-logo.png",
  "description": "We build web platforms, mobile apps, and campus ERP systems for universities, government agencies, and enterprises.",
  "telephone": "+918639756899",
  "email": "support@rmjit.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "86/326-2, Doctors Colony, Revenue Ward No 86",
    "addressLocality": "Kurnool",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "518002",
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
      </body>
    </html>
  );
}
