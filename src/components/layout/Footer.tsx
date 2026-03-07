"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";

const sitemap = [
    {
        title: "Engineering",
        links: [
            { label: "Digital Systems", href: "/services/erp" },
            { label: "Cloud & Infrastructure", href: "/services/cloud" },
            { label: "Institutional AI", href: "/services/ai" },
            { label: "Security & Audits", href: "/services/security" },
            { label: "Web Architecture", href: "/services/web" }
        ]
    },
    {
        title: "Company",
        links: [
            { label: "Our Mission", href: "/about" },
            { label: "The Framework", href: "/#approach" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Strategy Portfolio", href: "/services" },
            { label: "Career Portal", href: "/contact" }
        ]
    },
    {
        title: "Legal & Data",
        links: [
            { label: "Data Privacy", href: "/privacy" },
            { label: "Legal Terms", href: "/terms" },
            { label: "Security Policy", href: "/security-disclosure" },
            { label: "Compliance Hub", href: "/regulatory-hub" },
            { label: "Cookie Settings", href: "/cookie-policy" }
        ]
    },
    {
        title: "Consultation",
        links: [
            { label: "Initiate Structural Audit", href: "/contact" },
            { label: "Strategic Advisory", href: "/contact" },
            { label: "Technical Support", href: "/contact" },
            { label: "Knowledge Base", href: "/about" }
        ]
    }
];

export default function Footer() {
    return (
        <footer className="bg-[#fafafa] pt-32 pb-16 px-6 md:px-12 lg:px-24 border-t border-slate-200">
            <div className="max-w-[1400px] mx-auto">
                {/* Brand & Sitemap Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
                    {/* Brand Info */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="space-y-6">
                            <Link href="/" className="relative h-12 w-32 mix-blend-multiply flex items-center mb-8">
                                <Image
                                    src="/rmjit-logo.png"
                                    alt="RMJ IT SOLUTIONS"
                                    fill
                                    className="object-contain object-left opacity-80"
                                />
                            </Link>
                            <p className="text-[15px] text-slate-500 font-medium leading-relaxed max-w-sm">
                                RMJ IT Solutions Pvt Ltd provides modern software development and digital solutions designed to help businesses and institutions grow through technology.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 font-mono">
                                Contact Information
                            </h4>
                            <div className="space-y-3 text-[13px] font-semibold text-slate-600">
                                <a href="tel:+918639756899" className="hover:text-brand transition-colors flex items-center gap-2">
                                    Phone: +91 8639756899
                                </a>
                                <a href="mailto:support@rmjit.com" className="hover:text-brand transition-colors flex items-center gap-2">
                                    Email: support@rmjit.com
                                </a>
                                <p className="leading-relaxed text-slate-500 font-medium">
                                    Address: 86/326-2 Doctors Colony,<br />
                                    Revenue Ward No 86, Kurnool,<br />
                                    Andhra Pradesh, India – 518002
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sitemap Links */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
                        {sitemap.map((section) => (
                            <div key={section.title} className="space-y-8">
                                <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 font-mono">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-[13px] font-semibold text-slate-600 hover:text-brand transition-all duration-300 block"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="space-y-8">
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 font-mono">
                                Company Details
                            </h4>
                            <div className="space-y-2 text-[13px] font-semibold text-slate-600">
                                <p>Founded: 2018</p>
                                <p>Industry: IT Services</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal Row */}
                <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                        <span className="text-[11px] font-bold text-slate-400">
                            © 2026 RMJ IT SOLUTIONS PVT LTD. ALL RIGHTS RESERVED.
                        </span>
                        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 group cursor-pointer hover:text-brand transition-colors">
                            <Globe size={14} />
                            <span>Global (English)</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                        <Link href="/privacy" className="text-[11px] font-bold text-slate-400 hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-[11px] font-bold text-slate-400 hover:text-slate-900 transition-colors">Terms of Use</Link>
                        <Link href="/accessibility" className="text-[11px] font-bold text-slate-400 hover:text-slate-900 transition-colors">Accessibility</Link>
                        <Link href="/security-disclosure" className="text-[11px] font-bold text-slate-400 hover:text-slate-900 transition-colors">Security Disclosure</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
