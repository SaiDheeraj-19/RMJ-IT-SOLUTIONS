"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Code, Building } from "lucide-react";

const capabilities = [
    {
        title: "Web Application Development",
        description: "We design and develop secure, scalable web applications tailored to meet the unique needs of businesses, focusing on usability and performance.",
        icon: Globe
    },
    {
        title: "Mobile App Development",
        description: "Powerful Android and iOS applications that help businesses connect with customers and streamline their daily internal operations.",
        icon: Smartphone
    },
    {
        title: "Custom Software",
        description: "Bespoke software systems designed from scratch to automate workflows, manage data efficiently, and improve overall business productivity.",
        icon: Code
    },
    {
        title: "Institutional Solutions",
        description: "Specialized digital platforms built for educational and enterprise institutions to manage academic operations and secure student activities.",
        icon: Building
    }
];

export default function Capabilities() {
    return (
        <section id="expertise" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[clamp(2.5rem,5vw,4.5rem)] font-display text-foreground"
                    >
                        Building the technical foundations of tomorrow.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-foreground/60 font-medium max-w-3xl"
                    >
                        We replace the need for multiple vendors. From modern web applications to complex institutional systems, we build the entire ecosystem your business runs on.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center gap-6 pt-4"
                    >
                        <Link
                            href="/contact"
                            className="btn-glow px-8 py-3.5 rounded-[100px] text-sm font-medium tracking-wide flex items-center"
                        >
                            Work With Us
                        </Link>
                        <Link
                            href="/services"
                            className="group flex items-center gap-2 px-6 py-4 text-sm font-medium text-foreground hover:text-brand transition-colors"
                        >
                            Explore our services
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group relative bg-surface border border-border rounded-[32px] p-10 md:p-14 overflow-hidden hover:border-brand/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                <cap.icon className="w-10 h-10 text-foreground/80 group-hover:text-brand transition-colors mb-12" strokeWidth={1.5} />

                                <h3 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                                    {cap.title}
                                </h3>

                                <p className="text-lg text-foreground/50 leading-relaxed mb-12 flex-grow">
                                    {cap.description}
                                </p>

                                <div className="flex items-center gap-2 text-foreground/50 group-hover:text-foreground transition-colors text-sm font-medium pt-4 border-t border-border">
                                    See More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
