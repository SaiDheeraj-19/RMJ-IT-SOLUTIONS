"use client";

import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#f5f5f5] pt-12 pb-6 px-6 md:px-12 border-t border-black/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 items-start">
                    <div className="lg:col-span-5">
                        <div className="mb-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6 block">
                                Ready to start?
                            </span>
                            <Link href="/contact" className="group block">
                                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-medium text-[#1a1a1a] leading-[1.1] tracking-tight group-hover:text-brand transition-colors duration-500">
                                    Get your free <br /> technical audit.
                                </h2>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4">Services</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/services/web" className="text-sm font-medium text-[#1a1a1a] hover:text-brand transition-colors">Website Development</Link></li>
                                    <li><Link href="/services/mobile" className="text-sm font-medium text-[#1a1a1a] hover:text-brand transition-colors">Android & iOS Apps</Link></li>
                                    <li><Link href="/services/marketing" className="text-sm font-medium text-[#1a1a1a] hover:text-brand transition-colors">Digital Marketing</Link></li>
                                    <li><Link href="/services/ai" className="text-sm font-medium text-[#1a1a1a] hover:text-brand transition-colors">AI & Analytics</Link></li>
                                    <li><Link href="/services/cloud" className="text-sm font-medium text-[#1a1a1a] hover:text-brand transition-colors">Cloud Solutions</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4">Company</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/about" className="text-sm font-medium text-[#1a1a1a] hover:text-brand transition-colors">About Us</Link></li>
                                    <li><Link href="/case-studies" className="text-sm font-medium text-[#1a1a1a] hover:text-brand transition-colors">Case Studies</Link></li>
                                    <li><Link href="/contact" className="text-sm font-medium text-[#1a1a1a] hover:text-brand transition-colors">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4">Social</h4>
                                <ul className="space-y-2">
                                    <li><Link href="#" className="text-sm font-medium text-[#1a1a1a] hover:text-brand transition-colors">LinkedIn</Link></li>
                                    <li><Link href="#" className="text-sm font-medium text-[#1a1a1a] hover:text-brand transition-colors">Instagram</Link></li>
                                    <li><Link href="#" className="text-sm font-medium text-[#1a1a1a] hover:text-brand transition-colors">Twitter</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="md:col-span-1">
                            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mb-4">Contact Us</h4>
                            <div className="space-y-4 text-sm font-medium text-[#1a1a1a]">
                                <p className="leading-relaxed">
                                    <span className="block font-bold mb-1">RMJ IT SOLUTIONS</span>
                                    <Link href="https://www.google.com/maps/search/?api=1&query=86/326-2,+DOCTORS+COLONY,+REVENUE+WARD+NO+86,+KURNOOL,+Kurnool,+Andhra+Pradesh,+518002" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                                        86/326-2, DOCTORS COLONY,<br />
                                        REVENUE WARD NO 86,<br />
                                        KURNOOL, Kurnool,<br />
                                        Andhra Pradesh, 518002
                                    </Link>
                                </p>
                                <div className="space-y-1">
                                    <p><span className="text-stone-500">Phone:</span> <Link href="tel:+918639756899" className="hover:text-brand transition-colors">+91 8639756899</Link></p>
                                    <p><span className="text-stone-500">Email:</span> <Link href="mailto:support@rmjit.com" className="hover:text-brand transition-colors">support@rmjit.com</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-end justify-between gap-6">
                    <div className="flex flex-col gap-4 w-full">
                        <span className="font-display text-[12vw] sm:text-[10vw] md:text-[8vw] font-bold text-[#1a1a1a] leading-none tracking-tighter uppercase opacity-10 select-none block w-full text-center md:text-left">
                            rmj it solutions .
                        </span>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 w-full">
                            <span>© {currentYear}</span>
                            <div className="flex gap-6">
                                <Link href="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link>
                                <Link href="/terms" className="hover:text-brand transition-colors">Terms of Use</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
