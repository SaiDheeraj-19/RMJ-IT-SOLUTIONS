"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Twitter,
    Linkedin,
    Instagram,
    Github,
} from "lucide-react";

const footerNav = [
    {
        label: "Company",
        links: [
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Contact", href: "/contact" },
        ],
    },
    {
        label: "Services",
        links: [
            { name: "Web Engineering", href: "/services" },
            { name: "Mobile Platforms", href: "/services" },
            { name: "UI/UX Design", href: "/services" },
            { name: "Digital Growth", href: "/services" },
            { name: "AI & ML Solutions", href: "/services" },
            { name: "HPC Systems", href: "/services" },
        ],
    },
    {
        label: "Solutions",
        links: [
            { name: "Education", href: "/solutions" },
            { name: "Healthcare", href: "/solutions" },
            { name: "Retail & E-Commerce", href: "/solutions" },
            { name: "Manufacturing", href: "/solutions" },
            { name: "Logistics", href: "/solutions" },
            { name: "Hospitality", href: "/solutions" },
        ],
    },
    {
        label: "Legal",
        links: [
            { name: "Terms of Service", href: "/terms" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Cookie Policy", href: "/cookie-policy" },
            { name: "Security", href: "/security-disclosure" },
            { name: "Accessibility", href: "/accessibility" },
        ],
    },
];

const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <footer
            ref={ref}
            style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}
            className="relative overflow-hidden"
        >
            {/* ── Ambient glow blobs ── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.07]"
                    style={{
                        background: "radial-gradient(ellipse, #b05d41 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                <div
                    className="absolute top-24 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.04]"
                    style={{
                        background: "radial-gradient(ellipse, #f59768 0%, transparent 70%)",
                        filter: "blur(80px)",
                    }}
                />
            </div>

            {/* ── CTA Banner ── */}
            <div className="relative z-10 border-b" style={{ borderColor: "var(--border)" }}>
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-3">
                        <p className="text-[10px] uppercase tracking-[0.55em] font-black font-mono" style={{ color: "var(--brand)" }}>
                            {"// READY TO BUILD?"}
                        </p>
                        <h2
                            className="text-3xl md:text-5xl font-display font-bold tracking-tighter leading-[0.95]"
                            style={{ color: "var(--foreground)" }}
                        >
                            Let&apos;s engineer something <br className="hidden md:block" />
                            <span style={{ color: "var(--brand)" }} className="italic">remarkable together.</span>
                        </h2>
                    </div>
                    <Link
                        href="/contact"
                        className="btn-glow flex-shrink-0 inline-flex items-center gap-3 px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em]"
                    >
                        Start a Project <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>

            {/* ── Main Footer Body ── */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-10">

                {/* Top row — Brand + Nav columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20">

                    {/* Brand column */}
                    <div className="lg:col-span-4 space-y-8 flex flex-col justify-between">
                        <div className="space-y-6">
                            {/* Wordmark */}
                            <div className="inline-flex items-center gap-3">
                                <div className="rmjit-pill px-5 py-2.5 rounded-full">
                                    <span className="text-white font-black tracking-tight text-base leading-none">RMJ IT</span>
                                </div>
                                <div
                                    className="h-5 w-px"
                                    style={{ background: "var(--border)" }}
                                />
                                <span
                                    className="text-[10px] font-black uppercase tracking-[0.35em] font-mono"
                                    style={{ color: "var(--foreground)", opacity: 0.4 }}
                                >
                                    Solutions
                                </span>
                            </div>

                            <p
                                className="text-sm font-medium leading-relaxed max-w-sm"
                                style={{ color: "var(--foreground)", opacity: 0.5 }}
                            >
                                We engineer reliable digital systems — from custom software and websites to AI workstations and HPC infrastructure — for businesses across India and beyond.
                            </p>
                        </div>

                        {/* Contact info */}
                        <div className="space-y-4">
                            <a
                                href="mailto:support@rmjit.com"
                                className="flex items-center gap-3 group w-fit"
                                style={{ color: "var(--foreground)", opacity: 0.5 }}
                            >
                                <div
                                    className="w-8 h-8 rounded-xl flex items-center justify-center border group-hover:border-brand group-hover:text-brand transition-all duration-300"
                                    style={{ borderColor: "var(--border)", color: "var(--foreground)", opacity: 1 }}
                                >
                                    <Mail size={13} />
                                </div>
                                <span className="text-xs font-bold tracking-wide group-hover:opacity-100 transition-opacity">
                                    support@rmjit.com
                                </span>
                            </a>
                            <div
                                className="flex items-start gap-3"
                                style={{ color: "var(--foreground)", opacity: 0.4 }}
                            >
                                <div
                                    className="w-8 h-8 rounded-xl flex items-center justify-center border flex-shrink-0 mt-0.5"
                                    style={{ borderColor: "var(--border)" }}
                                >
                                    <MapPin size={13} />
                                </div>
                                <span className="text-xs font-bold tracking-wide leading-relaxed">
                                    86/326-2, Doctors Colony,<br />Revenue Ward No 86,<br />Kurnool, Andhra Pradesh — 518002
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Nav Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10">
                        {footerNav.map((col, ci) => (
                            <motion.div
                                key={ci}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.1 + ci * 0.08, duration: 0.6 }}
                                className="space-y-6"
                            >
                                <h4
                                    className="text-[10px] uppercase tracking-[0.45em] font-black font-mono"
                                    style={{ color: "var(--brand)" }}
                                >
                                    {col.label}
                                </h4>
                                <ul className="space-y-4">
                                    {col.links.map((link, li) => (
                                        <li key={li}>
                                            <Link
                                                href={link.href}
                                                className="text-xs font-semibold uppercase tracking-widest transition-all duration-200 hover:tracking-[0.18em] group flex items-center gap-1.5"
                                                style={{ color: "var(--foreground)", opacity: 0.45 }}
                                                onMouseEnter={(e) => {
                                                    (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                                                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    (e.currentTarget as HTMLAnchorElement).style.opacity = "0.45";
                                                }}
                                            >
                                                <span
                                                    className="w-1 h-1 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                                />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Wordmark ── */}
                <div className="relative select-none overflow-hidden border-t py-10" style={{ borderColor: "var(--border)" }}>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-center text-[clamp(2.5rem,10vw,10rem)] font-black leading-none"
                        style={{
                            fontFamily: "var(--font-display)",
                            letterSpacing: "0.35em",
                            WebkitTextStroke: "1.5px #b05d41",
                            color: "transparent",
                            opacity: 0.55,
                        }}
                    >
                        RMJ IT SOLUTIONS
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-center text-[10px] font-black uppercase tracking-[0.65em] font-mono mt-4"
                        style={{ color: "var(--brand)", opacity: 0.5 }}
                    >
                        Est. 2018 · Kurnool, India
                    </motion.p>
                </div>

                {/* ── Bottom bar ── */}
                <div className="border-t pt-6 pb-2" style={{ borderColor: "var(--border)" }}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-5">

                        {/* Left — copyright + location */}
                        <div className="flex flex-col gap-1 text-center md:text-left">
                            <p className="text-[11px] font-bold tracking-widest uppercase"
                                style={{ color: "var(--foreground)", opacity: 0.55 }}>
                                © 2026 RMJ IT Solutions Pvt. Ltd.
                            </p>
                            <p className="text-[10px] font-semibold tracking-wider"
                                style={{ color: "var(--foreground)", opacity: 0.3 }}>
                                Kurnool, Andhra Pradesh — India
                            </p>
                        </div>

                        {/* Center — tagline */}
                        <div className="flex items-center gap-3 hidden md:flex">
                            <span className="w-6 h-px" style={{ background: "var(--brand)", opacity: 0.5 }} />
                            <p className="text-[10px] font-black uppercase tracking-[0.35em] font-mono"
                                style={{ color: "var(--brand)", opacity: 0.7 }}>
                                Engineering Digital Infrastructure That Scales
                            </p>
                            <span className="w-6 h-px" style={{ background: "var(--brand)", opacity: 0.5 }} />
                        </div>

                        {/* Right — socials */}
                        <div className="flex items-center gap-2">
                            {socials.map((s, i) => (
                                <Link
                                    key={i}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 hover:border-brand hover:text-brand hover:scale-110"
                                    style={{
                                        borderColor: "var(--border)",
                                        color: "var(--foreground)",
                                        opacity: 0.5,
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--brand)";
                                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.opacity = "0.5";
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)";
                                    }}
                                >
                                    <s.icon size={14} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
