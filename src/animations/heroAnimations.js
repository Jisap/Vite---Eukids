import gsap from "gsap";

/**
 * Hero entrance: staggers the headline, copy, and CTA upward into place,
 * then lets the floating decorative SVGs drift independently.
 *
 * @param {HTMLElement} container - the hero section root
 */
export const animateHeroEntrance = (container) => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Timeline de animaciones escalonadas desde abajo arriba
  tl.from(container.querySelector(".hero-eyebrow"), { opacity: 0, y: 20, duration: 0.6 })             // Entradas de abajo a arriba
    .from(container.querySelector(".hero-heading"), { opacity: 0, y: 30, duration: 0.7 }, "-=0.35") // "-0.35 significa 'Comienza esta animación 0.35 segundos ANTES de que termine la anterior'"
    .from(container.querySelector(".hero-copy"), { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
    .from(container.querySelector(".hero-actions"), { opacity: 0, y: 20, duration: 0.6 }, "-=0.35")
    .from(
      container.querySelector(".hero-image"),
      { opacity: 0, x: 60, duration: 0.9, ease: "power2.out" }, // Entrada por la izquierda
      "-=0.9"
    );

  return tl;
};


/**
 * Subtle press-down micro-interaction for any clickable element.
 * Call once per element on mount; GSAP handles its own cleanup via context.
 *
 * @param {HTMLElement} el
 */
export const attachButtonPress = (el) => {
  const handleDown = () => gsap.to(el, { scale: 0.96, duration: 0.15, ease: "power2.out" }); // Hace que un elemento se "achique" ligeramente al presionarlo y rebote suavemente al soltarlo,
  const handleUp = () => gsap.to(el, { scale: 1, duration: 0.25, ease: "back.out(2)" });     // al soltarlo, vuelve a su tamaño original con un efecto de rebote. Ideal para botones y enlaces.

  el.addEventListener("pointerdown", handleDown);
  el.addEventListener("pointerup", handleUp);
  el.addEventListener("pointerleave", handleUp);

  return () => {
    el.removeEventListener("pointerdown", handleDown);
    el.removeEventListener("pointerup", handleUp);
    el.removeEventListener("pointerleave", handleUp);
  };
};

/**
 * Staggered reveal for a list of card elements — used as a GSAP alternative
 * to AOS when a section needs finer timeline control (e.g. Hero stat cards).
 * Este código hace una sola cosa: hace que un grupo de tarjetas aparezcan una tras otra desde abajo con un efecto cascada.
 *
 * @param {HTMLElement[]|NodeList} cards
 */
export const staggerCardsIn = (cards) =>
  gsap.from(cards, {
    opacity: 0,               // Todas las tarjetas parten de opacidad 0 
    y: 40,                    // y 40px más abajo de su posición final.
    duration: 0.6,            // Cada tarjeta tarda 0.6s en llegar a su estado visible y en posición.
    stagger: 0.12,            // Cada tarjeta comienza su animación 0.12s después de la anterior
    ease: "power3.out",
  });