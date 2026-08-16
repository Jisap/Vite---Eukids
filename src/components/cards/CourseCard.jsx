import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

/**
 * Course tile shown in grids and carousels. Supports a "list" view
 * (used on the /courses page toggle) in addition to the default grid card.
 */
const CourseCard = ({
  id,
  className = "",
  courseImage,
  authorImage,
  title,
  age,
  duration,
  rating,
  reviews,
  instructor,
  price,
  view,
}) => {
  const isList = view === "list";

  return (
    <div
      className={`
        group overflow-hidden border-card shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl 
        ${className} 
        ${isList
          ? "flex flex-col lg:flex-row"
          : "rounded-[30px]"
        }`}
    >
      <div className={`overflow-hidden relative ${isList ? "lg:w-80 shrink-0" : ""}`}>
        <img
          src={courseImage}
          alt={title}
          className={`object-cover w-full transition-transform duration-700 group-hover:scale-110 ${isList ? "h-64 lg:h-full" : "h-70"
            }`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 text-white flex-1">
        <ul className="flex items-center gap-5 mb-4 text-sm">
          <li className="flex items-center gap-2">
            <Icon icon="solar:user-line-duotone" className="text-2xl" />
            Ages {age}
          </li>

          <li className="flex items-center gap-2">
            <Icon icon="mingcute:time-line" className="text-2xl" />
            {duration}
          </li>
        </ul>

        <Link to={`/courses/${id}`}>
          <h5 className="text-2xl font-bold leading-snug mb-4 font-display transition-colors duration-300 group-hover:text-primary">
            {title}
          </h5>
        </Link>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} icon="mingcute:star-fill" className="text-primary text-xl" />
            ))}
          </div>

          <span className="font-medium">
            ({rating}) {reviews} Reviews
          </span>
        </div>

        <div className="w-full h-px bg-white/20 mb-5" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={authorImage}
              alt={instructor}
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />

            <div>
              <p className="font-semibold">{instructor}</p>

              <span className="text-sm text-white/70">Instructor</span>
            </div>
          </div>

          <h5 className="text-3xl font-extrabold text-primary">{price}</h5>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;