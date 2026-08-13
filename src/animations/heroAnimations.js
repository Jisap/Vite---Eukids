import gsap from "gsap";

/**
 * Hero entrance: staggers the headline, copy, and CTA upward into place,
 * then lets the floating decorative SVGs drift independently.
 *
 * @param {HTMLElement} container - the hero section root
 */
export const animateHeroEntrance = (container) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(container.querySelector(".hero-eyebrow"), { opacity: 0, y: 20, duration: 0.6 })
        .from(container.querySelector(".hero-heading"), { opacity: 0, y: 30, duration: 0.7 }, "-=0.35")
        .from(container.querySelector(".hero-copy"), { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(container.querySelector(".hero-actions"), { opacity: 0, y: 20, duration: 0.6 }, "-=0.35")
        .from(
            container.querySelector(".hero-image"),
            { opacity: 0, x: 60, duration: 0.9, ease: "power2.out" },
            "-=0.9"
        );

    return tl;
};