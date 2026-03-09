"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";
import { ArrowRight, Smartphone, Zap, MonitorPlay, Infinity, Apple, Layers } from "lucide-react";

const features = [
    {
        title: "Native iOS Apps",
        desc: "High-performance applications crafted specifically for the Apple ecosystem utilizing Swift and SwiftUI.",
        icon: <Apple className="w-5 h-5" />
    },
    {
        title: "Native Android Apps",
        desc: "Robust, scalable applications built with Kotlin to perform flawlessly across all Android devices.",
        icon: <Smartphone className="w-5 h-5" />
    },
    {
        title: "Cross-Platform Frameworks",
        desc: "Efficient development using React Native or Flutter to deploy on both platforms from a single codebase.",
        icon: <Layers className="w-5 h-5" />
    },
    {
        title: "Backend API Integration",
        desc: "Secure, reliable REST and continuous GraphQL API integrations feeding your apps with real-time data.",
        icon: <MonitorPlay className="w-5 h-5" />
    },
    {
        title: "Offline Syncing Architectures",
        desc: "Applications designed to work flawlessly in low-connectivity areas by actively synchronizing local persistence layers.",
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: "UI/UX Driven Design",
        desc: "Fluid, intuitive user interfaces that strictly follow Apple HIG and Android Material Guidelines.",
        icon: <Infinity className="w-5 h-5" />
    }
];

export default function MobileAppsPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                            backgroundSize: '20px 20px',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/50 via-transparent to-[#f8fafc]" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6 block">
                            Service / Mobile Engineering
                        </span>
                        <TextReveal
                            as="h1"
                            text="iOS & Android Solutions."
                            className="text-[clamp(3.2rem,7vw,5.5rem)] font-display leading-[0.9] tracking-tighter font-bold text-[#1a1a1a] mb-6"
                        />
                        <p className="text-xl text-[#505050] max-w-xl leading-relaxed mb-8">
                            Native and cross-platform mobile apps engineered for speed, engagement, and flawless UX. We bring your vision to millions of devices.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-foreground text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-brand transition-all duration-300 shadow-xl"
                        >
                            Build Your Application
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Core Features */}
            <Section className="bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="max-w-2xl">
                            <span className="text-brand font-mono text-sm tracking-widest block mb-4 uppercase">{`// Platform Excellence`}</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] leading-tight flex-1">
                                Experiences optimized <br /> for every screen size.
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="text-brand mb-8 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-brand/5 rounded-lg flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <div className="h-px bg-stone-100 flex-1" />
                                </div>
                                <h4 className="text-xl font-display font-bold text-[#1a1a1a] mb-4 uppercase tracking-tight">{feature.title}</h4>
                                <p className="text-[#606060] leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
