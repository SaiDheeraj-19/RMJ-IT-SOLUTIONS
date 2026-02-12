"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import HorizontalLine from "@/components/ui/HorizontalLine";
import Link from "next/link";
import { ArrowRight, CheckCircle, Database, ShieldCheck, Zap } from "lucide-react";

const capabilitySuites = [
    {
        title: "Digital Systems Engineering",
        result: "Replaced 5 separate tools with 1 integrated platform for a university with 8,000 students.",
        desc: "We build student portals, admin dashboards, and internal platforms that handle 10K+ concurrent users. If your systems are slow or fragmented, we build the unified replacement.",
        points: ["Scalable Architecture", "RBAC & Institutional Security", "Sub-200ms API Performance", "Technical Logic Consolidation"]
    },
    {
        title: "Cloud & Infrastructure Setup",
        result: "Production deployment with 100% uptime recorded over 24 consecutive months.",
        desc: "High-trust infrastructure built on AWS or GCP. We design for zero single points of failure, automated failover, and high-security VPC environments.",
        points: ["Infrastructure as Code (Terraform)", "Automated CI/CD Pipelines", "Vulnerability Assessment", "Hardened Database Schemas"]
    },
    {
        title: "Custom Web Applications",
        result: "One enterprise saved 400+ staff hours per month through workflow automation.",
        desc: "Focus on high-performance, secure, and interactive portals—not just static brochure sites. We use Next.js and industry-standard security protocols.",
        points: ["Production-Ready Next.js", "Server-Side Rendering for Speed", "OWASP Top 10 Hardening", "Deep Accessibility Compliance"]
    },
    {
        title: "AI & Process Automation",
        result: "Verify documents in 4 hours instead of 3 weeks (99.2% verified accuracy).",
        desc: "Custom ML models for institutional document processing, predictive analytics, and process automation. We build models on your private institutional data.",
        points: ["Document Digitization OCR", "Predictive Lifecycle Models", "Workflow Guardrail Logic", "Private Data Inference"]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white text-[#0f172a]">
            <Navbar />

            {/* Hero Section */}
            <section className="min-h-[80vh] pt-40 flex flex-col justify-end pb-32 px-10 md:px-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#f8fafc] z-0" />
                <div className="absolute bottom-[10%] left-[-5%] w-[50vw] h-[50vw] bg-indigo-50 rounded-full blur-[150px] opacity-40 z-0" />

                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-12 block font-mono">
                            {`// OUR CAPABILITIES`}
                        </span>
                        <div className="mb-16">
                            <TextReveal
                                as="h1"
                                text="What We Build."
                                className="text-[clamp(4rem,10vw,8rem)] font-display leading-[0.9] tracking-tighter font-bold text-slate-900"
                                delay={0.2}
                            />
                            <span className="text-[clamp(4rem,10vw,8rem)] font-display italic text-brand leading-[0.9] block mt-4 font-bold tracking-tight">Engineering institutional certainty.</span>
                        </div>
                        <p className="text-2xl text-slate-500 max-w-2xl leading-relaxed font-normal">
                            Every project starts with a Strategic Technical Consultation. We blueprint the architecture, define the benchmarks, and provide a fixed-scope roadmap.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Capability Suite List */}
            {capabilitySuites.map((suite, i) => (
                <Section key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}>
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                        {/* Numbering */}
                        <div className="lg:col-span-1 hidden lg:block">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-brand font-black text-sm font-mono border border-indigo-100">
                                0{i + 1}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-6 space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                                    {suite.title}
                                </h2>
                                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                    {suite.desc}
                                </p>
                            </div>

                            {/* Result Callout */}
                            <div className="p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-indigo-500/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 text-brand/10 group-hover:text-brand/20 transition-colors">
                                    <ShieldCheck className="w-12 h-12" />
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand mb-6 block font-mono">
                                    {`// PROVEN OUTCOME`}
                                </span>
                                <p className="text-2xl font-display font-bold text-slate-900 leading-tight tracking-tight">
                                    {suite.result}
                                </p>
                            </div>
                        </div>

                        {/* Technical Points */}
                        <div className="lg:col-span-1" />
                        <div className="lg:col-span-4 grid grid-cols-1 gap-6 pt-4">
                            {suite.points.map((point, j) => (
                                <motion.div
                                    key={j}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + j * 0.1 }}
                                    className="flex items-center gap-6 py-6 border-b border-slate-200 group"
                                >
                                    <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                                        {j === 0 ? <Database size={16} /> : j === 1 ? <ShieldCheck size={16} /> : j === 2 ? <Zap size={16} /> : <CheckCircle size={16} />}
                                    </div>
                                    <span className="text-xs uppercase tracking-[0.2em] font-black text-slate-800 font-mono">{point}</span>
                                </motion.div>
                            ))}

                            <div className="pt-8">
                                <Link
                                    href="/contact"
                                    className="text-brand font-black uppercase text-[10px] tracking-widest flex items-center gap-3 hover:gap-6 transition-all"
                                >
                                    REQUEST SPECIFIC CASE STUDY <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Section>
            ))}

            {/* Bottom CTA */}
            <section className="bg-white py-40 border-t border-slate-100 relative overflow-hidden">
                {/* Architectural Grid */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#4f46e5 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="max-w-[1400px] mx-auto text-center px-10 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-display font-bold text-slate-900 mb-8 leading-[0.95] tracking-tighter">
                            Unsure where <br /> <span className="text-brand italic">to begin?</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto font-medium">
                            Start with a Strategic Technical Call. We&apos;ll assess your bottlenecks, audit your stack, and deliver an engineering roadmap.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white text-xs uppercase tracking-[0.2em] font-black rounded-full hover:bg-brand transition-all duration-500 shadow-2xl shadow-slate-900/10"
                        >
                            Schedule Consultation <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
