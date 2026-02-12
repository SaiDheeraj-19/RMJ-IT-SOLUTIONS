import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeSolve from "@/components/sections/WhatWeSolve";
import OurApproach from "@/components/sections/OurApproach";
import Capabilities from "@/components/sections/Capabilities";
import SectorsImpact from "@/components/sections/SectorsImpact";
import WhyRMJIT from "@/components/sections/WhyRMJIT";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      <Hero />
      <WhatWeSolve /> {/* Problem Section */}
      <OurApproach /> {/* Solution Section */}
      <Capabilities /> {/* Services Section */}
      <WhyRMJIT /> {/* Differentiation Section */}
      <SectorsImpact /> {/* Process Visualization */}
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
