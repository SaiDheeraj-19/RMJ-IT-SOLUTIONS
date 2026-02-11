"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { ArrowUpRight, Activity, Shield, Layers } from "lucide-react";

const pillars = [
    {
        title: "Scaling Digital Programs",
        description: "We eliminate technical debt and execution bottlenecks, ensuring your institutional programs scale without friction.",
        icon: Activity,
        stat: "100%",
        statLabel: "Technical Success Rate"
    },
    {
        title: "Institutional Reliability",
        description: "Zero-downtime operations for systems that serve millions. We manage the complexity so you can focus on the mission.",
        icon: Layers,
        stat: "99.9%",
        statLabel: "Observed Uptime"
    },
    {
        title: "Compliance & Security",
        description: "Architecting secure, compliant environments that exceed global standards for data privacy and institutional integrity.",
        icon: Shield,
        stat: "Zero",
        statLabel: "Critical Vulnerabilities"
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
                            Who We Are
                        </span>

                    </div>

                    <div className="max-w-[1000px] mb-24">
                        <TextReveal
                            as="h2"
                            text="We are the implementation partner for organizations that require absolute reliability."
                            className="text-[clamp(2.5rem,5vw,4.5rem)] font-display leading-[1.05] font-bold tracking-tight text-[#1a1a1a]"
                            delay={0.2}
                        />
                        <div className="mt-8 max-w-2xl">
                            <p className="text-xl text-[#606060] leading-relaxed">
                                RMJIT is not a typical dev shop. We are a Program Operations Partner. We bridge the gap between high-level strategy and ground-level execution, ensuring that complex initiatives succeed at scale.
                            </p>
                        </div>
                    </div>

                    {/* Interactive Pillars Grid */}
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
                </motion.div>
            </div>
        </Section>
    );
}
