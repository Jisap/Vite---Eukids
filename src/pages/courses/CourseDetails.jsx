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

  return (
    <>

    </>
  )
}

export default CourseDetails