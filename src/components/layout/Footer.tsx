"use client";

import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer style={{ background: 'var(--background)', borderTop: '1px solid var(--border)' }} className="pt-40 pb-12 px-6 md:px-12 lg:px-24 relative z-20 overflow-hidden">
            <div className="max-w-[1440px] mx-auto relative">

                {/* Massive Outlined Text */}
                <div className="relative mb-32 select-none group">
                    <h2 className="text-[clamp(4rem,15vw,22rem)] font-bold tracking-tighter leading-none text-transparent text-center"
                        style={{
                            WebkitTextStroke: '1px rgba(49, 80, 170, 0.35)',
                            textShadow: '0 0 80px rgba(176, 93, 65, 0.12)'
                        }}>
                        RMJ IT
                    </h2>
                    {/* Inner Solid Text Overlay with Glow */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <h2 className="text-[clamp(4rem,15vw,22rem)] font-bold tracking-tighter leading-none text-[#F59768]/10 text-center blur-lg">
                            RMJ IT
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 pb-24" style={{ borderBottom: '1px solid var(--border)' }}>
                    {/* Website Links */}
                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: 'var(--foreground)', opacity: 0.3 }}>Website</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-sm font-bold uppercase tracking-widest hover:opacity-100 transition-opacity" style={{ color: 'var(--foreground)', opacity: 0.6 }}>Home</Link></li>
                            <li><Link href="/services" className="text-sm font-bold uppercase tracking-widest hover:opacity-100 transition-opacity" style={{ color: 'var(--foreground)', opacity: 0.6 }}>Services</Link></li>
                            <li><Link href="/about" className="text-sm font-bold uppercase tracking-widest hover:opacity-100 transition-opacity" style={{ color: 'var(--foreground)', opacity: 0.6 }}>About</Link></li>
                            <li><Link href="/contact" className="text-sm font-bold uppercase tracking-widest hover:opacity-100 transition-opacity" style={{ color: 'var(--foreground)', opacity: 0.6 }}>Work With Us</Link></li>
                        </ul>
                    </div>

                    {/* Empty Space for layout matching */}
                    <div className="hidden lg:block lg:col-span-4" />

                    {/* Legal Links */}
                    <div className="lg:col-span-4 space-y-8 lg:text-right">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: 'var(--foreground)', opacity: 0.3 }}>Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/terms" className="text-sm font-bold uppercase tracking-widest hover:opacity-100 transition-opacity" style={{ color: 'var(--foreground)', opacity: 0.6 }}>Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-sm font-bold uppercase tracking-widest hover:opacity-100 transition-opacity" style={{ color: 'var(--foreground)', opacity: 0.6 }}>Privacy Policy</Link></li>
                            <li><Link href="/cookie-policy" className="text-sm font-bold uppercase tracking-widest hover:opacity-100 transition-opacity" style={{ color: 'var(--foreground)', opacity: 0.6 }}>Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em]" style={{ color: 'var(--foreground)', opacity: 0.3 }}>
                        COPYRIGHT &copy; 2026 RMJ IT SOLUTIONS PVT LTD. ALL RIGHTS RESERVED.
                    </p>

                    <div className="flex items-center gap-8">
                        <Link href="#" style={{ color: 'var(--foreground)', opacity: 0.4 }} className="hover:opacity-100 transition-opacity"><Twitter size={18} /></Link>
                        <Link href="#" style={{ color: 'var(--foreground)', opacity: 0.4 }} className="hover:opacity-100 transition-opacity"><Linkedin size={18} /></Link>
                        <Link href="#" style={{ color: 'var(--foreground)', opacity: 0.4 }} className="hover:opacity-100 transition-opacity"><Instagram size={18} /></Link>
                    </div>
                </div>
            </div>

            {/* Background Logo Watermark Like RefractWeb */}
            <div className="absolute left-[-10%] bottom-[-10%] opacity-[0.04] pointer-events-none scale-150 transform -rotate-12 translate-y-1/2" style={{ filter: 'var(--logo-filter, none)' }}>
                <img src="/logo.svg" alt="" className="w-[800px] h-[800px]" style={{ filter: 'var(--foreground-filter, invert(1))' }} />
            </div>
        </footer>
    );
}
