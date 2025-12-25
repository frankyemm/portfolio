// Framer Motion Animation Variants
// Physics-based, smooth animations for the portfolio

import type { Variants } from "framer-motion";

// Custom easing functions as tuples
const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;
const easeSharp = [0.76, 0, 0.24, 1] as const;

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeSmooth },
    },
};

export const fadeDown: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeSmooth },
    },
};

export const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeSmooth },
    },
};

export const fadeRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeSmooth },
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: easeSmooth },
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const staggerContainerFast: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
};

export const staggerContainerSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// Card hover animation
export const cardHover: Variants = {
    rest: {
        scale: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
    hover: {
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

// Page transition variants
export const pageTransition: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: easeSmooth,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: "easeIn",
        },
    },
};

// Slide animations for page transitions
export const slideUp: Variants = {
    initial: { y: "100%" },
    animate: {
        y: 0,
        transition: { duration: 0.8, ease: easeSharp },
    },
    exit: {
        y: "-100%",
        transition: { duration: 0.8, ease: easeSharp },
    },
};

// Text reveal animation (character by character)
export const textReveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.03,
            duration: 0.5,
            ease: easeSmooth,
        },
    }),
};

// Word reveal animation
export const wordReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.4,
            ease: easeSmooth,
        },
    }),
};

// Background parallax effect
export const parallax = (offset: number = 50) => ({
    initial: { y: 0 },
    animate: {
        y: [-offset, offset],
        transition: {
            repeat: Infinity,
            repeatType: "reverse" as const,
            duration: 20,
            ease: "linear",
        },
    },
});

// Floating animation
export const floating: Variants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Pulse glow effect
export const pulseGlow: Variants = {
    animate: {
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.05, 1],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Magnetic effect helper
export const magneticSpring = {
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 0.1,
};

// Icon animations
export const iconHover: Variants = {
    rest: { rotate: 0, scale: 1 },
    hover: {
        rotate: 15,
        scale: 1.1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

// List item animation
export const listItem: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

// Blur fade in
export const blurFadeIn: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut" },
    },
};
