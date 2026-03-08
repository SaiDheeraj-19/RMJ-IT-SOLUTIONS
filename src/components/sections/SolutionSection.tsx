"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { Code2, Smartphone, Layers, Rocket } from "lucide-react";

const solutions = [
    {
        title: "Custom Software Development",
        desc: "Bespoke digital systems engineered to solve your specific operational bottlenecks and drive growth.",
        icon: Code2
    },
    {
        title: "Mobile Application Platforms",
        desc: "Native and cross-platform mobile apps designed for high performance and exceptional user engagement.",
        icon: Smartphone
    },
    {
        title: "Enterprise System Integration",
        desc: "Seamlessly connecting fragmented tools into a unified, automated digital infrastructure.",
        icon: Layers
    },
    {
        title: "Digital Transformation Solutions",
        desc: "End-to-end modernization strategies that align technology with your long-term business goals.",
        icon: Rocket
    }
];

export default function SolutionSection() {
    return (
        <Section className="py-32 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                    >
                        {`// THE SOLUTION`}
                    </motion.span>
                    <TextReveal
                        as="h2"
                        text="Modern Technology Solutions for Growing Businesses"
                        className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold text-foreground leading-[0.9] tracking-tighter"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="bg-surface p-10 rounded-[2.5rem] border border-slate-100 group hover:border-brand/20 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-brand/5"
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-foreground/70 group-hover:bg-brand group-hover:text-foreground transition-all duration-500 mb-10 shadow-sm">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground mb-4 transition-colors group-hover:text-brand">
                                {item.title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
