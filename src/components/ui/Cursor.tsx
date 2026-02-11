"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
    const [isHovered, setIsHovered] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth springs for fluid movement
    const springConfig = { damping: 25, stiffness: 250 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over a link, button, or element with 'data-cursor'
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.hasAttribute('data-cursor')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
            />

            {/* Outer Circle */}
            <motion.div
                className="fixed top-0 left-0 border border-brand/30 rounded-full pointer-events-none z-[9998]"
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                animate={{
                    width: isHovered ? 60 : 30,
                    height: isHovered ? 60 : 30,
                    backgroundColor: isHovered ? "rgba(var(--brand-rgb), 0.1)" : "transparent",
                    borderColor: isHovered ? "rgba(var(--brand-rgb), 1)" : "rgba(var(--brand-rgb), 0.3)",
                }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
            />
        </>
    );
}
