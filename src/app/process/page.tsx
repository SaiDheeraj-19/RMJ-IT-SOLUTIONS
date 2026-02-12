"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import HorizontalLine from "@/components/ui/HorizontalLine";
import { ArrowRight, CheckCircle2, Cpu, Layout, Lock, Zap } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        title: "Deep Discovery & Audit",
        desc: "We don't start with a 'sales' call. We start with senior architects auditing your existing infrastructure, identifying bottlenecks, and mapping technical debt. We look at code, databases, and deployment pipelines.",
        icon: <Cpu className="w-6 h-6" />,
        outcome: "A comprehensive Technical Audit & Strategic Roadmap."
    },
    {
        title: "Architectural Mapping",
        desc: "Before a single line of code is written, we map out the entire system architecture. We solve for scalability, security, and data integrity at the blueprint stage. No fragmented tools — just integrated systems.",
        icon: <Layout className="w-6 h-6" />,
        outcome: "Scalable System Architecture diagrams & Tech Stack selection."
    },
    {
        title: "Agile Engineering Phase",
        desc: "Our engineering sprints are transparent and high-velocity. We use CI/CD pipelines to ensure you can see progress in real-time. We don't just build features; we build resilient digital assets.",
        icon: <Zap className="w-6 h-6" />,
        outcome: "Functional, high-performance modules delivered in 2-week sprints."
    },
    {
        title: "Stress Testing & Hardening",
        desc: "We push the system to its limits before launch. We perform security hardening, load testing for 10K+ concurrent users, and cross-platform validation to ensure zero friction on day one.",
        icon: <Lock className="w-6 h-6" />,
        outcome: "A battle-tested, secure, and performant production environment."
    },
    {
        title: "Handover & Optimization",
        desc: "We don't believe in vendor lock-in. We provide full documentation, technical training for your team, and a 30-day stabilization period. We stay involved for long-term health monitoring and performance tuning.",
        icon: <CheckCircle2 className="w-6 h-6" />,
        outcome: "Complete system autonomy with ongoing engineering support."
    }
];

export default function ProcessPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            {/* Hero Section */}
            <section className="min-h-[80vh] pt-40 flex flex-col justify-end pb-32 px-10 md:px-20">
                <div className="max-w-[1400px] mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                            Our Engineering Methodology
                        </span>
                        <div className="mb-12">
                            <TextReveal
                                as="h1"
                                text="Engineering"
                                className="text-[clamp(4rem,10vw,8rem)] font-display leading-[0.9] tracking-tighter font-bold"
                                delay={0.2}
                            />
                            <span className="text-[clamp(4rem,10vw,8rem)] font-display italic text-brand leading-none block mt-4 font-bold">Standardized.</span>
                        </div>
                        <p className="text-xl text-[#505050] max-w-2xl leading-relaxed">
                            We don&apos;t wing it. Every RMJ IT deployment follows a strict, repeatable engineering lifecycle designed to eliminate fragmentation and technical risk.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Process Steps */}
            <Section className="bg-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 gap-24">
                        {steps.map((step, i) => (
                            <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                                <div className="lg:col-span-1">
                                    <span className="font-mono text-sm text-brand tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="mt-8 text-[#1a1a1a]">
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="lg:col-span-5">
                                    <TextReveal
                                        as="h2"
                                        text={step.title}
                                        className="text-4xl font-display mb-8 text-[#1a1a1a] font-bold"
                                    />
                                    <p className="text-lg text-[#505050] leading-relaxed mb-8">
                                        {step.desc}
                                    </p>
                                    <div className="p-6 bg-[#f8fafc] border-l-4 border-brand rounded-r-xl">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-brand block mb-2">Outcome</span>
                                        <p className="text-lg font-medium text-[#1a1a1a] leading-relaxed">{step.outcome}</p>
                                    </div>
                                </div>
                                <div className="lg:col-span-1 flex justify-center py-12 lg:py-0">
                                    <HorizontalLine className="w-12 rotate-90 opacity-20 hidden lg:block" />
                                </div>
                                <div className="lg:col-span-5">
                                    <div className="h-64 bg-[#f1f5f9] rounded-2xl flex items-center justify-center border border-stone-100 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
                                        <span className="text-[#1a1a1a]/20 font-display font-black text-6xl rotate-[-12deg] tracking-tighter uppercase select-none">
                                            Phase {i + 1}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="bg-[#fffdf5] text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight text-[#1a1a1a]">
                        Ready to begin Phase 01?
                    </h2>
                    <p className="text-xl text-[#606060] mb-12 leading-relaxed">
                        Start with a Technical Strategy Consultation. Let&apos;s map out your org&apos;s engineering roadmap together.
                    </p>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 px-12 py-6 bg-[#1a1a1a] text-white rounded-full text-sm uppercase tracking-widest font-black hover:bg-brand transition-all duration-300 shadow-2xl"
                    >
                        Schedule Strategy Call
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
