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

const FeaturedCourseCard = ({ course }) => (
  <div className={`
    group rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3
    ${course.bgColor} 
  `}
  >
    <div className="overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    <div className="p-8 text-white flex flex-col h-full">
      <span className="text-sm uppercase tracking-wider text-primary mb-2">{course.tag}</span>
      <h4 className="text-2xl font-bold mb-4 font-display">{course.title}</h4>
      <p className="text-gray-200 mb-6 leading-relaxed">{course.description}</p>

      <ul className="space-y-3">
        {course.highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-3">
            <Icon icon="mdi:check-circle" className="text-primary text-2xl shrink-0" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Courses = () => {
  return (
    <section id="course" className="section-py-lg relative bg-bg">
      <div className="container-base">
        <SectionHeading
          eyebrow="Courses"
          title="Kids Courses at EduKids"
          description="Discover the exciting and enriching courses tailored for young minds at EduKids."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          {FEATURED_COURSES.map((course, index) => (
            <div
              key={course.title}
              data-aos="fade-up"
              data-aos-delay={staggerDelay(index, 200)}
            >
              <FeaturedCourseCard course={course} />
            </div>
          ))}
        </div>
      </div>

      {/* NUBE SUPERIOR */}
      <img
        src={cloudElement}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 w-full z-10 h-auto object-cover pointer-events-none"
      />
    </section>
  )
}

export default Courses