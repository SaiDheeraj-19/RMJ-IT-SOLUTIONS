import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import ServicesHome from "@/components/sections/ServicesHome";
import ProductHighlight from "@/components/sections/ProductHighlight";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <ServicesHome />
      <ProductHighlight />
      <WhyChooseUs />
      <FAQ />
      <CTASection />
    </>
  );
}
