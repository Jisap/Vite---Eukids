import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Breadcrumb from "@components/ui/Breadcrumb";
import { blogs } from "@data/blogs";

const BlogDetails = () => {

  const { id } = useParams();
  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <div className="container-base py-24 text-center">
        <h2 className="text-4xl font-bold font-display mb-4">
          Post Not Found
        </h2>

        <Link
          to="/blog"
          className="text-primary-2 font-semibold hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb
        title={blog.title}
        parentTitle="Blog"
        parentLink="/blog"
        currentPage="Details"
      />

      <section id="blog-details" className="section-py">
        <div className="container-base max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Icon icon="solar:user-linear" />
              <span>
                {blog.author} · {blog.authorRole}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Icon icon="solar:calendar-linear" />
              <span>{blog.date}</span>
            </div>
          </div>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-2xl mb-10"
          />

          <div className="space-y-6 text-gray-700 leading-8">
            {blog.content.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          {blog.quote && (
            <blockquote className="my-10 border-l-4 border-primary bg-bg/40 rounded-r-xl px-8 py-6 italic text-xl text-heading-1 font-display">
              “{blog.quote}”
              {blog.quoteAuthor && (
                <footer className="mt-3 text-base font-sans not-italic text-gray-500">— {blog.quoteAuthor}</footer>
              )}
            </blockquote>
          )}

          {blog.sectionTitle && (
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 font-display">{blog.sectionTitle}</h3>
              <p className="text-gray-700 leading-8 mb-6">{blog.sectionContent}</p>

              {blog.highlights && (
                <ul className="space-y-3">
                  {blog.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3">
                      <Icon icon="mdi:check-circle" className="text-primary-2 text-2xl shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {blog.tags && (
            <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-gray-200">
              <span className="font-semibold text-heading-1 mr-2">Tags:</span>
              {blog.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 px-4 py-1.5 rounded-full text-sm text-gray-600">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogDetails;