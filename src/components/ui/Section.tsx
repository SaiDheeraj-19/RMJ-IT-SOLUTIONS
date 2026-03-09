"use client";

import { motion } from "framer-motion";
import { CSSProperties, ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
    style?: CSSProperties;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ children, className, id, delay = 0, style }, ref) => {
    return (
        <motion.section
            ref={ref}
            id={id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{
                duration: 0.5,
                delay,
                ease: "easeOut"
            }}
            className={cn("py-20 px-10 md:px-20", className)}
            style={style}
        >
            <div className="max-w-[1400px] mx-auto">
                {children}
            </div>
        </motion.section>
    );
});

Section.displayName = "Section";

export default Section;
