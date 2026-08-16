import { Icon } from "@iconify/react";
import SectionHeading from "@components/ui/SectionHeading";
import { staggerDelay } from "@utils/helpers";

import cloudElement from "@assets/banner-bg-2.png";
import courseImg1 from "@assets/course-image-01.jpg";
import courseImg2 from "@assets/course-image-02.jpg";
import courseImg3 from "@assets/course-image-03.jpg";

const FEATURED_COURSES = [
    {
        image: courseImg1,
        bgColor: "bg-primary-2",
        tag: "Preschool Program",
        title: "Early Explorers (Ages 3-5)",
        description:
            "An introduction to colors, shapes, creativity, and basic artistic expressions through fun activities and interactive learning.",
        highlights: ["ABC Adventure", "Little Scientists"],
    },
    {
        image: courseImg2,
        bgColor: "bg-primary-5",
        tag: "Elementary Program",
        title: "Primary School (Ages 6-11)",
        description:
            "Encouraging curiosity and creativity through engaging educational activities, mathematics, science, and teamwork.",
        highlights: ["Math Mania", "Science Safari"],
    },
    {
        image: courseImg3,
        bgColor: "bg-primary-3",
        tag: "Advanced Program",
        title: "Middle School (Ages 12-14)",
        description:
            "Building future-ready skills through coding, robotics, innovation, problem-solving, and collaborative projects.",
        highlights: ["Coding", "Robotics"],
    },
];

const Courses = () => {
    return (
        <div>Courses</div>
    )
}

export default Courses