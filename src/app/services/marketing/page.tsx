"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Image from "next/image";
import Link from "next/link";

export default function MarketingPage() {
    return (
        <main className="min-h-screen bg-[#f5f5f5]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services/marketing.png"
                        alt="Digital Marketing"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5]/80 via-[#f5f5f5]/50 to-[#f5f5f5]" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6 block">
                            Service / Marketing
                        </span>
                        <TextReveal
                            as="h1"
                            text="Digital Marketing."
                            className="text-[clamp(3rem,8vw,6rem)] font-display leading-[0.9] tracking-tighter font-bold text-[#1a1a1a] mb-6"
                        />
                        <p className="text-xl md:text-2xl text-stone-600 max-w-xl leading-relaxed mb-8">
                            Data-driven strategies that amplify your brand and accelerate growth. We combine creativity with analytics to deliver measurable ROI.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#1a1a1a] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-brand transition-colors shadow-lg"
                        >
                            Start Project
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Details Section */}
            <Section className="bg-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <h3 className="text-3xl font-display font-bold mb-6 text-[#1a1a1a]">Growth Engines</h3>
                        <p className="text-stone-500 leading-relaxed mb-8">
                            In a crowded digital landscape, standing out requires more than just noise. It requires precision. Our marketing campaigns are engineered to target the right audience with the right message at the right time.
                        </p>
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "SEO Optimization", desc: "Rank higher on search engines and drive organic traffic." },
                            { title: "Social Media Marketing", desc: "Engage communities across all major platforms." },
                            { title: "Content Strategy", desc: "Compelling storytelling that converts visitors into customers." },
                            { title: "PPC & Performance", desc: "Paid campaigns optimized for maximum return on ad spend." },
                            { title: "Email Automation", desc: "Nurture leads with personalized automated workflows." },
                            { title: "Brand Identity", desc: "Cohesive visual and verbal branding that resonates." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors border border-stone-100">
                                <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-[#1a1a1a]">{item.title}</h4>
                                <p className="text-sm text-stone-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
