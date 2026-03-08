"use client";

import { motion } from "framer-motion";
import { Target, Flag, Users, Cpu, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 selection:bg-brand selection:text-black">
            {/* Enterprise Hero */}
            <section className="bg-background pb-20 pt-10 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

                <div className="max-w-[1440px] mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center space-y-12 max-w-5xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[clamp(3.5rem,8vw,7rem)] font-display font-semibold text-foreground leading-[0.9] tracking-tighter"
                        >
                            Empowering Organizations through <span className="text-foreground/30 italic pr-4">Innovation.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-3xl text-foreground/50 font-medium leading-relaxed max-w-4xl"
                        >
                            We are a technology partner dedicated to building reliable and scalable software systems that accelerate growth and improve operational efficiency across India.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Visual Storytelling Section */}
            <section className="bg-background py-10 relative">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative w-full aspect-[21/9] rounded-[40px] md:rounded-[4rem] bg-surface border border-border/50 overflow-hidden group flex items-center justify-center p-10 hover:border-brand/30 transition-colors duration-1000"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="relative z-10 w-[50%] h-full flex items-center justify-center pointer-events-none">
                            <Image
                                src="/rmjit-logo.png"
                                alt="RMJ IT SOLUTIONS Excellence"
                                fill
                                className="object-contain opacity-50 dark:invert group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values / Mission & Vision */}
            <section className="bg-surface py-40 border-y border-border/50 relative overflow-hidden mt-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.02] dark:from-white/[0.03] to-transparent pointer-events-none" />

                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="flex flex-col space-y-32">

                        {/* Mission Block - Left Aligned */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-10"
                            >
                                <div className="space-y-6">
                                    <span className="text-[11px] uppercase tracking-[0.4em] font-black text-foreground/30 font-mono">
                                        {"// CORE OBJECTIVE"}
                                    </span>
                                    <h2 className="text-6xl md:text-8xl font-display font-semibold text-foreground tracking-tighter leading-[0.85]">
                                        Our <span className="text-foreground/30 italic">Mission.</span>
                                    </h2>
                                </div>
                                <p className="text-2xl md:text-3xl text-foreground/50 font-medium leading-relaxed max-w-xl">
                                    To architect innovative IT ecosystems that synchronize organizational intelligence with digital performance, driving absolute structural transformation.
                                </p>
                                <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
                                    <Target size={16} />
                                    PRECISION DRIVEN DELIVERY
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative aspect-square lg:aspect-video rounded-[40px] bg-background border border-border/50 overflow-hidden group hover:border-brand/30 transition-colors duration-700"
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-3/4 h-3/4 border border-border/50 rounded-full animate-[spin_20s_linear_infinite] p-8 group-hover:border-brand/20 transition-colors duration-700">
                                        <div className="w-full h-full border border-border/30 rounded-full animate-[ping_4s_linear_infinite] opacity-20 group-hover:border-brand/50 transition-colors duration-700" />
                                    </div>
                                    <Target size={80} className="absolute text-foreground/10 group-hover:text-brand/50 group-hover:scale-110 transition-all duration-700" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Vision Block - Right Aligned (Reversed) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, order: 1 }}
                                whileInView={{ opacity: 1, order: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="lg:order-2 space-y-10"
                            >
                                <div className="space-y-6">
                                    <span className="text-[11px] uppercase tracking-[0.4em] font-black text-foreground/30 font-mono">
                                        {"// FUTURE HORIZON"}
                                    </span>
                                    <h2 className="text-6xl md:text-8xl font-display font-semibold text-foreground tracking-tighter leading-[0.85]">
                                        Our <span className="text-foreground/30 italic">Vision.</span>
                                    </h2>
                                </div>
                                <p className="text-2xl md:text-3xl text-foreground/50 font-medium leading-relaxed max-w-xl">
                                    To redefine the global benchmark for institutional engineering, building a future where digital infrastructure operates at the speed of human thought.
                                </p>
                                <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
                                    <Flag size={16} />
                                    BEYOND TECHNICAL BOUNDARIES
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -40, order: 2 }}
                                whileInView={{ opacity: 1, x: 0, order: 2 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="lg:order-1 relative aspect-square lg:aspect-video rounded-[40px] bg-background border border-border/50 overflow-hidden group hover:border-brand/30 transition-colors duration-700"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex flex-col items-center gap-8">
                                        <div className="flex gap-4">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-1.5 h-16 bg-foreground/20 rounded-full animate-pulse group-hover:bg-brand/50 transition-colors duration-700" style={{ animationDelay: `${i * 0.2}s` }} />
                                            ))}
                                        </div>
                                        <Flag size={80} className="text-foreground/10 group-hover:text-brand/50 transition-colors duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="bg-background py-40 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1440px] mx-auto">
                    <div className="mb-24 md:text-center max-w-4xl mx-auto space-y-8">
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-foreground/30 font-mono">
                            {"// THE RMJ ADVANTAGE"}
                        </span>
                        <h2 className="text-[clamp(3.5rem,6vw,5rem)] font-display font-semibold text-foreground leading-[0.95] tracking-tighter">
                            Designed for scale. Built for impact.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Expert Team", desc: "Our developers stay updated with industry trends to deliver high-performance systems.", icon: Users },
                            { title: "Custom Solutions", desc: "Every architecture is specifically tailored to organizational needs and goals.", icon: Cpu },
                            { title: "Results Driven", desc: "We focus heavily on measurable ROI and tangible business improvements.", icon: TrendingUp },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-12 rounded-[40px] bg-surface border border-border/50 hover:border-brand/30 transition-all duration-500 overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-foreground/50 border border-border/50 mb-8 group-hover:bg-brand/10 group-hover:text-brand group-hover:border-brand/30 transition-colors duration-500">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="relative z-10 text-3xl font-display font-semibold text-foreground mb-4 tracking-tight">{item.title}</h3>
                                <p className="relative z-10 text-lg text-foreground/50 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
