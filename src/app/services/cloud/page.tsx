"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Image from "next/image";
import Link from "next/link";

export default function CloudSolutionsPage() {
    return (
        <main className="min-h-screen bg-[#f5f5f5]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services/cloud.png"
                        alt="Cloud Solutions"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5]/80 via-[#f5f5f5]/50 to-[#f5f5f5]" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6 block">
                            Service / Infrastructure
                        </span>
                        <TextReveal
                            as="h1"
                            text="Cloud Solutions."
                            className="text-[clamp(3rem,8vw,6rem)] font-display leading-[0.9] tracking-tighter font-bold text-[#1a1a1a] mb-6"
                        />
                        <p className="text-xl md:text-2xl text-stone-600 max-w-xl leading-relaxed mb-8">
                            Resilient, secure, and scalable cloud infrastructure. We design and manage cloud ecosystems that ensure your business is always on and ready to scale.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#1a1a1a] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-brand transition-colors shadow-lg"
                        >
                            Start Project
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Details Section */}
            <Section className="bg-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <h3 className="text-3xl font-display font-bold mb-6 text-[#1a1a1a]">Infinite Scale</h3>
                        <p className="text-stone-500 leading-relaxed mb-8">
                            The cloud is the foundation of modern digital business. Our solutions ensure you have the flexibility to innovate without being held back by legacy infrastructure. We partner with AWS, Azure, and Google Cloud.
                        </p>
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Cloud Migration", desc: "Seamlessly move your legacy systems to the cloud." },
                            { title: "DevOps Integration", desc: "CI/CD pipelines for rapid and reliable deployment." },
                            { title: "Serverless Computing", desc: "Run code without partitioning or managing servers." },
                            { title: "Cloud Security", desc: "Enterprise-grade protection for your data and assets." },
                            { title: "Disaster Recovery", desc: "Robust backup plans to ensure business continuity." },
                            { title: "Cost Optimization", desc: "Managing resources efficiently to reduce overhead." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors border border-stone-100">
                                <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-[#1a1a1a]">{item.title}</h4>
                                <p className="text-sm text-stone-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
