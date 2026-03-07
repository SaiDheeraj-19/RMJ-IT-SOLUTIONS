"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { LayoutDashboard, Blocks, ArrowUpRight, Smartphone, Globe } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Web Application Development",
        icon: Globe,
        description: "We design and develop secure, scalable web applications tailored to meet the unique needs of businesses and organizations. Our web applications focus on performance, usability, and reliability to ensure seamless digital experiences.",
        audience: "Businesses & Organizations",
        outcome: "Seamless digital experiences & high reliability.",
        link: "#"
    },
    {
        title: "Mobile Application Development",
        icon: Smartphone,
        description: "Our mobile development services deliver powerful Android and iOS applications that help businesses connect with customers and streamline operations.",
        audience: "Direct-to-Consumer & B2B Enterprises",
        outcome: "Cross-platform accessibility and improved customer engagement.",
        link: "#"
    },
    {
        title: "Custom Software Development",
        icon: Blocks,
        description: "We build custom software systems designed to automate workflows, manage data efficiently, and improve overall business productivity.",
        audience: "Operationally Complex Firms",
        outcome: "Automated workflows and measurable productivity gains.",
        link: "#"
    },
    {
        title: "Digital Solutions for Institutions",
        icon: LayoutDashboard,
        description: "RMJ IT Solutions provides specialized digital platforms for educational institutions to manage academic operations and student activities.",
        audience: "Schools, Colleges & Universities",
        outcome: "End-to-end institutional management and digital transformation.",
        link: "#"
    }
];

export default function ServicesSection() {
    return (
        <Section id="capabilities" className="bg-[#eef2ff] py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block font-mono"
                        >
                            {`// CORE COMPETENCIES`}
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="Architecture for the Next Era."
                            className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-[#0f172a] leading-[1] tracking-tighter"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="group bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/50 hover:bg-white hover:border-brand/20 transition-all duration-700 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-brand/5 relative overflow-hidden"
                        >
                            <div className="mb-10 flex justify-between items-start">
                                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white group-hover:scale-110">
                                    <service.icon size={24} />
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                                    <ArrowUpRight size={24} className="text-brand" />
                                </div>
                            </div>

                            <h3 className="text-xl font-display font-bold text-[#0f172a] mb-4 tracking-tight leading-tight group-hover:text-brand transition-colors duration-500">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8">
                                {service.description}
                            </p>

                            <div className="pt-6 border-t border-slate-100 text-[11px] space-y-3">
                                <div className="flex gap-2">
                                    <span className="font-black text-slate-400 uppercase tracking-widest shrink-0">For:</span>
                                    <span className="text-slate-600 font-bold">{service.audience}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-black text-slate-400 uppercase tracking-widest shrink-0">Outcome:</span>
                                    <span className="text-slate-600 font-bold">{service.outcome}</span>
                                </div>
                            </div>

                            <Link href={service.link} className="absolute inset-0 z-10" aria-label={`Learn more about ${service.title}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
