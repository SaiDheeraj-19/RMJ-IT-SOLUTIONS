"use client";

import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ children, className, id, delay = 0 }, ref) => {
    return (
        <motion.section
            ref={ref}
            id={id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 1.2,
                delay,
                ease: [0.33, 1, 0.68, 1]
            }}
            className={cn("py-20 px-10 md:px-20", className)}
        >
            <div className="max-w-[1400px] mx-auto">
                {children}
            </div>
        </motion.section>
    );
});

Section.displayName = "Section";

export default Section;
