import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Icon } from "@iconify/react";
import SectionHeading from "@components/ui/SectionHeading";
import SliderArrows from "@components/ui/SliderArrows";
import { testimonials } from "@data/testimonials";

import cloudElement from "@assets/banner-bg-2.png";
import element1 from "@assets/tst-element1.svg";
import element2 from "@assets/tst-element2.svg";
import element3 from "@assets/tst-element3.svg";

const SPLIDE_OPTIONS = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  gap: "1rem",
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
};

const Testimonials = () => {

  const splideRef = useRef(null);

  return (
    <section id="testimonials" className="section-py-lg relative bg-bg">
      <div className="container-base">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Parents Say About Us"
          description="The success and happiness of our students are at the heart of everything we do. But don't just take our word for it."
        />
      </div>

      <div className="relative max-w-225 mx-auto mt-12" data-aos="fade-up">
        <SliderArrows
          getSplide={() => splideRef.current?.splide}
          className="hidden lg:contents [&_button]:-left-7 [&_button:last-child]:-right-7"
        />

        <Splide
          ref={splideRef}
          options={SPLIDE_OPTIONS}
          aria-label="Parent testimonials"
        >
          {testimonials.map((item) => (
            <SplideSlide key={item.name}>
              <div className="px-2 lg:px-16 relative">
                <div className="max-w-200 rounded-2xl mx-auto bg-primary-2 px-10 h-auto py-8 lg:h-90 flex justify-center items-center flex-col text-center text-white relative border-card">
                  <h4 className="font-bold text-2xl font-display">{item.name}</h4>
                  <span className="text-gray-300 font-display">{item.role}</span>

                  <p className="text-xl py-5 font-medium font-display pb-10">{item.review}</p>

                  <div className="flex items-center gap-2 justify-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} icon="mingcute:star-fill" className="text-primary text-2xl" />
                    ))}
                  </div>

                  <img src={element1} alt="" aria-hidden="true" className="hidden lg:absolute top-12 left-18 pointer-events-none" />
                  <img src={element2} alt="" aria-hidden="true" className="hidden lg:absolute bottom-12 left-40 pointer-events-none" />
                  <img src={element3} alt="" aria-hidden="true" className="hidden lg:absolute top-12 right-40 pointer-events-none" />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

export default Testimonials