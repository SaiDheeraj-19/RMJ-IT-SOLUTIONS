"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    {
        name: "Capabilities",
        href: "/services",
        dropdown: [
            { title: "Institutional Infrastructure", href: "/services/erp", description: "Enterprise refactoring & ecosystems" },
            { title: "Cloud Orchestration", href: "/services/cloud", description: "High-availability technical architecture" },
            { title: "Deterministic Web Systems", href: "/services/web", description: "High-performance specialized builds" },
            { title: "Architectural Auditing", href: "/services/security", description: "Structural security & hardening" }
        ]
    },
    {
        name: "Orchestration",
        href: "/#approach",
        dropdown: [
            { title: "The Framework", href: "/#approach", description: "Deterministic delivery protocol" },
            { title: "Strategic Evidence", href: "/case-studies", description: "Documented institutional results" }
        ]
    },
    {
        name: "Institution",
        href: "/about",
        dropdown: [
            { title: "The Mission", href: "/about", description: "Architecting for structural certainty" },
            { title: "Strategic Engagement", href: "/contact", description: "Initiate institutional audit" },
            { title: "Regulatory Hub", href: "/regulatory-hub", description: "Compliance & global standards" }
        ]
    },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolling down
            const isScrollingDown = currentScrollY > lastScrollY.current;

            // Only toggle visibility if scrolled past 50px
            if (currentScrollY > 50) {
                if (isScrollingDown) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
            setIsScrolled(currentScrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -200 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between pointer-events-none"
            aria-label="Main Navigation"
        >
            <Link href="/" className="pointer-events-auto flex items-center group flex-shrink-0" aria-label="RMJ IT Solutions Home">
                <div className="relative h-20 w-40 md:h-24 md:w-52 mix-blend-multiply flex items-center">
                    <Image
                        src="/rmjit-logo.png"
                        alt="RMJ IT SOLUTIONS"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>
            </Link>

            {/* Center Menu Pill - Only visible on scroll or desktop */}
            <div className="hidden md:flex items-center pointer-events-auto absolute left-1/2 -translate-x-1/2">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={cn(
                        "flex items-center gap-1 px-2 py-2 transition-all duration-500 rounded-full",
                        "bg-white/90 backdrop-blur-xl border border-black/5 shadow-sm", // Always active pill
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
                                className="relative block px-5 py-2 text-[12px] uppercase tracking-wider font-bold text-[#1a1a1a] transition-colors"
                            >
                                <span className="relative z-10">{link.name}</span>
                                {hoveredLink === link.name && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        className="absolute inset-0 bg-black/5 rounded-full z-0"
                                    />
                                )}
                            </Link>

                            <AnimatePresence>
                                {hoveredLink === link.name && link.dropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[300px] bg-white rounded-xl shadow-2xl border border-stone-100 p-2 overflow-hidden z-50 origin-top"
                                    >
                                        <div className="grid grid-cols-1 gap-1">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="block p-3 rounded-lg hover:bg-stone-50 transition-colors group/item"
                                                >
                                                    <div className="text-sm font-bold text-[#1a1a1a] group-hover/item:text-brand transition-colors mb-0.5">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-[10px] font-medium text-stone-500 leading-tight">
                                                        {item.description}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
                    Strategic Advisory
                </Link>
            </div>

            {/* Mobile Toggle */}
            <button
                className="md:hidden p-3 bg-white rounded-full shadow-lg pointer-events-auto text-[#1a1a1a]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
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
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-8 md:hidden pointer-events-auto"
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
                                    className="text-4xl font-display font-medium text-[#1a1a1a] hover:text-brand transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="pt-8"
                        >
                            <Link
                                href="/contact"
                                className="text-xs uppercase tracking-[0.2em] font-black bg-brand text-white px-12 py-4 rounded-full shadow-xl shadow-brand/20"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Technical Consultation
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
