"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { AlertCircle, FileX, Database, ZapOff } from "lucide-react";

const challenges = [
    {
        title: "Fragmented Systems",
        desc: "Isolated software tools that don't communicate, leading to data silos and operational inefficiency.",
        icon: Database
    },
    {
        title: "Manual Workflows",
        desc: "Reliance on manual entry and paper-based processes that slow down your team and introduce errors.",
        icon: FileX
    },
    {
        title: "Limited Visibility",
        desc: "Inability to access real-time business data, making it difficult to make informed strategic decisions.",
        icon: AlertCircle
    },
    {
        title: "Slow Transformation",
        desc: "Legacy technology that holds your business back from adapting to modern market demands.",
        icon: ZapOff
    }
];

export default function ProblemSection() {
    return (
        <Section className="py-32 bg-surface-soft">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] uppercase tracking-[0.6em] font-black text-foreground/70 mb-10 block font-mono"
                    >
                        {`// THE CHALLENGE`}
                    </motion.span>
                    <TextReveal
                        as="h2"
                        text="Technology Challenges Businesses Face"
                        className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold text-foreground leading-[0.9] tracking-tighter"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {challenges.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 group hover:border-brand/20 transition-all duration-500"
                        >
                            <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-foreground/70 group-hover:bg-red-50 group-hover:text-red-500 transition-all duration-500 mb-10">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-display font-bold text-foreground mb-4">
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
