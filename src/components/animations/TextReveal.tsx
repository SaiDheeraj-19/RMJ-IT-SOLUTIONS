"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
    once?: boolean;
}

export default function TextReveal({
    text,
    className,
    delay = 0,
    as = "p",
    once = true
}: TextRevealProps) {
    const words = text.split(" ");

    // Type-safe way to get the component
    const Component = motion[as as keyof typeof motion] as any || motion.p;

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay
            },
        },
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.33, 1, 0.68, 1], // Custom Ventriloc-style ease
            },
        },
        hidden: {
            opacity: 0,
            y: "100%",
        },
    };

    return (
        <Component className={cn("overflow-hidden leading-tight", className)}>
            <motion.span
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once }}
                className="inline-block"
            >
                {words.map((word, index) => (
                    <span key={index} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                        <motion.span
                            variants={child}
                            className="inline-block mr-[0.2em]"
                        >
                            {word === "" ? "\u00A0" : word}
                        </motion.span>
                    </span>
                ))}
            </motion.span>
        </Component>
    );
}
