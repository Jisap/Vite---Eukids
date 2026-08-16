import { Icon } from "@iconify/react";

/**
 * Prev/next arrow pair for Splide carousels. Pass the Splide ref's
 * `.current.splide` instance via the `splide` getter so this stays
 * decoupled from any single slider's ref.
 *
 * @param {() => object} getSplide - returns the live splide instance
 * @param {string} [className] - positions the wrapper (each slider needs different offsets)
 */
const SliderArrows = ({ getSplide, className = "" }) => {
    const go = (direction) => () => getSplide()?.go(direction); // Hace que la ref del slider controle las flechas

    return (
        <div className={className}>
            <button
                type="button"
                aria-label="Previous slide"
                onClick={go("-1")} // Le da a la ref el método go('-1') que es para retroceder una posición
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-primary border-2 border-heading-1 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
                <Icon icon="solar:arrow-left-bold" className="text-2xl" />
            </button>

            <button
                type="button"
                aria-label="Next slide"
                onClick={go("+1")} // Le da a la ref el método go('+1') que es para avanzar una posición
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-primary border-2 border-heading-1 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
                <Icon icon="solar:arrow-right-bold" className="text-2xl" />
            </button>
        </div>
    );
};

export default SliderArrows;