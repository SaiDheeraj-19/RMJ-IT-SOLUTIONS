"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";
import { Check, ArrowRight, X } from "lucide-react";
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
            // Don't reset isSubmitting yet to keep the success screen active
        }
    }

    return (
        <main className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            {/* Full Screen Success Overlay */}
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
                            className="absolute top-10 right-10 text-stone-300 hover:text-[#1a1a1a] transition-colors"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>

                        <div className="max-w-2xl w-full text-center">
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
                                className="w-24 h-24 bg-brand rounded-full flex items-center justify-center mx-auto mb-12 shadow-[0_20px_40px_rgba(var(--brand-rgb),0.2)]"
                            >
                                <Check size={48} className="text-white" strokeWidth={3} />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-display font-bold text-[#1a1a1a] leading-tight mb-6 tracking-tighter">
                                    Consultation Request <br /> <span className="italic text-brand">Received.</span>
                                </h2>
                                <p className="text-stone-500 text-lg md:text-xl max-w-md mx-auto mb-12 leading-relaxed">
                                    Your institutional requirements have been received. Our senior engineers will prepare for the technical strategy call and reach out shortly.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <Link
                                        href="/"
                                        className="group flex items-center gap-3 text-[#1a1a1a] text-xs uppercase tracking-[0.3em] font-black"
                                    >
                                        Return Home
                                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform opacity-40 text-brand" />
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setStatus(null);
                                            setIsSubmitting(false);
                                            const form = document.getElementById('contact-form') as HTMLFormElement;
                                            form?.reset();
                                        }}
                                        className="px-8 py-4 border border-stone-200 rounded-full text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#1a1a1a] hover:text-white transition-all hover:border-[#1a1a1a]"
                                    >
                                        Send another
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section className="min-h-[80vh] pt-40 flex flex-col justify-end pb-32 px-10 md:px-20">
                <div className="max-w-[1400px] mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-12 block">
                            Contact Us
                        </span>
                        <div className="mb-8">
                            <TextReveal
                                as="h1"
                                text="Start with a"
                                className="text-[clamp(4rem,10vw,8rem)] font-display leading-[0.9] tracking-tighter font-bold"
                                delay={0.2}
                            />
                            <span className="text-[clamp(4rem,10vw,8rem)] font-display italic text-brand leading-none block mt-4 font-bold">Strategy Consultation.</span>
                        </div>
                        <p className="text-xl text-[#606060] max-w-xl leading-relaxed">
                            Tell us about your infrastructure goals. We&apos;ll schedule a deep-dive call to assess bottlenecks and provide a technical roadmap for your organization.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Section className="bg-[#efefef]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    <div className="lg:col-span-7">
                        <form id="contact-form" action={handleSubmit} className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-[#1a1a1a] opacity-40">Full Name</label>
                                    <input
                                        name="name"
                                        required
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full bg-transparent border-b border-stone-300 py-4 focus:border-brand outline-none transition-colors text-xl font-display"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-[#1a1a1a] opacity-40">Work Email</label>
                                    <input
                                        name="email"
                                        required
                                        type="email"
                                        placeholder="you@organization.com"
                                        className="w-full bg-transparent border-b border-stone-300 py-4 focus:border-brand outline-none transition-colors text-xl font-display"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-[#1a1a1a] opacity-40">Organization</label>
                                    <input
                                        name="organization"
                                        type="text"
                                        placeholder="University / Company / Agency"
                                        className="w-full bg-transparent border-b border-stone-300 py-4 focus:border-brand outline-none transition-colors text-xl font-display"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-[#1a1a1a] opacity-40">Service Needed</label>
                                    <select
                                        name="service"
                                        className="w-full bg-transparent border-b border-stone-300 py-4 focus:border-brand outline-none transition-colors text-xl font-display text-[#606060] appearance-none"
                                    >
                                        <option value="">Select a service focus</option>
                                        <option value="digital-engineering">Digital Systems Engineering</option>
                                        <option value="cloud-infrastructure">Cloud & Infrastructure Setup</option>
                                        <option value="custom-web">Custom Web Applications</option>
                                        <option value="security-optimization">Security & Performance Optimization</option>
                                        <option value="strategy-call">General Strategy Consultation</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-widest font-black text-[#1a1a1a] opacity-40">Project Details</label>
                                <textarea
                                    name="requirements"
                                    required
                                    rows={4}
                                    placeholder="Describe your current system, the problem you're facing, or the project you need built..."
                                    className="w-full bg-transparent border-b border-stone-300 py-4 focus:border-brand outline-none transition-colors text-xl font-display resize-none"
                                />
                            </div>

                            {status?.type === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-lg text-sm font-bold tracking-tight bg-red-100 text-red-700"
                                >
                                    {status.message}
                                </motion.div>
                            )}

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="px-16 py-8 bg-[#1a1a1a] text-stone-50 rounded-full text-xs uppercase tracking-[0.4em] font-black hover:bg-brand transition-all shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Submitting..." : "Request Technical Consultation"}
                            </button>
                        </form>
                    </div>

                    <div className="lg:col-span-5 space-y-20">
                        <div>
                            <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8">Headquarters</h3>
                            <p className="text-2xl font-display text-[#1a1a1a] leading-relaxed">
                                RMJ IT SOLUTIONS <br />
                                86/326-2, DOCTORS COLONY, <br />
                                REVENUE WARD NO 86, <br />
                                KURNOOL, Kurnool, <br />
                                Andhra Pradesh, 518002
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8">Direct Channels</h3>
                            <div className="space-y-4">
                                <p className="text-2xl font-display text-[#1a1a1a]">+91 8639756899</p>
                                <p className="text-2xl font-display text-[#1a1a1a] hover:text-brand transition-colors cursor-pointer">support@rmjit.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
