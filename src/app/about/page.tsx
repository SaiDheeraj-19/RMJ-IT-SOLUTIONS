"use client";

import { motion } from "framer-motion";
import { Target, Flag, Users, Cpu, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 selection:bg-brand/10">
            {/* Enterprise Hero */}
            <section className="bg-white pb-20 pt-10 px-10 md:px-20">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col items-center text-center space-y-12 max-w-5xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[clamp(3.5rem,8vw,7rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter"
                        >
                            Empowering Organizations through <span className="text-brand italic pr-4">Innovation.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-3xl text-slate-500 font-medium leading-relaxed max-w-4xl"
                        >
                            We are a technology partner dedicated to building reliable and scalable software systems that accelerate growth and improve operational efficiency across India.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Visual Storytelling Section */}
            <section className="bg-white py-10">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative w-full aspect-[21/9] rounded-[4rem] bg-slate-50 border border-slate-100 overflow-hidden group flex items-center justify-center p-10"
                    >
                        <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors duration-1000" />
                        <div className="relative z-10 w-[50%] h-full flex items-center justify-center pointer-events-none">
                            <Image
                                src="/rmjit.png"
                                alt="RMJ IT SOLUTIONS Excellence"
                                width={800}
                                height={800}
                                className="object-contain opacity-90 group-hover:scale-105 transition-transform duration-1000 pointer-events-none"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values / Mission & Vision Redesign */}
            <section className="bg-[#fafafa] py-40 border-y border-slate-100 relative overflow-hidden">
                {/* Decorative technical matrix */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(${'#4f46e5'} 1px, transparent 1px)`,
                        backgroundSize: '32px 32px',
                    }}
                />

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
                                    <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand font-mono">
                                        {"// CORE OBJECTIVE"}
                                    </span>
                                    <h2 className="text-6xl md:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.85]">
                                        Our <span className="text-brand">Mission.</span>
                                    </h2>
                                </div>
                                <p className="text-2xl md:text-3xl text-slate-500 font-medium leading-relaxed max-w-xl">
                                    To architect innovative IT ecosystems that synchronize organizational intelligence with digital performance, driving absolute structural transformation.
                                </p>
                                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                                    <Target size={16} className="text-brand" />
                                    PRECISION DRIVEN DELIVERY
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative aspect-square lg:aspect-video rounded-[3rem] bg-indigo-50 border border-indigo-100 overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/40 to-transparent backdrop-blur-sm" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-3/4 h-3/4 border border-brand/20 rounded-full animate-[spin_20s_linear_infinite] p-8">
                                        <div className="w-full h-full border border-brand/10 rounded-full animate-[ping_4s_linear_infinite] opacity-20" />
                                    </div>
                                    <Target size={80} className="absolute text-brand/20 group-hover:scale-110 transition-transform duration-700" />
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
                                    <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand font-mono">
                                        {"// FUTURE HORIZON"}
                                    </span>
                                    <h2 className="text-6xl md:text-8xl font-display font-bold text-slate-900 tracking-tighter leading-[0.85]">
                                        Our <span className="text-brand italic">Vision.</span>
                                    </h2>
                                </div>
                                <p className="text-2xl md:text-3xl text-slate-500 font-medium leading-relaxed max-w-xl">
                                    To redefine the global benchmark for institutional engineering, building a future where digital infrastructure operates at the speed of human thought.
                                </p>
                                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                                    <Flag size={16} className="text-brand" />
                                    BEYOND TECHNICAL BOUNDARIES
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -40, order: 2 }}
                                whileInView={{ opacity: 1, x: 0, order: 2 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="lg:order-1 relative aspect-square lg:aspect-video rounded-[3rem] bg-slate-900 border border-slate-800 overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent" />
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/30 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex flex-col items-center gap-8">
                                        <div className="flex gap-4">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-1.5 h-16 bg-brand/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                            ))}
                                        </div>
                                        <Flag size={80} className="text-white/10 group-hover:text-brand/20 transition-colors duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Redesign on About Page */}
            <section className="bg-white py-40 px-10 md:px-20">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="mb-24 md:text-center max-w-3xl mx-auto space-y-8">
                        <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand font-mono">
                            {"// THE RMJ ADVANTAGE"}
                        </span>
                        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-slate-900 leading-[0.95] tracking-tighter">
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
                                className="group p-12 rounded-[3vw] bg-slate-50 border border-slate-100 hover:border-brand/20 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-400 mb-8 border border-slate-100 group-hover:bg-brand group-hover:text-white transition-colors">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
