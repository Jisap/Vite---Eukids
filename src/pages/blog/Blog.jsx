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
    <div>Blog</div>
  )
}

export default Blog