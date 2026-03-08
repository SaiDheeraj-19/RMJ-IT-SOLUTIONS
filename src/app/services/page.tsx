"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import {
    Globe,
    Smartphone,
    Layout,
    Megaphone,
    ArrowRight
} from "lucide-react";

const detailedServices = [
    {
        title: "Web Engineering",
        icon: Globe,
        description: "Custom enterprise platforms and scalable SaaS architectures built with modern technical stacks. We transform complex workflows into high-performance web systems.",
        benefits: ["SaaS Architecture Design", "Scalable Backend Engineering", "Next.js & React Frontends", "Automated Cloud Deployment"],
        useCases: ["Enterprise ERPs", "Project Portals", "Inventory Systems"]
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
        <div className="pt-32 pb-20 selection:bg-brand/10">
            {/* Page Header */}
            <section className="bg-white px-10 md:px-20 pt-10 pb-20">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                        >
                            {"// THE SOLUTIONS ARCHITECT"}
                        </motion.span>
                        <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter mb-12">
                            Engineered Services for <br /> Modern Institutions.
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                            We provide comprehensive digital delivery services designed to help businesses and institutions thrive through specialized software engineering and strategic design.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Blocks */}
            <Section className="bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 gap-24 lg:gap-40">
                        {detailedServices.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                                    {/* Icon & Title Col */}
                                    <div className="lg:col-span-1">
                                        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400 group-hover:bg-brand group-hover:text-white transition-all duration-700">
                                            <service.icon size={32} />
                                        </div>
                                    </div>

                                    {/* Description Col */}
                                    <div className="lg:col-span-5 space-y-8">
                                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight tracking-tight">
                                            {service.title}
                                        </h2>
                                        <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap gap-3 pt-6">
                                            {service.useCases.map((uc, idx) => (
                                                <span key={idx} className="px-5 py-2 rounded-full border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:border-brand/20 group-hover:text-brand transition-colors">
                                                    {uc}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Benefits Grid Col */}
                                    <div className="lg:col-span-1" />
                                    <div className="lg:col-span-5 bg-slate-50/50 rounded-[4rem] p-12 lg:p-16 border border-slate-100 group-hover:border-brand/10 transition-colors duration-700">
                                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 mb-10">Strategic Engineering Benchmarks</h4>
                                        <ul className="grid grid-cols-1 gap-6">
                                            {service.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start gap-4 text-slate-600 font-bold group/item">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand group-hover/item:scale-150 transition-transform" />
                                                    <span className="text-lg tracking-tight">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Bottom CTA Section on this page */}
            <Section className="bg-slate-50 py-40">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="bg-brand rounded-[5rem] p-16 lg:p-32 text-center text-white relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
                            <h2 className="text-4xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tighter">
                                Ready to architect your next digital expansion?
                            </h2>
                            <button className="inline-flex items-center gap-6 px-12 py-6 bg-white text-brand rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl">
                                Request a Consult <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
