import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SOCIALS = [
    { key: "facebook", icon: "mdi:facebook", color: "text-blue-600" },
    { key: "instagram", icon: "mdi:instagram", color: "text-pink-600" },
    { key: "linkedin", icon: "mdi:linkedin", color: "text-blue-700" },
    { key: "youtube", icon: "mdi:youtube", color: "text-red-600" },
];

/**
 * Teacher profile card with a hover-revealed social row.
 * Links to /team/:id for the full bio page.
 */
const TeacherCard = ({ id, image, name, ...socials }) => (
    <Link to={`/team/${id}`} className="group block">
        <div className="relative w-full h-120 mb-5 border-card rounded-2xl overflow-hidden shadow-[6px_6px_0px_rgba(38,38,38,1)]">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {SOCIALS.filter((s) => socials[s.key]).map((s) => (
                    <a
                        key={s.key}
                        href={socials[s.key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    >
                        <Icon icon={s.icon} className={`text-2xl ${s.color}`} />
                    </a>
                ))}
            </div>
        </div>

        <div className="bg-white text-center border-card py-3 text-2xl font-medium rounded-xl font-display transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary">
            {name}
        </div>
    </Link>
);

export default TeacherCard;