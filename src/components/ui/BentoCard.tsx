"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function BentoCard({ children, className, delay = 0 }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={cn(
                "bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
