import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for triggering animations when an element enters the viewport.
 * Uses IntersectionObserver for performance.
 * 
 * @param threshold - Visibility threshold (0.0 to 1.0)
 * @returns { ref, isVisible } - Ref to attach to element and visibility state
 */
export function useInViewAnimation<T extends HTMLElement = HTMLElement>(
    threshold = 0.2
) {
    const ref = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Animate only once
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
}
