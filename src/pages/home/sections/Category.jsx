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
    return (
        <div>Category</div>
    )
}

export default Category