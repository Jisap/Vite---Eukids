import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Initializes AOS (Animate On Scroll) once for the whole app.
 * Mount this single hook at the App root — do NOT call AOS.init()
 * again in individual pages/sections, or it will reset on every render.
 */
export const useAOSRefresh = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
            offset: 60,
        });
    }, []);
};