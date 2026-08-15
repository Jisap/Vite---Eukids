import { Icon } from "@iconify/react"
import Button from "../../../components/ui/Button"
import about from "../../../assets/about.png"
import subtitleImg from "../../../assets/title-img.svg"

const MISSION_ITEMS = [
  {
    icon: "oui:bullseye",
    iconBg: "bg-[#EEEBFF]",
    iconColor: "text-primary-2",
    title: "Our Mission",
    copy: "At EduKids our mission is to cultivate an environment where curiosity is sparked, creativity flourishes, and every child develops a lifelong love of learning.",
  },
  {
    icon: "mdi:heart-outline",
    iconBg: "bg-[#FFF3E8]",
    iconColor: "text-primary-3",
    title: "Our Commitment",
    copy: "As we embark on the journey of education together, we remain committed to providing a safe, nurturing, and engaging learning experience for every student.",
  },
];

const About = () => {
  return (
    <>
      <section id="about" className="section-py relative overflow-hidden">
        <div className="container-base flex flex-col lg:flex-row items-center gap-14">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <img
              src={about}
              alt="Children engaged in classroom activities"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <span className="sub-title mb-4">
              <img
                src={subtitleImg}
                alt="" className="w-9 h-9"
                aria-hidden="true"
              />
              About Us
            </span>

            <h2 className="font-display mb-5 text-[clamp(2rem,5vw,3.25rem)] leading-[1.15] font-extrabold text-heading-1">
              Discover Our Mission for
              <br />
              EduKids Academy
            </h2>

            <p className="text-lg text-body mb-10 lg:mb-14">
              Welcome to EduKids, where education meets inspiration, and every child's journey
              is a story of growth and discovery.
            </p>

            <div className="grid gap-6 mb-10 lg:mb-14">
              {MISSION_ITEMS.map((item) => (
                <div key={item.title} className="flex gap-5 items-start">
                  <div className={`w-16 h-16 shrink-0 rounded-2xl ${item.iconBg} flex items-center justify-center`}>
                    <Icon icon={item.icon} className={item.iconColor} width="34" />
                  </div>

                  <div>
                    <h6 className="font-bold text-xl text-heading-1 mb-2 font-display">{item.title}</h6>
                    <p className="text-body leading-7">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button to="/about" text="About More" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About