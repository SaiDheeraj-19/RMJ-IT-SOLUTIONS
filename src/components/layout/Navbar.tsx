"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between pointer-events-none"
                aria-label="Main Navigation"
            >
                <Link
                    href="/"
                    className="pointer-events-auto flex items-center group flex-shrink-0"
                    aria-label="RMJ IT Solutions Home"
                >
                    <div className="relative h-16 w-32 md:h-16 md:w-32 flex items-center">
                        <Image
                            src="/rmjit-logo.png"
                            alt="RMJ IT SOLUTIONS"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Center Menu Pill */}
                <div className="hidden xl:flex items-center pointer-events-auto absolute left-1/2 -translate-x-1/2">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className={cn(
                            "flex items-center gap-1 px-2 py-2 transition-all duration-500 rounded-full",
                            "bg-white/90 backdrop-blur-xl border border-black/5 shadow-sm",
                            isScrolled ? "shadow-lg" : ""
                        )}
                    >
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                onMouseEnter={() => setHoveredLink(link.name)}
                                onMouseLeave={() => setHoveredLink(null)}
                                className="relative"
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "relative block px-6 py-3 text-[11px] uppercase tracking-[0.2em] font-black transition-colors duration-300",
                                        pathname === link.href ? "text-brand" : "text-slate-900"
                                    )}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {(hoveredLink === link.name || pathname === link.href) && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            className={cn(
                                                "absolute inset-0 rounded-full z-0",
                                                pathname === link.href ? "bg-brand/5" : "bg-slate-100"
                                            )}
                                        />
                                    )}
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-6 pointer-events-auto">
                    <Link
                        href="/contact"
                        id="nav-cta"
                        className="px-6 py-3 bg-brand text-white text-[11px] uppercase tracking-widest font-black rounded-full hover:bg-brand/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-brand/20"
                    >
                        Start Your Project With Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="xl:hidden p-3 bg-white rounded-full shadow-lg pointer-events-auto text-[#1a1a1a]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Mobile Menu Curtain */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-6 xl:hidden pointer-events-auto"
                        >
                            <button
                                className="absolute top-8 right-6 p-4 text-stone-400 hover:text-brand transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X size={24} />
                            </button>

                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "text-3xl font-display font-medium transition-colors",
                                            pathname === link.href ? "text-brand" : "text-[#1a1a1a]"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="pt-6"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-xs uppercase tracking-[0.2em] font-black bg-brand text-white px-12 py-4 rounded-full shadow-xl shadow-brand/20"
                                >
                                    Start Your Project With Us
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
