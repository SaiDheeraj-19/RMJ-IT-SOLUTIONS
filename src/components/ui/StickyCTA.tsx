"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

const slides = [
    { text: "Free 14-day audit — no commitment", cta: "Get Started", href: "/contact" },
    { text: "99.9% uptime across all deployments", cta: "Learn More", href: "/services" },
    { text: "Engineering for institutional scale", cta: "Initiate consultation", href: "/contact" },
    { text: "Built for institutions that can't afford downtime", cta: "See How", href: "/services" },
];

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.6) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Auto-rotate slides
    useEffect(() => {
        if (!isVisible || isMinimized) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isVisible, isMinimized]);

    if (!isVisible) return null;

    return (
        <>
            {/* Minimized Logo Icon */}
            <AnimatePresence>
                {isMinimized && (
                    <motion.button
                        initial={{ x: 100, opacity: 0, scale: 0.5 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: 100, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        onClick={() => setIsMinimized(false)}
                        className="fixed bottom-6 right-6 z-[60] w-16 h-16 bg-white backdrop-blur-xl rounded-full shadow-[0_8px_30px_-4px_rgba(129,103,41,0.3)] border border-stone-200 flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_12px_40px_-4px_rgba(129,103,41,0.4)] transition-all duration-300 group"
                        aria-label="Expand menu"
                    >
                        <Image
                            src="/rmjit-logo.png"
                            alt="RMJ IT"
                            width={44}
                            height={44}
                            className="object-contain group-hover:scale-110 transition-transform"
                        />
                        {/* Pulse ring */}
                        <span className="absolute inset-0 rounded-full border-2 border-brand/30 animate-ping opacity-20" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Full Slider Bar */}
            <AnimatePresence>
                {!isMinimized && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ x: 300, opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 px-2 py-2 bg-[#1a1a1a]/95 backdrop-blur-xl rounded-full shadow-2xl border border-white/10"
                    >
                        {/* Slide indicator dots */}
                        <div className="hidden sm:flex items-center gap-1.5 pl-4">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-brand w-4" : "bg-white/20 hover:bg-white/40"
                                        }`}
                                    aria-label={`Slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Sliding text area */}
                        <div className="relative overflow-hidden h-6 w-[200px] sm:w-[280px] flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentSlide}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="absolute inset-0 flex items-center text-white/60 text-sm font-medium whitespace-nowrap"
                                >
                                    {slides[currentSlide].text}
                                </motion.span>
                            </AnimatePresence>
                        </div>

                        {/* CTA button */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                <Link
                                    href={slides[currentSlide].href}
                                    id="sticky-cta"
                                    className="group inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white rounded-full text-xs uppercase tracking-widest font-black hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 whitespace-nowrap"
                                >
                                    {slides[currentSlide].cta}
                                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </AnimatePresence>

                        {/* Dismiss → minimize to logo */}
                        <button
                            onClick={() => setIsMinimized(true)}
                            className="text-white/30 hover:text-white/60 transition-colors p-1 pr-2"
                            aria-label="Minimize"
                        >
                            <X size={14} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
