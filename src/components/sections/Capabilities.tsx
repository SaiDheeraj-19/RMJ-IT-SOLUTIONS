"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { LayoutDashboard, Cloud, Blocks, Lock } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Digital Systems Engineering",
        icon: LayoutDashboard,
        description: "ERP systems, campus management platforms, and internal dashboards tailored to complex organizational workflows.",
        audience: "Educational Institutions & Enterprises",
        outcome: "Reduce manual data entry by 60% and unify fragmented tools.",
        link: "/services/erp"
    },
    {
        title: "Cloud & Infrastructure Setup",
        icon: Cloud,
        description: "Scalable AWS/GCP architecture design, migration strategy, and automated CI/CD pipeline implementation.",
        audience: "Growing Startups & Mid-size Firms",
        outcome: "Zero-downtime deployments and auto-scaling capabilities.",
        link: "/services/cloud"
    },
    {
        title: "Custom Web Applications",
        icon: Blocks,
        description: "Focus on high-performance, secure, and interactive web platforms—not just static brochure sites.",
        audience: "SaaS Founders & Digital Brands",
        outcome: "Fast load times (<1s) and high user retention.",
        link: "/services/web"
    },
    {
        title: "Security & Performance Optimization",
        icon: Lock,
        description: "Comprehensive system audits, vulnerability scanning, code refactoring, and database optimization.",
        audience: "Organizations with Legacy Systems",
        outcome: "Compliance readiness (SOC2/GDPR) and risk reduction.",
        link: "/services/security"
    }
];

export default function ServicesSection() {
    return (
        <Section className="bg-white">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.5em] font-black text-brand mb-8 block"
                        >
                            Core Competencies
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="Technology Tailored to Your Outcome."
                            className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold text-[#1a1a1a] leading-[1]"
                            delay={0.1}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group p-10 bg-[#fafafa] border border-stone-100 rounded-2xl hover:border-brand/30 hover:bg-white hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="mb-8 flex justify-between items-start">
                                <div className="p-3 bg-white border border-stone-200 rounded-xl group-hover:bg-brand/10 group-hover:border-brand/20 transition-all duration-500">
                                    <service.icon size={28} className="text-stone-400 group-hover:text-brand transition-colors" />
                                </div>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                                    <ArrowUpRight size={24} className="text-brand" />
                                </span>
                            </div>

                            <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4 group-hover:text-brand transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-[16px] text-[#606060] leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <div className="pt-6 border-t border-stone-200 text-sm space-y-2">
                                <div className="flex gap-2 text-[#505050]">
                                    <span className="font-bold text-[#1a1a1a] uppercase text-[10px] tracking-wider shrink-0 mt-0.5">For:</span>
                                    {service.audience}
                                </div>
                                <div className="flex gap-2 text-[#505050]">
                                    <span className="font-bold text-[#1a1a1a] uppercase text-[10px] tracking-wider shrink-0 mt-0.5">Outcome:</span>
                                    {service.outcome}
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
