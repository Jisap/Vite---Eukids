import SectionHeading from "@components/ui/SectionHeading";
import TeacherCard from "@components/cards/TeacherCard";
import { teachers } from "@data/teachers";
import { staggerDelay } from "@utils/helpers";

import cloudElement from "@assets/banner-bg-2.png";

const Team = () => (
  <section id="teacher" className="section-py-lg relative bg-bg">
    <div className="container-base">
      <SectionHeading
        eyebrow="Teacher"
        title="Our Expert Teachers"
        description="We take pride in our team of dedicated experts who play a pivotal role in shaping every child's journey."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {teachers.slice(0, 3).map((teacher, index) => (
          <div
            key={teacher.id}
            data-aos="zoom-in-up"
            data-aos-delay={staggerDelay(index, 200)}
          >
            <TeacherCard {...teacher} />
          </div>
        ))}
      </div>
    </div>

    <img
      src={cloudElement}
      alt=""
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 w-full z-10 h-auto object-cover pointer-events-none"
    />
  </section>
);

export default Team;
