/**
 * Svelte action for triggering animations when an element enters the viewport.
 * Uses IntersectionObserver for performance.
 * 
 * @param {HTMLElement} node - The element to observe
 * @param {{ threshold?: number }} options - Configuration options
 */
export function inview(node, options = {}) {
    const threshold = options.threshold ?? 0.2;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                node.dispatchEvent(new CustomEvent('inview'));
                observer.disconnect();
            }
        },
        { threshold }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
