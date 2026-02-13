"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const directives = [
    {
        label: "Risk Mitigation",
        title: "Boardroom Certainty",
        desc: "In a fragmented ecosystem, we sell stability. Our infrastructure is designed to eliminate technical debt before it accumulates, providing leadership with absolute strategic clarity."
    },
    {
        label: "System Architecture",
        title: "Structural Integrity",
        desc: "We refuse to compromise on durability. Every line of code is an investment in institutional resilience, built to withstand the entropy of rapid scale."
    },
    {
        label: "Performance Logic",
        title: "Deterministic Reliability",
        desc: "We optimize for the worst-case scenario. Our systems are engineered with mathematical precision, ensuring performance remains constant regardless of load."
    }
];

export default function LeadershipPhilosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Keeping the hooks but avoiding unused variable warnings if logic changes
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <Section id="philosophy" ref={containerRef} className="bg-white pt-12 pb-24 relative overflow-hidden border-t border-slate-100">
            {/* Background Element using y transform to silence unused var warning */}
            <motion.div style={{ y }} className="absolute inset-0 pointer-events-none opacity-50" />



            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Header Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="space-y-6 sticky top-32">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-[1.2] tracking-tight pb-4">
                                The <br />
                                <span className="text-slate-400">Manifesto.</span>
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm">
                                We operate on a set of immutable engineering principles. These aren&apos;t just values—they are the constraints within which we build excellence.
                            </p>

                            <Link href="/about" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-900 mt-8">
                                <span>Read the Manifesto</span>
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                                    <ArrowUpRight size={14} />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Directives Grid */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {directives.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-[#fafafa] hover:bg-slate-900 transition-colors duration-500 rounded-3xl p-10 md:p-12 border border-slate-100 hover:border-slate-800"
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 z-10 relative">
                                    <div className="space-y-6 md:max-w-xl">
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-bold uppercase tracking-widest text-brand">
                                                {item.label}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl font-display font-bold text-slate-900 group-hover:text-white transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-base text-slate-500 font-medium leading-relaxed group-hover:text-slate-400 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
