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

    </>
  )
}

export default CourseDetails