"use client";

import { motion } from "framer-motion";

interface TechStackTagProps {
    tech: string;
}

export function TechStackTag({ tech }: TechStackTagProps) {
    return (
        <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-3 py-1 text-xs font-medium rounded-full 
                 bg-background-tertiary text-foreground-muted 
                 border border-glass-border
                 hover:border-accent-primary/30 hover:text-accent-primary
                 transition-colors duration-200"
        >
            {tech}
        </motion.span>
    );
}
