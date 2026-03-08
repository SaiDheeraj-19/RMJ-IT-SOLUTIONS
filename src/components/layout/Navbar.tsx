"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Works", href: "/products" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "light") {
            setIsDark(false);
            document.documentElement.setAttribute("data-theme", "light");
            document.documentElement.classList.add("light");
        } else {
            setIsDark(true);
            document.documentElement.setAttribute("data-theme", "dark");
            document.documentElement.classList.remove("light");
        }
    }, []);

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

            {/* Mobile Logo — RefractWeb-style pill */}
            <Link href="/" className="md:hidden z-[70] relative pointer-events-auto">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full rmjit-pill">
                    <span className="leading-none font-bold text-sm text-white tracking-tight">RMJ IT</span>
                </div>
            </Link>

            {/* Desktop Center Pill */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex bg-white/5 backdrop-blur-md border border-white/5 border-b-white/20 rounded-full p-2 items-center gap-8 shadow-xl shadow-black/10 pointer-events-auto">

                {/* RMJ IT Brand Pill — RefractWeb style */}
                <Link href="/" className="flex-shrink-0">
                    <div className="flex items-center gap-2 px-5 h-9 rounded-full rmjit-pill cursor-pointer active:scale-95 transition-transform">
                        <span className="leading-none font-bold tracking-tight text-white text-[15px]">RMJ IT</span>
                    </div>
                </Link>

                <div className="flex items-center gap-8 px-4 text-sm font-medium text-white/50">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "hover:text-foreground transition-all relative overflow-hidden group",
                                pathname === link.href ? "text-foreground" : "text-foreground/50"
                            )}
                        >
                            <span className="relative flex">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Right Side Controls */}
            <div className="ml-auto flex items-center gap-3 relative z-[70] pointer-events-auto">

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-foreground/70 hover:text-foreground hover:bg-white/10 transition-all"
                    aria-label="Toggle theme"
                >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>

                <Link href="/contact" className="hidden md:inline-flex btn-glow px-5 h-9 text-sm font-bold">
                    Work With Us
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-foreground transition-all active:scale-95 hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
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
                        className="absolute top-20 left-6 right-6 bg-[#0a0b0c] border border-white/10 rounded-3xl p-6 pointer-events-auto md:hidden shadow-2xl flex flex-col gap-6"
                        style={{ background: 'var(--background)' }}
                    >
                        <div className="flex items-center justify-between">
                            <Image src="/rmjit.png" alt="RMJ IT" width={32} height={32} className="object-contain logo-animated" />
                            <button onClick={toggleTheme} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-foreground/70">
                                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                            </button>
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-medium text-foreground/70 hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="btn-glow text-center py-4 rounded-full mt-4"
                        >
                            Work With Us
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
