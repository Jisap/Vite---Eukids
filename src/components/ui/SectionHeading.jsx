import subtitleImg from "@assets/title-img.svg";

/**
 * Standardized section header: eyebrow badge + heading + supporting copy.
 * This single component replaces the near-identical markup that was
 * copy-pasted into About, Category, Classes, Courses, Event, Blog, Team,
 * Testimonials, and Gallery.
 *
 * @param {string} eyebrow - small badge label (e.g. "About Us")
 * @param {React.ReactNode} title - heading text (string or JSX with <br/>, spans, etc.)
 * @param {string} [description] - supporting paragraph
 * @param {"left"|"center"} [align]
 * @param {string} [className]
 */
const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) => {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div
      className={`flex flex-col ${alignment} ${className}`}
      data-aos="fade-up"
    >
      {eyebrow && (
        <span className="sub-title mb-4">
          <img src={subtitleImg} alt="" className="w-9 h-9" aria-hidden="true" />
          {eyebrow}
        </span>
      )}

      <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.15] font-extrabold text-heading-1 mb-5">
        {title}
      </h2>

      {description && (
        <p className={`text-lg text-body leading-relaxed ${align === "center" ? "max-w-xl" : "max-w-lg"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;