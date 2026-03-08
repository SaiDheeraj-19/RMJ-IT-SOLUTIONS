"use client";

import { motion } from "framer-motion";
import {
    Globe,
    Smartphone,
    Layout,
    Megaphone,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const detailedServices = [
    {
        title: "Web Engineering",
        icon: Globe,
        description: "Custom enterprise platforms and scalable SaaS architectures built with modern technical stacks. We transform complex workflows into high-performance web systems.",
        benefits: ["SaaS Architecture Design", "Scalable Backend Engineering", "Next.js & React Frontends", "Automated Cloud Deployment"],
        useCases: ["Enterprise ERPs", "Project Portals", "Inventory Systems"]
    },
    {
        title: "Digital Campus",
        icon: Layout,
        description: "A comprehensive educational platform that offers a range of tools and modules designed to streamline academic management, enhance student engagement, and improve overall educational outcomes.",
        benefits: ["Attendance Management", "Academic Records", "Placement Portal", "Training Schedules", "Progress Reports"],
        useCases: ["Colleges", "Universities", "Training Institutes"]
    },
    {
        title: "Native Mobile Platforms",
        icon: Smartphone,
        description: "Engineered mobile experiences for iOS and Android that prioritize performance and native fidelity. We build apps that feel integrated into the user's daily life.",
        benefits: ["Native Performance optimization", "Swift & Kotlin expertise", "Offline-first architectures", "Secure Biometric access"],
        useCases: ["Consumer Apps", "Field Service Tools", "Fleet Management"]
    },
    {
        title: "Strategic UI/UX Design",
        icon: Layout,
        description: "User-centric design systems that convert complex business logic into intuitive, high-converting digital interfaces. We design for clarity and scale.",
        benefits: ["Component-based Systems", "Interactive Prototyping", "User Research & Testing", "Brand Integration"],
        useCases: ["Dashboard UI", "Consumer Platforms", "Brand Guidelines"]
    },
    {
        title: "Digital Growth & Strategy",
        icon: Megaphone,
        description: "Data-driven marketing and SEO strategies that expand your digital footprint and drive targeted institutional leads. We focus on ROI and brand authority.",
        benefits: ["Technical SEO audits", "Performance Marketing", "Content Infrastructure", "Conversion Optimization"],
        useCases: ["Market Expansion", "B2B Lead Gen", "Search Dominance"]
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-20 selection:bg-brand selection:text-black">
            {/* Page Header */}
            <section className="px-6 md:px-12 lg:px-24 pt-10 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

                <div className="max-w-[1440px] mx-auto relative z-10">
                    <div className="max-w-4xl space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[clamp(3.5rem,8vw,6rem)] font-display font-semibold text-foreground leading-[0.9] tracking-tighter"
                        >
                            Engineered Services for <br /> <span className="text-foreground/30 italic">Modern Institutions.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-foreground/50 font-medium leading-relaxed max-w-2xl"
                        >
                            We provide comprehensive digital delivery services designed to help businesses and institutions thrive through specialized software engineering and strategic design.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Service Blocks */}
            <section className="py-20 bg-background relative border-t border-border">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 gap-12 lg:gap-24">
                        {detailedServices.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="group relative bg-surface border border-border/50 rounded-[40px] p-10 md:p-16 overflow-hidden hover:border-brand/30 transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                                    {/* Icon & Description Col */}
                                    <div className="lg:col-span-7 space-y-8">
                                        <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-foreground/50 group-hover:bg-brand/10 group-hover:text-brand border border-border/50 transition-all duration-500">
                                            <service.icon size={28} />
                                        </div>

                                        <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground tracking-tight">
                                            {service.title}
                                        </h2>

                                        <p className="text-lg md:text-xl text-foreground/50 font-medium leading-relaxed max-w-xl">
                                            {service.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3 pt-6">
                                            {service.useCases.map((uc, idx) => (
                                                <span key={idx} className="px-4 py-2 rounded-full border border-border/50 text-[11px] font-semibold uppercase tracking-widest text-foreground/50 group-hover:border-brand/30 group-hover:text-brand transition-colors">
                                                    {uc}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Benefits Col */}
                                    <div className="lg:col-span-5 bg-background rounded-[32px] p-10 border border-border/50 group-hover:border-brand/20 transition-colors duration-500 h-full">
                                        <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-foreground/30 mb-8 font-mono">
                                            Strategic Engineering
                                        </h4>
                                        <ul className="space-y-6">
                                            {service.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-center gap-4 text-foreground/70 font-medium group/item">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand/50 group-hover/item:bg-brand group-hover/item:scale-150 transition-all" />
                                                    <span className="text-lg">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Overlay */}
            <section className="py-32 bg-background relative overflow-hidden border-t border-border">
                <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
                <div className="max-w-[1440px] mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto space-y-12"
                    >
                        <h2 className="text-[clamp(3.5rem,6vw,5rem)] font-display font-semibold leading-[0.95] tracking-tighter text-foreground">
                            Ready to architect your next digital expansion?
                        </h2>
                        <div className="flex justify-center pt-8">
                            <Link href="/contact" className="btn-glow px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase flex items-center gap-4">
                                Request a Consult <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
