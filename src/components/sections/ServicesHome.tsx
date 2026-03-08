"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Smartphone, Globe, Palette } from "lucide-react";

const coreServices = [
    {
        title: "Web App Development",
        desc: "Secure, scalable web applications tailored to meet your unique needs and ensure seamless digital experiences.",
        icon: Globe,
        color: "blue"
    },
    {
        title: "Mobile App Development",
        desc: "Powerful Android and iOS applications that help businesses connect with customers and streamline operations.",
        icon: Smartphone,
        color: "indigo"
    },
    {
        title: "Custom Software",
        desc: "Custom software systems designed to automate workflows, manage data efficiently, and improve productivity.",
        icon: Palette,
        color: "brand"
    }
];

export default function ServicesHome() {
    return (
        <Section className="py-40 bg-slate-50">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-32">
                    <div className="space-y-8">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                        >
                            {"// CORE SOLUTIONS"}
                        </motion.span>
                        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter">
                            Technical services designed <br /> for institutional scale.
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="group flex items-center gap-6 px-10 py-5 bg-white border border-slate-200 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 hover:border-brand hover:text-brand transition-all duration-300 shadow-sm"
                    >
                        View All Services <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {coreServices.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="bg-white p-12 rounded-[3.5rem] border border-slate-100 hover:border-brand/20 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="relative z-10 space-y-12">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                                    <service.icon size={28} />
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-display font-bold text-slate-900 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-brand transition-colors"
                                >
                                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
