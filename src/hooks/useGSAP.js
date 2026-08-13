import gsap from "gsap";
import { useEffect, useRef } from "react";

/**
 * Runs a GSAP animation callback scoped to a container ref, with
 * automatic context cleanup on unmount (prevents animation leaks
 * when navigating between routes).
 *
 * @param {(ctx: { container: HTMLElement }) => void} callback - receives the container element
 * @param {Array} deps - dependency array, defaults to mount-only
 * @returns {React.RefObject} attach to the element you want to scope animations within
 *
 * @example
 * const containerRef = useGSAP(({ container }) => {
 *   gsap.from(container.querySelectorAll(".fade-in"), { opacity: 0, y: 40, stagger: 0.15 });
 * });
 */
export const useGSAP = (callback, deps = []) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            callback({ container: containerRef.current });
        }, containerRef);

        return () => ctx.revert();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return containerRef;
};