import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeSolve from "@/components/sections/WhatWeSolve";
import OurApproach from "@/components/sections/OurApproach";
import Capabilities from "@/components/sections/Capabilities";
import WhyRMJIT from "@/components/sections/WhyRMJIT";
import SecurityTrust from "@/components/sections/SecurityTrust";
import SectorsImpact from "@/components/sections/SectorsImpact";
import FAQ from "@/components/sections/FAQ";
import LeadershipPhilosophy from "@/components/sections/LeadershipPhilosophy";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <Navbar />
      <Hero />
      <WhatWeSolve /> {/* Problem Section */}
      <OurApproach /> {/* Solution Section */}
      <Capabilities /> {/* Services Section */}
      <WhyRMJIT /> {/* Differentiation Section */}
      <SecurityTrust /> {/* Trust Section */}
      <SectorsImpact /> {/* Process Visualization */}
      <LeadershipPhilosophy />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
