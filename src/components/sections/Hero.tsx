"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Image from "next/image";
import Link from "next/link";
import { Globe, Smartphone, GraduationCap, Cloud, ShieldCheck, BarChart3, Zap } from "lucide-react";

const services = [
    { name: "Web Application", icon: Globe },
    { name: "Mobile App Dev", icon: Smartphone },
    { name: "Digital Campus", icon: GraduationCap },
    { name: "Cloud Support", icon: Cloud },
    { name: "Cybersecurity", icon: ShieldCheck },
    { name: "Data Analytics", icon: BarChart3 },
    { name: "ERP Integration", icon: Zap },
    { name: "AI Solutions", icon: BarChart3 }
];

export default function Hero() {
    return (
        <section className="min-h-[92vh] pt-32 pb-16 px-10 md:px-20 bg-[#f5f5f5] flex flex-col justify-center overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-br from-brand/5 to-transparent rounded-full blur-[120px] opacity-40" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-stone-200 to-transparent rounded-full blur-[100px] opacity-40" />
            </div>

            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16 relative z-10">
                {/* Left Content */}
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="mb-8 relative">
                            <TextReveal
                                as="h1"
                                text="We Build Systems That Run Your Campus, Not the Other Way Around."
                                className="text-[clamp(3rem,6.5vw,5.5rem)] font-display leading-[0.95] font-bold tracking-tight text-[#1a1a1a]"
                                delay={0.2}
                            />
                        </div>

                        <div className="mb-12 max-w-xl pl-2">
                            <TextReveal
                                as="p"
                                text="From student portals handling 10,000+ users to ERP systems that cut admin work by 60% — we deliver technology that works on day one and scales for years."
                                className="text-[18px] font-normal text-[#505050] leading-[1.6]"
                                delay={0.8}
                            />
                        </div>

                        {/* Dual CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" id="hero-cta-primary">
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.8 }}
                                    className="group px-10 py-5 bg-[#1a1a1a] text-stone-50 rounded-full text-[15px] font-medium hover:bg-brand transition-all duration-300 shadow-xl flex items-center gap-3 overflow-hidden relative"
                                >
                                    <span className="relative z-10 text-white">Contact Us →</span>
                                    <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                </motion.button>
                            </Link>
                            <Link href="/about" id="hero-cta-secondary">
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.4, duration: 0.8 }}
                                    className="group px-8 py-5 bg-transparent border border-stone-300 text-[#1a1a1a] rounded-full text-[15px] font-medium hover:border-brand hover:text-brand transition-all duration-300 flex items-center gap-3"
                                >
                                    <span>About Us</span>
                                </motion.button>
                            </Link>
                        </div>

                        {/* Quick proof points */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8, duration: 0.8 }}
                            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-stone-400"
                        >
                            <span>✓ 14-day free audit</span>
                            <span>✓ No lock-in contracts</span>
                            <span>✓ 99.9% uptime SLA</span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Visuals */}
                <div className="lg:col-span-5 relative hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-20 w-full h-full flex items-center justify-end">
                            <div className="relative w-[140%] h-[140%] -right-20">
                                <Image
                                    src="/images/company-cuate.svg"
                                    alt="RMJ IT Solutions - Campus Technology Infrastructure"
                                    width={1400}
                                    height={1000}
                                    className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(129,103,41,0.15)]"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-brand/20 to-transparent blur-[140px] -z-10 opacity-30" />
                    </motion.div>
                </div>
            </div>

            {/* Core Capabilities Marquee */}
            <div className="w-full pt-16 border-t border-stone-200/60 relative z-10 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-10 md:px-20 mb-8">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 block">
                        What We Deploy
                    </span>
                </div>

                <div className="relative flex w-full overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f5f5f5] to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f5f5f5] to-transparent z-20 pointer-events-none" />

                    <motion.div
                        className="flex gap-16 py-4 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 35
                        }}
                    >
                        {[...services, ...services, ...services].map((service, i) => (
                            <div key={i} className="flex items-center gap-4 group cursor-default opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                                <div className="p-3 bg-white border border-stone-200 shadow-sm rounded-full text-[#1a1a1a] group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors duration-300">
                                    <service.icon size={20} strokeWidth={2} />
                                </div>
                                <span className="text-lg font-display font-bold text-[#1a1a1a] tracking-tight whitespace-nowrap">
                                    {service.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
