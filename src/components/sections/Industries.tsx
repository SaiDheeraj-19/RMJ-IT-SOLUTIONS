"use client";

import Section from "@/components/ui/Section";
import { GraduationCap, Stethoscope, ShoppingBag, Rocket, Building2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const industries = [
    {
        title: "Education",
        description: "Transforming learning environments with integrated campus management platforms and collaborative tools.",
        icon: GraduationCap
    },
    {
        title: "Healthcare",
        description: "Building secure patient data systems and digital healthcare solutions for modern medical institutions.",
        icon: Stethoscope
    },
    {
        title: "Retail",
        description: "Enabling omnichannel commerce and inventory management systems for scalable retail operations.",
        icon: ShoppingBag
    },
    {
        title: "Startups",
        description: "Accelerating go-to-market strategies with rapid prototyping and scalable MVP development cycles.",
        icon: Rocket
    },
    {
        title: "Enterprises",
        description: "Solving complex organizational challenges through specialized software architecture and systems integration.",
        icon: Building2
    }
];

export default function Industries() {
    return (
        <Section id="industries" className="py-40 bg-[#fafafa]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mb-32">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                    >
                        {"// DOMAIN EXPERTISE"}
                    </motion.span>
                    <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter">
                        Industries We Support with Technical Excellence.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group"
                        >
                            <Link
                                href="/industries"
                                className="block p-10 rounded-[3rem] border border-slate-100 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500"
                            >
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand group-hover:text-white transition-all duration-500 mb-8">
                                    <ind.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors">
                                    {ind.title}
                                </h3>
                                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                                    {ind.description}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div >
        </Section >
    );
}
