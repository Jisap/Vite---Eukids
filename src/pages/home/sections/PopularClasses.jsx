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
    return (
        <div>PopularClasses</div>
    )
}

export default PopularClasses