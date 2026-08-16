import { Icon } from "@iconify/react";
import blink from "@assets/blink.svg";

/**
 * Age-group program tile (e.g. "Toddler, 1-3 Years").
 * @param {string} title
 * @param {string} age
 * @param {string} description
 * @param {string} icon - iconify icon name
 * @param {string} bgColor - tailwind bg-* class
 */
const ProgramCard = ({ title, age, description, icon, bgColor }) => (
  <div
    className={`
        relative p-6 rounded-3xl text-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group
        ${bgColor} 
    `}
  >
    <img
      src={blink}
      alt=""
      aria-hidden="true"
      className="w-8 h-8 absolute top-5 right-5 animate-pulse"
    />

    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 mb-5 transition-transform duration-300 group-hover:scale-110">
      <Icon
        icon={icon}
        className="text-4xl text-white"
      />
    </div>

    <h3 className="text-2xl font-bold mb-1 font-display">{title}</h3>
    <span className="text-sm font-medium opacity-80">{age}</span>
    <p className="mt-4 text-sm leading-7 opacity-90">{description}</p>
  </div>
);

export default ProgramCard;