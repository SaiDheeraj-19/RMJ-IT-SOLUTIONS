"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";

const services = [
    {
        title: "Web Application Development",
        description: "Custom web applications designed to support business operations with scalable backends and modern frontends.",
        details: ["Enterprise ERPs", "SaaS Platforms", "Custom CMS", "API Integration"]
    },
    {
        title: "Android App Development",
        description: "Modern Android applications optimized for performance, usability, and deep integration with device capabilities.",
        details: ["Native Apps", "Jetpack Compose", "Material Design", "Play Store Optimization"]
    },
    {
        title: "iOS App Development",
        description: "High-quality iOS applications with smooth user experiences and seamless integration with the Apple ecosystem.",
        details: ["Swift & SwiftUI", "Apple Human Interface", "iOS Ecosystem", "App Store Compliance"]
    },
    {
        title: "Digital Marketing",
        description: "SEO, social media marketing, and digital strategies to increase online visibility and drive measurable growth.",
        details: ["Search Optimization", "Growth Strategies", "Content Marketing", "Data Analytics"]
    },
    {
        title: "Web Design",
        description: "Professional responsive websites with modern UI/UX design that convert visitors into loyal customers.",
        details: ["Visual Identity", "UX Research", "Interactive Prototypes", "Responsive Systems"]
    },
    {
        title: "Graphic Design",
        description: "Creative branding and visual communication solutions that build a strong corporate identity.",
        details: ["Logo Design", "Brand Guidelines", "Marketing Collateral", "Digital Assets"]
    }
];

export default function Services() {
    return (
        <Section id="services" className="py-40 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                    >
                        {`// SOLUTIONS`}
                    </motion.span>
                    <TextReveal
                        as="h2"
                        text="Our Technology Services"
                        className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group"
                        >
                            <Link href="/services" className="block space-y-8">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-display font-bold text-slate-900 group-hover:text-brand transition-colors duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {service.details.map((detail, idx) => (
                                        <span key={idx} className="text-[10px] font-bold uppercase tracking-widest bg-slate-50 text-slate-400 px-4 py-2 rounded-full border border-slate-100 group-hover:border-brand/20 group-hover:text-brand transition-all duration-500">
                                            {detail}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
