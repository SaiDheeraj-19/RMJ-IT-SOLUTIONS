"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Briefcase, Landmark } from "lucide-react";
import Link from "next/link";

const sectors = [
    {
        title: "Academic Programs",
        description: "Executing large-scale student lifecycle management and digital campus initiatives.",
        icon: GraduationCap,
        highlight: "Primary Focus"
    },
    {
        title: "Enterprise Transformation",
        description: "Streamlining complex corporate hierarchies and optimizing resource allocation through custom ERPs.",
        icon: Briefcase,
        highlight: "Strategic"
    },
    {
        title: "Government & Public Sector",
        description: "Deploying secure, compliant infrastructure for state-level programs and citizen services.",
        icon: Landmark,
        highlight: "High Impact"
    }
];

export default function SectorsImpact() {
    return (
        <Section className="bg-[#1a1a1a] text-white relative overflow-hidden py-32">
            {/* Background Effects */}
            <div className="absolute top-[30%] left-[-10%] w-[50vw] h-[50vw] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />


            <div className="max-w-[1400px] mx-auto z-10 relative">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
                    <div className="max-w-2xl">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                            Strategic Contexts
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-display leading-[1] font-bold tracking-tight mb-8">
                            Where we operate.
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/case-studies" className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs uppercase tracking-widest font-black hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 flex items-center gap-3">
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
                            className="group relative bg-stone-900 border border-white/5 p-10 rounded-3xl overflow-hidden hover:border-brand/30 transition-all duration-500 flex flex-col justify-between h-[400px]"
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                                        <sector.icon size={24} className="text-stone-300 group-hover:text-white" />
                                    </div>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] uppercase font-bold tracking-wider text-stone-400 border border-white/5 group-hover:border-white/20 transition-colors">
                                        {sector.highlight}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-display font-bold mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    {sector.title}
                                </h3>
                                <div className="w-12 h-[2px] bg-white/10 mb-6 group-hover:bg-brand group-hover:w-full transition-all duration-700 ease-out" />
                                <p className="text-white/60 text-lg leading-relaxed max-w-sm group-hover:text-white/80 transition-colors">
                                    {sector.description}
                                </p>
                            </div>

                            {/* Abstract Visual */}
                            <div className="absolute right-[-20%] bottom-[-20%] w-[200px] h-[200px] bg-white/5 rounded-full blur-[60px] group-hover:bg-brand/10 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* Stat Bar - Reused but styled dark */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-white/10 pt-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    <div>
                        <div className="text-4xl font-display font-bold mb-1">80+</div>
                        <div className="text-[10px] uppercase font-bold text-stone-500">Institutional Partners</div>
                    </div>
                    <div>
                        <div className="text-4xl font-display font-bold mb-1">500k</div>
                        <div className="text-[10px] uppercase font-bold text-stone-500">Daily Active Users</div>
                    </div>
                    <div>
                        <div className="text-4xl font-display font-bold mb-1">100%</div>
                        <div className="text-[10px] uppercase font-bold text-stone-500">Uptime Record</div>
                    </div>
                    <div>
                        <div className="text-4xl font-display font-bold mb-1">24/7</div>
                        <div className="text-[10px] uppercase font-bold text-stone-500">Support Operations</div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
