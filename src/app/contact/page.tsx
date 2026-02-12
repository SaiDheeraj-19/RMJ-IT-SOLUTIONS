"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";
import { Check, ArrowRight, X, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setStatus(null);

        const result = await sendContactEmail(formData);

        if (result.error) {
            setStatus({ type: 'error', message: result.error });
            setIsSubmitting(false);
        } else {
            setStatus({ type: 'success', message: "Engagement initiated successfully." });
        }
    }

    return (
        <main className="min-h-screen bg-white text-[#0f172a]">
            <Navbar />

            {/* Success Overlay */}
            <AnimatePresence>
                {status?.type === 'success' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-white flex items-center justify-center p-6"
                    >
                        <button
                            onClick={() => {
                                setStatus(null);
                                setIsSubmitting(false);
                                const form = document.getElementById('contact-form') as HTMLFormElement;
                                form?.reset();
                            }}
                            className="absolute top-10 right-10 text-slate-300 hover:text-brand transition-colors"
                        >
                            <X size={32} strokeWidth={1.5} />
                        </button>

                        <div className="max-w-2xl w-full text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.2 }}
                                className="w-24 h-24 bg-brand rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-brand/30"
                            >
                                <Check size={48} className="text-white" strokeWidth={3} />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-[clamp(2.5rem,6vw,4rem)] font-display font-bold text-slate-900 leading-tight mb-6 tracking-tighter"
                            >
                                Consultation Request <br /> <span className="italic text-brand">Received.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-slate-500 text-lg max-w-md mx-auto mb-12 leading-relaxed"
                            >
                                Your institutional requirements have been received. Our architecture team will review and contact you within 24 business hours.
                            </motion.p>

                            <Link
                                href="/"
                                className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-black hover:bg-brand transition-all duration-500"
                            >
                                Return Home <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="min-h-[70vh] pt-40 flex flex-col justify-end pb-32 px-10 md:px-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#f8fafc] z-0" />
                <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-50 rounded-full blur-[150px] opacity-60 z-0" />

                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-12 block font-mono">
                            {`// START THE CONVERSATION`}
                        </span>
                        <div className="mb-12">
                            <TextReveal
                                as="h1"
                                text="Initiate Structural"
                                className="text-[clamp(3.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tighter font-bold text-slate-900"
                                delay={0.2}
                            />
                            <span className="text-[clamp(3.5rem,8vw,7rem)] font-display italic text-brand leading-[0.9] block mt-4 font-bold tracking-tight">Strategy Consultation.</span>
                        </div>
                        <p className="text-2xl text-slate-500 max-w-2xl leading-relaxed font-normal">
                            Map your organizational goals to a fixed engineering roadmap. No fluff, just architecture.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <Section className="bg-white border-y border-slate-100 py-40">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
                    <div className="lg:col-span-7">
                        <form id="contact-form" action={handleSubmit} className="space-y-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 font-mono">Full Name</label>
                                    <input
                                        name="name"
                                        required
                                        type="text"
                                        placeholder="Institutional Lead Name"
                                        className="w-full bg-transparent border-b border-slate-200 py-6 focus:border-brand outline-none transition-all text-xl font-display placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 font-mono">Work Email</label>
                                    <input
                                        name="email"
                                        required
                                        type="email"
                                        placeholder="lead@organization.edu"
                                        className="w-full bg-transparent border-b border-slate-200 py-6 focus:border-brand outline-none transition-all text-xl font-display placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 font-mono">Organization</label>
                                    <input
                                        name="organization"
                                        type="text"
                                        placeholder="University / Enterprise Name"
                                        className="w-full bg-transparent border-b border-slate-200 py-6 focus:border-brand outline-none transition-all text-xl font-display placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 font-mono">Technical Domain</label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            className="w-full bg-transparent border-b border-slate-200 py-6 focus:border-brand outline-none transition-all text-xl font-display text-slate-500 appearance-none"
                                        >
                                            <option value="">Select Priority Domain</option>
                                            <option value="digital-engineering">Systems Engineering (ERP)</option>
                                            <option value="cloud-infrastructure">Cloud & Scalability</option>
                                            <option value="custom-web">Direct Web Portals</option>
                                            <option value="security-optimization">Security & Hardening</option>
                                            <option value="ai-automation">Institutional AI Mastery</option>
                                        </select>
                                        <div className="absolute right-0 bottom-6 pointer-events-none text-slate-400">
                                            <ArrowRight size={18} className="rotate-90" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 font-mono">Infrastructure Overview</label>
                                <textarea
                                    name="requirements"
                                    required
                                    rows={4}
                                    placeholder="Describe current system constraints, user scales, or security requirements..."
                                    className="w-full bg-transparent border-b border-slate-200 py-6 focus:border-brand outline-none transition-all text-xl font-display resize-none placeholder:text-slate-300"
                                />
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-10">
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full md:w-auto px-16 py-8 bg-slate-900 text-white rounded-full text-xs uppercase tracking-[0.4em] font-black hover:bg-brand transition-all duration-500 shadow-2xl shadow-slate-900/10 disabled:opacity-50"
                                >
                                    {isSubmitting ? "Initiating Audit..." : "Request Technical Consultation"}
                                </button>
                                <div className="flex items-center gap-3 text-slate-400">
                                    <ShieldCheck className="w-5 h-5" />
                                    <span className="text-[10px] font-black uppercase tracking-widest font-mono">Encrypted & Secure</span>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="lg:col-span-12">
                        {/* Institutional Philosophy Section - Team Messages */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    role: "Managing Director",
                                    message: "We don't build software; we engineer certainty. Our systems are designed to outlast the typical tech lifecycle, providing a stable foundation for institutional growth.",
                                    gradient: "from-blue-50/50 to-indigo-50/30"
                                },
                                {
                                    role: "Lead Systems Architect",
                                    message: "Architecture is about constraints. We embrace the complexity of institutional requirements to deliver simplicity in execution and absolute reliability in performance.",
                                    gradient: "from-brand/5 to-transparent"
                                },
                                {
                                    role: "Chief Strategy Officer",
                                    message: "Digital transformation isn't a project; it's a structural upgrade. We partner with leaders who understand that technology is the core infrastructure of the future.",
                                    gradient: "from-stone-50 to-transparent"
                                }
                            ].map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    className={`p-12 rounded-[3.5rem] bg-gradient-to-br ${member.gradient} border border-slate-100 relative overflow-hidden group`}
                                >
                                    <div className="absolute top-0 right-0 p-8 text-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <ShieldCheck size={40} strokeWidth={1} />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block font-mono">
                                        {member.role}
                                    </span>
                                    <p className="text-xl font-display font-medium text-slate-700 leading-relaxed italic">
                                        "{member.message}"
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
