import { Icon } from "@iconify/react";
import Breadcrumb from "@components/ui/Breadcrumb";
import Button from "@components/ui/Button";
import AboutSection from "../home/sections/About";
import Team from "../home/sections/Team";
import Gallery from "../home/sections/Gallery";

import about from "@assets/about-02.png";
import subtitleImg from "@assets/title-img.svg";
import shape from "@assets/round-shape.svg";
import play from "@assets/play.svg";
import element1 from "@assets/element-08.svg";
import element2 from "@assets/element-09.svg";
import element3 from "@assets/element-10.svg";

const HIGHLIGHTS = [
  "Educational Institutions",
  "Online Learning Platforms",
  "Educational Materials",
  "Education Department Partnerships",
  "Parents and Communities",
  "Nonprofit Organizations",
];

const About = () => {
  return (
    <>
      <Breadcrumb title="About Us" currentPage="About Us" />

      <section id="about-intro" className="section-py relative overflow-hidden bg-[#FEEFE5]">
        <div className="container-base flex flex-col lg:flex-row items-center gap-14">
          {/* Lado izquierdo */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <span className="sub-title mb-4">
              <img
                src={subtitleImg}
                alt=""
                className="w-9 h-9"
                aria-hidden="true"
              />
              About Us
            </span>

            <h2 className="font-display mb-5 text-[clamp(2rem,5vw,3.25rem)] leading-[1.15] font-extrabold text-heading-1">
              Discover Our Mission for
              <br />
              EduKids Academy
            </h2>

            <p className="text-lg text-body mb-8">
              Welcome to EduKids, where education meets inspiration, and every child's journey
              is a story of growth and discovery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 lg:mb-14">
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Icon icon="material-symbols:check-rounded" width="24" className="text-primary-2 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button to="/courses" text="Explore Programs" />
          </div>

          {/* Lado derecho */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-left">
            <img
              src={about}
              alt="Teacher reading with a group of children"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={shape}
                alt=""
                aria-hidden="true"
                className="absolute w-24 animate-spin-slow"
              />

              <button
                type="button"
                aria-label="Play introduction video"
                className="relative z-10 cursor-pointer transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={play}
                  alt=""
                  className="w-8"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About