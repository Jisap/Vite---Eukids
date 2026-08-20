import SectionHeading from "@components/ui/SectionHeading";
import BlogCard from "@components/cards/BlogCard";
import { blogs } from "@data/blogs";
import { staggerDelay } from "@utils/helpers";


const Blog = () => (
  <section id="blog" className="section-py relative">
    <div className="container-base">
      <SectionHeading
        eyebrow="Blog & News"
        title="Welcome to EduKids Blog"
        description="A quick directory of EduKids' most popular posts on parenting, homeschooling, curriculum, and supplementing your kids' learning."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {blogs.slice(0, 3).map((blog, index) => (
          <div
            key={blog.id}
            data-aos="zoom-in-up"
            data-aos-delay={staggerDelay(index, 200)}
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;