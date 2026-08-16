import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SectionHeading from "@components/ui/SectionHeading";
import SliderArrows from "@components/ui/SliderArrows";
import { staggerDelay } from "@utils/helpers";

import category1 from "@assets/ctg-01.svg";
import category2 from "@assets/ctg-02.svg";
import category3 from "@assets/ctg-03.svg";
import category4 from "@assets/ctg-04.svg";
import category5 from "@assets/ctg-05.svg";

const CATEGORIES = [
  { img: category1, title: "Languages", color: "bg-primary-2" },
  { img: category2, title: "Coding", color: "bg-primary-4" },
  { img: category3, title: "Math", color: "bg-primary-5" },
  { img: category4, title: "Music", color: "bg-primary-6" },
  { img: category5, title: "Writing", color: "bg-primary-3" },
  { img: category2, title: "Coding", color: "bg-primary-4" },
  { img: category3, title: "Math", color: "bg-primary-5" },
  { img: category4, title: "Music", color: "bg-primary-6" },
];

const SPLIDE_OPTIONS = {
  perPage: 6,
  perMove: 1,
  rewind: true,
  autoplay: true,
  interval: 3000,
  pagination: false,
  arrows: false,
  breakpoints: {
    1280: { perPage: 4 },
    1024: { perPage: 3 },
    768: { perPage: 2 },
    640: { perPage: 1 },
  },
};

const Category = () => {
  const splideRef = useRef(null);

  return (
    <section id="category" className="section-py pb-0 relative">
      <div className="container-base">
        <SectionHeading
          eyebrow="Category"
          title="Popular Class Topics"
          description="Marked by significant growth and exploration as toddlers transition from infancy."
        />

        <div className="relative mt-12" data-aos="fade-up">
          <SliderArrows
            getSplide={() => splideRef.current?.splide} // Pasa a SliderArrows la referencia del slider
            className="contents"
          />

          <Splide
            ref={splideRef}
            options={SPLIDE_OPTIONS}
            aria-label="Class categories"
          >
            {CATEGORIES.map((item, index) => (
              <SplideSlide key={index}>
                <div
                  className="group flex flex-col items-center gap-5 py-4"
                  data-aos="zoom-in-up"
                  data-aos-delay={staggerDelay(index)}
                >
                  <div
                    className={`
                      ${item.color} 
                      w-40 h-40 md:w-50 md:h-50 rounded-full p-6 md:p-8 border-card transition-all duration-500 group-hover:-translate-y-3
                    `}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div
                    className={`
                      ${item.color} 
                      px-6 py-3 rounded-full border-card text-white font-bold transition-all duration-300 group-hover:bg-transparent group-hover:text-heading-1
                    `}
                  >
                    {item.title}
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Category;