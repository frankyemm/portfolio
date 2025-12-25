"use client";

import { motion } from "framer-motion";

export function ConfidentialBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
        >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-accent-primary via-accent-secondary to-accent-primary bg-size-[200%_100%] animate-gradient opacity-50" />
            <div className="absolute inset-px rounded-full bg-background-secondary" />

            {/* Lock icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 text-accent-primary"
            >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>

            <span className="relative z-10 text-foreground-muted">Confidential</span>
        </motion.div>
    );
}
