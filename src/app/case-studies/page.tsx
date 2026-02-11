"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import HorizontalLine from "@/components/ui/HorizontalLine";

const impacts = [
    {
        title: "Digital Campus Infrastructure Rollout.",
        sector: "Academic Sector",
        desc: "Modernizing administrative workflows for massive-scale educational institutions. We achieved 100% real-time synchronization across 80+ campuses.",
        metrics: ["80+ Campuses", "500k+ Daily Users", "40% Cost Reduction"]
    },
    {
        title: "Automated Corporate Operations Ecosystem.",
        sector: "Enterprise Sector",
        desc: "Bridging the gap between manual business logic and scalable digital operations for high-growth corporate organizations. Streamlined ERP reduced processing time by 65%.",
        metrics: ["65% Faster Ops", "99.9% Uptime", "3.2M Records/Day"]
    },
    {
        title: "Regional Strategic Expansion Ecosystem.",
        sector: "Digital Growth",
        desc: "Deploying comprehensive analytical frameworks to catalyze business reach. Scaled digital presence from zero to national-scale brand positioning within 12 months.",
        metrics: ["12 Mo. Scale", "200% Reach Growth", "Zero Data Leaks"]
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-[#f5f5f5]">
            <Navbar />

            <section className="min-h-[80vh] pt-40 flex flex-col justify-end pb-32 px-10 md:px-20">
                <div className="max-w-[1400px] mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-12 block">
                            Achievements
                        </span>
                        <div className="mb-16">
                            <TextReveal
                                as="h1"
                                text="Institutional Impact."
                                className="text-[clamp(4rem,10vw,8rem)] font-display leading-[0.9] tracking-tighter font-bold"
                                delay={0.2}
                            />
                            <span className="text-[clamp(4rem,10vw,8rem)] font-display italic text-brand leading-none block mt-4 font-bold">At Scale.</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {impacts.map((item, i) => (
                <Section key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#efefef]"}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                        <div className="lg:col-span-1">
                            <HorizontalLine className="mb-12 w-12" />
                            <span className="font-mono text-sm text-brand tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="lg:col-span-11 grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-6">
                                <span className="text-[11px] uppercase tracking-[0.4em] font-black text-stone-400 mb-12 block">
                                    {item.sector}
                                </span>
                                <TextReveal
                                    as="h2"
                                    text={item.title}
                                    className="text-5xl font-display font-bold leading-[1.05] mb-12 tracking-tight text-[#1a1a1a]"
                                />
                            </div>
                            <div className="md:col-span-6 pt-12 md:pt-48">
                                <TextReveal
                                    as="p"
                                    text={item.desc}
                                    className="text-2xl font-normal leading-relaxed text-[#505050]"
                                    delay={0.5}
                                />

                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12 border-t border-stone-200 pt-12">
                                    {item.metrics.map((metric, idx) => (
                                        <div key={idx}>
                                            <div className="text-2xl font-display font-bold text-[#1a1a1a]">{metric.split(' ')[0]}</div>
                                            <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider mt-1">{metric.split(' ').slice(1).join(' ')}</div>
                                        </div>
                                    ))}
                                </div>

                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="mt-16 text-[11px] uppercase tracking-[0.3em] font-black border-b-2 border-brand pb-2 hover:text-brand transition-colors text-[#1a1a1a]"
                                >
                                    Explore Intervention
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </Section>
            ))}

            <Footer />
        </main>
    );
}
