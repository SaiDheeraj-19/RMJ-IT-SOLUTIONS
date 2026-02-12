"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white pt-32 pb-12 px-10 md:px-20 border-t border-slate-100 overflow-hidden relative">
            {/* Subtle Aura */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/10 to-transparent" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 items-start">
                    {/* Left Brand Block */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-6">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand block font-mono">
                                {`// ARCHITECTURAL PARTNER`}
                            </span>
                            <Link href="/contact" className="group block">
                                <h2 className="text-[clamp(2.1rem,4vw,3.2rem)] font-display font-bold text-slate-900 leading-[1.1] tracking-tighter group-hover:text-brand transition-colors duration-500">
                                    Engineering systems <br /> that institutions rely on.
                                </h2>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
                        {/* Services */}
                        <div className="space-y-8">
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
                        <div className="space-y-8">
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

                        {/* Social */}
                        <div className="space-y-8">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 font-mono">Connect</h4>
                            <ul className="space-y-4">
                                {['LinkedIn', 'Instagram', 'Twitter'].map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-sm font-bold text-slate-600 hover:text-brand transition-colors tracking-tight">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technical Contact */}
                        <div className="space-y-8">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 font-mono">Audit Context</h4>
                            <div className="space-y-6">
                                <Link href="tel:+918639756899" className="flex items-center gap-3 text-sm font-black text-slate-900 hover:text-brand transition-colors">
                                    <Phone size={14} className="text-brand" /> +91 86397 56899
                                </Link>
                                <Link href="mailto:support@rmjit.com" className="flex items-center gap-3 text-sm font-black text-slate-900 hover:text-brand transition-colors">
                                    <Mail size={14} className="text-brand" /> support@rmjit.com
                                </Link>
                                <Link
                                    href="https://www.google.com/maps/search/?api=1&query=RMJ+IT+SOLUTIONS+Kurnool+Andhra+Pradesh"
                                    target="_blank"
                                    className="flex gap-3 text-slate-500 pt-2 leading-relaxed hover:text-brand transition-colors group"
                                >
                                    <MapPin size={14} className="text-brand shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                    <p className="text-[11px] font-bold uppercase tracking-wider">
                                        Doctors Colony, <br /> Kurnool, AP
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Massive Background Text - Architectural Style - Outside flex but inside relative footer */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
                    <span className="text-[15vw] font-display font-black text-slate-900 leading-none tracking-tighter uppercase whitespace-nowrap block translate-y-1/2">
                        RMJ SOLUTIONS
                    </span>
                </div>

                {/* Bottom Legal Section */}
                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        © {currentYear} RMJ IT SOLUTIONS. ALL RIGHTS RESERVED.
                    </span>

                    <div className="flex gap-10">
                        <Link href="/privacy" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
