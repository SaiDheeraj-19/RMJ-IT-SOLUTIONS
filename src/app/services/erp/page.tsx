"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";
import { ArrowRight, Box, Cpu, Database, Layers, RefreshCw, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "Monolith Migration",
        desc: "We dismantle fragmented legacy tools and rebuild them into a unified, modular system that scales.",
        icon: <Layers className="w-5 h-5" />
    },
    {
        title: "Automated Data Pipelines",
        desc: "End-to-end data flow between departments with zero manual intervention or Excel-based updates.",
        icon: <RefreshCw className="w-5 h-5" />
    },
    {
        title: "Institutional ERP",
        desc: "Customized platforms for admissions, student lifecycle, and financial management for universities.",
        icon: <Box className="w-5 h-5" />
    },
    {
        title: "Enterprise Architecture",
        desc: "Designing systems that are ready for AI integration and handle high-volume transaction processing.",
        icon: <Cpu className="w-5 h-5" />
    },
    {
        title: "Data Integrity & Security",
        desc: "State-of-the-art encryption at rest and in transit, ensuring institutional data is never compromised.",
        icon: <ShieldCheck className="w-5 h-5" />
    },
    {
        title: "Scalable Infrastructure",
        desc: "Engineered to handle 10K+ concurrent users with sub-200ms response times globally.",
        icon: <Database className="w-5 h-5" />
    }
];

export default function ERPPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-stone-100 opacity-20"
                        style={{
                            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/50 via-[#f8fafc]/20 to-[#f8fafc]" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6 block">
                            Service / Systems Engineering
                        </span>
                        <TextReveal
                            as="h1"
                            text="Digital Systems Engineering."
                            className="text-[clamp(3.2rem,7vw,5.5rem)] font-display leading-[0.9] tracking-tighter font-bold text-[#1a1a1a] mb-6"
                        />
                        <p className="text-xl text-[#505050] max-w-xl leading-relaxed mb-8">
                            We bridge the gap between business operations and technical scalability. We replace fragmented tools with unified digital infrastructure.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-brand transition-all duration-300 shadow-xl"
                        >
                            Schedule Technical Call
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Core Capabilities */}
            <Section className="bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-20 max-w-2xl">
                        <span className="text-brand font-mono text-sm tracking-widest block mb-4 uppercase">{`// CORE CAPABILITIES`}</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] leading-tight mb-8">
                            How we re-engineer your operations.
                        </h2>
                        <p className="text-lg text-[#606060] leading-relaxed">
                            Generic software doesn&apos;t solve unique institutional problems. We build systems that are architected around your specific workflows, ensuring long-term autonomy and performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-[#f8fafc] border border-stone-100 rounded-3xl hover:border-brand/30 transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand mb-8 shadow-sm group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-display font-bold text-[#1a1a1a] mb-4">{feature.title}</h4>
                                <p className="text-[#606060] leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Industrial Result Block */}
            <Section className="bg-[#f1f5f9]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-6">
                        <div className="relative h-[400px] bg-white rounded-3xl overflow-hidden border border-stone-200">
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
                            <div className="absolute inset-8 border border-brand/10 p-8 flex flex-col justify-between">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-brand">Proof of Engineering</span>
                                <div className="space-y-4">
                                    <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "94%" }}
                                            transition={{ duration: 2, delay: 0.5 }}
                                            className="h-full bg-brand"
                                        />
                                    </div>
                                    <p className="text-sm font-bold text-[#1a1a1a]">94% Reduction in Manual Data Entry</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 2, delay: 0.8 }}
                                            className="h-full bg-brand"
                                        />
                                    </div>
                                    <p className="text-sm font-bold text-[#1a1a1a]">0% System Downtime in 24 Months</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <h3 className="text-4xl font-display font-bold text-[#1a1a1a] mb-8">Performance that is engineered, not promised.</h3>
                        <p className="text-lg text-[#505050] leading-relaxed mb-8">
                            We don&apos;t just deliver code; we deliver measurable institutional efficiency. Our systems are built to eliminate the errors, delays, and security gaps of fragmented software.
                        </p>
                        <Link href="/contact" className="text-brand font-black uppercase text-xs tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                            Talk To An Architect <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
