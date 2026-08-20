import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

/**
 * Blog post preview card. `view="list"` switches to a horizontal layout.
 */
const BlogCard = ({ blog, view }) => {
  const isList = view === "list";

  return (
    <div
      className={`
        bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2
         ${isList
          ? "flex flex-col lg:flex-row"
          : ""
        }`}
    >
      <div className={isList ? "lg:w-96 shrink-0" : ""}>
        <img
          src={blog.image}
          alt={blog.title}
          className={`object-cover w-full ${isList ? "h-full" : "h-64"}`}
        />
      </div>

      <div className="p-6 flex-1">
        <div className="flex gap-3 mb-3">
          <span className="bg-primary text-heading-1 px-3 py-1 rounded-full text-sm font-semibold">
            {blog.type}
          </span>

          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            {blog.category}
          </span>
        </div>

        <Link to={`/blog/${blog.id}`}>
          <h3 className="text-2xl font-bold mb-4 font-display hover:text-primary-2 transition-colors">
            {blog.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-5">{blog.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Icon icon="solar:user-linear" />
            <span>{blog.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <Icon icon="solar:calendar-linear" />
            <span>{blog.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;