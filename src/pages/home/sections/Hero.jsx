import { Icon } from "@iconify/react"
import Button from "../../../components/ui/Button"
import { useGSAP } from "../../../hooks/useGSAP"
import { animateHeroEntrance } from "../../../animations/heroAnimations"

import hero from "../../../assets/hero-img.png"
import cloudElement from "../../../assets/banner-bg-1.png"
import bgGrid from "../../../assets/bg-grid.png"
import element1 from "../../../assets/element-01.svg"
import element2 from "../../../assets/element-02.svg"
import element3 from "../../../assets/element-03.svg"
import element4 from "../../../assets/element-04.svg"
import element5 from "../../../assets/element-05.svg"
import element6 from "../../../assets/element-06.svg"
import element7 from "../../../assets/element-07.svg"

const FLOATERS = [
  { src: element1, className: "top-28 left-5 animate-float" },
  { src: element2, className: "bottom-65 left-5 animate-slide" },
  { src: element3, className: "bottom-75 left-160 animate-rotate" },
  { src: element4, className: "top-40 left-240 animate-zoom" },
  { src: element5, className: "bottom-60 left-200 animate-bounce-soft" },
  { src: element7, className: "top-40 right-20 animate-swing" },
];

const Hero = () => {

  const containerRef = useGSAP(({ container }) => { // la useGSAP busca dentro de la ref la clase y aplica la animacion concreta 
    animateHeroEntrance(container);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, var(--color-primary-2), var(--color-primary-10)),
          url(${bgGrid})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-base relative z-10 flex flex-col lg:flex-row justify-between items-start h-full">

        {/* Parte izquierda de la pantalla, el texto */}
        <div className="hero-content w-full lg:w-1/2 text-white h-full flex justify-center items-start flex-col">
          <span className="hero-eyebrow sub-title text-white/90! mb-4">
            <Icon icon="solar:star-bold" className="text-primary" width={22} />
            Where Curiosity Meets Joy
          </span>

          <h1 className="hero-heading font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] font-extrabold mb-5">
            Discover the Magic of Learning at
            <span className="text-primary"> EduKids</span>
          </h1>

          <p className="hero-copy text-lg text-white/85 mb-10 lg:mb-14 max-w-md">
            Welcome to EduKids, where each day brings new opportunities for
            discovery and growth. Our vibrant community is dedicated to every
            child's journey.
          </p>

          <div className="hero-actions flex items-center gap-5">
            <Button
              to="/about"
              text="Explore Now"
            />

            <button
              type="button"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <span className="bg-primary rounded-full p-3 w-12 h-12 flex items-center justify-center border-2 border-heading-1 transition-transform duration-300 group-hover:scale-110">
                <Icon
                  icon="solar:play-bold"
                  width={18}
                  className="text-heading-1"
                />
              </span>
              <span className="text-lg font-medium">Watch Video</span>
            </button>
          </div>
        </div>

        {/* Parte derecha de la pantalla, la imagen */}
        <div className="hero-image w-full lg:w-1/2 absolute right-0 top-40 hidden lg:flex h-200">
          <img
            src={hero}
            alt="A joyful child learning"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <img
        src={cloudElement}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 w-full z-10 h-50 object-cover pointer-events-none"
      />

      {FLOATERS.map((floater, index) => (
        <img
          key={index}
          src={floater.src}
          alt=""
          aria-hidden="true"
          className={`absolute hidden md:block pointer-events-none ${floater.className}`}
        />
      ))}
    </section>
  )
}

export default Hero