"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, Building2, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 selection:bg-brand/10 bg-surface min-h-screen">
            {/* Minimal High-End Hero */}
            <section className="pb-20 pt-10 px-10 md:px-20">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto mb-20">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 text-brand mb-4"
                        >
                            <MessageSquare size={28} />
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[clamp(3.5rem,8vw,6.5rem)] font-display font-bold text-foreground leading-[0.9] tracking-tighter"
                        >
                            Let&apos;s build something <span className="text-brand">extraordinary.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-foreground/70 font-medium leading-relaxed"
                        >
                            Whether you need a custom enterprise platform or a complete digital transformation, our team is ready to architect your success.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Interactive Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-8 p-10 md:p-16 rounded-[3rem] border shadow-2xl"
                            style={{ background: 'var(--background)', borderColor: 'var(--border)' }}
                        >
                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-widest text-foreground/70 pl-4">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full border rounded-2xl px-6 py-5 font-bold outline-none transition-all"
                                            style={{ background: 'var(--surface)', color: 'var(--foreground)', borderColor: 'var(--border)' }}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black uppercase tracking-widest text-foreground/70 pl-4">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full border rounded-2xl px-6 py-5 font-bold outline-none transition-all"
                                            style={{ background: 'var(--surface)', color: 'var(--foreground)', borderColor: 'var(--border)' }}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-foreground/70 pl-4">Project Type</label>
                                    <div className="relative">
                                        <select className="w-full border rounded-2xl px-6 py-5 font-bold outline-none appearance-none cursor-pointer transition-all text-lg pt-5"
                                            style={{ background: 'var(--surface)', color: 'var(--foreground)', borderColor: 'var(--border)' }}>
                                            <option>Web Application Development</option>
                                            <option>Mobile Application</option>
                                            <option>Custom Software</option>
                                            <option>Digital Campus</option>
                                        </select>
                                        <ArrowRight size={20} className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-foreground/70 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-foreground/70 pl-4">Project Details</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us about your goals, timeline, and requirements..."
                                        className="w-full border rounded-3xl px-6 py-6 font-bold outline-none transition-all resize-none"
                                        style={{ background: 'var(--surface)', color: 'var(--foreground)', borderColor: 'var(--border)' }}
                                    />
                                </div>
                                <button type="button" className="w-full py-6 bg-brand text-foreground rounded-2xl font-black uppercase tracking-[0.2em] text-sm group relative overflow-hidden transition-all shadow-xl hover:shadow-brand/30 hover:-translate-y-1">
                                    <span className="relative z-10 flex items-center justify-center gap-4">
                                        Send Message <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </span>
                                </button>
                            </form>
                        </motion.div>

                        {/* Direct Contact Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-4 space-y-6"
                        >
                            {[
                                { title: "Headquarters", icon: Building2, desc: "86/326-2 Doctors Colony, Revenue Ward No 86, Kurnool, AP – 518002" },
                                { title: "Direct Phone", icon: Phone, desc: "+91 86397 56899", link: "tel:+918639756899" },
                                { title: "Email Address", icon: Mail, desc: "support@rmjit.com", link: "mailto:support@rmjit.com" }
                            ].map((card, idx) => (
                                <div key={idx} className="p-8 rounded-[2.5rem] border shadow-lg group transition-colors"
                                    style={{ background: 'var(--background)', borderColor: 'var(--border)' }}>
                                    <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-foreground transition-colors">
                                        <card.icon size={24} />
                                    </div>
                                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/70 mb-3">{card.title}</h4>
                                    {card.link ? (
                                        <a href={card.link} className="text-xl font-bold text-foreground hover:text-brand transition-colors block leading-snug tracking-tight">
                                            {card.desc}
                                        </a>
                                    ) : (
                                        <p className="text-xl font-bold text-foreground leading-snug tracking-tight">
                                            {card.desc}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section >
        </div >
    );
}
