"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Image from "next/image";
import Link from "next/link";

export default function MobileAppsPage() {
    return (
        <main className="min-h-screen bg-[#f5f5f5]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services/mobile.png"
                        alt="Android & iOS Apps"
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
                            Service / Mobile
                        </span>
                        <TextReveal
                            as="h1"
                            text="Android & iOS Apps."
                            className="text-[clamp(3rem,8vw,6rem)] font-display leading-[0.9] tracking-tighter font-bold text-[#1a1a1a] mb-6"
                        />
                        <p className="text-xl md:text-2xl text-stone-600 max-w-xl leading-relaxed mb-8">
                            Native and cross-platform mobile solutions that put your business in the palm of your users&apos; hands. Seamless performance, intuitive UX, and robust functionality.
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
                        <h3 className="text-3xl font-display font-bold mb-6 text-[#1a1a1a]">Mobile Excellence</h3>
                        <p className="text-stone-500 leading-relaxed mb-8">
                            We design and develop mobile applications that define categories. Whether you need a native iOS app, an Android powerhouse, or a unified React Native solution, we deliver pixel-perfect experiences.
                        </p>
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "iOS Development", desc: "Swift & SwiftUI native applications for Apple ecosystem." },
                            { title: "Android Development", desc: "Kotlin-based robust apps for the widest reach." },
                            { title: "Cross-Platform (React Native)", desc: "One codebase, native performance on both platforms." },
                            { title: "App Store Optimization", desc: "Strategies to rank higher and get more downloads." },
                            { title: "Enterprise Mobility", desc: "Secure internal apps for workforce productivity." },
                            { title: "UI/UX Design", desc: "Award-winning interfaces designed for touch." }
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
