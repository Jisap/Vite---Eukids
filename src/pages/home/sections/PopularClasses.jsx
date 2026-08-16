import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SectionHeading from "@components/ui/SectionHeading";
import SliderArrows from "@components/ui/SliderArrows";
import CourseCard from "@components/cards/CourseCard";
import { courses } from "@data/courses";
import { staggerDelay } from "@utils/helpers";

const SPLIDE_OPTIONS = {
  type: "loop",
  perPage: 3,
  perMove: 1,
  gap: "1.5rem",
  pagination: false,
  arrows: false,
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  breakpoints: {
    1280: { perPage: 3 },
    1024: { perPage: 2 },
    768: { perPage: 2 },
    640: { perPage: 1 },
  },
};

const PopularClasses = () => {

  const splideRef = useRef(null);


  return (
    <>
      <section id="popular-classes" className="section-py relative">
        <div className="container-base">
          <SectionHeading
            eyebrow="Classes"
            title="Popular Classes"
            description="Marked by significant growth and exploration as toddlers transition from infancy."
          />

          <div className="relative mt-12" data-aos="fade-up">
            <SliderArrows
              getSplide={() => splideRef.current?.splide}
              className="contents"
            />

            <Splide
              ref={splideRef}
              options={SPLIDE_OPTIONS}
              aria-label="Popular classes"
            >
              {courses.map((course, index) => (
                <SplideSlide key={course.id}>
                  <div data-aos="zoom-in-up" data-aos-delay={staggerDelay(index + 1)}>
                    <CourseCard {...course} />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>


        </div>
      </section>
    </>
  )
}

export default PopularClasses