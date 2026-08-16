import ProgramCard from "../../../components/ui/ProgramCard";
import SectionHeading from "../../../components/ui/SectionHeading";
import { staggerDelay } from "@utils/helpers";

const PROGRAMS = [
  {
    title: "Toddler",
    age: "(1 - 3 Years)",
    description: "A toddler is a child typically between the ages of 1 and 3 years old.",
    icon: "material-symbols-light:child-hat-outline",
    bgColor: "bg-primary-2",
  },
  {
    title: "Preschool",
    age: "(2 - 4 Years)",
    description: "Preschool programs help children develop social, emotional, and learning skills.",
    icon: "mdi:school",
    bgColor: "bg-primary-3",
  },
  {
    title: "Kindergarten",
    age: "(4 - 5 Years)",
    description: "Kindergarten prepares children for formal schooling through fun activities.",
    icon: "mdi:book-open-page-variant",
    bgColor: "bg-primary-4",
  },
  {
    title: "Pre-K Program",
    age: "(5 - 6 Years)",
    description: "Pre-K programs focus on early literacy, creativity, and school readiness.",
    icon: "mdi:human-male-board",
    bgColor: "bg-primary-5",
  },
];

const Classes = () => {
  return (
    <>
      <section id="classes" className="section-py relative">
        <div className="container-base">
          <div className="container-base">
            <SectionHeading
              eyebrow="Classes"
              title="Find Classes For Every Age"
              description="Marked by significant growth and exploration as toddlers transition from infancy."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mt-12">
              {PROGRAMS.map((program, index) => (
                <div key={program.title} data-aos="fade-up" data-aos-delay={staggerDelay(index, 150)}>
                  <ProgramCard {...program} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Classes