"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Image from "next/image";
import Link from "next/link";

export default function WebDevelopmentPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services/web.png"
                        alt="Web Development"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/80 via-[#f8fafc]/50 to-[#f8fafc]" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6 block">
                            Service / Web
                        </span>
                        <TextReveal
                            as="h1"
                            text="Website Development."
                            className="text-[clamp(3rem,8vw,6rem)] font-display leading-[0.9] tracking-tighter font-bold text-[#1a1a1a] mb-6"
                        />
                        <p className="text-xl md:text-2xl text-stone-600 max-w-xl leading-relaxed mb-8">
                            We build high-performance, scalable, and visually stunning websites that drive growth and engagement. From corporate portals to complex web applications.
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
                        <h3 className="text-3xl font-display font-bold mb-6 text-[#1a1a1a]">Core Capabilities</h3>
                        <p className="text-stone-500 leading-relaxed mb-8">
                            Our web development process is rooted in engineering excellence and design precision. We don&apos;t just build websites; we create digital ecosystems that serve as the backbone of your digital presence.
                        </p>
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Custom Web Applications", desc: "Tailored solutions for complex business needs." },
                            { title: "E-Commerce Platforms", desc: "Scalable stores that drive sales and conversion." },
                            { title: "Corporate Websites", desc: "Professional digital identities for global brands." },
                            { title: "Progressive Web Apps", desc: "App-like experiences directly in the browser." },
                            { title: "CMS Development", desc: "Easy-to-manage content systems like Sanity & Strapi." },
                            { title: "API Integration", desc: "Seamless connections with third-party services." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-[#f8fafc] rounded-xl hover:bg-white transition-all duration-300 border border-stone-100 hover:shadow-xl">
                                <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-[#1a1a1a]">{item.title}</h4>
                                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
