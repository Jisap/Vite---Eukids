import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "./Logo";
import blog1 from "@assets/blog-07.jpg";
import blog2 from "@assets/blog-08.jpg";

const ABOUT_LINKS = ["About Us", "Teachers", "Events", "Pricing"];
const COURSE_LINKS = ["Courses", "Blog", "Programs", "Contact Us"];

const RECENT_POSTS = [
  { image: blog1, date: "October 29, 2026", title: "Avoid These 4 Common Mistakes When Managing Remote Teams" },
  { image: blog2, date: "October 30, 2026", title: "How To Draw Realistic Lips In 7 Simple Steps" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

/** Small internal helper — avoids repeating the same <ul> markup twice. */
const FooterLinkGroup = ({ title, links }) => (
  <div>
    <h4 className="text-xl font-semibold mb-6 relative inline-block font-display">
      {title}
      <span className="absolute left-0 -bottom-2 w-10 h-1 bg-primary rounded-full" />
    </h4>

    <ul className="space-y-4">
      {links.map((item) => (
        <li key={item}>
          <a href="#" className="text-gray-600 hover:text-heading-1 transition-all duration-300 hover:translate-x-2 inline-block">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {

  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // Hook this up to your email service of choice (Mailchimp, ConvertKit, etc.)
    setEmail("");
  };

  return (
    <footer className="relative bg-bg pt-16 lg:pt-24 overflow-hidden" id="footer">
      <div className="container-base">
        {/* Newsletter */}
        <div
          data-aos="fade-up"
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 font-display text-heading-1">
            Don't Miss a Story From Our Alumni
          </h3>

          <form
            onSubmit={handleSubscribe}
            className="max-w-2xl mx-auto hidden lg:flex items-center gap-3 bg-white border-2 border-heading-1 rounded-full p-2 shadow-xl"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full flex-1 px-6 py-4 bg-transparent outline-none text-heading-1 placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto min-w-45 h-14 px-8 rounded-full bg-heading-1 text-white font-semibold transition-all duration-300
               hover:bg-primary hover:text-heading-1 hover:scale-105 cursor-pointer"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gray-300">
          <div data-aos="fade-right">
            <div className="w-50 h-22 bg-white rounded-md">
              <Logo />
            </div>

            <p className="mt-5 text-gray-600 leading-7">
              We are passionate about education and dedicated to providing high-quality
              learning resources for students from all backgrounds.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <Icon icon="boxicons:location" className="text-xl shrink-0" />
                Yarra Park, Melbourne, Australia
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <Icon icon="material-symbols:call-outline" className="text-xl shrink-0" />
                +(61) 485-826-710
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <FooterLinkGroup
              title="About Us"
              links={ABOUT_LINKS}
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <FooterLinkGroup
              title="Our Courses"
              links={COURSE_LINKS}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer