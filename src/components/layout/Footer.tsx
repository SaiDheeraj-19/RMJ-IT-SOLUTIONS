"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#f5f5f5] pt-24 pb-12 px-6 md:px-12 border-t border-black/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 items-start">
                    {/* About Summary */}
                    <div className="lg:col-span-5 pr-8">
                        <Link href="/" className="text-[20px] font-black uppercase tracking-[0.2em] mb-8 block text-[#1a1a1a]">
                            RMJ IT Solutions
                        </Link>
                        <p className="text-[17px] text-[#505050] leading-relaxed mb-8 max-w-sm">
                            We engineer digital infrastructure for educational institutions, mid-size enterprises, and startups. Confident systems built for scale.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-3 rounded-full bg-white border border-stone-200 hover:border-brand hover:text-brand transition-colors text-stone-500">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="p-3 rounded-full bg-white border border-stone-200 hover:border-brand hover:text-brand transition-colors text-stone-500">
                                <Github size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-[11px] uppercase tracking-[0.2em] font-black text-stone-400 mb-6">Services</h4>
                            <ul className="space-y-4">
                                <li><Link href="/services/erp" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Digital Systems Engineering</Link></li>
                                <li><Link href="/services/cloud" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Cloud & Infrastructure</Link></li>
                                <li><Link href="/services/web" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Custom Web Applications</Link></li>
                                <li><Link href="/services/security" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Security Optimization</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[11px] uppercase tracking-[0.2em] font-black text-stone-400 mb-6">Company</h4>
                            <ul className="space-y-4">
                                <li><Link href="/about" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">About Us</Link></li>
                                <li><Link href="/case-studies" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Case Studies</Link></li>
                                <li><Link href="/process" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Process</Link></li>
                                <li><Link href="/contact" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[11px] uppercase tracking-[0.2em] font-black text-stone-400 mb-6">Connect</h4>
                            <ul className="space-y-4 text-[15px] font-medium text-[#1a1a1a]">
                                <li className="flex items-start gap-3">
                                    <Mail size={16} className="text-brand shrink-0 mt-1" />
                                    <Link href="mailto:support@rmjit.com" className="hover:text-brand transition-colors">support@rmjit.com</Link>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={16} className="text-brand shrink-0 mt-1" />
                                    <span>
                                        Kurnool, Andhra Pradesh<br />
                                        India
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[0.1em] font-bold text-stone-400">
                    <span>© {currentYear} RMJ IT Solutions.</span>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-brand transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
