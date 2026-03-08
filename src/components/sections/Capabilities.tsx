"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Globe, Zap } from "lucide-react";

const capabilities = [
    {
        title: "Web Application Development",
        description: "We design and develop secure, scalable web applications tailored to meet the unique needs of businesses, focusing on usability and performance.",
        icon: Globe
    },
    {
        title: "Mobile App Development",
        description: "Powerful Android and iOS applications that help businesses connect with customers and streamline their daily internal operations.",
        icon: Lock
    },
    {
        title: "Custom Software",
        description: "Bespoke software systems designed from scratch to automate workflows, manage data efficiently, and improve overall business productivity.",
        icon: Zap
    },
    {
        title: "Institutional Solutions",
        description: "Specialized digital platforms built for educational and enterprise institutions to manage academic operations and secure student activities.",
        icon: ShieldCheck
    }
];

export default function Capabilities() {
    return (
        <Section id="expertise" className="py-40 bg-white relative overflow-hidden selection:bg-brand/10">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mb-32 space-y-8">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                    >
                        {"// TECHNOLOGY EXPERTISE"}
                    </motion.span>
                    <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter">
                        Building the technical <br /> foundations of tomorrow.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="bg-slate-50 border border-slate-100 p-12 rounded-[4rem] hover:border-brand/20 hover:bg-white hover:shadow-2xl hover:shadow-brand/5 transition-all duration-700 group"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-brand group-hover:text-white transition-all duration-500 mb-10 shadow-sm border border-slate-50">
                                <cap.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 leading-tight group-hover:text-brand transition-colors">
                                {cap.title}
                            </h3>
                            <p className="text-base text-slate-500 leading-relaxed font-medium">
                                {cap.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
