"use client";

import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#f5f5f5] pt-20 pb-10 px-6 md:px-12 border-t border-black/5 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
                    {/* Left CTA Block */}
                    <div className="lg:col-span-4">
                        <div className="mb-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6 block">
                                Ready to start?
                            </span>
                            <Link href="/contact" className="group block">
                                <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-bold text-[#1a1a1a] leading-[1.05] tracking-tight group-hover:text-brand transition-colors duration-500">
                                    Get your free <br /> technical audit.
                                </h2>
                            </Link>
                        </div>
                    </div>

                    {/* Right Columns */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Column 1: Services & Company */}
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-6">Services</h4>
                                <ul className="space-y-3">
                                    <li><Link href="/services/web" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Website Development</Link></li>
                                    <li><Link href="/services/mobile" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Android & iOS Apps</Link></li>
                                    <li><Link href="/services/marketing" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Digital Marketing</Link></li>
                                    <li><Link href="/services/ai" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">AI & Analytics</Link></li>
                                    <li><Link href="/services/cloud" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Cloud Solutions</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-6">Company</h4>
                                <ul className="space-y-3">
                                    <li><Link href="/about" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">About Us</Link></li>
                                    <li><Link href="/case-studies" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Case Studies</Link></li>
                                    <li><Link href="/contact" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Social Only */}
                        <div>
                            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-6">Social</h4>
                            <ul className="space-y-3">
                                <li><Link href="#" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">LinkedIn</Link></li>
                                <li><Link href="#" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Instagram</Link></li>
                                <li><Link href="#" className="text-[15px] font-medium text-[#1a1a1a] hover:text-brand transition-colors">Twitter</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Contact Info */}
                        <div>
                            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-6">Contact Us</h4>
                            <div className="space-y-6 text-[15px] font-medium text-[#1a1a1a]">
                                <div>
                                    <span className="block font-bold mb-2 uppercase tracking-wide text-[#1a1a1a]">RMJ IT SOLUTIONS</span>
                                    <Link href="https://maps.google.com" target="_blank" className="hover:text-brand transition-colors leading-relaxed block text-[#505050]">
                                        86/326-2, DOCTORS COLONY,<br />
                                        REVENUE WARD NO 86,<br />
                                        KURNOOL, Kurnool,<br />
                                        Andhra Pradesh, 518002
                                    </Link>
                                </div>
                                <div className="space-y-2 text-[#505050]">
                                    <p><span className="text-stone-400 font-bold text-[10px] uppercase tracking-wider block mb-0.5">Phone</span>
                                        <Link href="tel:+918639756899" className="hover:text-brand transition-colors text-[#1a1a1a] font-bold tracking-tight"> +91 8639756899</Link>
                                    </p>
                                    <p><span className="text-stone-400 font-bold text-[10px] uppercase tracking-wider block mb-0.5">Email</span>
                                        <Link href="mailto:support@rmjit.com" className="hover:text-brand transition-colors text-[#1a1a1a] font-bold tracking-tight"> support@rmjit.com</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col w-full overflow-hidden border-t border-black/5 pt-12">
                    {/* Refined Brand Text */}
                    <span className="font-display text-[6vw] font-bold text-[#e5e5e5] leading-[1] tracking-tighter uppercase select-none block text-center pointer-events-none mb-8 whitespace-nowrap">
                        RMJ IT SOLUTIONS .
                    </span>

                    {/* Copyright & Legal - Aligned with screenshot */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 w-full relative z-10">
                        <span>© {currentYear}</span>
                        <div className="flex gap-8">
                            <Link href="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-brand transition-colors">Terms of Use</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
