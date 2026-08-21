import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import Breadcrumb from "@components/ui/Breadcrumb";
import BlogCard from "@components/cards/BlogCard";
import { blogs } from "@data/blogs";
import { staggerDelay } from "@utils/helpers";

const VIEW_OPTIONS = [
  { value: "grid", icon: "mdi:view-grid-outline" },
  { value: "list", icon: "mdi:view-list" },
];


const Blog = () => {

  const [view, setView] = useState("grid");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(blogs.map((b) => b.category))], []); // Array con las categorías

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <>
      <Breadcrumb
        title="Blog & News"
        currentPage="Blog"
      />

      <section id="blog" className="section-py relative">
        <div className="container-base">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-heading-1 transition-colors duration-300 cursor-pointer 
                    ${activeCategory === category
                      ? "bg-primary text-heading-1"
                      : "bg-white hover:bg-gray-100"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 border-card rounded-full p-1.5 shrink-0">
              {VIEW_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setView(option.value)}
                  aria-label={`${option.value} view`}
                  aria-pressed={view === option.value}
                  className={`
                    w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer 
                    ${view === option.value
                      ? "bg-primary text-heading-1"
                      : "text-body hover:bg-gray-100"
                    }`}
                >
                  <Icon icon={option.icon} width={22} />
                </button>
              ))}
            </div>
          </div>

          {filteredBlogs.length === 0 ? (
            <p className="text-center text-body py-20">
              No posts found in this category yet.
            </p>
          ) : (
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
                  : "flex flex-col gap-8"
              }
            >
              {filteredBlogs.map((blog, index) => (
                <div
                  key={blog.id}
                  data-aos="fade-up"
                  data-aos-delay={staggerDelay(index, 100)}
                >
                  <BlogCard
                    blog={blog}
                    view={view}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Blog