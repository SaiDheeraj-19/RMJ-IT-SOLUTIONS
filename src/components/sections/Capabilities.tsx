"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const systems = [
    {
        title: "Website Development",
        description: "Building mission-critical web applications designed to handle complex business logic and institutional-scale user demand with absolute resilience.",
        tags: ["Scalable Architecture", "React/Next.js", "Systemic Integration"],
        image: "/images/services/web.png",
        href: "/services/web"
    },
    {
        title: "Android & iOS Apps",
        description: "Native and cross-platform mobile solutions designed to be adopted at national scale. Premium iOS and Android ecosystems built for engagement.",
        tags: ["Native iOS", "Native Android", "React Native"],
        image: "/images/services/mobile.png",
        href: "/services/mobile"
    },
    {
        title: "Digital Marketing",
        description: "Comprehensive growth solutions focused on institutional reach and national-scale engagement through data-driven digital strategies.",
        tags: ["SEO", "Performance Marketing", "Social Strategy"],
        image: "/images/services/marketing.png",
        href: "/services/marketing"
    },
    {
        title: "AI & Analytics",
        description: "Transforming raw data into actionable intelligence. Predictive models and automation systems that future-proof your institution.",
        tags: ["Predictive Analytics", "Machine Learning", "Data Mining"],
        image: "/images/services/ai.png",
        href: "/services/ai"
    },
    {
        title: "Cloud Solutions",
        description: "Resilient digital infrastructure. We deploy zero-trust cloud architectures that handle millions of requests with absolute security.",
        tags: ["AWS/Azure", "Cloud Native", "Zero Trust"],
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
                                    <p className="text-white/60 text-base mb-8 max-w-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 leading-relaxed">
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
