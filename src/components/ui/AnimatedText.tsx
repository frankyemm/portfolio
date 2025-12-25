"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useMemo } from "react";

// Custom easing function as a tuple for TypeScript
const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

interface AnimatedTextProps {
    text: string;
    className?: string;
    once?: boolean;
    delay?: number;
    type?: "words" | "chars";
}

export function AnimatedText({
    text,
    className = "",
    once = true,
    delay = 0,
    type = "words",
}: AnimatedTextProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-100px" });

    const items = useMemo(() => {
        if (type === "chars") {
            return text.split("");
        }
        return text.split(" ");
    }, [text, type]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: type === "chars" ? 0.02 : 0.08,
                delayChildren: delay,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: easeSmooth,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`inline-flex flex-wrap ${className}`}
        >
            {items.map((item, i) => (
                <motion.span
                    key={i}
                    variants={itemVariants}
                    className="inline-block"
                    style={{ whiteSpace: type === "words" ? "pre" : "normal" }}
                >
                    {type === "words" ? `${item} ` : item}
                </motion.span>
            ))}
        </motion.div>
    );
}

interface AnimatedHeadingProps {
    children: string;
    as?: "h1" | "h2" | "h3" | "h4";
    className?: string;
    gradient?: boolean;
    delay?: number;
}

export function AnimatedHeading({
    children,
    as: Component = "h1",
    className = "",
    gradient = false,
    delay = 0,
}: AnimatedHeadingProps) {
    const ref = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const words = children.split(" ");

    return (
        <Component
            ref={ref}
            className={`${gradient ? "gradient-text" : ""} ${className}`}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                        isInView
                            ? {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: delay + i * 0.1,
                                    duration: 0.6,
                                    ease: easeSmooth,
                                },
                            }
                            : {}
                    }
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </Component>
    );
}

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export function RevealOnScroll({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: RevealOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directionMap = {
        up: { x: 0, y: 40 },
        down: { x: 0, y: -40 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...directionMap[direction] }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            delay,
                            duration: 0.6,
                            ease: easeSmooth,
                        },
                    }
                    : {}
            }
            className={className}
        >
            {children}
        </motion.div>
    );
}
