import Breadcrumb from "@components/ui/Breadcrumb";
import TeacherCard from "@components/cards/TeacherCard";
import { teachers } from "@data/teachers";
import { staggerDelay } from "@utils/helpers";

const Team = () => (
  <>
    <Breadcrumb title="Our Team" currentPage="Team" />

    <section id="team" className="section-py relative">
      <div className="container-base">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.id}
              data-aos="fade-up"
              data-aos-delay={staggerDelay(index, 100)}
            >
              <TeacherCard {...teacher} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Team;