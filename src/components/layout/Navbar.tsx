"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown, Globe, Smartphone, BarChart2, Brain, Cpu, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceItems = [
    { name: "Web Applications", href: "/services/web-applications", icon: <Globe size={14} />, desc: "Scalable web portals & SaaS platforms" },
    { name: "iOS & Android Apps", href: "/services/mobile-apps", icon: <Smartphone size={14} />, desc: "Native & cross-platform mobile apps" },
    { name: "Digital Marketing", href: "/services/digital-marketing", icon: <BarChart2 size={14} />, desc: "SEO, PPC & growth automation" },
    { name: "AI & Machine Learning", href: "/services/ai-ml", icon: <Brain size={14} />, desc: "Custom ML models & LLM integrations" },
    { name: "HPC Systems", href: "/services/hpc", icon: <Cpu size={14} />, desc: "GPU clusters & AI workstations" },
    { name: "Security & Performance", href: "/services/security", icon: <Shield size={14} />, desc: "Penetration testing & optimisation" },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Solutions", href: "/solutions" },
    { name: "Works", href: "/products" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            setIsDark(true);
            document.documentElement.setAttribute("data-theme", "dark");
            document.documentElement.classList.remove("light");
        } else {
            setIsDark(false);
            document.documentElement.setAttribute("data-theme", "light");
            document.documentElement.classList.add("light");
        }
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsServicesOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    // Close dropdown on route change
    useEffect(() => {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.documentElement.setAttribute("data-theme", "dark");
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <nav className="fixed top-4 md:top-8 px-6 z-[100] w-full flex justify-between items-center pointer-events-none">

            {/* Desktop Top-Left Logo */}
            <Link href="/" className="hidden md:flex items-center gap-2.5 z-[70] pointer-events-auto">
                <Image src="/rmjit.png" alt="RMJ IT Solutions" width={120} height={120} className="object-contain" />
            </Link>

            {/* Mobile Logo */}
            <Link href="/" className="md:hidden z-[70] relative pointer-events-auto">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full rmjit-pill">
                    <span className="leading-none font-bold text-sm text-white tracking-tight">RMJ IT</span>
                </div>
            </Link>

            {/* Desktop Center Pill */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex bg-white/5 backdrop-blur-md border border-white/5 border-b-white/20 rounded-full p-2 items-center gap-8 shadow-xl shadow-black/10 pointer-events-auto">

                <Link href="/" className="flex-shrink-0">
                    <div className="flex items-center gap-2 px-5 h-9 rounded-full rmjit-pill cursor-pointer active:scale-95 transition-transform">
                        <span className="leading-none font-black tracking-tight text-white text-[18px]">RMJ IT</span>
                    </div>
                </Link>

                <div className="flex items-center gap-8 px-4 text-sm font-black text-white/70">
                    {navLinks.map((link) =>
                        link.hasDropdown ? (
                            <div key={link.name} className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsServicesOpen((v) => !v)}
                                    className={cn(
                                        "hover:text-foreground transition-all flex items-center gap-1 group",
                                        pathname.startsWith("/services") ? "text-foreground" : "text-foreground/50"
                                    )}
                                >
                                    Services
                                    <ChevronDown size={13} className={cn("transition-transform duration-200", isServicesOpen ? "rotate-180" : "")} />
                                </button>

                                {/* Services Mega Dropdown */}
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                            transition={{ duration: 0.18 }}
                                            className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[480px] rounded-2xl shadow-2xl overflow-hidden z-[200] border"
                                            style={{ background: "var(--background)", borderColor: "var(--border)" }}
                                        >
                                            <div className="p-3">
                                                <p className="text-[11px] uppercase tracking-[0.4em] font-black font-mono px-3 py-2 mb-1"
                                                    style={{ color: "var(--brand)" }}>OUR SERVICES</p>
                                                <div className="grid grid-cols-2 gap-1">
                                                    {serviceItems.map((item) => (
                                                        <Link key={item.name} href={item.href}
                                                            className="flex items-start gap-3 px-3 py-3 rounded-xl transition-colors group"
                                                            style={{ color: "var(--foreground)" }}
                                                            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--surface)"}
                                                            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
                                                        >
                                                            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                                                style={{ background: "var(--surface)", color: "var(--brand)" }}>
                                                                {item.icon}
                                                            </div>
                                                            <div>
                                                                <p className="text-[13px] font-bold leading-tight" style={{ color: "var(--foreground)" }}>{item.name}</p>
                                                                <p className="text-[11px] mt-0.5" style={{ color: "var(--foreground)", opacity: 0.45 }}>{item.desc}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="border-t mt-2 pt-2 px-3" style={{ borderColor: "var(--border)" }}>
                                                    <Link href="/services"
                                                        className="text-[11px] font-bold flex items-center gap-1.5 py-2 hover:gap-2.5 transition-all"
                                                        style={{ color: "var(--brand)" }}>
                                                        View all services →
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link key={link.name} href={link.href}
                                className={cn(
                                    "hover:text-foreground transition-all relative overflow-hidden group",
                                    pathname === link.href ? "text-foreground" : "text-foreground/50"
                                )}
                            >
                                <span className="relative flex">{link.name}</span>
                            </Link>
                        )
                    )}
                </div>
            </div>

            {/* Right Side Controls */}
            <div className="ml-auto flex items-center gap-3 relative z-[70] pointer-events-auto">
                <button onClick={toggleTheme}
                    className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-foreground/70 hover:text-foreground hover:bg-white/10 transition-all"
                    aria-label="Toggle theme">
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>

                <Link href="/contact" className="hidden md:inline-flex btn-glow px-5 h-9 text-sm font-bold">
                    Work With Us
                </Link>

                <button
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-foreground transition-all active:scale-95 hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-20 left-6 right-6 border rounded-3xl p-6 pointer-events-auto md:hidden shadow-2xl flex flex-col gap-4"
                        style={{ background: 'var(--background)', borderColor: 'var(--border)' }}>

                        <div className="flex items-center justify-between">
                            <Image src="/rmjit.png" alt="RMJ IT" width={32} height={32} className="object-contain logo-animated" />
                            <button onClick={toggleTheme} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-foreground/70">
                                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                            </button>
                        </div>

                        {navLinks.map((link) =>
                            link.hasDropdown ? (
                                <div key={link.name}>
                                    <button
                                        onClick={() => setIsMobileServicesOpen((v) => !v)}
                                        className="text-2xl font-medium text-foreground/70 hover:text-foreground transition-colors w-full text-left flex items-center justify-between"
                                    >
                                        Services
                                        <ChevronDown size={18} className={cn("transition-transform", isMobileServicesOpen ? "rotate-180" : "")} />
                                    </button>
                                    <AnimatePresence>
                                        {isMobileServicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden">
                                                <div className="pt-3 pl-4 flex flex-col gap-3">
                                                    {serviceItems.map((item) => (
                                                        <Link key={item.name} href={item.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="flex items-center gap-2 text-base font-semibold"
                                                            style={{ color: "var(--foreground)", opacity: 0.65 }}>
                                                            <span style={{ color: "var(--brand)" }}>{item.icon}</span>
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                    <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}
                                                        className="text-sm font-bold" style={{ color: "var(--brand)" }}>
                                                        All Services →
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link key={link.name} href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-medium text-foreground/70 hover:text-foreground transition-colors">
                                    {link.name}
                                </Link>
                            )
                        )}

                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}
                            className="btn-glow text-center py-4 rounded-full mt-2">
                            Work With Us
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
