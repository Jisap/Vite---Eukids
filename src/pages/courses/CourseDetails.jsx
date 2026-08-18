import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Breadcrumb from "@components/ui/Breadcrumb";
import Button from "@components/ui/Button";
import Accordion from "@components/common/Accordion";
import { courses } from "@data/courses";

const STAT_ICONS = {
  level: "mdi:stairs-up",
  students: "mdi:account-group-outline",
  lectures: "mdi:play-box-outline",
  duration: "mdi:clock-outline",
};

const CourseDetails = () => {

  const { id } = useParams();
  const course = courses.find((item) => item.id === Number(id));

  if (!course) {
    return (
      <div className="container-base py-24 text-center">
        <h2 className="text-4xl font-bold font-display mb-4">Course Not Found</h2>
        <Link to="/courses" className="text-primary-2 font-semibold hover:underline">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  const stats = [
    { key: "level", label: "Level", value: course.level },
    { key: "students", label: "Students", value: course.students },
    { key: "lectures", label: "Lectures", value: course.lectures },
    { key: "duration", label: "Duration", value: course.duration },
  ];

  const accordionItems = course.curriculum.map((module) => ({
    title: module.title,
    content: (
      <ul className="space-y-3">
        {module.lessons.map((lesson) => (
          <li key={lesson} className="flex items-center gap-3 text-gray-600">
            <Icon icon="mdi:play-circle-outline" className="text-primary-2 text-xl shrink-0" />
            {lesson}
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <>
      <Breadcrumb
        title={course.title}
        parentTitle="Courses"
        parentLink="/courses"
        currentPage="Details"
      />

      <section id="course-details" className="section-py">
        <div className="container-base grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <img src={course.courseImage} alt={course.title} className="w-full h-96 object-cover rounded-2xl mb-8" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {stats.map((stat) => (
                <div key={stat.key} className="border border-gray-200 rounded-xl p-4 text-center">
                  <Icon icon={STAT_ICONS[stat.key]} className="text-3xl text-primary-2 mx-auto mb-2" />
                  <p className="font-bold font-display">{stat.value}</p>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-5 font-display">About This Course</h2>
            <p className="text-gray-600 leading-8 mb-10">{course.description}</p>

            <h3 className="text-2xl font-bold mb-6 font-display">Curriculum</h3>
            <Accordion items={accordionItems} />
          </div>

          <aside className="lg:col-span-5">
            <div className="border-card rounded-2xl p-8 sticky top-28">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={course.authorImage}
                  alt={course.instructor}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">{course.instructor}</p>
                  <span className="text-sm text-gray-500">Instructor</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <h4 className="text-4xl font-extrabold text-primary-2 font-display">{course.price}</h4>
                <div className="flex items-center gap-1 text-sm font-medium">
                  <Icon icon="mingcute:star-fill" className="text-primary text-lg" />
                  {course.rating} ({course.reviews} reviews)
                </div>
              </div>

              <ul className="space-y-3 mb-8 border-t border-gray-200 pt-6">
                <li className="flex items-center gap-3 text-gray-600">
                  <Icon icon="mdi:account-outline" className="text-xl text-primary-2 shrink-0" />
                  Ages {course.age}
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Icon
                    icon="mdi:certificate-outline"
                    className="text-xl text-primary-2 shrink-0"
                  />
                  {course.certificate ? "Certificate of completion" : "No certificate"}
                </li>
              </ul>

              <Button
                text="Enroll Now"
                className="w-full"
                icon="solar:arrow-right-linear"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default CourseDetails