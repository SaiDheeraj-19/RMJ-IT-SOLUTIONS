"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";
import { ArrowUpRight, Activity, Shield, Layers, ArrowRight } from "lucide-react";

const pillars = [
    {
        title: "Cut Admin Work by 60%",
        description: "We replace spreadsheet-driven operations with automated workflows. Admissions, fee collection, attendance, and exam management — digitized end-to-end. Your staff focuses on students, not data entry.",
        icon: Activity,
        stat: "60%",
        statLabel: "Less Manual Work"
    },
    {
        title: "Handle 10,000+ Users Without Crashing",
        description: "Our platforms are load-tested at 2x expected traffic before launch. Built on AWS/GCP with automated failover and real-time monitoring. When exam results drop at midnight, the system holds.",
        icon: Layers,
        stat: "<200ms",
        statLabel: "Response Time"
    },
    {
        title: "Security Built In, Not Bolted On",
        description: "Every deployment ships with AES-256 encryption, role-based access, MFA, and automated vulnerability scanning in CI/CD. We design for SOC2 and ISO 27001 readiness from sprint one.",
        icon: Shield,
        stat: "0",
        statLabel: "Security Incidents"
    }
];

export default function WhoWeAre() {
    return (
        <Section className="bg-[#f5f5f5] pt-32 pb-32 relative overflow-hidden">
            {/* Background Gradient for subtle depth */}
            <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-stone-200/40 rounded-full blur-[120px] -z-10 opacity-60" />

            <div className="max-w-[1200px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="mb-0 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-12 block">
                            What You Actually Get
                        </span>
                    </div>

                    <div className="max-w-[1000px] mb-16">
                        <TextReveal
                            as="h2"
                            text="We don't sell technology. We solve the problems that keep your operations stuck."
                            className="text-[clamp(2.5rem,5vw,4.5rem)] font-display leading-[1.05] font-bold tracking-tight text-[#1a1a1a]"
                            delay={0.2}
                        />
                        <div className="mt-8 max-w-2xl">
                            <p className="text-xl text-[#606060] leading-relaxed">
                                Most IT agencies hand you code and leave. We stay until the system runs <span className="text-[#1a1a1a] font-bold italic">without us</span> — then we offer a retainer to keep it that way. Here&apos;s what every engagement delivers:
                            </p>
                        </div>
                    </div>

                    {/* 3 Outcome Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-stone-200 pt-16">
                        {pillars.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (index * 0.1), duration: 0.8 }}
                                className="group relative p-10 bg-white border border-stone-100 rounded-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-brand/20 transition-all duration-500 flex flex-col justify-between h-full"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-stone-50 rounded-lg group-hover:bg-brand/10 transition-colors">
                                            <item.icon size={24} className="text-[#1a1a1a] group-hover:text-brand transition-colors" />
                                        </div>
                                        <ArrowUpRight size={18} className="text-stone-300 group-hover:text-brand transition-colors opacity-0 group-hover:opacity-100" />
                                    </div>

                                    <h3 className="text-xl font-display font-bold text-[#1a1a1a] mb-4 group-hover:text-brand transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-[15px] text-[#606060] leading-relaxed mb-8">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex items-end gap-2 pt-6 border-t border-stone-50">
                                    <span className="text-3xl font-display font-bold text-[#1a1a1a] leading-none">
                                        {item.stat}
                                    </span>
                                    <span className="text-[10px] uppercase font-bold text-stone-400 mb-1 ml-1 tracking-wider">
                                        {item.statLabel}
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-brand group-hover:w-full transition-all duration-700 ease-out" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Mid-page CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 flex flex-col sm:flex-row items-center gap-6"
                    >
                        <Link href="/contact" id="whatwesolve-cta" className="group inline-flex items-center gap-3 px-8 py-4 bg-brand text-white rounded-full text-sm font-bold hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg">
                            See If We&apos;re the Right Fit
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <span className="text-sm text-stone-400">Free 14-day audit · No commitment required</span>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
}
