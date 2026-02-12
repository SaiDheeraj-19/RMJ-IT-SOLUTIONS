"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/MotionEffects";

const systems = [
    {
        title: "Web Platforms",
        outcome: "Replace 5 disconnected tools with 1 system",
        description: "Student portals, admin dashboards, and public-facing platforms. We built a university portal serving 8,000 students that replaced 5 separate systems and reduced registration time from 3 days to 20 minutes.",
        tags: ["Next.js / React", "PostgreSQL", "REST & GraphQL APIs"],
        image: "/images/services/web.png",
        href: "/services/web"
    },
    {
        title: "Mobile Applications",
        outcome: "80% reduction in paper-based workflows",
        description: "Campus navigation, attendance tracking, and citizen-service apps. Our mobile apps achieve 98.9% crash-free sessions and work offline — critical for campus environments with spotty WiFi.",
        tags: ["React Native", "iOS / Android", "Offline-First"],
        image: "/images/services/mobile.png",
        href: "/services/mobile"
    },
    {
        title: "Campus ERP & Digitization",
        outcome: "Entire campus operations in one dashboard",
        description: "Admissions, fee management, timetable automation, and examination workflows. Replace manual Excel-based operations with an integrated system. One university saved 400+ staff hours per month after our deployment.",
        tags: ["ERP Design", "Role-Based Access", "API Middleware"],
        image: "/images/services/marketing.png",
        href: "/services/marketing"
    },
    {
        title: "AI & Process Automation",
        outcome: "3 weeks of manual work → 4 hours",
        description: "Document verification, automated grading, and predictive analytics. We built an OCR pipeline for a government agency that reduced document processing from 3 weeks to 4 hours with 99.2% accuracy.",
        tags: ["Python / TensorFlow", "NLP Pipelines", "Custom ML Models"],
        image: "/images/services/ai.png",
        href: "/services/ai"
    },
    {
        title: "Cloud & IT Infrastructure",
        outcome: "40% cost reduction after migration",
        description: "On-premise to AWS/GCP migration with automated failover, real-time monitoring, and SOC2-aligned security. Typical project: 60 days, zero data loss, 40% hosting cost reduction.",
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
                <div className="flex flex-col md:flex-row justify-end items-end mb-12 border-b border-[#1a1a1a]/10 pb-6">
                    <FadeIn delay={0.3} direction="right" className="hidden md:block">
                        <p className="text-[#605040] max-w-sm text-right text-lg leading-relaxed">
                            Every project includes a scope document<br />with defined deliverables before we start.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {systems.map((item, index) => (
                        <Link key={index} href={item.href} className="block group" id={`capability-${index}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-5%" }}
                                transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                                className="group relative h-[480px] rounded-3xl overflow-hidden bg-[#2a2520] border border-[#3a3530]/60 hover:border-brand/40 transition-colors duration-500 shadow-xl hover:shadow-2xl hover:shadow-brand/10"
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
                                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                                    <div className="mb-auto flex justify-between items-start">
                                        {/* Outcome Badge */}
                                        <span className="px-3 py-1.5 bg-brand/20 backdrop-blur-sm rounded-full text-[10px] font-bold text-brand tracking-wide uppercase border border-brand/30">
                                            {item.outcome}
                                        </span>
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                                            <ArrowUpRight className="text-white transform group-hover:rotate-45 transition-transform duration-300" size={18} />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-stone-200 group-hover:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 text-sm mb-6 max-w-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed">
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

                {/* CTA after services */}
                <FadeIn delay={0.2} scale className="mt-16 text-center">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                        <Link href="/contact" id="capabilities-cta" className="group inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-white rounded-full text-sm font-bold hover:bg-brand transition-all duration-300 shadow-xl hover:shadow-2xl">
                            Discuss Your Project
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                    <p className="mt-4 text-sm text-[#605040]/60">We&apos;ll scope it, estimate it, and give you a fixed quote — before any commitment.</p>
                </FadeIn>
            </div>
        </Section>
    );
}
