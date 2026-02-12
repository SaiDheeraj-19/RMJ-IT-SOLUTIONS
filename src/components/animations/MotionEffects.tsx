"use client";

import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// ─── Fade In with multiple directions ───
interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    once?: boolean;
    scale?: boolean;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    duration = 0.8,
    direction = "up",
    distance = 30,
    once = true,
    scale = false,
}: FadeInProps) {
    const directionMap = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {},
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directionMap[direction],
                ...(scale ? { scale: 0.95 } : {}),
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                ...(scale ? { scale: 1 } : {}),
            }}
            viewport={{ once, margin: "-5%" }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Stagger Children ───
interface StaggerProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export function StaggerChildren({ children, className, delay = 0, staggerDelay = 0.1 }: StaggerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        delayChildren: delay,
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Count Up Animation ───
interface CountUpProps {
    target: number;
    prefix?: string;
    suffix?: string;
    className?: string;
    duration?: number;
    decimals?: number;
}

export function CountUp({ target, prefix = "", suffix = "", className, duration = 2, decimals = 0 }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = target;
        const startTime = performance.now();
        const durationMs = duration * 1000;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / durationMs, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * eased;

            setDisplay(current.toFixed(decimals));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, target, duration, decimals]);

    return (
        <span ref={ref} className={className}>
            {prefix}{display}{suffix}
        </span>
    );
}

// ─── Reveal Line (horizontal line that grows on scroll) ───
export function RevealLine({ className, delay = 0 }: { className?: string; delay?: number }) {
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
            className={cn("h-[1px] bg-stone-300 origin-left", className)}
        />
    );
}

// ─── Floating animation (subtle hover) ───
export function Float({ children, className, amplitude = 10, duration = 4 }: {
    children: React.ReactNode;
    className?: string;
    amplitude?: number;
    duration?: number;
}) {
    return (
        <motion.div
            animate={{
                y: [-amplitude, amplitude, -amplitude],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Scale on hover ───
export function ScaleOnHover({ children, className, scale = 1.05 }: {
    children: React.ReactNode;
    className?: string;
    scale?: number;
}) {
    return (
        <motion.div
            whileHover={{ scale }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Blur In ───
export function BlurIn({ children, className, delay = 0 }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Slide In (from edge) ───
export function SlideIn({ children, className, from = "left", delay = 0 }: {
    children: React.ReactNode;
    className?: string;
    from?: "left" | "right";
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ x: from === "left" ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
