import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import WhatWeSolve from "@/components/sections/WhatWeSolve";
import OurApproach from "@/components/sections/OurApproach";
import Capabilities from "@/components/sections/Capabilities";
import SectorsImpact from "@/components/sections/SectorsImpact";
import WhyRMJIT from "@/components/sections/WhyRMJIT";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <WhatWeSolve />
      <Capabilities />
      <OurApproach />
      <WhyRMJIT />
      <SectorsImpact />
      <CTA />
      <Footer />
    </main>
  );
}
