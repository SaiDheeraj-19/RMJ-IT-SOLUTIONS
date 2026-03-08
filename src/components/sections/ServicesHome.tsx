"use client";

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
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
                    <div className="space-y-6">
                        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-semibold text-foreground leading-[0.9] tracking-tighter max-w-2xl">
                            Technical services designed for scale.
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="group flex items-center gap-4 px-8 py-3.5 bg-foreground/5 border border-border rounded-[100px] text-xs font-semibold uppercase tracking-widest text-[#f59768] hover:bg-foreground/10 transition-colors shadow-sm"
                    >
                        View All Services <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {coreServices.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="bg-surface p-12 rounded-[2.5rem] border border-border hover:border-brand/30 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="relative z-10 flex flex-col h-full space-y-8">
                                <div className="w-14 h-14 bg-foreground/5 rounded-2xl flex items-center justify-center text-foreground/50 group-hover:bg-brand/10 group-hover:text-brand transition-all duration-500">
                                    <service.icon size={24} />
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <h3 className="text-3xl font-display font-semibold text-foreground leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-foreground/50 font-medium leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/50 group-hover:text-foreground transition-colors mt-auto pt-4"
                                >
                                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
