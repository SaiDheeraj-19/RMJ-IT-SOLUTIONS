"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";

const steps = [
    {
        title: "Discovery",
        desc: "Deep analysis of business logic and identification of core challenges to determine project roadmap."
    },
    {
        title: "Planning",
        desc: "Defining scalable architectures and comprehensive technical strategies for long-term growth."
    },
    {
        title: "Platform Design",
        desc: "Crafting minimalist, high-conversion interfaces focused on user experience and brand integrity."
    },
    {
        title: "Engineering",
        desc: "Building high-performance systems using state-of-the-art technologies and clean code standards."
    },
    {
        title: "Quality Assurance",
        desc: "Rigorous testing protocols ensuring maximum reliability, security, and performance at scale."
    },
    {
        title: "Deployment",
        desc: "Seamless production launch followed by continuous optimization and dedicated support."
    }
];

export default function Process() {
    return (
        <Section id="process" className="py-40 bg-white border-t border-slate-50 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-32">
                    <div className="space-y-8">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                        >
                            {"// METHODOLOGY"}
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="Our Development Methodology"
                            className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter"
                        />
                    </div>
                    <div className="max-w-md">
                        <p className="text-lg text-slate-500 font-medium">A structured engineering approach designed to maximize efficiency and maintain total transparency throughout the build cycle.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="space-y-10">
                                <div className="flex items-center gap-6">
                                    <span className="text-5xl font-display font-black text-slate-100 group-hover:text-brand/20 transition-colors duration-500">
                                        {(i + 1).toString().padStart(2, '0')}
                                    </span>
                                    <div className="h-[2px] w-12 bg-slate-100 group-hover:bg-brand/20 transition-colors duration-500" />
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-display font-bold text-slate-900 group-hover:text-brand transition-colors duration-500 tracking-tighter">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
