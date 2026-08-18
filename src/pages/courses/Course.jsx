import { useState } from "react";
import { Icon } from "@iconify/react";
import Breadcrumb from "@components/ui/Breadcrumb";
import CourseCard from "@components/cards/CourseCard";
import { courses } from "@data/courses";
import { staggerDelay } from "@utils/helpers";

const VIEW_OPTIONS = [
  { value: "grid", icon: "mdi:view-grid-outline" },
  { value: "list", icon: "mdi:view-list" },
];

const Course = () => {

  const [view, setView] = useState("grid");

  return (
    <>
      <Breadcrumb title="Courses" currentPage="Courses" />

      <section id="course" className="section-py relative">
        <div className="container-base">
          <div className="flex items-center justify-between mb-10">
            <p className="text-body">
              Showing all <strong className="text-heading-1">{courses.length}</strong> courses
            </p>

            <div className="flex items-center gap-2 border-card rounded-full p-1.5">
              {VIEW_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setView(option.value)}
                  aria-label={`${option.value} view`}
                  aria-pressed={view === option.value}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${view === option.value
                      ? "bg-primary text-heading-1"
                      : "text-body hover:bg-gray-100"
                    }`}
                >
                  <Icon icon={option.icon} width={22} />
                </button>
              ))}
            </div>
          </div>

          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
                : "flex flex-col gap-8"
            }
          >
            {courses.map((course, index) => (
              <div key={course.id} data-aos="fade-up" data-aos-delay={staggerDelay(index, 100)}>
                <CourseCard
                  {...course}
                  view={view}
                  className={course.className}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Course