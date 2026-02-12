"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white pt-40 pb-16 px-10 md:px-20 border-t border-slate-100 overflow-hidden relative">
            {/* Subtle Aura */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/10 to-transparent" />

            {/* Massive Background Text - Perfectly Centered Relative to Viewport */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] flex justify-center">
                <span className="text-[16vw] font-display font-black text-slate-900 leading-none tracking-tighter uppercase whitespace-nowrap block translate-y-1/2">
                    RMJ SOLUTIONS
                </span>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32 items-start">
                    {/* Left Brand Block */}
                    <div className="lg:col-span-5">
                        <div className="space-y-8 max-w-sm">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand block font-mono">
                                {`// ARCHITECTURAL PARTNER`}
                            </span>
                            <Link href="/contact" className="group block">
                                <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-bold text-slate-900 leading-[1.05] tracking-tighter group-hover:text-brand transition-colors duration-500">
                                    Engineering systems <br /> that institutions trust.
                                </h2>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Services */}
                        <div className="space-y-10">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 font-mono">Capabilities</h4>
                            <ul className="space-y-4">
                                {['Digital Systems', 'Cloud Ops', 'Web Portals', 'Institutional AI'].map((link) => (
                                    <li key={link}>
                                        <Link href="/services" className="text-sm font-bold text-slate-600 hover:text-brand transition-colors tracking-tight">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="space-y-10">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 font-mono">Company</h4>
                            <ul className="space-y-4">
                                {[
                                    { label: 'Engineering Philosophy', path: '/about' },
                                    { label: 'Technical Strategy', path: '/process' },
                                    { label: 'Contact Hub', path: '/contact' }
                                ].map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.path} className="text-sm font-bold text-slate-600 hover:text-brand transition-colors tracking-tight">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technical Contact */}
                        <div className="space-y-10">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 font-mono">Network Hub</h4>
                            <div className="space-y-8">
                                <p className="text-sm font-bold text-slate-600 leading-relaxed max-w-[200px]">
                                    Institutional access is managed via encrypted consultation protocols.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand hover:gap-4 transition-all duration-500"
                                >
                                    Initiate Consultation <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal Section - Perfectly Aligned */}
                <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-12">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        © {currentYear} RMJ IT SOLUTIONS. ALL RIGHTS RESERVED.
                    </span>

                    <div className="flex gap-10">
                        <Link href="/privacy" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors">Data Privacy</Link>
                        <Link href="/terms" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors">Legal Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
