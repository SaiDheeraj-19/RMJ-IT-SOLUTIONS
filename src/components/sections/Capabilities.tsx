"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const systems = [
    {
        title: "Web Application Development",
        description: "Student portals, internal dashboards, and public-facing platforms that handle 10k+ concurrent sessions. We solve slow legacy systems, fragmented data access, and manual reporting bottlenecks.",
        tags: ["Next.js / React", "PostgreSQL", "REST & GraphQL APIs"],
        image: "/images/services/web.png",
        href: "/services/web"
    },
    {
        title: "Mobile Applications",
        description: "Campus navigation, attendance tracking, and citizen-service apps used daily by thousands. We reduce paper-based workflows by 80% and increase user adoption within 60 days of launch.",
        tags: ["React Native", "iOS / Android", "Offline-First"],
        image: "/images/services/mobile.png",
        href: "/services/mobile"
    },
    {
        title: "Digital Campus & ERP Systems",
        description: "End-to-end campus digitization: admissions, fee management, timetable automation, and examination workflows. We replace manual Excel-based operations with integrated, real-time systems.",
        tags: ["ERP Design", "Role-Based Access", "API Middleware"],
        image: "/images/services/marketing.png",
        href: "/services/marketing"
    },
    {
        title: "AI & Process Automation",
        description: "Document verification that took 3 weeks now runs in 4 hours. We build OCR pipelines, automated grading tools, and predictive analytics dashboards tailored to institutional data.",
        tags: ["Python / TensorFlow", "NLP Pipelines", "Custom ML Models"],
        image: "/images/services/ai.png",
        href: "/services/ai"
    },
    {
        title: "Cloud Infrastructure & IT Consulting",
        description: "We migrate on-premise systems to AWS/GCP with automated failover, real-time monitoring, and SOC2-aligned security. Typical migration: 60 days, zero data loss, 40% cost reduction.",
        tags: ["AWS / GCP", "Terraform / Docker", "24/7 Monitoring"],
        image: "/images/services/cloud.png",
        href: "/services/cloud"
    }
];

export default function Capabilities() {
    return (
        <Section className="bg-gradient-to-b from-[#f0ebe3] to-[#e8e0d4] text-[#1a1a1a] relative overflow-hidden py-32">
            {/* Background Effects */}
            <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-brand/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-stone-400/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-[#1a1a1a]/10 pb-12">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-6 block">
                            Core Modules
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-display leading-[1] font-bold tracking-tight">
                            Engineered for <br /> <span className="text-[#1a1a1a]/30">Continuity.</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-[#605040] max-w-sm text-right text-lg leading-relaxed">
                            We don&apos;t just build features.<br />We architect complete digital ecosystems.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {systems.map((item, index) => (
                        <Link key={index} href={item.href} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group relative h-[450px] rounded-3xl overflow-hidden bg-[#2a2520] border border-[#3a3530]/60 hover:border-brand/40 transition-colors duration-500 shadow-xl"
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-25 group-hover:scale-105 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0 group-hover:opacity-40"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a2520] via-[#2a2520]/70 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                                    <div className="mb-auto flex justify-end">
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                                            <ArrowUpRight className="text-white transform group-hover:rotate-45 transition-transform duration-300" size={20} />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-stone-200 group-hover:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 text-base mb-8 max-w-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                        {item.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-bold text-white/60 border border-white/10 tracking-wide uppercase">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
}
