"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, Building2, MessageSquare } from "lucide-react";

export default function ContactSection() {
    return (
        <Section id="contact" className="py-40 bg-surface border-t border-slate-100">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 text-brand mb-2"
                    >
                        <MessageSquare size={28} />
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold text-foreground leading-[0.95] tracking-tighter"
                    >
                        Start Your Digital Transformation
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-foreground/70 font-medium leading-relaxed"
                    >
                        Ready to architect your next breakthrough? Let&apos;s discuss your project.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Interactive Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-8 bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/40"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 pl-4">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-surface border border-transparent rounded-2xl px-6 py-4 font-bold text-foreground focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all placeholder:text-foreground/70"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 pl-4">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-surface border border-transparent rounded-2xl px-6 py-4 font-bold text-foreground focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all placeholder:text-foreground/70"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 pl-4">Project Type</label>
                                <div className="relative">
                                    <select className="w-full bg-surface border border-transparent rounded-2xl px-6 py-4 font-bold text-foreground focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none appearance-none cursor-pointer transition-all">
                                        <option>Web Application Development</option>
                                        <option>Mobile Application</option>
                                        <option>Custom Software</option>
                                        <option>Other Services</option>
                                    </select>
                                    <ArrowRight size={18} className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-foreground/70 pointer-events-none" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 pl-4">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-surface border border-transparent rounded-3xl px-6 py-6 font-bold text-foreground focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all resize-none placeholder:text-foreground/70"
                                />
                            </div>
                            <button type="button" className="w-full py-5 bg-surface0 text-foreground rounded-2xl font-black uppercase tracking-[0.2em] text-xs group relative overflow-hidden transition-all shadow-xl hover:bg-brand hover:-translate-y-1">
                                <span className="relative z-10 flex items-center justify-center gap-4">
                                    Send Inquiry <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </form>
                    </motion.div>

                    {/* Direct Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-4 space-y-5"
                    >
                        {[
                            { title: "Headquarters", icon: Building2, desc: "86/326-2 Doctors Colony, Revenue Ward No 86, Kurnool, AP – 518002" },
                            { title: "Direct Phone", icon: Phone, desc: "+91 86397 56899", link: "tel:+918639756899" },
                            { title: "Email Address", icon: Mail, desc: "support@techbro.com", link: "mailto:support@techbro.com" }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white p-7 rounded-[2rem] border border-slate-200 shadow-md shadow-slate-200/40 group hover:border-brand/30 transition-colors">
                                <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center text-brand mb-5 group-hover:bg-brand group-hover:text-foreground transition-colors">
                                    <card.icon size={20} />
                                </div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 mb-2">{card.title}</h4>
                                {card.link ? (
                                    <a href={card.link} className="text-lg font-bold text-foreground hover:text-brand transition-colors block leading-snug tracking-tight">
                                        {card.desc}
                                    </a>
                                ) : (
                                    <p className="text-lg font-bold text-foreground leading-snug tracking-tight">
                                        {card.desc}
                                    </p>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
