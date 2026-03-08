"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Headphones, TrendingUp } from "lucide-react";

const trustIndicators = [
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        label: "Innovative Software Solutions"
    },
    {
        icon: <Users className="w-6 h-6" />,
        label: "Skilled Development Team"
    },
    {
        icon: <Headphones className="w-6 h-6" />,
        label: "24/7 Technical Support"
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        label: "Results Driven Approach"
    }
];

export default function Trust() {
    return (
        <section className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {trustIndicators.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="flex items-center gap-6 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                                {item.icon}
                            </div>
                            <span className="text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors duration-500">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
