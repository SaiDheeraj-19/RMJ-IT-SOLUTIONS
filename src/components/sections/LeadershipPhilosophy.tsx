"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    return (
        <Section id="philosophy" className="pt-12 pb-24 relative overflow-hidden border-t border-border" style={{ background: 'var(--background)' }}>
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Header Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="space-y-6 sticky top-32">
                            <h2 className="text-4xl font-display font-bold text-foreground leading-[1.2] tracking-tight pb-4">
                                The <br />
                                <span className="text-foreground/70">Manifesto.</span>
                            </h2>
                            <p className="text-lg text-foreground/70 font-medium leading-relaxed max-w-sm">
                                We operate on a set of immutable engineering principles. These aren&apos;t just values—they are the constraints within which we build excellence.
                            </p>

                            <Link href="/about" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-foreground mt-8">
                                <span>Read the Manifesto</span>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-brand group-hover:text-foreground transition-colors border border-border">
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
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group relative rounded-3xl p-10 md:p-12 border border-border hover:border-brand/20 transition-colors duration-300"
                                style={{ background: 'var(--surface)' }}
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 z-10 relative">
                                    <div className="space-y-6 md:max-w-xl">
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-bold uppercase tracking-widest text-brand">
                                                {item.label}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl font-display font-bold text-foreground">
                                            {item.title}
                                        </h3>

                                        <p className="text-base text-foreground/70 font-medium leading-relaxed">
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
