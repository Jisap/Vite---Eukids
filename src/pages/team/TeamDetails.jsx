import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Breadcrumb from "@components/ui/Breadcrumb";
import SkillBar from "@components/common/SkillBar";
import InfoBox from "@components/common/InfoBox";
import { teachers } from "@data/teachers";

const SOCIALS = [
  { key: "facebook", icon: "mdi:facebook", hoverBg: "hover:bg-facebook" },
  { key: "instagram", icon: "mdi:instagram", hoverBg: "hover:bg-instagram" },
  { key: "linkedin", icon: "mdi:linkedin", hoverBg: "hover:bg-linkedin" },
  { key: "youtube", icon: "mdi:youtube", hoverBg: "hover:bg-youtube" },
];

const TEACHING_SKILLS = [
  { label: "Classroom Engagement", percent: 95 },
  { label: "Curriculum Planning", percent: 88 },
  { label: "Parent Communication", percent: 80 },
];

const TeamDetails = () => {
  const { id } = useParams();
  const teacher = teachers.find((item) => item.id === Number(id));

  if (!teacher) {
    return (
      <div className="container-base py-24 text-center">
        <h2 className="text-4xl font-bold font-display mb-4">Teacher Not Found</h2>
        <Link to="/team" className="text-primary-2 font-semibold hover:underline">
          ← Back to Team
        </Link>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb title={teacher.name} parentTitle="Team" parentLink="/team" currentPage={teacher.name} />

      <section id="team-details" className="section-py">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="border border-gray-200 rounded-2xl overflow-hidden sticky top-28">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-120 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1 font-display">{teacher.name}</h3>
                  <span className="text-primary-3 font-medium">{teacher.designation}</span>

                  <ul className="space-y-3 border-t border-gray-200 pt-5 mt-5 text-sm">
                    <li>
                      <strong className="text-heading-1">Email:</strong>
                      <br />
                      {teacher.email}
                    </li>

                    <li>
                      <strong className="text-heading-1">Phone:</strong>
                      <br />
                      {teacher.phone}
                    </li>
                  </ul>

                  <div className="flex gap-3 mt-6">
                    {SOCIALS.filter((s) => teacher[s.key]).map((s) => (
                      <a
                        key={s.key}
                        href={teacher[s.key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-heading-1 hover:text-white transition-all duration-300 hover:-translate-y-2 ${s.hoverBg}`}
                      >
                        <Icon icon={s.icon} className="text-xl" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main className="lg:col-span-8">
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-5 font-display">Personal Info</h2>
                <p className="text-gray-600 leading-8">{teacher.bio}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <InfoBox title="Specialty">{teacher.subject}</InfoBox>
                <InfoBox title="Experience">6 Years at EduKids</InfoBox>
                <InfoBox title="Education">B.A. in Early Childhood Education</InfoBox>
              </div>

              <div className="mb-10">
                <h3 className="text-3xl font-bold mb-6 font-display">Teaching Skills</h3>
                <div className="space-y-6">
                  {TEACHING_SKILLS.map((skill) => (
                    <SkillBar key={skill.label} {...skill} />
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;