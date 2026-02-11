"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import HorizontalLine from "@/components/ui/HorizontalLine";

const capabilitySuites = [
    {
        title: "Platform Engineering",
        desc: "Building mission-critical web applications designed to handle complex business logic and institutional-scale user demand with absolute resilience. We extract, transform, and deploy your operational model into secure frameworks.",
        points: ["Scalable Architecture", "Systemic Integration", "Microservices Design", "Cloud Optimization"]
    },
    {
        title: "Mobile Architecture & Delivery",
        desc: "Developing analytical mobile applications designed to be understood, adopted, and used at national scale. We deliver premium iOS and Android ecosystems built for engagement.",
        points: ["iOS Native Development", "Android Ecosystems", "UX/UI Institutional Design", "API Resilience"]
    },
    {
        title: "Institutional OS (Digital Campus)",
        desc: "Our specialized academic suite designed to modernize educational administration. We automate attendance, academic records, and recruitment through a unified digital backbone.",
        points: ["Attendance Automation", "Academic Analytics", "Placement Coordination", "Program Monitoring"]
    },
    {
        title: "Strategic Growth Ecosystems",
        desc: "Comprehensive digital marketing solutions focused on institutional reach and national-scale engagement through data-driven strategies.",
        points: ["Search Engine Optimization", "Social Media Strategy", "Email Automation", "Brand Positioning"]
    }
];

export default function ServicesPage() {
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
                            The Expertise
                        </span>
                        <div className="mb-16">
                            <TextReveal
                                as="h1"
                                text="Capability Suites."
                                className="text-[clamp(4rem,12vw,10rem)] font-display leading-[0.9] tracking-tighter font-bold"
                                delay={0.2}
                            />
                            <span className="text-[clamp(4rem,12vw,10rem)] font-display italic text-brand leading-none font-bold">Institutionalized.</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {capabilitySuites.map((suite, i) => (
                <Section key={i} className={i % 2 === 0 ? "bg-[#efefef]" : "bg-white"}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                        <div className="lg:col-span-1">
                            <HorizontalLine className="mb-12 w-12" />
                            <span className="font-mono text-sm text-brand tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="lg:col-span-5">
                            <TextReveal
                                as="h2"
                                text={suite.title}
                                className="text-5xl font-display mb-12 leading-tight font-bold text-[#1a1a1a]"
                            />
                            <HorizontalLine className="mb-12 opacity-30" />
                            <p className="text-xl font-normal leading-relaxed text-[#505050]">
                                {suite.desc}
                            </p>
                        </div>
                        <div className="lg:col-span-1 hidden lg:block" />
                        <div className="lg:col-span-5 grid grid-cols-1 gap-4 pt-12">
                            {suite.points.map((point, j) => (
                                <motion.div
                                    key={j}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + j * 0.1 }}
                                    className="flex items-center space-x-6 py-6 border-b border-stone-200"
                                >
                                    <span className="text-brand font-mono text-xs">+</span>
                                    <span className="text-xs uppercase tracking-[0.3em] font-black text-[#1a1a1a]">{point}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>
            ))}

            <Footer />
        </main>
    );
}
