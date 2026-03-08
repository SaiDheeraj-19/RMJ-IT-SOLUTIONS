"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Image from "next/image";

const projects = [
    {
        title: "Digital Campus 2.0",
        category: "Coming Soon",
        desc: "Next-generation educational ecosystem with AI-driven insights.",
        image: "/Product-presentation-cuate.svg"
    },
    {
        title: "Enterprise AI Bridge",
        category: "Coming Soon",
        desc: "Strategic integration platform for corporate automation.",
        image: "/Company-cuate.svg"
    },
    {
        title: "Unified Mobility Hub",
        category: "Coming Soon",
        desc: "Seamless cross-platform mobile architecture for logistics.",
        image: "/Mobile-cuate.svg"
    }
];

export default function Portfolio() {
    return (
        <Section id="portfolio" className="py-40 bg-white">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                        >
                            {`// INNOVATION`}
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="Upcoming Projects and Innovations."
                            className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="group"
                        >
                            <div className="relative aspect-[4/3] bg-slate-50 rounded-[2.5rem] overflow-hidden mb-8">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain p-12 grayscale opacity-50"
                                />
                                <div className="absolute top-6 right-6">
                                    <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-[10px] uppercase tracking-widest font-black text-slate-400">
                                        Coming Soon
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <span className="text-[10px] uppercase tracking-widest font-black text-brand">{project.category}</span>
                                <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
