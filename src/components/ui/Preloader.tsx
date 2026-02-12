"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    const words = "RMJ IT SOLUTIONS".split(" ");

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
                    }}
                    className="fixed inset-0 z-[10000] bg-[#f5f5f5] flex items-center justify-center pointer-events-none"
                >
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden flex gap-3 text-[#1a1a1a]">
                            {words.map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.76, 0, 0.24, 1],
                                        delay: i * 0.1
                                    }}
                                    className="text-[clamp(1.5rem,4vw,3.5rem)] font-display font-bold uppercase tracking-tighter"
                                >
                                    {word}{i === words.length - 1 ? "." : ""}
                                </motion.span>
                            ))}
                        </div>

                        {/* Elegant loading line */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "100%", opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                            className="h-[1px] bg-brand mt-4 max-w-[200px]"
                        />

                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ delay: 1.0 }}
                            className="text-[10px] uppercase tracking-[0.4em] font-mono text-[#1a1a1a] mt-8"
                        >
                            Technology that institutions rely on
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
