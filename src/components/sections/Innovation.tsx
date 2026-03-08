"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { Brain, Sparkles, Workflow, BarChart3 } from "lucide-react";

const projects = [
    {
        title: "AI-Powered Education Tools",
        description: "Intelligent systems designed to personalize learning experiences and automate academic assessments.",
        icon: Brain
    },
    {
        title: "Advanced Digital Campus Modules",
        description: "New modules for Digital Campus platform focusing on recruitment and alumni engagement.",
        icon: Sparkles
    },
    {
        title: "Automation Platforms",
        description: "Custom workflow automation tools designed to minimize manual tasks in business operations.",
        icon: Workflow
    },
    {
        title: "Business Intelligence Systems",
        description: "Advanced data visualization and reporting tools for data-driven organizational decision making.",
        icon: BarChart3
    }
];

export default function Innovation() {
    return (
        <Section id="innovation" className="py-40 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-32">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                    >
                        {`// VISION`}
                    </motion.span>
                    <TextReveal
                        as="h2"
                        text="Innovation and Future Projects"
                        className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-brand/30 hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand group-hover:text-white transition-all duration-500 mb-10">
                                <project.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors duration-500">
                                {project.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
