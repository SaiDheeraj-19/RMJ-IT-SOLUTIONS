"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Briefcase, Landmark } from "lucide-react";
import Link from "next/link";

const sectors = [
    {
        title: "Universities & Education",
        description: "Student lifecycle platforms, admission portals, examination management, and campus ERP systems designed for multi-campus deployments serving thousands of students and faculty.",
        icon: GraduationCap,
        highlight: "Primary Focus"
    },
    {
        title: "Mid-Size Enterprises",
        description: "Operations dashboards, automated invoicing, CRM integrations, and workforce management tools for companies scaling from 200 to 2,000 employees.",
        icon: Briefcase,
        highlight: "Growth Segment"
    },
    {
        title: "Government & Public Sector",
        description: "Secure citizen services portals, grievance management automation, and document verification systems built for high-traffic environments with strict compliance requirements.",
        icon: Landmark,
        highlight: "High Security"
    }
];

export default function SectorsImpact() {
    return (
        <Section className="bg-gradient-to-b from-[#e8e0d4] to-[#dfd5c7] text-[#1a1a1a] relative overflow-hidden py-32">
            {/* Background Effects */}
            <div className="absolute top-[30%] left-[-10%] w-[50vw] h-[50vw] bg-brand/8 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto z-10 relative">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 border-b border-[#1a1a1a]/10 pb-12">
                    <div className="max-w-2xl">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                            Strategic Contexts
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-display leading-[1] font-bold tracking-tight mb-8">
                            Where we operate.
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/case-studies" className="group px-8 py-4 bg-[#1a1a1a] backdrop-blur-sm border border-[#1a1a1a] rounded-full text-xs uppercase tracking-widest font-black text-white hover:bg-brand hover:border-brand transition-all duration-300 flex items-center gap-3">
                            View Case Studies
                            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative bg-white/60 backdrop-blur-sm border border-stone-200/80 p-10 rounded-3xl overflow-hidden hover:border-brand/40 hover:bg-white/90 transition-all duration-500 flex flex-col justify-between h-[400px] shadow-sm hover:shadow-xl"
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 bg-brand/10 rounded-2xl group-hover:bg-brand transition-colors duration-500">
                                        <sector.icon size={24} className="text-brand group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="px-3 py-1 bg-[#1a1a1a]/5 rounded-full text-[9px] uppercase font-bold tracking-wider text-stone-500 border border-stone-200 group-hover:border-brand/30 group-hover:text-brand transition-colors">
                                        {sector.highlight}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    {sector.title}
                                </h3>
                                <div className="w-12 h-[2px] bg-stone-300 mb-6 group-hover:bg-brand group-hover:w-full transition-all duration-700 ease-out" />
                                <p className="text-[#606060] text-lg leading-relaxed max-w-sm group-hover:text-[#404040] transition-colors">
                                    {sector.description}
                                </p>
                            </div>

                            {/* Abstract Visual */}
                            <div className="absolute right-[-20%] bottom-[-20%] w-[200px] h-[200px] bg-brand/5 rounded-full blur-[60px] group-hover:bg-brand/15 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* Stat Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-[#1a1a1a]/10 pt-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    <div>
                        <div className="text-4xl font-display font-bold mb-1 text-[#1a1a1a]">6-Phase</div>
                        <div className="text-[10px] uppercase font-bold text-stone-500">Delivery Framework</div>
                    </div>
                    <div>
                        <div className="text-4xl font-display font-bold mb-1 text-[#1a1a1a]">99.9%</div>
                        <div className="text-[10px] uppercase font-bold text-stone-500">Target Uptime SLA</div>
                    </div>
                    <div>
                        <div className="text-4xl font-display font-bold mb-1 text-[#1a1a1a]">SOC2</div>
                        <div className="text-[10px] uppercase font-bold text-stone-500">Aligned Security</div>
                    </div>
                    <div>
                        <div className="text-4xl font-display font-bold mb-1 text-[#1a1a1a]">14 Days</div>
                        <div className="text-[10px] uppercase font-bold text-stone-500">Free Audit Turnaround</div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
