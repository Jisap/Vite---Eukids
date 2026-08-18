import { Link } from "react-router-dom";
import breadcrumbBg from "@assets/breadcrumb-bg.jpg";

/**
 * Page-top hero banner used on every inner route (About, Team, Blog, etc).
 *
 * @param {string} title - large heading shown in the banner
 * @param {string} [parentTitle] - breadcrumb trail start label
 * @param {string} [parentLink] - breadcrumb trail start path
 * @param {string} currentPage - breadcrumb trail end label
 */
const Breadcrumb = ({ title, parentTitle = "Home", parentLink = "/", currentPage }) => (
  <div
    className="min-h-87.5 lg:min-h-112.5 w-full flex items-center bg-cover bg-center bg-no-repeat relative"
    style={{ backgroundImage: `url(${breadcrumbBg})` }}
  >
    <div className="absolute inset-0 bg-secondary/55" aria-hidden="true" />

    <div className="container-base relative z-10 w-full">
      <ul className="flex flex-wrap items-center gap-2 text-sm md:text-base text-white/80 mb-4">
        <li>
          <Link
            to={parentLink}
            className="hover:text-primary transition-colors font-display"
          >
            {parentTitle}
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-white font-display">{currentPage}</li>
      </ul>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display">
        {title}
      </h1>
    </div>
  </div>
);

export default Breadcrumb;