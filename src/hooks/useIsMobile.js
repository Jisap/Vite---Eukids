import { useEffect, useState } from "react";

/**
 * Tracks whether the viewport matches a given max-width breakpoint.
 * Defaults to Tailwind's `lg` breakpoint (1024px).
 *
 * @param {number} breakpoint - max-width in px considered "mobile"
 * @returns {boolean} true if viewport width <= breakpoint
 */
export const useIsMobile = (breakpoint = 1024) => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
};