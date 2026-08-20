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
    </section>
  )
}

export default Testimonials